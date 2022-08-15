<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>Reviews Summary</span>
      </div>
    </template>
    <el-form-item label="Score">
      <el-rate v-model="score" disabled show-score text-color="#ff9900" score-template="{value}" />
    </el-form-item>

    <el-form-item label="Description">
      <el-input disabled v-model="scoreDescription" />
    </el-form-item>

    <el-form-item label="Review">
      <el-input disabled v-model="text" />
    </el-form-item>
  </el-card>
</template>
<script>
export default {
  name: 'ReviewsSummaryFieldset',
  computed: {
    score: {
      get() {
        return this.model.ReviewSummary.score;
      },
      set(value) {
        this.$emit('update-model', { field: 'ReviewSummary.score', value });
      },
    },
    scoreDescription: {
      get() {
        return this.model.ReviewSummary.scoreDescription;
      },
      set(value) {
        this.$emit('update-model', { field: 'ReviewSummary.scoreDescription', value });
      },
    },
    text: {
      get() {
        return this.model.ReviewSummary.text;
      },
      set(value) {
        this.$emit('update-model', { field: 'ReviewSummary.text', value });
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
