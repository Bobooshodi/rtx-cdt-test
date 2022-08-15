<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>Property Details</span>
      </div>
    </template>
    <el-form-item label="Property name">
      <el-input v-model="name" />
    </el-form-item>
  </el-card>
</template>
<script>
export default {
  name: 'PropertyFieldset',
  computed: {
    name: {
      get() {
        return this.model.name;
      },
      set(value) {
        this.$emit('update-model', { field: 'name', value });
      },
    },
  },
  props: {
    model: { type: Object },
  },
};
</script>
<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
