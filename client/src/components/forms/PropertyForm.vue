<template>
  <div class="centered">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Edit Property</span>
        </div>
      </template>
      <div class="centered">
        <el-form
          :model="model"
          class="form-width"
          label-width="120px"
          label-position="left"
          size="large"
        >
          <el-space direction="vertical" size="large" class="form-width" :fill="true">
            <PropertyFieldset :model="model" @update-model="(value) => $emit('on-update', value)" />

            <LocationFieldset :model="model" @update-model="(value) => $emit('on-update', value)" />

            <ReviewsSummaryFieldset
              :model="model"
              @update-model="(value) => $emit('on-update', value)"
            />

            <el-form-item>
              <el-button type="primary" @click="handleFormSubmit">Submit</el-button>
              <el-button @click="handleCancelClick">Cancel</el-button>
            </el-form-item>
          </el-space>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
import LocationFieldset from '@/components/fieldsets/LocationFieldset.vue';
import PropertyFieldset from '@/components/fieldsets/PropertyFieldset.vue';
import ReviewsSummaryFieldset from '@/components/fieldsets/ReviewsSummaryFieldset.vue';

export default {
  name: 'PropertyForm',
  components: {
    LocationFieldset,
    PropertyFieldset,
    ReviewsSummaryFieldset,
  },
  methods: {
    async handleCancelClick() {
      if (this.onCancel) {
        await this.onCancel();
      }
    },
    async handleFormSubmit() {
      if (this.onSubmit) {
        await this.onSubmit();
      }
    },
  },
  props: {
    model: { type: Object },
    onCancel: { type: Function },
    onSubmit: { type: Function },
  },
};
</script>
<style>
.centered {
  display: flex;
  justify-content: center;
}

.box-card {
  width: 70%;
}

.form-width {
  width: 85%;
}
</style>
