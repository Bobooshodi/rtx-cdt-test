<template>
    <PageLayout title="Facts" :prevPage="{title: 'Home', path: '/' }">
    <el-card>
      Hello World
    </el-card>
  </PageLayout>
    <!-- 8. Display the data with a structured table in following columns,
    element-ui is ready for use -->
    <!-- property.name | property.location.country | property.reviews.summary.score -->
    <!-- 9. Do a simple pagination of 5 per page-->
    <!-- 10. Hide the entry without country and/or score-->
</template>

<script>
// import { ref, onMounted } from 'vue';
import PageLayout from '@/components/layouts/PageLayout.vue';

import { getResource } from '@/services/httpClient';

export default {
  components: {
    PageLayout,
  },
  data() {
    return {
      hotels: [],
    };
  },
  async mounted() {
    const res = await getResource('/external/from-source');
    this.hotels = res?.data?.outlets?.availability?.results;
  },
};

</script>
