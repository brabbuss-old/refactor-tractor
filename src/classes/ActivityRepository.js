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
  getDataByDateAndKey(date, dataType) {
    return this.findDataObjectByDate(date)[dataType];
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
  getAverageTimeActiveByWeek(date) {
    return Math.round(this.getPastWeekData(date).reduce((totalTime, activityObject) => {
      totalTime += activityObject.minutesActive;
      return totalTime;
    }, 0)/7);
  }
}


//
//   addNewSleepData(date, hours, quality) {  // this is for the input forms
//     let sleepObject = {
//     "userID": this.userID,
//     "date": date,
//     "hoursSlept": hours,
//     "sleepQuality": quality
//     }
//     this.sleepRecord.push(new Sleep(sleepObject));
//     // potential spot for POST helper method (if separate)
//   }
//   getSleepHoursByDate(date) {
//     let sleepObject = this.sleepRecord.find(sleepObject => sleepObject.date === date);
//     return sleepObject.hoursSlept;
//   }
//   getSleepQualityByDate(date) {
//     let sleepObject = this.sleepRecord.find(sleepObject => sleepObject.date === date);
//     return sleepObject.sleepQuality;
//   }
//   getDailyAverageSleepHours() {
//     if(this.sleepRecord.length) {
//       let averageHoursSlept = this.sleepRecord.reduce((averageHoursSlept, sleepObject) => {
//         averageHoursSlept += sleepObject.hoursSlept;
//         return averageHoursSlept
//       }, 0);
//       return Number((averageHoursSlept / this.sleepRecord.length).toFixed(1));
//     }
//   }
//   getDailyAverageSleepQuality() {
//     if(this.sleepRecord.length) {
//       let averageSleepQuality = this.sleepRecord.reduce((averageSleepQuality, sleepObject) => {
//         averageSleepQuality += sleepObject.sleepQuality;
//         return averageSleepQuality;
//       }, 0);
//       return Number((averageSleepQuality / this.sleepRecord.length).toFixed(1));
//     }
//   }
//
//   getDayByDaySleepHours(date) {
//     let matchedSleep = this.sleepRecord.find(sleepObject => sleepObject.date === date)
//     let index = this.sleepRecord.indexOf(matchedSleep);
//     let matchedArray = this.sleepRecord.slice(index - 6, index + 1)
//     return matchedArray.map(sleepObject => {
//       return {date: [sleepObject.date], sleepHours: sleepObject.hoursSlept}
//     })
//   }
//
//   getDayByDaySleepQuality(date) {
//     let matchedSleep = this.sleepRecord.find(sleepObject => sleepObject.date === date)
//     let index = this.sleepRecord.indexOf(matchedSleep);
//     let matchedArray = this.sleepRecord.slice(index - 6, index + 1)
//     return matchedArray.map(sleepObject => {
//       return {date: [sleepObject.date], sleepQuality: sleepObject.sleepQuality}
//     })
//   }
//
//   getWeeklyAverageSleepQuality(date) {
//     let totalQuality = this.getDayByDaySleepQuality(date).reduce((totalQuality, sleepObject) => {
//       totalQuality += sleepObject.sleepQuality
//       return totalQuality
//     }, 0)
//     return Number((totalQuality / 7).toFixed(1));
//   }
// }

// getWeeklyAverageSleepQuality(date) {
//   return (this.sleepRecord.reduce((sum, sleepObject) => {
//     let index = this.sleepRecord.indexOf(this.sleepRecord.find(sleep => sleep.date === date));
//     if (index <= this.sleepRecord.indexOf(sleepObject) && this.sleepRecord.indexOf(sleepObject) <= (index + 6)) {
//       sum += sleepObject.quality;
//     }
//     return sum;
//   }, 0) / 7).toFixed(1);
// }


export default ActivityRepository;
