import SleepRepository from './SleepRepository';
import ActivityRepository from './ActivityRepository';
import HydrationRepository from './HydrationRepository';
import ParentRepository from './ParentRepository';


 export default class User {
  constructor(userData, activityData, hydrationData, sleepData, date) {
    this.date = date;
    this.id = userData.id;
    this.name = userData.name;
    this.address = userData.address;
    this.email = userData.email;

    this.strideLength = userData.strideLength;
    this.dailyStepGoal = userData.dailyStepGoal;
    this.friends = userData.friends;

    this.sleepRecord = this.populateSleepData(sleepData);
    this.sleepQualityRecord = [];
    this.sleepQualityAverage = 0;
    this.hoursSleptAverage = 0;

    this.ouncesRecord = this.populateHydrationData(hydrationData);
    this.ouncesAverage = 0;

    this.totalStepsThisWeek = 0;
    this.activityRecord = this.populateActivityData(activityData);
    this.accomplishedDays = []; // if steps >= stepgoal
    this.trendingStepDays = []; // looks like list reads in only one direction, bottom up sequentially to determine if 'trending day'
    this.trendingStairsDays = [];

    this.friendsNames = []; // can check an array of users by id to see if they match your friends id. if yes, push STRING into friuendnames
    this.friendsActivityRecords = [];
  }
  getFirstName() {
    let parsedName = this.name.split(' ');
    return parsedName[0].toUpperCase();
  }
  populateSleepData(sleepData) {
    if (sleepData) {
      return new SleepRepository(sleepData, this, 'sleep', this.date);
    } else {
      return []
    }
  }
  populateHydrationData(hydrationData) {
    if (hydrationData) {
      return new HydrationRepository(hydrationData, this, 'hydration', this.date);
    } else {
      return [];
    }
  }
  populateActivityData(activityData) {
    if (activityData) {
      return new ActivityRepository(activityData, this, 'activities', this.date);
    } else {
      return [];
    }
  }
  getUserAverageData() {
    console.log(this);
    this.sleepQualityAverage = this.sleepRecord.getAllTimeAverageByKey('sleepQuality'); // need to come before populating and RETURN
    this.hoursSleptAverage = this.sleepRecord.getAllTimeAverageByKey('hoursSlept');
    this.ouncesAverage = this.ouncesRecord.getAllTimeAverageByKey('numOunces');
    this.totalStepsThisWeek = this.activityRecord.getWeeklyTotalByDateAndKey(this.date, 'numSteps');
  }
  updateHydration(date, ounces) {
    this.ouncesRecord.addNewHydrationData(date, ounces);
    if (this.ouncesRecord.dataObjectArray.length) {
      this.ouncesAverage = this.ouncesRecord.getAllTimeAverageByKey('numOunces');
    } else {
      this.ouncesAverage = ounces;
    }
  }
  updateSleep(date, hours, quality) {
    this.sleepRecord.addNewSleepData(date, hours, quality);
    if (this.sleepRecord.dataObjectArray.length) {
      this.hoursSleptAverage = this.sleepRecord.getAllTimeAverageByKey('hoursSlept');
      this.sleepQualityAverage = this.sleepRecord.getAllTimeAverageByKey('sleepQuality');
    } else {
      this.hoursSleptAverage = hours;
      this.sleepQualityAverage = quality;
    }
  }
  updateActivities(date, steps, minutes, stairs) {
    this.activityRecord.addNewActivityData(date, steps, minutes, stairs);
    if (steps >= this.dailyStepGoal) {
      this.accomplishedDays.push(date);
    }
  }
  sumDailyOunces(date) {
    return this.ouncesRecord.getTotalByDateAndKey(date, 'numOunces');
  }
  findClimbingRecord() {
    return this.activityRecord.getHighLowDataPointByKey('flightsOfStairs', 'high').flightsOfStairs
  }
  calculateDailyCalories(date) {
    let totalMinutes = this.activityRecord.getTotalByDateAndKey(date, 'minutesActive')
    return Math.round(totalMinutes * 7.6);
  }
  calculateAverageMinutesActiveThisWeek(date) {
    return this.activityRecord.getAverageDataByWeekAndKey(date, 'minutesActive', 0)
  }
  calculateAverageStepsThisWeek(date) {
    return this.activityRecord.getAverageDataByWeekAndKey(date, 'numSteps')
  }
  calculateAverageFlightsThisWeek(date) {
    return this.activityRecord.getAverageDataByWeekAndKey(date, 'flightsOfStairs')
  }
  calculateTotalStepsThisWeek(date) {
    this.getUserAverageData()
  }
  findTrendingStepDays() {
    let positiveDays = [];
    for (var i = 0; i < this.activityRecord.length; i++) {
      if (this.activityRecord[i + 1] && this.activityRecord[i].steps > this.activityRecord[i + 1].steps) {
        positiveDays.unshift(this.activityRecord[i].date);
      } else if (positiveDays.length > 2) {
        this.trendingStepDays.push(`Your most recent positive step streak was ${positiveDays[0]} - ${positiveDays[positiveDays.length - 1]}!`);
        positiveDays = [];
      }
    }
  }
  findTrendingStairsDays() {
    let positiveDays = [];
    for (var i = 0; i < this.activityRecord.length; i++) {
      if (this.activityRecord[i + 1] && this.activityRecord[i].flightsOfStairs > this.activityRecord[i + 1].flightsOfStairs) {
        positiveDays.unshift(this.activityRecord[i].date);
      } else if (positiveDays.length > 2) {
        this.trendingStairsDays.push(`Your most recent positive climbing streak was ${positiveDays[0]} - ${positiveDays[positiveDays.length - 1]}!`);
        positiveDays = [];
      }
    }
  }
  findFriendsNames(users) {
    this.friends.forEach(friend => {
      let matchedFriend = users.find(user => user.id === friend);
      if (matchedFriend) {
        this.friendsNames.push(matchedFriend.getFirstName());  // only if friend then push name into list
      }
    })
  }
  findFriendsTotalStepsForWeek(users, date) {
    this.friends.map(friend => {
      let matchedFriend = users.find(user => user.id === friend);
      matchedFriend.calculateTotalStepsThisWeek(date);

      this.friendsActivityRecords.push(
        {
          'id': matchedFriend.id,
          'firstName': matchedFriend.name.toUpperCase().split(' ')[0],
          'totalWeeklySteps': matchedFriend.totalStepsThisWeek
        })
    })
    this.friendsActivityRecords = this.friendsActivityRecords.sort((a, b) => b.totalWeeklySteps - a.totalWeeklySteps);
  }
}
// calculateDailyCalories(date) {
//   let totalMinutes = this.activityRecord.filter(activity => {
//     return activity.date === date
//   }).reduce((sumMinutes, activity) => {
//     return sumMinutes += activity.minutesActive
//   }, 0);
//   return Math.round(totalMinutes * 7.6);
// }
// calculateAverageStepsThisWeek(date) {
//   return (this.activityRecord.reduce((sum, activity) => {
//     let index = this.activityRecord.indexOf(this.activityRecord.find(activity => activity.date === date));
//     if (index <= this.activityRecord.indexOf(activity) && this.activityRecord.indexOf(activity) <= (index + 6)) {
//       sum += activity.steps;
//     }
//     return sum;
//   }, 0) / 7).toFixed(0);
// }

  // calculateAverageFlightsThisWeek(date) {
  //   return (this.activityRecord.reduce((sum, activity) => {
  //     let index = this.activityRecord.indexOf(this.activityRecord.find(activity => activity.date === date));
  //     if (index <= this.activityRecord.indexOf(activity) && this.activityRecord.indexOf(activity) <= (index + 6)) {
  //       sum += activity.flightsOfStairs;
  //     }
  //     return sum;
  //   }, 0) / 7).toFixed(1);
  // }
// updateActivities(activity) {
//   this.activityRecord.unshift(activity);
//   if (activity.numSteps >= this.dailyStepGoal) {
//     this.accomplishedDays.unshift(activity.date);
//   }
// }
// updateHydration(date, amount) {
//   this.ouncesRecord.unshift({[date]: amount});
//   if (this.ouncesRecord.length) {
//     this.ouncesAverage = Math.round((amount + (this.ouncesAverage * (this.ouncesRecord.length - 1))) / this.ouncesRecord.length);
//   } else {
//     this.ouncesAverage = amount;
//   }
// }
// addDailyOunces(date) {
//   return this.ouncesRecord.reduce((sum, record) => {
//     let amount = record[date];
//     if (amount) {
//       sum += amount
//     }
//     return sum
//   }, 0)
// }

// findClimbingRecord() {
//   return this.activityRecord.sort((a, b) => {
//     return b.flightsOfStairs - a.flightsOfStairs;
//   })[0].flightsOfStairs;
// }

  // getUserAverageData(type) {
  //   type === 'quality' ? this.sleepRecord.getAllTimeAverageByKey('sleepQuality')
  //   : type === 'hours' ? this.sleepRecord.getAllTimeAverageByKey('hoursSlept')
  //   : type === 'ounces' ? this.ouncesRecord.getAllTimeAverageByKey('numOunces')
  //   : this.activityRecord.getAllTimeAverageByKey('numSteps');
  // }

  // Moved these functions into sleep

  // updateSleep(date, hours, quality) {
  //   this.sleepHoursRecord.unshift({
  //     'date': date,
  //     'hours': hours
  //   });
  //   this.sleepQualityRecord.unshift({
  //     'date': date,
  //     'quality': quality
  //   });
  //   if(this.sleepHoursRecord.length) {
  //     this.hoursSleptAverage = ((hours + (this.hoursSleptAverage * (this.sleepHoursRecord.length - 1))) / this.sleepHoursRecord.length).toFixed(1);
  //   } else {
  //     this.hoursSleptAverage = hours;
  //   }
  //   if (this.sleepQualityRecord.length) {
  //     this.sleepQualityAverage = ((quality + (this.sleepQualityAverage * (this.sleepQualityRecord.length - 1))) / this.sleepQualityRecord.length).toFixed(1);
  //   } else {
  //     this.sleepQualityAverage = quality;
  //   }
  // }
  // calculateAverageHoursThisWeek(date) {
  //   return (this.sleepHoursRecord.reduce((sum, sleepAct) => {
  //     let index = this.sleepHoursRecord.indexOf(this.sleepHoursRecord.find(sleep => sleep.date === date));
  //     if (index <= this.sleepHoursRecord.indexOf(sleepAct) && this.sleepHoursRecord.indexOf(sleepAct) <= (index + 6)) {
  //       sum += sleepAct.hours;
  //     }
  //     return sum;
  //   }, 0) / 7).toFixed(1);
  // }
  // calculateAverageQualityThisWeek(date) {
  //   return (this.sleepQualityRecord.reduce((sum, sleepAct) => {
  //     let index = this.sleepQualityRecord.indexOf(this.sleepQualityRecord.find(sleep => sleep.date === date));
  //     if (index <= this.sleepQualityRecord.indexOf(sleepAct) && this.sleepQualityRecord.indexOf(sleepAct) <= (index + 6)) {
  //       sum += sleepAct.quality;
  //     }
  //     return sum;
  //   }, 0) / 7).toFixed(1);
  // }

  // this.friendsNames.push(users.find(user => user.id === friend).getFirstName());
  // legacy code doesn't account for non-friends in users list

// Legacy code that was added to the end of findFriendsTotalStepsForWeek(), 3 lines above -
// seems code was added in error, or as of yet unknown reason that threw off testing
// this.calculateTotalStepsThisWeek(date);
// this.friendsActivityRecords.push({
  //   'id': this.id,
  //   'firstName': this.getFirstName(), // Change 'YOU' to output of getFirstName(), which is all caps first name
  //   'totalWeeklySteps': this.totalStepsThisWeek
  // });
