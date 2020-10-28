import User from '../src/User';

class UserRepository {
  constructor(usersArray) {
    this.users = this.parseUserDataArray(usersArray)
    this.globalStepGoal = this.getGlobalStepGoal();
    this.globalSleepQuality = 0;
  }
  getUserObject(id) {
    return this.users.find(user => user.id === id)
  }
  parseUserDataArray(usersArray) {
    return usersArray.reduce((parsedUsers, user) => {
      parsedUsers.push(new User(user))
      return parsedUsers
    }, [])
  }
  getGlobalStepGoal() {
    let globalStepGoalTotal = this.users.reduce((stepGoalTotal, user) => {
      stepGoalTotal += user.dailyStepGoal;
      return stepGoalTotal;
    }, 0)
    return (globalStepGoalTotal / this.users.length).toFixed(1)
  }
  getGlobalSleepQuality() {
    let sleepQualityTotal = this.users.reduce((sleepQualityTotal, user) => {
      sleepQualityTotal += user.sleepRepository.getDailyAverageSleepQuality();
      return sleepQualityTotal;
    }, 0)
    return (sleepQualityTotal / this.users.length).toFixed(1)
  }

  // part of sleep class refactor
  findBestSleepers(date) {
    return this.users.filter(user => {
      return user.calculateAverageQualityThisWeek(date) > 3;
    })
  }

  getLongestSleepers(date) {  //TODO refactor longest/worst into one fxn
    let sleepList = [];
    this.users.forEach(user => {
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
    this.users.forEach(user => {
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
    let allUsersStepsCount = this.users.map(user => {
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
    let allUsersStairsCount = this.users.map(user => {
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
    let allUsersMinutesActiveCount = this.users.map(user => {
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
    let todaysDrinkers = this.users.filter(user => {
      return user.addDailyOunces(date) > 0;
    });
    let sumDrankOnDate = todaysDrinkers.reduce((sum, drinker) => {
      return sum += drinker.addDailyOunces(date);
    }, 0)
    return Math.round(sumDrankOnDate / todaysDrinkers.length); // change Math.floor() to Math.round() - seems to make more sense
  }

}

export default UserRepository;
