import {expect} from 'chai';
const config = require('../config/index');

describe('configuration function', function() {
  it('should return a function', function() {
    expect(typeof config.getDBConnection).to.equal('function');
  });
  it('should return a string when called', function() {
    expect(typeof config.getDBConnection()).to.equal('string');
  })
});