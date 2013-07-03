var sinon = require('sinon');
var chai = require("chai");
var should = chai.Should();
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

// initialize RequireJS
var requirejs = require('requirejs');
var rc = require('../modules/requireConfig');
requirejs.config(rc.init());

// run unit test with dependencies
var config = requirejs('config');

describe("config", function() {
  it ("Check name", function() {
    config.name.should.exist;
  });

  it ("Check bool options", function() {
    config.boolOption.should.exist;
  });

  it ("Check hosts list", function() {
    config.hostsList["www.gmail.com"].should.equal(true);
  });
});
