import User from '../src/User';
import SleepRepository from '../src/SleepRepository';
import Activity from '../src/Activity';

 class User {
  constructor(userData, sleepData) {
    this.id = userData.id;
    this.name = userData.name;
    this.address = userData.address;
    this.email = userData.email;
    this.strideLength = userData.strideLength;
    this.dailyStepGoal = userData.dailyStepGoal;
    this.totalStepsThisWeek = 0;
    this.friends = userData.friends;

    this.ouncesAverage = 0;
    this.ouncesRecord = [];

    this.hoursSleptAverage = 0;
    this.sleepQualityAverage = 0;
    this.sleepRepository = new SleepRepository(sleepData, this);

    this.activityRecord = [];  // looks like list reads in only one direction, bottom up sequentially to determine if 'trending day'
    this.accomplishedDays = []; // if steps >= stepgoal
    this.trendingStepDays = []; // looks like list reads in only one direction, bottom up sequentially to determine if 'trending day'
    this.trendingStairsDays = [];

    this.friendsNames = []; // can check an array of users by id to see if they match your friends id. if yes, push STRING into friuendnames
    this.friendsActivityRecords = []
  }

//TODO make sure it belongs to this user
//do we want a sleep repository that can calculate things?
  // parseSleepData(sleepDataArray) {
  //   return sleepDataArray.reduce((parsedSleepData, sleepObject) => {
  //     if (sleepObject.userID === this.id) {
  //       parsedSleepData.push(new SleepRepository(sleepObject))
  //     }
  //     return parsedSleepData
  //   }, [])
  // }
  // addSleep(sleepDataArray) {
  //   this.sleepRecord = new SleepRepository()
  // }

    // in case wanted two arrays of sleep data like above by default
    // sleepDataArray.forEach(sleepObject => {
    //   if (sleepObject.userID === this.id) {
    //     this.sleepHoursRecord.push(new SleepRepository(sleepObject))
    //   }
    // })




  getFirstName() {
    let parsedName = this.name.split(' ');
    return parsedName[0].toUpperCase();
  }
  updateHydration(date, amount) {
    this.ouncesRecord.unshift({[date]: amount});
    if (this.ouncesRecord.length) {
      this.ouncesAverage = Math.round((amount + (this.ouncesAverage * (this.ouncesRecord.length - 1))) / this.ouncesRecord.length);
    } else {
      this.ouncesAverage = amount;
    }
  }
  addDailyOunces(date) {
    return this.ouncesRecord.reduce((sum, record) => {
      let amount = record[date];
      if (amount) {
        sum += amount
      }
      return sum
    }, 0)
  }

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
  // calculateAverageHoursThisWeek(todayDate) {
  //   return (this.sleepHoursRecord.reduce((sum, sleepAct) => {
  //     let index = this.sleepHoursRecord.indexOf(this.sleepHoursRecord.find(sleep => sleep.date === todayDate));
  //     if (index <= this.sleepHoursRecord.indexOf(sleepAct) && this.sleepHoursRecord.indexOf(sleepAct) <= (index + 6)) {
  //       sum += sleepAct.hours;
  //     }
  //     return sum;
  //   }, 0) / 7).toFixed(1);
  // }
  // calculateAverageQualityThisWeek(todayDate) {
  //   return (this.sleepQualityRecord.reduce((sum, sleepAct) => {
  //     let index = this.sleepQualityRecord.indexOf(this.sleepQualityRecord.find(sleep => sleep.date === todayDate));
  //     if (index <= this.sleepQualityRecord.indexOf(sleepAct) && this.sleepQualityRecord.indexOf(sleepAct) <= (index + 6)) {
  //       sum += sleepAct.quality;
  //     }
  //     return sum;
  //   }, 0) / 7).toFixed(1);
  // }
  updateActivities(activity) {
    this.activityRecord.unshift(activity);
    if (activity.numSteps >= this.dailyStepGoal) {
      this.accomplishedDays.unshift(activity.date);
    }
  }
  findClimbingRecord() {
    return this.activityRecord.sort((a, b) => {
      return b.flightsOfStairs - a.flightsOfStairs;
    })[0].flightsOfStairs;
  }
  calculateDailyCalories(date) {
    let totalMinutes = this.activityRecord.filter(activity => {
      return activity.date === date
    }).reduce((sumMinutes, activity) => {
      return sumMinutes += activity.minutesActive
    }, 0);
    return Math.round(totalMinutes * 7.6);
  }
  calculateAverageMinutesActiveThisWeek(todayDate) {
    return (this.activityRecord.reduce((sum, activity) => {
      let index = this.activityRecord.indexOf(this.activityRecord.find(activity => activity.date === todayDate));
      if (index <= this.activityRecord.indexOf(activity) && this.activityRecord.indexOf(activity) <= (index + 6)) {
        sum += activity.minutesActive;
      }
      return sum;
    }, 0) / 7).toFixed(0);
  }
  calculateAverageStepsThisWeek(todayDate) {
    return (this.activityRecord.reduce((sum, activity) => {
      let index = this.activityRecord.indexOf(this.activityRecord.find(activity => activity.date === todayDate));
      if (index <= this.activityRecord.indexOf(activity) && this.activityRecord.indexOf(activity) <= (index + 6)) {
        sum += activity.steps;
      }
      return sum;
    }, 0) / 7).toFixed(0);
  }
  calculateAverageFlightsThisWeek(todayDate) {
    return (this.activityRecord.reduce((sum, activity) => {
      let index = this.activityRecord.indexOf(this.activityRecord.find(activity => activity.date === todayDate));
      if (index <= this.activityRecord.indexOf(activity) && this.activityRecord.indexOf(activity) <= (index + 6)) {
        sum += activity.flightsOfStairs;
      }
      return sum;
    }, 0) / 7).toFixed(1);
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
  // this.friendsNames.push(users.find(user => user.id === friend).getFirstName());
  // legacy code doesn't account for non-friends in users list

  calculateTotalStepsThisWeek(todayDate) {
    this.totalStepsThisWeek = (this.activityRecord.reduce((sum, activity) => {
      let index = this.activityRecord.indexOf(this.activityRecord.find(activity => activity.date === todayDate));
      if (index <= this.activityRecord.indexOf(activity) && this.activityRecord.indexOf(activity) <= (index + 6)) {  // this is judging only one direction, bottom up, bc push
        sum += activity.steps;
      }
      return sum;
    }, 0));
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
// Legacy code that was added to the end of findFriendsTotalStepsForWeek(), 3 lines above -
// seems code was added in error, or as of yet unknown reason that threw off testing
// this.calculateTotalStepsThisWeek(date);
// this.friendsActivityRecords.push({
  //   'id': this.id,
  //   'firstName': this.getFirstName(), // Change 'YOU' to output of getFirstName(), which is all caps first name
  //   'totalWeeklySteps': this.totalStepsThisWeek
  // });

export default User;
