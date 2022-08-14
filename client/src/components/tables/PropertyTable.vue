<template>
  <el-table :data="properties" table-layout="auto">
    <el-table-column align="left">
      <template #default="scope">
        <el-image class="image" :src="scope.row.heroImage.url" fit="contain" />
      </template>
    </el-table-column>
    <el-table-column prop="name" label="Name"></el-table-column>
    <el-table-column prop="location.country" label="Country" />
    <el-table-column align="center" label="Rating">
      <template #default="scope">
        <el-rate
          v-model="scope.row.reviews.summary.score"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{scope.row.reviews.summary.scoreDescription}"
        />
      </template>
    </el-table-column>
    <el-table-column label="Actions" width="180">
      <template #default="scope">
        <el-tooltip effect="dark" content="Edit" placement="top">
          <el-button @click="handleEdit(scope.row)">
            <el-icon style="vertical-align: middle">
              <Edit />
            </el-icon>
          </el-button>
        </el-tooltip>

        <el-tooltip class="box-item" effect="dark" content="Delete" placement="top">
          <el-button @click="handleDelete(scope.row)">
            <el-icon style="vertical-align: middle">
              <Delete />
            </el-icon>
          </el-button>
        </el-tooltip>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  name: 'PropertyTable',
  components: {},
  data() {
    return {
      properties: [
        {
          heroImage: {
            url: 'https://property-gallery.rakutentravelxchange.com/fqeA/QK0XAKe6.jpg',
          },
          name: 'Test 1',
          location: {
            address: 'No 185 St Georges Terrace',
            city: 'Perth',
            country: 'AU',
            countryCode: 'AU',
            postalCode: '6000',
            stateProvince: null,
            latLng: {
              lat: -31.953843,
              lng: 115.853637,
            },
          },
          reviews: {
            summary: {
              score: '85',
              scoreDescription: 'Very Good',
              summarySentenceList: [],
              text: 'Very good wellness hotel. Located near shopping areas with easy access to parking.',
            },
          },
        },
        {
          heroImage: {
            url: 'https://property-gallery.rakutentravelxchange.com/fqeA/QK0XAKe6.jpg',
          },
          name: 'Test 1',
          location: {
            address: 'No 185 St Georges Terrace',
            city: 'Perth',
            country: 'AU',
            countryCode: 'AU',
            postalCode: '6000',
            stateProvince: null,
            latLng: {
              lat: -31.953843,
              lng: 115.853637,
            },
          },
          reviews: {
            summary: {
              score: '85',
              scoreDescription: 'Very Good',
              summarySentenceList: [],
              text: 'Very good wellness hotel. Located near shopping areas with easy access to parking.',
            },
          },
        },
        {
          heroImage: {
            url: 'https://property-gallery.rakutentravelxchange.com/fqeA/QK0XAKe6.jpg',
          },
          name: 'Test 1',
          location: {
            address: 'No 185 St Georges Terrace',
            city: 'Perth',
            country: 'AU',
            countryCode: 'AU',
            postalCode: '6000',
            stateProvince: null,
            latLng: {
              lat: -31.953843,
              lng: 115.853637,
            },
          },
          reviews: {
            summary: {
              score: '85',
              scoreDescription: 'Very Good',
              summarySentenceList: [],
              text: 'Very good wellness hotel. Located near shopping areas with easy access to parking.',
            },
          },
        },
        {
          heroImage: {
            url: 'https://property-gallery.rakutentravelxchange.com/fqeA/QK0XAKe6.jpg',
          },
          name: 'Test 1',
          location: {
            address: 'No 185 St Georges Terrace',
            city: 'Perth',
            country: 'AU',
            countryCode: 'AU',
            postalCode: '6000',
            stateProvince: null,
            latLng: {
              lat: -31.953843,
              lng: 115.853637,
            },
          },
          reviews: {
            summary: {
              score: '85',
              scoreDescription: 'Very Good',
              summarySentenceList: [],
              text: 'Very good wellness hotel. Located near shopping areas with easy access to parking.',
            },
          },
        },
        {
          heroImage: {
            url: 'https://property-gallery.rakutentravelxchange.com/fqeA/QK0XAKe6.jpg',
          },
          name: 'Test 1',
          location: {
            address: 'No 185 St Georges Terrace',
            city: 'Perth',
            country: 'AU',
            countryCode: 'AU',
            postalCode: '6000',
            stateProvince: null,
            latLng: {
              lat: -31.953843,
              lng: 115.853637,
            },
          },
          reviews: {
            summary: {
              score: '85',
              scoreDescription: 'Very Good',
              summarySentenceList: [],
              text: 'Very good wellness hotel. Located near shopping areas with easy access to parking.',
            },
          },
        },
      ],
    };
  },
  methods: {
    handleEdit(property) {
      console.log(property);
    },

    handleDelete(property) {
      console.log(property);
    },
  },
};
</script>
<style>
.image {
  height: 100px;
  width: 100px;
}
</style>
