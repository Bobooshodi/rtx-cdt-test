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
import { useRouter } from 'vue-router';
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
    const router = useRouter();

    console.log(router.options.history.state);
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
