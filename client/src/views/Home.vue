<template>
  <PageLayout title="Properties List" :prevPage="prevPage">
    <el-card>
      <PropertyTable
        :properties="properties"
        :loading="isFetching"
        :onDelete="handleDeletePropertyClick"
        :onEdit="handleEditPropertyClick"
      />
      <el-pagination
        v-model:currentPage="pagination.currentPage"
        v-model:page-size="pagination.rowsPerPage"
        :page-sizes="[5, 10, 20, 50]"
        :background="true"
        layout="total, pager, prev, next"
        :total="pagination.totalItems"
        @current-change="handleCurrentPageChange"
      />
    </el-card>
  </PageLayout>
</template>

<script>
import { markRaw } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import { Delete } from '@element-plus/icons-vue';

// @ is an alias to /src
import PageLayout from '@/components/layouts/PageLayout.vue';
import PropertyTable from '@/components/tables/PropertyTable.vue';
import { deleteResource, getResource } from '@/services/httpClient';

export default {
  name: 'Home',
  components: {
    PageLayout,
    PropertyTable,
  },
  computed: {
    requestPaginationParam() {
      return {
        page: this.pagination.currentPage,
        rowsPerPage: this.pagination.rowsPerPage,
        'Location.country[exists]': true,
        'ReviewSummary.score[exists]': true,
      };
    },
  },
  data() {
    return {
      isFetching: false,
      prevPage: {
        title: ' ',
        path: '/',
      },
      properties: [],
      pagination: {
        page: 1,
        rowsPerPage: 5,
        currentPage: 1,
        totalItems: 100,
      },
    };
  },
  methods: {
    async fetchProperties() {
      this.loading = true;
      const res = await getResource('/properties', this.requestPaginationParam);
      this.properties = res.data.map((property) => ({
        ...property,
        ReviewSummary: { ...property.ReviewSummary, score: property.ReviewSummary.score / 20 },
      }));
      this.pagination = res.pagination;
      this.loading = false;
    },

    async handlePageSizeChange(val) {
      this.pagination.rowsPerPage = val;

      await this.fetchProperties();
    },

    async handleCurrentPageChange(val) {
      this.pagination.page = val;

      await this.fetchProperties();
    },

    async handleDeletePropertyClick(property) {
      ElMessageBox.confirm(
        `${property.name} will be permanently deleted from the Server. Are you sure you want to continue?`,
        'Warning',
        {
          type: 'warning',
          icon: markRaw(Delete),
        },
      )
        .then(async () => {
          this.isFetching = true;
          await deleteResource(`/properties/${property.uuid}`);
          ElMessage({
            type: 'success',
            message: 'Property Successfully Deleted',
          });
        })
        .catch((e) => {
          if (e !== 'cancel') {
            ElMessage({
              type: 'info',
              message: 'Unable to Perform Operation, please try again',
            });
          }
        })
        .finally(() => {
          this.isFetching = false;
        });

      this.isFetching = false;
    },

    async handleEditPropertyClick(property) {
      this.$router.push({ name: 'PropertyDetails', params: { id: property.uuid } });
    },
  },
  async mounted() {
    await this.fetchProperties();
  },
};
</script>
