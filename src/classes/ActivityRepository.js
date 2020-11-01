import ClassChooser from './ClassChooser';
import ParentRepository from './ParentRepository';

export default class ActivityRepository extends ParentRepository {
  constructor(fetchedData, user, dataClass, date) {
    super(fetchedData, user, dataClass, date)
    this.strideLength = user.strideLength;
    this.dailyStepGoal = user.dailyStepGoal;
  }
  //      this is for the input forms
  addNewActivityData(date, steps, minutes, stairs) {
    let activityDataObject = {
      "userID": this.userID,
      "date": date,
      "numSteps": steps,
      "minutesActive": minutes,
      "flightsOfStairs": stairs
    }
    this.addNewDataObject(activityDataObject)
  }

  getStepsThisWeek(date) {
    if (this.getPastWeekData(date)) {
      return this.getPastWeekData(date).reduce((stepsTotal, activity) => {
        stepsTotal += activity.numSteps;
        return stepsTotal;
      }, 0);
    } else {
      return 'No data for this week'
    }
  }

  getMilesWalked(date) {
    let activityObject = this.findDataObjectByDate(date);
    let result = ((activityObject.numSteps * this.strideLength) / 5280).toFixed(1)
    return Number(result)
  }

  checkStepGoal(date) {
    return this.findDataObjectByDate(date).numSteps >= this.dailyStepGoal ? true : false;
  }

  getGoalReachedDays() {
    return this.dataObjectArray.filter(dataObject => {
      return dataObject.numSteps >= this.dailyStepGoal;
    })
  }
  
  getBestStairDay() {
    let bestDay = this.getHighLowDataPointByKey('flightsOfStairs', 'high')
    return {date: bestDay.date, flightsOfStairs: bestDay.flightsOfStairs}
  }
}
