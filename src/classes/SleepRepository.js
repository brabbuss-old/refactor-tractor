import ClassChooser from './ClassChooser';
import ParentRepository from './ParentRepository';

export default class SleepRepository extends ParentRepository {
  constructor(fetchedData, user, dataClass) {
    super(fetchedData, user, dataClass)
    this.weeklySleepHours;
    this.weeklySleepQuality;
  }
  addNewSleepData(date, hours, quality) {
    let activityDataObject = {
      "userID": this.userID,
      "date": date,
      "hoursSlept": hours,
      "sleepQuality": quality
    }
    this.addNewDataObject(activityDataObject)
  }
  getDayByDayQualityOrHours(date, qualityOrHours) {
    return this.getPastWeekData(date).map(sleepObject => {
      return qualityOrHours === 'hours' ? {date: [sleepObject.date], sleepHours: sleepObject.hoursSlept}
      : {date: [sleepObject.date], sleepQuality: sleepObject.sleepQuality};
    })
  }
}
