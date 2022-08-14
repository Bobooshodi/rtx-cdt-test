<template>
  <div class="common-layout">
    <el-breadcrumb class="breadcrumbs" separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
    <slot></slot>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'PageLayout',
  components: {},
  methods: {
    goBack() {
      console.log('Going Back');
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

.breadcrumbs {
  margin-bottom: 1%;
}
</style>
