<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>Location Details</span>
      </div>
    </template>
    <el-form-item label="Address">
      <el-input disabled v-model="address" />
    </el-form-item>

    <el-form-item label="Country">
      <el-input disabled v-model="country" />
    </el-form-item>

    <el-form-item label="LatLng">
      <el-input disabled v-model="latLng" />
    </el-form-item>
  </el-card>
</template>
<script>
export default {
  name: 'LocationFieldset',
  computed: {
    address: {
      get() {
        return this.model.Location.address;
      },
      set(value) {
        this.$emit('update-model', { field: 'Location.address', value });
      },
    },
    country: {
      get() {
        return this.model.Location.country;
      },
      set(value) {
        this.$emit('update-model', { field: 'Location.country', value });
      },
    },
    latLng: {
      get() {
        return this.model.Location.latLng;
      },
      set(value) {
        this.$emit('update-model', { field: 'Location.latLng', value });
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
