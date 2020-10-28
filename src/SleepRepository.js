import Sleep from '../src/Sleep';

class SleepRepository { // instance for the user's sleep each day
  constructor(fetchedSleepData, user) {
    this.userID = user.id;
    this.sleepRecord = this.parseSleepData(fetchedSleepData);
    this.dailyAverageSleepHours = this.getDailyAverageSleepHours();
    this.dailyAverageSleepQuality = this.getDailyAverageSleepQuality();
    this.weeklySleepHours;
    this.weeklySleepQuality;
  }
  parseSleepData(fetchedSleepData) {
    return fetchedSleepData.reduce((parsedSleepData, sleepObject) => {
      if (sleepObject.userID === this.userID) {
        parsedSleepData.push(new Sleep(sleepObject))
      }
      return parsedSleepData
    }, [])
  }
  addNewSleepData(date, hours, quality) {
    let sleepObject = {
    "userID": this.userID,
    "date": date,
    "hoursSlept": hours,
    "sleepQuality": quality
    }
    this.sleepRecord.push(new Sleep(sleepObject));
  }
  getSleepHoursByDate(date) {
    let sleepObject = this.sleepRecord.find(sleepObject => sleepObject.date === date);
    return sleepObject.hoursSlept;
  }
  getSleepQualityByDate(date) {
    let sleepObject = this.sleepRecord.find(sleepObject => sleepObject.date === date);
    return sleepObject.sleepQuality;
  }
  getDailyAverageSleepHours() {
    if(this.sleepRecord.length) {
      let averageHoursSlept = this.sleepRecord.reduce((averageHoursSlept, sleepObject) => {
        averageHoursSlept += sleepObject.hoursSlept;
        return averageHoursSlept
      }, 0);
      return Number((averageHoursSlept / this.sleepRecord.length).toFixed(1));
    }
  }
  getDailyAverageSleepQuality() {
    if(this.sleepRecord.length) {
      let averageSleepQuality = this.sleepRecord.reduce((averageSleepQuality, sleepObject) => {
        averageSleepQuality += sleepObject.sleepQuality;
        return averageSleepQuality;
      }, 0);
      return Number((averageSleepQuality / this.sleepRecord.length).toFixed(1));
    }
  }

  getDayByDaySleepHours(selectedDate) {
    let matchedSleep = this.sleepRecord.find(sleepObject => sleepObject.date === selectedDate)
    let index = this.sleepRecord.indexOf(matchedSleep);
    let matchedArray = this.sleepRecord.slice(index - 6, index + 1)
    return matchedArray.map(sleepObject => {
      return {date: [sleepObject.date], sleepHours: sleepObject.hoursSlept}
    })
  }

  getDayByDaySleepQuality(selectedDate) {
    let matchedSleep = this.sleepRecord.find(sleepObject => sleepObject.date === selectedDate)
    let index = this.sleepRecord.indexOf(matchedSleep);
    let matchedArray = this.sleepRecord.slice(index - 6, index + 1)
    return matchedArray.map(sleepObject => {
      return {date: [sleepObject.date], sleepQuality: sleepObject.sleepQuality}
    })
  }

  getWeeklyAverageSleepQuality(selectedDate) {
    let totalQuality = this.getDayByDaySleepQuality(selectedDate).reduce((totalQuality, sleepObject) => {
      totalQuality += sleepObject.sleepQuality
      return totalQuality
    }, 0)
    return Number((totalQuality / 7).toFixed(1));
  }
}

// getWeeklyAverageSleepQuality(selectedDate) {
//   return (this.sleepRecord.reduce((sum, sleepObject) => {
//     let index = this.sleepRecord.indexOf(this.sleepRecord.find(sleep => sleep.date === selectedDate));
//     if (index <= this.sleepRecord.indexOf(sleepObject) && this.sleepRecord.indexOf(sleepObject) <= (index + 6)) {
//       sum += sleepObject.quality;
//     }
//     return sum;
//   }, 0) / 7).toFixed(1);
// }


export default SleepRepository;
