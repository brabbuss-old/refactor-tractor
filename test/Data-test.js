import { expect } from 'chai';
import Data from '../src/classes/data-classes/Data';

describe('Data', function() {
  let data;

  beforeEach(() => {
    data = new Data({
      "userID": 33,
      "date": "2033/03/03",
    })
  })
  it('should be a function', function() {
    expect(Data).to.be.a('function');
  });
  it('should be an instance of Data', function() {
    expect(data).to.be.an.instanceof(Data);
  });
  it('should hold a userId', function() {
    expect(data.userID).to.equal(33);
  });
  it('should hold a date', function() {
    expect(data.date).to.equal("2033/03/03");
  });
});
