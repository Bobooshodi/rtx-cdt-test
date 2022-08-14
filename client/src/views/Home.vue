<template>
  <PageLayout>
    <el-card>
      <PropertyTable />
    </el-card>
  </PageLayout>
</template>

<script>
// @ is an alias to /src
import PageLayout from '@/components/layouts/PageLayout.vue';
import PropertyTable from '@/components/tables/PropertyTable.vue';

export default {
  name: 'Home',
  components: {
    PageLayout,
    PropertyTable,
  },
};
</script>
