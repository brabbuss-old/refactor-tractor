import User from './User';

export default class UserRepository {
  constructor(userData, activityData, hydrationData, sleepData, date) { // other data types passed in here
    this.date = date;
    this.userObjectArray = this.parseData(userData, activityData, hydrationData, sleepData)
    this.globalStepGoal = this.getGlobalStepGoal();
    this.globalSleepQuality = this.getGlobalSleepQuality();
    this.randomUser = this.getRandomUser()
  }
  
  getUserObject(id) {
    return this.userObjectArray.find(user => user.id === id)
  }

  parseData(users, activityData, hydrationData, sleepData) {
    let userBase = users.reduce((parsedUsers, userObject) => {
      parsedUsers.push(new User(userObject, users, activityData, hydrationData, sleepData, this.date))
      return parsedUsers // was returning and ending function, need to get users, update, hand off
    }, [])
    return userBase.reduce((updatedUserBase, user) => {
      user.populateUserData(users, activityData, hydrationData, sleepData, this.date)
      updatedUserBase.push(user)
      return updatedUserBase
    }, [])
  }

  getUser(id) {
    return this.users.find(function(user) {
      return user.id === id;
    })
  }

  getRandomUser() {
    return this.userObjectArray[Math.round(Math.random() * this.userObjectArray.length)];
  }

  findBestSleepers(date) {
    return this.userObjectArray.filter(user => {
      return user.calculateAverageQualityThisWeek(date) > 3;
    })
  }

  getLongestSleepers(date) {
    return this.userObjectArray.map(user => {
      return user.sleepRecord.findDataObjectByDate(date);
    }).sort((a, b) => {
        return b.hoursSlept - a.hoursSlept;
      })[0].userID;
  }

  getWorstSleepers(date) {
    return this.userObjectArray.map(user => {
      return user.sleepRecord.findDataObjectByDate(date);
    }).sort((a, b) => {
        return a.hoursSlept - b.hoursSlept;
      })[0].userID;
  }

  getGlobalStepGoal() {  //rename from calculateAverageStepGoal
    let globalStepGoalTotal = this.userObjectArray.reduce((stepGoalTotal, user) => {
      stepGoalTotal += user.dailyStepGoal;
      return stepGoalTotal;
    }, 0)
    return Number((globalStepGoalTotal / this.userObjectArray.length).toFixed(0))
  }

  getGlobalSleepQuality() {
    let sleepQualityTotal = this.userObjectArray.reduce((sleepQualityTotal, user) => {
      sleepQualityTotal += user.sleepQualityAverage;
      return sleepQualityTotal;
    }, 0)
    return Number((sleepQualityTotal / this.userObjectArray.length).toFixed(1))
  }

  getGlobalStepAvgByDate(date) {
    return this.userObjectArray.reduce((totalSteps, user) => {
      totalSteps += user.getActivityDataByDate(date, 'numSteps')
      return totalSteps
    }, 0) / this.userObjectArray.length
  }

  getGlobalStairAvgByDate(date) {
    return this.userObjectArray.reduce((totalSteps, user) => {
      totalSteps += user.getActivityDataByDate(date, 'flightsOfStairs')
      return totalSteps
    }, 0) / this.userObjectArray.length
  }

  getGlobalActiveAvgByDate(date) {
    return this.userObjectArray.reduce((totalSteps, user) => {
      totalSteps += user.getActivityDataByDate(date, 'minutesActive')
      return totalSteps
    }, 0) / this.userObjectArray.length
  }

  getGlobalWaterAvgByDate(date) {
    return Number((this.userObjectArray.reduce((totalH2O, user) => {
      totalH2O += user.sumDailyOunces(date)
      return totalH2O
    }, 0) / this.userObjectArray.length).toFixed(0))
  }
}
