<template>
  <el-table v-loading="loading" :data="properties" table-layout="auto">
    <el-table-column align="left">
      <template #default="scope">
        <el-image class="image" :src="scope.row.image" fit="contain" />
      </template>
    </el-table-column>
    <el-table-column prop="name" label="Name"></el-table-column>
    <el-table-column prop="Location.country" label="Country" />
    <el-table-column align="center" label="Rating">
      <template #default="scope">
        <el-rate
          v-model="scope.row.ReviewSummary.score"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}"
        />
      </template>
    </el-table-column>
    <el-table-column label="Actions" width="180">
      <template #default="scope">
        <el-tooltip effect="dark" content="Edit" placement="top">
          <el-button @click="handleEdit(scope.row)">
            <el-icon style="vertical-align: middle">
              <Edit />
            </el-icon>
          </el-button>
        </el-tooltip>

        <el-tooltip class="box-item" effect="dark" content="Delete" placement="top">
          <el-button @click="handleDelete(scope.row)">
            <el-icon style="vertical-align: middle">
              <Delete />
            </el-icon>
          </el-button>
        </el-tooltip>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  name: 'PropertyTable',
  components: {},
  data() {
    return {
      pagination: this.paginationValue,
    };
  },
  props: {
    properties: { type: Array },
    loading: { type: Boolean, default: false },
    onDelete: { type: Function },
    onEdit: { type: Function },
  },
  methods: {
    async handleEdit(property) {
      if (this.onEdit) {
        this.onEdit(property);
      }
    },

    async handleDelete(property) {
      if (this.onDelete) {
        await this.onDelete(property);
      }
    },
  },
};
</script>
<style>
.image {
  height: 100px;
  width: 100px;
}
</style>
