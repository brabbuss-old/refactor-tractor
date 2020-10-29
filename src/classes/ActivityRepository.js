import Activity from './data-classes/Activity';
import ClassChooser from './ClassChooser';

class ActivityRepository {
  constructor(fetchedData, user) {
    this.dataClass = 'activities';
    this.classChooser = new ClassChooser(this.dataClass)
    this.userID = user.id;
    this.strideLength = user.strideLength;
    this.dailyStepGoal = user.dailyStepGoal;
    this.dataObjectArray = this.parseData(fetchedData);
  }
  parseData(fetchedData) {  //TODO this is part of parent class
    return fetchedData.reduce((parsedData, dataObject) => {
      if (dataObject.userID === this.userID) {
        parsedData.push(this.classChooser.instantiateClass(dataObject))
      }
      return parsedData
    }, [])
  }
  addNewDataObject(dataObject) {
    this.dataObjectArray.push(this.classChooser.instantiateClass(dataObject));
  }
  findDataObjectByDate(date) {
    return this.dataObjectArray.find(dataObject => dataObject.date === date);
  }
  getPastWeekData(date) {
    let index = this.dataObjectArray.indexOf(this.findDataObjectByDate(date))
    return this.dataObjectArray.slice(index - 6, index + 1)
  }
  getDataByDateAndKey(date, dataObjectKey) {
    return this.findDataObjectByDate(date)[dataObjectKey];
  }
  getAverageDataByWeekAndKey(date, dataObjectKey) {
    return Math.round(this.getPastWeekData(date).reduce((dataTotal, dataObject) => {
      dataTotal += dataObject[dataObjectKey];
      return dataTotal;
    }, 0)/7);
  }
  getHighLowDataPointByKey(dataObjectKey, highOrLow) {
    let sortedData = this.dataObjectArray.sort((a, b) => {
      return highOrLow === 'low' ? a[dataObjectKey] - b[dataObjectKey] : b[dataObjectKey] - a[dataObjectKey];
    })
    return sortedData[0]
  }

  //      Class Specific Methods
  addNewActivityData(date, steps, minutes, stairs) {  // this is for the input forms
    let activityDataObject = {
    "userID": this.userID,
    "date": date,
    "numSteps": steps,
    "minutesActive": minutes,
    "flightsOfStairs": stairs
    }
    this.addNewDataObject(activityDataObject)
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

export default ActivityRepository;
