import User from './User';
import ClassChooser from './ClassChooser';

class UserRepository {
  constructor(userData, activityData, hydrationData, sleepData) { // other data types passed in here
    this.dataClass = 'user';
    this.classChooser;
    this.dataObjectArray = this.parseData(userData);
    this.globalStepGoal = this.getGlobalStepGoal();
    this.globalSleepQuality = 0;
    this.randomUser = this.getRandomUser()
  } 
  getUserObject(id) {
    return this.dataObjectArray.find(user => user.id === id)
  }
  parseData(fetchedData) {
    this.classChooser = new ClassChooser(this.dataClass)
    return fetchedData.reduce((parsedData, dataObject) => {
      if (dataObject.userID === this.userID) {
        parsedData.push(this.classChooser.instantiateClass(dataObject))
      }
      return parsedData
    }, [])
  }
  getRandomUser() {
    return this.dataObjectArray[Math.round(Math.random() * this.dataObjectArray.length)];
  }
  // parseUserDataArray(usersArray) {
  //   return usersArray.reduce((parsedUsers, user) => {
  //     parsedUsers.push(new User(user))
  //     return parsedUsers
  //   }, [])
  // }
  getGlobalStepGoal() {
    let globalStepGoalTotal = this.dataObjectArray.reduce((stepGoalTotal, user) => {
      stepGoalTotal += user.dailyStepGoal;
      return stepGoalTotal;
    }, 0)
    return (globalStepGoalTotal / this.dataObjectArray.length).toFixed(1)
  }
  getGlobalSleepQuality() {
    let sleepQualityTotal = this.dataObjectArray.reduce((sleepQualityTotal, user) => {
      sleepQualityTotal += user.sleepRepository.getDailyAverageSleepQuality();
      return sleepQualityTotal;
    }, 0)
    return (sleepQualityTotal / this.dataObjectArray.length).toFixed(1)
  }

  // part of sleep class refactor
  findBestSleepers(date) {
    return this.dataObjectArray.filter(user => {
      return user.calculateAverageQualityThisWeek(date) > 3;
    })
  }

  getLongestSleepers(date) {  //TODO refactor longest/worst into one fxn
    let sleepList = [];
    this.dataObjectArray.forEach(user => {
      user.sleepHoursRecord.forEach(sleep => {
        let sleepValues = Object.values(sleep);
        if (sleepValues[0] === date) {
          let sleepObject = {id: user.id, date: sleepValues[0], hours: sleepValues[1]};
          sleepList.push(sleepObject)
        }
      })
    })
    return sleepList.sort((a, b) => {
      return b.hours - a.hours;
    })[0].id;
  }

  getWorstSleepers(date) {
    let sleepList = [];
    this.dataObjectArray.forEach(user => {
      user.sleepHoursRecord.forEach(sleep => {
        let sleepValues = Object.values(sleep);
        if (sleepValues[0] === date) {
          let sleepObject = {id: user.id, date: sleepValues[0], hours: sleepValues[1]};
          sleepList.push(sleepObject)
        }
      })
    })
    return sleepList.sort((a, b) => {
      return a.hours - b.hours;
    })[0].id;
  }


  // wait till activity refactor
  calculateAverageSteps(date) {
    let allUsersStepsCount = this.dataObjectArray.map(user => {
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
    let allUsersStairsCount = this.dataObjectArray.map(user => {
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
    let allUsersMinutesActiveCount = this.dataObjectArray.map(user => {
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
    let todaysDrinkers = this.dataObjectArray.filter(user => {
      return user.addDailyOunces(date) > 0;
    });
    let sumDrankOnDate = todaysDrinkers.reduce((sum, drinker) => {
      return sum += drinker.addDailyOunces(date);
    }, 0)
    return Math.round(sumDrankOnDate / todaysDrinkers.length); // change Math.floor() to Math.round() - seems to make more sense
  }

}

export default UserRepository;
