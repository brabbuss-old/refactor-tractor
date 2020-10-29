import { expect } from 'chai';

import SleepRepository from '../src/classes/SleepRepository';
import Sleep from '../src/classes/data-classes/Sleep';

import {sleepSampleData, hydrationSampleData, userSampleData, activitySampleData} from "../src/data/test-sample-data"

describe('SleepRepository', function() {
  let sleepData1;
  let sleepData2;
  let sleepData3;
  let sleepData4;

  let sleepTestObject1;
  let sleepTestObject2;
  let sleepTestObject3;

  let sleepRepository;
  let sleepArray;
  let sleepArray2
  let user1;

  beforeEach(() => {
    user1 = ({
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
    sleepData1 = {
      "userID": 1,
      "date": "2019/06/15",
      "hoursSlept": 6.1,
      "sleepQuality": 2.2
    };
    sleepData2 = {
      "userID": 1,
      "date": "2019/06/25",
      "hoursSlept": 7.3,
      "sleepQuality": 3.2
    };
    sleepData3 = {
      "userID": 1,
      "date": "2019/07/17",
      "hoursSlept": 9.3,
      "sleepQuality": 1.4
    };
    sleepData4 = {
      "userID": 1,
      "date": '2020/01/01',
      "hoursSlept": 10,
      "sleepQuality": 5
    }
    sleepArray2 = [
      {
        "userID": 1,
        "date": "2019/06/20",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
      {
        "userID": 1,
        "date": "2019/06/21",
        "hoursSlept": 7,
        "sleepQuality": 4.7
      },
      {
        "userID": 1,
        "date": "2019/06/22",
        "hoursSlept": 10.8,
        "sleepQuality": 4.7
      },
      {
        "userID": 1,
        "date": "2019/06/23",
        "hoursSlept": 5.4,
        "sleepQuality": 3
      },
      {
        "userID": 1,
        "date": "2019/06/24",
        "hoursSlept": 4.1,
        "sleepQuality": 3.6
      },
      {
        "userID": 1,
        "date": "2019/06/25",
        "hoursSlept": 9.6,
        "sleepQuality": 2.9
      },
      {
        "userID": 1,
        "date": "2019/06/26",
        "hoursSlept": 5.1,
        "sleepQuality": 2.6
      },
      {
        "userID": 1,
        "date": "2019/06/27",
        "hoursSlept": 8.1,
        "sleepQuality": 3.5
      },
      {
        "userID": 1,
        "date": "2019/06/28",
        "hoursSlept": 8.9,
        "sleepQuality": 2.2
      }]

    sleepTestObject1 = new Sleep(sleepData1)
    sleepTestObject2 = new Sleep(sleepData2)
    sleepTestObject3 = new Sleep(sleepData3)

    sleepArray = [sleepTestObject1, sleepTestObject2, sleepTestObject3]
    sleepRepository = new SleepRepository(sleepArray, user1, 'sleep')

  });
  it('should be a function', function() {
    expect(SleepRepository).to.be.a('function');
  });
  it('should be an instance of sleepRepository', function() {
    expect(sleepRepository).to.be.an.instanceof(SleepRepository);
  });
  it('should hold a userID', function() {
    expect(sleepRepository.userID).to.equal(1);
  });
  it('should hold a Sleep Class objects', function() {
    expect(sleepRepository.dataObjectArray[0]).to.be.instanceof(Sleep);
  });
  it('should be able to add sleepObject to sleep record', function() {
    sleepRepository.addNewSleepData(sleepData4)

    expect(sleepRepository.dataObjectArray.length).to.equal(4);
  });
  it('should return hours slept for given date', function() {
    expect(sleepRepository.getDataByDateAndKey("2019/07/17", 'hoursSlept')).to.equal(9.3);
  });
  it('should return sleep quality for given date', function() {
    expect(sleepRepository.getDataByDateAndKey("2019/07/17", 'sleepQuality')).to.equal(1.4);
  });
  it('should return average daily hours slept', function() {
    expect(sleepRepository.getAllTimeAverageByKey('hoursSlept')).to.equal(7.6);
  });
  it('should return average daily sleep quality', function() {
    expect(sleepRepository.getAllTimeAverageByKey('sleepQuality')).to.equal(2.3);
  });
  it('should be able to return an array of sleep hours data over 7 days', function() {

    let sleepRepository2 = new SleepRepository(sleepArray2, user1, 'sleep')
    expect(sleepRepository2.getDayByDayQualityOrHours('2019/06/28', 'hours').length).to.equal(7);
    expect(sleepRepository2.getDayByDayQualityOrHours('2019/06/28', 'hours')[0].sleepHours).to.equal(10.8);
  });
  it('should be able to return an array of sleep quality data over 7 days', function() {

    let sleepRepository2 = new SleepRepository(sleepArray2, user1, 'sleep')

    expect(sleepRepository2.getDayByDayQualityOrHours('2019/06/28', 'quality').length).to.equal(7);
    expect(sleepRepository2.getDayByDayQualityOrHours('2019/06/28', 'quality')[0].sleepQuality).to.equal(4.7);
  });
  it('should be able to return an average of sleep quality data 7 days', function() {
    let sleepRepository2 = new SleepRepository(sleepArray2, user1, 'sleep')

    expect(sleepRepository2.getAverageDataByWeekAndKey('2019/06/28', 'sleepQuality', 1)).to.equal(3.2);
  });
  it('should be able to return an average of sleep hours data 7 days', function() {
    let sleepRepository2 = new SleepRepository(sleepArray2, user1, 'sleep')

    expect(sleepRepository2.getAverageDataByWeekAndKey('2019/06/28', 'hoursSlept', 1)).to.equal(7.4);
  });
})
