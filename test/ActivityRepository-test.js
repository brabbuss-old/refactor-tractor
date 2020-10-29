import { expect } from 'chai';

import ActivityRepository from '../src/classes/ActivityRepository';
import Activity from '../src/classes/data-classes/Activity';

import {sleepSampleData, hydrationSampleData, userSampleData, activitySampleData} from "../src/data/test-sample-data"

describe('ActivityRepository', function() {
  let activityDataObject1;
  let activityDataObject2;
  let activityDataObject3;
  let activityDataObject4;
  let activityDataObject5;
  let activityDataObject6;
  let activityDataObject7;
  let activityDataObject8;
  let activityDataObject9;
  let activityDataObject10;

  let activityRepository;
  let activityArray;
  let user;

  beforeEach(() => {
    user = ({
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

  activityDataObject1 = ({
   "userID": 1,
   "date": "2019/07/01",
   "numSteps": 5076,
   "minutesActive": 58,
   "flightsOfStairs": 19
 });
 activityDataObject2 = ({
   "userID": 1,
   "date": "2019/07/02",
   "numSteps": 11373,
   "minutesActive": 210,
   "flightsOfStairs": 2
 });
 activityDataObject3 = ({
   "userID": 1,
   "date": "2019/07/03",
   "numSteps": 5619,
   "minutesActive": 233,
   "flightsOfStairs": 47
 });
 activityDataObject4 = ({
   "userID": 1,
   "date": "2019/07/04",
   "numSteps": 10612,
   "minutesActive": 139,
   "flightsOfStairs": 25
 });
 activityDataObject5 = ({
   "userID": 1,
   "date": "2019/07/05",
   "numSteps": 7981,
   "minutesActive": 291,
   "flightsOfStairs": 10
 });
 activityDataObject6 = ({
   "userID": 1,
   "date": "2019/07/06",
   "numSteps": 14235,
   "minutesActive": 50,
   "flightsOfStairs": 7
 });
 activityDataObject7 = ({
   "userID": 1,
   "date": "2019/07/07",
   "numSteps": 11821,
   "minutesActive": 37,
   "flightsOfStairs": 20
 });
 activityDataObject8 = ({
   "userID": 1,
   "date": "2019/07/08",
   "numSteps": 9188,
   "minutesActive": 22,
   "flightsOfStairs": 2
 });
 activityDataObject9 = ({
   "userID": 1,
   "date": "2019/07/09",
   "numSteps": 2855,
   "minutesActive": 236,
   "flightsOfStairs": 45
 });
 activityDataObject10 = ({
   "userID": 1,
   "date": "2019/07/10",
   "numSteps": 8775,
   "minutesActive": 293,
   "flightsOfStairs": 30
 });

  activityArray = [
    activityDataObject1,
    activityDataObject2,
    activityDataObject3,
    activityDataObject4,
    activityDataObject5,
    activityDataObject6,
    activityDataObject7,
    activityDataObject8,
    activityDataObject9
  ]

  activityRepository = new ActivityRepository(activityArray, user, 'activities')

  });
  it('should be a function', function() {
    expect(ActivityRepository).to.be.a('function');
  });
  it('should be an instance of activityRepository', function() {
    expect(activityRepository).to.be.an.instanceof(ActivityRepository);
  });
  it('should hold Activity Class objects', function() {
    expect(activityRepository.dataObjectArray[0]).to.be.instanceof(Activity);
  });
  it('should hold a userID', function() {
    expect(activityRepository.dataObjectArray[0].userID).to.equal(1);
  });
  it('should find a dataObject by date', function() {
    expect(activityRepository.findDataObjectByDate('2019/07/09')).to.deep.equal(activityDataObject9);
  });

  // it('should return an array of seven days of data by date', function() {
  //   expect(activityRepository.findDataObjectByDate('2019/07/09')).to.deep.equal(activityDataObject9);
  // });

  it('should be able to add activityObject to activity record', function() {
    activityRepository.addNewActivityData(activityDataObject10);

    expect(activityRepository.dataObjectArray[9]).to.be.instanceof(Activity);
    expect(activityRepository.dataObjectArray.length).to.equal(10);
  });
  it('should be able to get average time active per day over one week', function() {

    expect(activityRepository.getAverageDataByWeekAndKey("2019/07/09", 'minutesActive')).to.equal(144);
  });
  it('should be able to return minutes active for specific date', function() {
    expect(activityRepository.getDataByDateAndKey("2019/07/02", 'minutesActive')).to.equal(210);
  });
  it('should be able to return steps taken on a specific date', function() {
    expect(activityRepository.getDataByDateAndKey("2019/07/02", 'numSteps')).to.equal(11373);
  });
  it('should be able to get miles walked on a given date', function() {
    expect(activityRepository.getMilesWalked("2019/07/07")).to.equal(9.6);
  });
  it('should be able to tell if user reached step goal on a given day', function() {
    expect(activityRepository.checkStepGoal("2019/07/01")).to.equal(false);
    expect(activityRepository.checkStepGoal("2019/07/02")).to.equal(true);
  });
  it('should be able to find all days where user met or exceeded step goal', function() {
    expect(activityRepository.getGoalReachedDays().length).to.equal(4);
    expect(activityRepository.getGoalReachedDays()[0].numSteps).to.equal(11373);
  });
  it('should be able to return number of stairs climbed on a specific date', function() {
    expect(activityRepository.getDataByDateAndKey("2019/07/02", 'flightsOfStairs')).to.equal(2);
  });
  it('should be able to return best stair climbing day', function() {
    expect(activityRepository.getBestStairDay()).to.deep.equal({date: "2019/07/03", flightsOfStairs: 47});
  });
})
