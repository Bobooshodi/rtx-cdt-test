<template>
  <PageLayout>
    <el-card>
      <PropertyTable :properties="properties" />
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
// @ is an alias to /src
import PageLayout from '@/components/layouts/PageLayout.vue';
import PropertyTable from '@/components/tables/PropertyTable.vue';
import { getResource } from '@/services/httpClient';

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
      const res = await getResource('/properties', this.requestPaginationParam);
      this.properties = res.data.map((property) => ({
        ...property,
        ReviewSummary: { ...property.ReviewSummary, score: property.ReviewSummary.score / 20 },
      }));
      this.pagination = res.pagination;
    },

    async handlePageSizeChange(val) {
      console.log('Page Size: ', val);
      this.pagination.rowsPerPage = val;

      await this.fetchProperties();
    },

    async handleCurrentPageChange(val) {
      console.log('Current Page: ', val);
      this.pagination.page = val;

      await this.fetchProperties();
    },
  },
  async mounted() {
    await this.fetchProperties();
  },
};
</script>
