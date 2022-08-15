<template>
  <div class="common-layout">
    <el-page-header
      class="header"
      :icon="getHeaderIcon()"
      :title="prevPage.title"
      :content="title"
      @back="goBack"
    />
    <slot></slot>
  </div>
</template>

<script>
import { ArrowLeft, House } from '@element-plus/icons-vue';

export default {
  name: 'PageLayout',
  props: {
    prevPage: { type: Object },
    title: { type: String },
  },
  methods: {
    goBack() {
      if (!this.prevPage.title.trim()) {
        return;
      }
      this.$router.push(this.prevPage.path);
    },

    getHeaderIcon() {
      return this.prevPage.title.trim() ? ArrowLeft : House;
    },
  },
  setup() {
    return {};
  },
};
</script>
<style>
.flex-grow {
  flex-grow: 1;
}

.header {
  margin-bottom: 1%;
}
</style>
