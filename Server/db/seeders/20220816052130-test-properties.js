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

    return queryInterface.bulkInsert('properties', [
      {
        uuid: '3c094d63-d7ef-407c-a6b5-b660dfcd9fc9',
        name: 'Citadines St Georges Terrace Perth',
        image:
          'https://property-gallery.rakutentravelxchange.com/fqeA/QK0XAKe6.jpg',
        created_at: '2022-08-16T05:08:42.827Z',
        updated_at: '2022-08-16T05:08:42.827Z',
      },
      {
        uuid: '030f1808-6b69-4897-ab1a-2a1b0cbd505f',
        name: 'Riverview On Mount Street',
        image:
          'https://property-gallery.rakutentravelxchange.com/OLSv/6yVXEMb7.jpg',
        created_at: '2022-08-16T05:08:42.827Z',
        updated_at: '2022-08-16T05:08:42.827Z',
      },
      {
        uuid: '42c77e28-5dec-4269-9568-60d30a270986',
        name: 'Quest East Perth',
        image: 'https://property-gallery.rakutentravelxchange.com/HUAZ/0.jpg',
        created_at: '2022-08-16T05:08:42.827Z',
        updated_at: '2022-08-16T05:08:42.827Z',
      },
      {
        uuid: '868f223d-07b2-4c25-976d-8b0f383b4505',
        name: 'The Sebel Mandurah',
        image: 'https://property-gallery.rakutentravelxchange.com/QCtU/0.jpg',
        created_at: '2022-08-16T05:08:42.827Z',
        updated_at: '2022-08-16T05:08:42.827Z',
      },
      {
        uuid: 'c2315a15-67bd-4f2d-8bba-e38639771337',
        name: 'Joondalup Resort',
        image: 'https://property-gallery.rakutentravelxchange.com/BMm9/0.jpg',
        created_at: '2022-08-16T05:08:42.827Z',
        updated_at: '2022-08-16T05:08:42.827Z',
      },
      {
        uuid: 'a5ffdafb-2d05-446e-b0de-62a9cb218acd',
        name: 'Pier 21 Apartment Hotel',
        image:
          'https://property-gallery.rakutentravelxchange.com/EddP/4JyvDp87.jpg',
        created_at: '2022-08-16T05:08:42.827Z',
        updated_at: '2022-08-16T05:08:42.827Z',
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

     return queryInterface.bulkDelete('properties', null, {});
  },
};
