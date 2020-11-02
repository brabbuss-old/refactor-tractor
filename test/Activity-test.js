import {expect} from 'chai';
import Activity from '../src/classes/data-classes/Activity';
import User from '../src/classes/User';

describe('Activity', function() {
  let activity1;
  let activity2;
  let user1;
  let user2;
  beforeEach(() => {
    user1 = new User({
      'id': 1,
      'name': 'Luisa Hane',
      'address': '15195 Nakia Tunnel, Erdmanport VA 19901-1697',
      'email': 'Diana.Hayes1@hotmail.com',
      'strideLength': 4.3,
      'dailyStepGoal': 10000,
      'friends': [
        16,
        4,
        8
      ]
    });
    user2 = new User({
      "id": 2,
      "name": "Jarvis Considine",
      "address": "30086 Kathryn Port, Ciceroland NE 07273",
      "email": "Dimitri.Bechtelar11@gmail.com",
      "strideLength": 4.5,
      "dailyStepGoal": 2000,
      "friends": [
        9,
        18,
        24,
        19
      ]
    })
    activity1 = new Activity({
      "userID": 1,
      "date": "2019/06/15",
      "numSteps": 3684,
      "minutesActive": 140,
      "flightsOfStairs": 16
    });
    activity2 = new Activity({
      "userID": 2,
      "date": "2019/06/20",
      "numSteps": 2856,
      "minutesActive": 280,
      "flightsOfStairs": 22
    });
  });
  it('should be a function', function() {
    expect(Activity).to.be.a('function');
  });
  it('should be an instance of activity', function() {
    expect(activity1).to.be.an.instanceof(Activity);
  });
  it('should hold number of steps', function() {
    expect(activity1.numSteps).to.equal(3684);
  });
  it('should hold minutes active', function() {
    expect(activity2.minutesActive).to.equal(280);
  });
  it('should hold flights of stairs', function() {
    expect(activity2.flightsOfStairs).to.equal(22);
  });
});
