<template>
  <PageLayout
    v-loading.fullscreen.lock="isFetching"
    :title="selectedProperty.name"
    :prevPage="prevPage"
  >
    <PropertiesForm
      :model="selectedProperty"
      @on-update="handleFormDataUpdate"
      :onCancel="() => $router.push(prevPage.path)"
      :onSubmit="handleFormSubmit"
    />
  </PageLayout>
</template>
<script>
import { getResource, putResource } from '@/services/httpClient';

import PageLayout from '@/components/layouts/PageLayout.vue';
import PropertiesForm from '@/components/forms/PropertyForm.vue';

export default {
  name: 'PropertyDetails',
  components: {
    PageLayout,
    PropertiesForm,
  },
  computed: {
    pageTitle() {
      return this.property.name;
    },
  },
  data() {
    return {
      isFetching: false,
      prevPage: {
        title: 'Properties List',
        path: '/',
      },
      selectedProperty: {
        Location: {},
        ReviewSummary: {},
      },
    };
  },
  methods: {
    async fetchProperty() {
      this.isFetching = true;

      const res = await getResource(`/properties/${this.$route.params.id}`);
      this.selectedProperty = {
        ...res,
        Location: { ...res.Location, latLng: JSON.stringify(res.Location.latLng) },
        ReviewSummary: { ...res.ReviewSummary, score: res.ReviewSummary.score / 20 },
      };

      this.isFetching = false;
    },

    // Use Form Library with State Management?
    // This is just a quick hack for this small app
    handleFormDataUpdate(updateData) {
      this.selectedProperty[updateData.field] = updateData.value;
    },

    async handleFormSubmit() {
      this.isFetching = true;

      const res = await putResource(
        `/properties/${this.selectedProperty.uuid}`,
        this.selectedProperty,
      );
      this.selectedProperty = {
        ...res,
        Location: { ...res.Location, latLng: JSON.stringify(res.Location.latLng) },
        ReviewSummary: { ...res.ReviewSummary, score: res.ReviewSummary.score / 20 },
      };

      this.isFetching = false;
    },
  },
  async mounted() {
    await this.fetchProperty();
  },
};
</script>
<style></style>
