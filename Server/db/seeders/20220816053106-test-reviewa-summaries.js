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

    return queryInterface.bulkInsert('reviews_summaries', [
      {
        id: 1,
        score: 85,
        score_description: 'Very Good',
        text: 'Very good wellness hotel. Located near shopping areas with easy access to parking.',
        created_at: '2022-08-16T05:08:42.827Z',
        updated_at: '2022-08-16T05:08:42.827Z',
        property_id: 1,
      },
      {
        id: 2,
        score: 85,
        score_description: 'Very Good',
        text: 'Very good accommodation. Great location.',
        created_at: '2022-08-16T05:08:42.827Z',
        updated_at: '2022-08-16T05:08:42.827Z',
        property_id: 2,
      },
      {
        id: 3,
        score: 90,
        score_description: 'Excellent',
        text: 'Excellent city hotel. Awesome rooms and service in a great location. Awesome vibe.',
        created_at: '2022-08-16T05:08:42.827Z',
        updated_at: '2022-08-16T05:08:42.827Z',
        property_id: 3,
      },
      {
        id: 4,
        score: 88,
        score_description: 'Very Good',
        text: 'Very good business hotel. Close to restaurants and bars with nearby parking areas. Great rooms and fantastic service.',
        created_at: '2022-08-16T05:08:42.827Z',
        updated_at: '2022-08-16T05:08:42.827Z',
        property_id: 4,
      },
      {
        id: 5,
        score: 84,
        score_description: 'Very Good',
        text: 'Very good club hotel. Located near shopping areas with easy access to parking. Great pool.',
        created_at: '2022-08-16T05:08:42.827Z',
        updated_at: '2022-08-16T05:08:42.827Z',
        property_id: 5,
      },
      {
        id: 6,
        score: 87,
        score_description: 'Very Good',
        text: 'Very good romantic hotel. Close to restaurants and bars with nearby parking areas.',
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

     return queryInterface.bulkDelete('reviews_summaries', null, {});
  },
};
