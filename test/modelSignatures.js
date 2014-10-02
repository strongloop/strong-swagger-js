var test = require('unit.js')
var should = require('should')
var mock = require('../test/mock');
var sample, instance;

describe('model signatures', function() {
  before(function(done) {
    mock.petstore(done, function(petstore, server){
      sample = petstore;
      instance = server;
    });
  });

  after(function(done){
    instance.close();
    done();
  });

  it('returns the json representation of a pet with repeating models', function() {
    var pet = sample.models['Animals'];
    test.object(pet);

    // verify that each instance of `Pet` is represented
    var petModel = '{"id":1,"category":{"id":1,"name":" "},"name":" ","photoUrls":[" "],"tags":[{"id":1,"name":" "}],"status":" ","phone":{"code":" ","number":" "},"owner":{"name":" ","phone":{"code":" ","number":" "}}}';
    var model = '';

    model += '{' + '"cat":' + petModel + ',';
    model += '"dog":' + petModel + ',';
    model += '"mouse":' + petModel + '}';

    should(JSON.stringify(JSON.parse(model), null, 2))
      .equal(JSON.stringify(pet.createJSONSample(), null, 2));
  })
})
