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
  parseData(userData, activityData, hydrationData, sleepData) {
    return userData.reduce((parsedUsers, userObject) => {
      parsedUsers.push(new User(userObject, userData, activityData, hydrationData, sleepData, this.date))
      return parsedUsers
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
  getGlobalStepGoal() {  //rename from calculateAverageStepGoal
    let globalStepGoalTotal = this.userObjectArray.reduce((stepGoalTotal, user) => {
      stepGoalTotal += user.dailyStepGoal;
      return stepGoalTotal;
    }, 0)
    return Number((globalStepGoalTotal / this.userObjectArray.length).toFixed(0))
  }
  getGlobalSleepQuality() {  //rename from calculateAverageSleepQuality
    let sleepQualityTotal = this.userObjectArray.reduce((sleepQualityTotal, user) => {
      // console.log(user);
      sleepQualityTotal += user.sleepQualityAverage;
      return sleepQualityTotal;
    }, 0)
    return Number((sleepQualityTotal / this.userObjectArray.length).toFixed(1))
  }

  // part of sleep class refactor
  findBestSleepers(date) {
    return this.userObjectArray.filter(user => {
      return user.calculateAverageQualityThisWeek(date) > 3;
    })
  }
  findBestSleepers(date) {
    return this.users.filter(user => {
      return user.calculateAverageQualityThisWeek(date) > 3;
    })
  }
  getLongestSleepers(date) {
    return sleepData.filter(sleep => {
      return sleep.date === date;
    }).sort((a, b) => {
      return b.hoursSlept - a.hoursSlept;
    })[0].userID;
  }
  getWorstSleepers(date) {
    return sleepData.filter(sleep => {
      return sleep.date === date;
    }).sort((a, b) => {
      return a.hoursSlept - b.hoursSlept;
    })[0].userID;
  }


  // getLongestSleepers(date) {  //TODO refactor longest/worst into one fxn
  //   let sleepList = [];
  //   this.userObjectArray.forEach(user => {
  //     user.sleepHoursRecord.forEach(sleep => {
  //       let sleepValues = Object.values(sleep);
  //       if (sleepValues[0] === date) {
  //         let sleepObject = {id: user.id, date: sleepValues[0], hours: sleepValues[1]};
  //         sleepList.push(sleepObject)
  //       }
  //     })
  //   })
  //   return sleepList.sort((a, b) => {
  //     return b.hours - a.hours;
  //   })[0].id;
  // }
  //
  // getWorstSleepers(date) {
  //   let sleepList = [];
  //   this.userObjectArray.forEach(user => {
  //     user.sleepHoursRecord.forEach(sleep => {
  //       let sleepValues = Object.values(sleep);
  //       if (sleepValues[0] === date) {
  //         let sleepObject = {id: user.id, date: sleepValues[0], hours: sleepValues[1]};
  //         sleepList.push(sleepObject)
  //       }
  //     })
  //   })
  //   return sleepList.sort((a, b) => {
  //     return a.hours - b.hours;
  //   })[0].id;
  // }


  calculateAverageSteps(date) {
    let allUsersStepsCount = this.userObjectArray.map(user => {
      return user.activityRecord.filter(activity => {
        return activity.date === date;
      });
    })
    let sumOfSteps = allUsersStepsCount.reduce((stepsSum, activityCollection) => {
      activityCollection.forEach(activity => {
        stepsSum += activity.steps
      })
      return stepsSum;
    }, 0);
    return Math.round(sumOfSteps / allUsersStepsCount.length);
  }
  calculateAverageStairs(date) {
    let allUsersStairsCount = this.userObjectArray.map(user => {
      return user.activityRecord.filter(activity => {
        return activity.date === date;
      });
    })
    let sumOfStairs = allUsersStairsCount.reduce((stairsSum, activityCollection) => {
      activityCollection.forEach(activity => {
        stairsSum += activity.flightsOfStairs
      })
      return stairsSum;
    }, 0);
    return Math.round(sumOfStairs / allUsersStairsCount.length);
  }
  calculateAverageMinutesActive(date) {
    let allUsersMinutesActiveCount = this.userObjectArray.map(user => {
      return user.activityRecord.filter(activity => {
        return activity.date === date;
      });
    })
    let sumOfMinutesActive = allUsersMinutesActiveCount.reduce((minutesActiveSum, activityCollection) => {
      activityCollection.forEach(activity => {
        minutesActiveSum += activity.minutesActive
      })
      return minutesActiveSum;
    }, 0);
    return Math.round(sumOfMinutesActive / allUsersMinutesActiveCount.length);
  }
  calculateAverageDailyWater(date) {
    let todaysDrinkers = this.userObjectArray.filter(user => {
      return user.addDailyOunces(date) > 0;
    });
    let sumDrankOnDate = todaysDrinkers.reduce((sum, drinker) => {
      return sum += drinker.addDailyOunces(date);
    }, 0)
    return Math.round(sumDrankOnDate / todaysDrinkers.length); // change Math.floor() to Math.round() - seems to make more sense
  }
}
