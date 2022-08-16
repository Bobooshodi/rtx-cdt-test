//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../index');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('Properties', () => {
  /*
   * Test the /GET route
   */
  describe('/GET external/from-source', () => {
    it('it should GET all the Properties from source', (done) => {
      chai
        .request(server)
        .get('/external/from-source')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('meta');
          res.body.should.have.property('outlets');
          res.body.outlets.should.have.property('availability');
          res.body.outlets.availability.should.have.property('search');
          res.body.outlets.availability.should.have.property('results').a('array');
          done();
        });
    });
  });
});