<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu
        router
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          :ellipsis="false"
          @select="handleSelect"
        >
          <el-menu-item index="">AWESOME LOGO</el-menu-item>
          <div class="flex-grow" />
          <el-menu-item index="/">Home</el-menu-item>
          <el-menu-item index="/facts">Facts</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>Copyright Feyi Oshodi 2022</el-footer>
    </el-container>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  data() {
    return {};
  },
  methods: {
    handleSelect(key) {
      console.log(key);
      console.log(this.$router);
    },
  },
  setup() {
    const activeIndex = ref('1');

    return {
      activeIndex,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.flex-grow {
  flex-grow: 1;
}
</style>
