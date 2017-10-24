import {expect} from 'chai';

import {getRecentEvent} from '../helpers';

const mock = [
  {
    "_id": "59ef2b5fb2ca2920e4fc4d79",
    "date": 1509793200000,
    "__v": 0
  },
  {
    "_id": "59ef2ca02d183f213b275747",
    "date": 1511002800000,
    "__v": 0
  },
  {
    "_id": "59ef32f3d502d021d5c85559",
    "date": 1508587200000,
    "__v": 0
  }
];

const recent = {
  "_id": "59ef2b5fb2ca2920e4fc4d79",
  "date": 1509793200000,
  "__v": 0
};

describe('get most recent event from events', function() {
  it('should get the closest event to the current date', function() {
    expect(getRecentEvent(mock)).to.eql(recent);
  });
});