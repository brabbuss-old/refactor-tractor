import { expect } from 'chai';

import UserRepository from '../src/classes/UserRepository';
import ActivityRepository from '../src/classes/ActivityRepository';
import HydrationRepository from '../src/classes/HydrationRepository';
import SleepRepository from '../src/classes/SleepRepository';
import User from '../src/classes/User';
import {sleepSampleData, hydrationSampleData, userSampleData, activitySampleData} from "../src/data/test-sample-data"

describe('UserRepository', function() {
  let userRepository;
  beforeEach(() => {
  userRepository = new UserRepository(userSampleData, activitySampleData, hydrationSampleData, sleepSampleData, '2020/06/10');
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
    expect(userRepository.globalSleepQuality).to.equal(2.8);
  });
  it('should hold an array of User class objects', function() {
    expect(userRepository.userObjectArray.length).to.equal(4);
    expect(userRepository.userObjectArray[0]).to.be.instanceof(User);
  });
  it('getUserObject should return user object when given a user id', function() {
    expect(userRepository.getUserObject(1).id).to.equal(1);
  })
  it('getGlobalStepGoal should return average step goal for all users', function() {
    expect(userRepository.getGlobalStepGoal()).to.equal(9000);
  })
  it('calculateAverageSleepQuality should return average sleep quality for all users', function() {
    expect(userRepository.getGlobalSleepQuality()).to.equal(2.8);
  });
  it('should have a method that finds the best sleepers', function() {
    expect(userRepository.findBestSleepers("2020/06/12").length).to.equal(1);
  });
  it('should have a method that finds the longest sleepers', function() {
    expect(userRepository.getLongestSleepers("2020/06/12")).to.equal(9);
  });
  it('should have a method that finds the worst sleepers', function() {
    expect(userRepository.getWorstSleepers("2020/06/12")).to.equal(1);
  });
  it('should have a method that calculates friends average ounces of water', function() {
    expect(userRepository.getGlobalWaterAvgByDate("2020/06/01")).to.equal(306)
  });
  it('should have a method that calculates average number of stairs for users', function() {
    expect(userRepository.getGlobalStairAvgByDate("2020/06/10")).to.equal(12);
  })
  it('should have a method that calculates average number of steps for users', function() {
    expect(userRepository.getGlobalStepAvgByDate("2020/06/10")).to.equal(2634);
  })
  it('should have a method that calculates average number of active minutes for users', function() {
    expect(userRepository.getGlobalActiveAvgByDate("2020/06/10")).to.equal(107);
  })
  // it('should have a method that calculates friends average ounces of water', function() {  Can't tell yet if needed, will add if so
  //   expect(userRepository.getFriendsAvgWater("2020/06/01")).to.equal(306)
  // });
});
