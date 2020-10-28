import { expect } from 'chai';

import SleepRepository from '../src/SleepRepository';
import Sleep from '../src/Sleep';
// import User from '../src/User';

import {sleepSampleData, hydrationSampleData, userSampleData, activitySampleData} from "./test-sample-data"

describe.only('SleepRepository', function() {
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
    sleepRepository = new SleepRepository(sleepArray, user1)

  });
  it('should be a function', function() {
    expect(SleepRepository).to.be.a('function');
  });
  it('should be an instance of sleepRepository', function() {
    expect(sleepRepository).to.be.an.instanceof(SleepRepository);
  });
  it('should hold a Sleep Class objects', function() {
    expect(sleepRepository.sleepRecord[0]).to.be.instanceof(Sleep);
  });
  //TODO sad path by adding sleepObject w/different userID, ensure length is still 3
  it('should hold a userID', function() {
    expect(sleepRepository.userID).to.equal(1);
  });
  it('should return average daily hours slept', function() {
    expect(sleepRepository.dailyAverageSleepHours).to.equal(7.6);
  });
  it('should return average daily sleep quality', function() {
    expect(sleepRepository.dailyAverageSleepQuality).to.equal(2.3);
  });
  it('should be able to add sleepObject to sleep record', function() {

    sleepRepository.addNewSleepData(sleepData4)

    expect(sleepRepository.sleepRecord.length).to.equal(4);
  });
  it('should be able to return an array of sleep hours data over 7 days', function() {

    let sleepRepository2 = new SleepRepository(sleepArray2, user1)

    expect(sleepRepository2.getDayByDaySleepHours('2019/06/28').length).to.equal(7);
    expect(sleepRepository2.getDayByDaySleepHours('2019/06/28')[0].sleepHours).to.equal(10.8);
  });
  it('should be able to return an array of sleep quality data over 7 days', function() {

    let sleepRepository2 = new SleepRepository(sleepArray2, user1)

    expect(sleepRepository2.getDayByDaySleepQuality('2019/06/28').length).to.equal(7);
    expect(sleepRepository2.getDayByDaySleepQuality('2019/06/28')[0].sleepQuality).to.equal(4.7);
  });
  it('should be able to return an average of sleep quality data 7 days', function() {

    let sleepRepository2 = new SleepRepository(sleepArray2, user1)

    expect(sleepRepository2.getWeeklyAverageSleepQuality('2019/06/28')).to.equal(3.2);
  });





  // it('should update user\'s slept hours record', function() {
  //   expect(user2.sleepQualityRecord.length).to.equal(1);
  // });
  // it('should update user\'s slept hours average', function() {
  //   expect(user1.hoursSleptAverage).to.equal('7.7');
  // });
  // it('should update user\'s sleep quality average', function() {
  //   expect(user1.sleepQualityAverage).to.equal('1.8');
  // });
  // it('calculateAverageHoursThisWeek should calculate average sleep hours for week before given date', function() {
  //   user.sleepHoursRecord = [{date: "2019/09/22", hours: 9.6}, {date: "2019/09/21", hours: 8.2}, {date: "2019/09/20", hours: 9.9}, {date: "2019/09/19", hours: 4.2}, {date: "2019/09/18", hours: 9.5}, {date: "2019/09/17", hours: 7.8}, {date: "2019/09/16", hours: 10.2}, {date: "2019/09/15", hours: 5.7}, {date: "2019/09/14", hours: 8.8}, {date: "2019/09/13", hours: 4.6}, {date: "2019/09/12", hours: 5.3}];
  //   expect(user.calculateAverageHoursThisWeek('2019/09/21')).to.equal('7.9');
  // });
  // it('calculateAverageQualityThisWeek should calculate average quality of sleep for week before a given date', function() {
  //   user.sleepQualityRecord = [{date: "2019/09/22", quality: 9.6}, {date: "2019/09/21", quality: 8.2}, {date: "2019/09/20", quality: 9.9}, {date: "2019/09/19", quality: 4.2}, {date: "2019/09/18", quality: 9.5}, {date: "2019/09/17", quality: 7.8}, {date: "2019/09/16", quality: 10.2}, {date: "2019/09/15", quality: 5.7}, {date: "2019/09/14", quality: 8.8}, {date: "2019/09/13", quality: 4.6}, {date: "2019/09/12", quality: 5.3}];
  //   expect(user.calculateAverageQualityThisWeek('2019/09/22')).to.equal('8.5')
  // });
})
