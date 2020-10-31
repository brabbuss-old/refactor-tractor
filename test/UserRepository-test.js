import { expect } from 'chai';

import UserRepository from '../src/classes/UserRepository';
import ActivityRepository from '../src/classes/ActivityRepository';
import HydrationRepository from '../src/classes/HydrationRepository';
import SleepRepository from '../src/classes/SleepRepository';
import User from '../src/classes/User';
import {sleepSampleData, hydrationSampleData, userSampleData, activitySampleData} from "../src/data/test-sample-data"

describe('UserRepository', function() {
  let sleepData;
  let sleep1;
  let sleep2;
  let sleep3;
  let user1;
  let user2;
  let user3;
  let user4;
  let userRepository;
  beforeEach(() => {
  // user1 = userSampleData[0]
  // user2 = userSampleData[1]
  // user3 = userSampleData[2]
  // user4 = userSampleData[3]

  userRepository = new UserRepository(userSampleData, activitySampleData, hydrationSampleData, sleepSampleData, '2020/06/10');
  // userRepository.userObjectArray.forEach(user => user.populateUserData(activitySampleData, hydrationSampleData, sleepSampleData, '2020/06/10'))
  })

  it('should be a function', function() {
    expect(UserRepository).to.be.a('function');
  });
  it('should be an instance of user repository', function() {
    expect(userRepository).to.be.an.instanceof(UserRepository);
  });
  it('should have a date', function() {
    expect(userRepository.date).to.equal('2020/06/10');
  });
  it('should avg step goal of all users', function() {
    expect(userRepository.globalStepGoal).to.equal(9000);
  });
  it('should avg sleep quality of all users', function() {
    expect(userRepository.globalSleepQuality).to.equal(3.5);
  });
  it('should hold an array of user objects', function() {
    expect(userRepository.usersRecord).to.deep.equal([user1, user2, user3]);
    expect(userRepository.usersRecord.length).to.equal(3);
  });
  it('getUserObject should return user object when given a user id', function() {
    expect(userRepository.getUserObject(2).id).to.equal(user2.id);
  })
  it('getGlobalStepGoal should return average step goal for all users', function() {
    expect(userRepository.getGlobalStepGoal()).to.equal(10000);
  })

// TODO begin tearing here - this should be a function of the users Sleep object array
// From there the user can call a method to calculate user's avg sleep
// this class can get the avg by using that method on every user in a reduce function

  it('calculateAverageSleepQuality should return average sleep quality for all users', function() {
    user1.sleepQualityAverage = 3.3;
    user2.sleepQualityAverage = 5;
    user3.sleepQualityAverage = 1;
    expect(userRepository.calculateAverageSleepQuality()).to.equal(3.1);
  });
  it('should have a method that calculates friends average ounces of water', function() {
    user1.ouncesRecord = [
      {"2019/06/15": 1},
      {"2019/06/15": 1},
      {"2019/06/16": 5}
    ]
    user2.ouncesRecord = [
      {"2019/06/15": 1},
      {"2019/06/15": 1},
      {"2019/06/16": 8}
    ]
    user3.ouncesRecord = [
      {"2019/06/15": 1},
      {"2019/06/15": 1},
      {"2019/06/16": 4}
    ]
    expect(userRepository.calculateAverageDailyWater("2019/06/16")).to.equal(6)
  });
  it('should have a method that finds the best sleepers', function() {
    sleep1 = new Sleep({
      "userID": 1,
      "date": "2019/06/16",
      "hoursSlept": 6.1,
      "sleepQuality": 1000
    }, userRepository);
    sleep2 = new Sleep({
      "userID": 2,
      "date": "2019/06/15",
      "hoursSlept": 7.3,
      "sleepQuality": 500
    }, userRepository);
    sleep3 = new Sleep({
      "userID": 3,
      "date": "2019/06/15",
      "hoursSlept": 9.3,
      "sleepQuality": 1.4
    }, userRepository);
    expect(userRepository.findBestSleepers("2019/06/16")).to.deep.equal([user1, user2]);
  });
  it('should have a method that finds the longest sleepers', function() {
    sleep1 = new Sleep({
      "userID": 1,
      "date": "2019/06/16",
      "hoursSlept": 10.1,
      "sleepQuality": 1000
    }, userRepository);
    sleep2 = new Sleep({
      "userID": 2,
      "date": "2019/06/15",
      "hoursSlept": 17.3,
      "sleepQuality": 500
    }, userRepository);
    sleep3 = new Sleep({
      "userID": 3,
      "date": "2019/06/15",
      "hoursSlept": 9.3,
      "sleepQuality": 1.4
    }, userRepository);
    expect(userRepository.getLongestSleepers("2019/06/15")).to.equal(2);
  });
  it('should have a method that finds the worst sleepers', function() {
    sleep1 = new Sleep({
      "userID": 1,
      "date": "2019/06/16",
      "hoursSlept": 10.1,
      "sleepQuality": 1000
    }, userRepository);
    sleep2 = new Sleep({
      "userID": 2,
      "date": "2019/06/15",
      "hoursSlept": 7.3,
      "sleepQuality": 500
    }, userRepository);
    sleep3 = new Sleep({
      "userID": 3,
      "date": "2019/06/15",
      "hoursSlept": 9.3,
      "sleepQuality": 1.4
    }, userRepository);
    expect(userRepository.getWorstSleepers("2019/06/15")).to.equal(2);
  });
  it('should have a method that calculates average number of stairs for users', function() {
    user1.activityRecord = [{date: "2019/09/17", flightsOfStairs: 10}, {date: "2019/09/17", flightsOfStairs: 15}];
    user2.activityRecord = [{date: "2019/09/16", flightsOfStairs: 8}, {date: "2019/09/17", flightsOfStairs: 4}];
    expect(userRepository.calculateAverageStairs("2019/09/17")).to.equal(10);
  })
  it('should have a method that calculates average number of steps for users', function() {
    user1.activityRecord = [{date: "2019/09/17", steps: 100}, {date: "2019/09/17", steps: 2000}];
    user2.activityRecord = [{date: "2019/09/16", steps: 9820}, {date: "2019/09/17", steps: 234}];
    expect(userRepository.calculateAverageSteps("2019/09/17")).to.equal(778);
  })
  it('should have a method that calculates average number of active minutes for users', function() {
    user1.activityRecord = [{date: "2019/09/17", minutesActive: 100}, {date: "2019/09/17", minutesActive: 20}];
    user2.activityRecord = [{date: "2019/09/16", minutesActive: 78}, {date: "2019/09/17", minutesActive: 12}];
    expect(userRepository.calculateAverageMinutesActive("2019/09/17")).to.equal(44);
  })
});
