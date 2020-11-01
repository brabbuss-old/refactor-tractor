import ClassChooser from './ClassChooser';
import ParentRepository from './ParentRepository';

export default class SleepRepository extends ParentRepository {
  constructor(fetchedData, user, dataClass, date) {
    super(fetchedData, user, dataClass, date)
    this.weeklySleepHours;
    this.weeklySleepQuality;
  }

  addNewSleepData(date, hours, quality) {
    let sleepDataObject = {
      "userID": this.userID,
      "date": date,
      "hoursSlept": hours,
      "sleepQuality": quality
    }
    this.addNewDataObject(sleepDataObject)
  }
  
  getDayByDayQualityOrHours(date, qualityOrHours) {
    return this.getPastWeekData(date).map(sleepObject => {
      return qualityOrHours === 'hours' ? {date: [sleepObject.date], sleepHours: sleepObject.hoursSlept}
      : {date: [sleepObject.date], sleepQuality: sleepObject.sleepQuality};
    })
  }
}
