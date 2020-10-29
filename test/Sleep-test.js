import { expect } from 'chai'
import Sleep from '../src/classes/data-classes/Sleep';

describe('Sleep', function() {
  let sleep1;
  let sleep2;
  let sleep3;
  beforeEach(() => {
    sleep1 = new Sleep({
      "userID": 1,
      "date": "2019/06/15",
      "hoursSlept": 6.1,
      "sleepQuality": 2.2
    }),
    sleep2 = new Sleep({
      "userID": 2,
      "date": "2019/06/16",
      "hoursSlept": 7,
      "sleepQuality": 4.7
    }),
    sleep3 = new Sleep({
      "userID": 3,
      "date": "2019/06/15",
      "hoursSlept": 10.8,
      "sleepQuality": 4.7
    })
  });
  it('should be a function', function() {
    expect(Sleep).to.be.a('function');
  });
  it('should be an instance of Sleep', function() {
    expect(sleep1).to.be.an.instanceof(Sleep);
  });
  it('should hold hours of sleep', function() {
    expect(sleep1.hoursSlept).to.equal(6.1);
  });
  it('should hold quality of sleep', function() {
    expect(sleep3.sleepQuality).to.equal(4.7);
  });
});

// Remove bc inheritance
// it('should hold a userId', function() {
//   expect(sleep2.userID).to.equal(2);
// });
// it('should hold a date', function() {
//   expect(sleep2.date).to.equal("2019/06/16");
// });
