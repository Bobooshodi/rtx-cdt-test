'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    return queryInterface.bulkInsert('locations', [
      {
        id: 1,
        country: 'AU',
        address: 'No 185 St Georges Terrace',
        lat_lng: JSON.stringify({
          lat: -31.953843,
          lng: 115.853637,
        }),
        created_at: '2022-08-16T05:08:42.827Z',
        updated_at: '2022-08-16T05:08:42.827Z',
        property_id: 1,
      },
      {
        id: 2,
        country: 'AU',
        address: '42 Mount Street',
        lat_lng: JSON.stringify({
          lat: -31.954251,
          lng: 115.847825,
        }),
        created_at: '2022-08-16T05:08:42.827Z',
        updated_at: '2022-08-16T05:08:42.827Z',
        property_id: 2,
      },
      {
        id: 3,
        country: 'AU',
        address: '176 Adelaide Terrace',
        lat_lng: JSON.stringify({
          lat: -31.95941,
          lng: 115.87067,
        }),
        created_at: '2022-08-16T05:08:42.827Z',
        updated_at: '2022-08-16T05:08:42.827Z',
        property_id: 3,
      },
      {
        id: 4,
        country: 'AU',
        address: '1 Marco Polo Drive',
        lat_lng: JSON.stringify({
          lat: -32.528507,
          lng: 115.716766,
        }),
        created_at: '2022-08-16T05:08:42.827Z',
        updated_at: '2022-08-16T05:08:42.827Z',
        property_id: 4,
      },
      {
        id: 5,
        country: 'AU',
        address: 'Country Club Boulevard',
        lat_lng: JSON.stringify({
          lat: -31.748491,
          lng: 115.752167,
        }),
        created_at: '2022-08-16T05:08:42.827Z',
        updated_at: '2022-08-16T05:08:42.827Z',
        property_id: 5,
      },
      {
        id: 6,
        country: 'AU',
        address: '7-9 John Street',
        lat_lng: JSON.stringify({
          lat: -32.032936,
          lng: 115.759584,
        }),
        created_at: '2022-08-16T05:08:42.827Z',
        updated_at: '2022-08-16T05:08:42.827Z',
        property_id: 6,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     return queryInterface.bulkDelete('locations', null, {});
  },
};
