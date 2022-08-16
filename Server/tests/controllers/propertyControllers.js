//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../index');
let should = chai.should();

let property = {
  name: 'Four Points by Sheraton Perth',
  image: 'https://property-gallery.rakutentravelxchange.com/YtLv/QK0Xmx06.jpg',
  uuid: '87592c3f-629a-4e09-b985-a4a2dc69edd7',
  Location: {
    country: 'AU',
    address: '707 Wellington Street',
    latLng: {
      lat: -31.949281,
      lng: 115.851989,
    },
  },
  ReviewSummary: {
    score: 86,
    scoreDescription: 'Very Good',
    text: 'Very good city hotel. Located near shopping areas with easy access to parking. Great rooms and fantastic service.',
  },
};

chai.use(chaiHttp);
//Our parent block
describe('Properties', () => {
  /*
   * Test the /GET route
   */
  describe('/GET properties', () => {
    it('it should GET all the Properties with pagination of 5 per page', (done) => {
      chai
        .request(server)
        .get('/properties')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a('array');
          res.body.data.length.should.be.eql(0);
          done();
        });
    });
  });

  /*
   * Test the /GET route
   */
  describe('/GET properties', () => {
    it('it should GET all the Properties without any paging', (done) => {
      chai
        .request(server)
        .get('/properties')
        .query({ all: true })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a('array');
          res.body.data.length.should.be.eql(0);
          done();
        });
    });
  });

  /*
   * Test the /POST route
   */
  describe('/POST properties', () => {
    it('it should create a new property', (done) => {
      chai
        .request(server)
        .post('/properties')
        .send(property)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('ReviewSummary');
          res.body.should.have.property('Location');
          res.body.should.have.property('uuid').eql(property.uuid);
          done();
        });
    });
  });

  /*
   * Test the /GET/:id route
   */
  describe('/GET/:id properties', () => {
    it('it should GET a Property by the given id', (done) => {
      chai
        .request(server)
        .get('/properties/' + property.uuid)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('ReviewSummary');
          res.body.should.have.property('Location');
          res.body.should.have.property('uuid').eql(property.uuid);
          done();
        });
    });
  });

  /*
   * Test the /PUT/:id route
   */
  describe('/PUT/:id properties', () => {
    it('it should UPDATE a Property with the given id', (done) => {
      const updatedName = `Updated ${property.name}`;
      chai
        .request(server)
        .put('/properties/' + property.uuid)
        .send({
          name: updatedName,
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('name').eql(updatedName);
          res.body.should.have.property('uuid').eql(property.uuid);
          done();
        });
    });
  });

  /*
   * Test the /DELETE/:id route
   */
  describe('/DELETE/:id properties', () => {
    it('it should DELETE a Property with the given id', (done) => {
      chai
        .request(server)
        .delete('/properties/' + property.uuid)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.true;
          done();
        });
    });
  });

  /*
   * Test the /POST route
   */
  describe('/POST /properties/bulk-create', () => {
    it('it should create a new properties', (done) => {
      const properties = [
        {
          uuid: '94cbf0c3-69f9-4f4f-8190-60ccb5b3a45a',
          name: 'Enderslie House Bed & Breakfast',
          image:
            'https://property-gallery.rakutentravelxchange.com/N6Y4/72MjdEV6.jpg',
          Location: {
            country: 'AU',
            address: '15 Peters Road',
            latLng: {
              lat: -31.581756,
              lng: 115.982947,
            },
          },
          ReviewSummary: {
            score: 93,
            scoreDescription: 'Excellent',
            text: 'Excellent accommodation. Fantastic service.',
          },
        },
        {
          uuid: 'c3977d10-fc55-4b7e-8c65-a6f9d2005879',
          name: 'Quest Mounts Bay Road',
          image: 'https://property-gallery.rakutentravelxchange.com/5U9Q/0.jpg',
          Location: {
            country: 'AU',
            address: '130 Mounts Bay Road',
            latLng: {
              lat: -31.95652,
              lng: 115.84681,
            },
          },
          ReviewSummary: {
            score: 89,
            scoreDescription: 'Very Good',
            text: 'Excellent family hotel. Located near shopping areas with easy access to parking. Great rooms and fantastic service. Awesome vibe.',
          },
        },
      ];
      chai
        .request(server)
        .post('/properties/bulk-create')
        .send(properties)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(properties.length);
          done();
        });
    });
  });
});
