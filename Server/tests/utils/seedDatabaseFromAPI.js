//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let should = chai.should();

const { Sequelize, DataTypes } = require('sequelize');

const { seedDatabaseFromAPI } = require('../../utils/seedDatabaseFromAPI');

const { DB_USERNAME, DB_PASSWORD, TEST_DATABASE, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:5432/${TEST_DATABASE}`
);
const queryInterface = sequelize.getQueryInterface();

//Our parent block
describe('seedDatabaseFromAPI Utility Fn', () => {
  before((done) => { // Mocha executing this after??????
    //Before the test begins we empty the database
    queryInterface.bulkDelete('properties', null, {});
    queryInterface.bulkDelete('locations', null, {});
    queryInterface.bulkDelete('reviews_summaries', null, {});

    done();
  });

  /*
   * Test the seedDatabaseFromAPI Utility Fn
   */
  it('it should grab Properties from source external API and save them in the database', (done) => {
    seedDatabaseFromAPI().then((successful) => {
      successful.should.be.true;

      done();
    });
  });

  it('it should grab Properties from source external API and save them in the database', (done) => {
    seedDatabaseFromAPI().then((successful) => {
      successful.should.be.true;

      done();
    });
  });
});
