import SleepRepository from './SleepRepository';
import ActivityRepository from './ActivityRepository';
import HydrationRepository from './HydrationRepository';
import ParentRepository from './ParentRepository';


 export default class User {
   constructor(user, userData, activityData, hydrationData, sleepData, date) {
     // this.activityData = activityData;

     this.date = date;
     this.id = user.id;
     this.name = user.name;
     this.address = user.address;
     this.email = user.email;

     this.strideLength = user.strideLength;
     this.dailyStepGoal = user.dailyStepGoal;

     this.sleepRecord = [];
     this.sleepQualityRecord = [];
     this.sleepQualityAverage = 0;
     this.hoursSleptAverage = 0;

     this.ouncesRecord = [];
     this.ouncesAverage = 0;

     this.totalStepsThisWeek = 0;
     this.activityRecord = [];
     this.accomplishedDays = []; // if steps >= stepgoal
     this.trendingStepDays = []; // looks like list reads in only one direction, bottom up sequentially to determine if 'trending day'
     this.trendingStairsDays = [];

     this.friends = user.friends;
     this.friendObjects;
     this.friendsNames = []; // can check an array of users by id to see if they match your friends id. if yes, push STRING into friuendnames
     this.friendsActivityRecords = [];
   }
   populateSleepData(sleepData) {
     if (sleepData) {
       this.sleepRecord = new SleepRepository(
         sleepData,
         this,
         "sleep",
         this.date
       );
       // console.log(this.sleepRecord);
     } else {
       return [];
     }
   }
   populateHydrationData(hydrationData) {
     if (hydrationData) {
       this.ouncesRecord = new HydrationRepository(
         hydrationData,
         this,
         "hydration",
         this.date
       );
     } else {
       return [];
     }
   }
   populateActivityData(activityData) {
     if (activityData) {
       this.activityRecord = new ActivityRepository(
         activityData,
         this,
         "activities",
         this.date
       );
     } else {
       return [];
     }
   }
   populateFriendsData(userData, activityData, hydrationData, sleepData, date) {
     if (userData) {
       let matchedFriends = userData.filter((user) =>
         this.friends.includes(user.id)
       );
       this.friendObjects = matchedFriends.reduce((friendObjects, friend) => {
         friendObjects.push(
           new User(
             friend,
             userData,
             activityData,
             hydrationData,
             sleepData,
             date
           )
         );
         return friendObjects;
       }, []);
     } else {
       return [];
     }
   }
   populateFriendsRepos(activityData, hydrationData, sleepData) {
     this.friendObjects.forEach((friend) => {
       friend.populateSleepData(sleepData);
       friend.populateHydrationData(hydrationData);
       friend.populateActivityData(activityData);
     });
   }
   populateUserData(userData, activityData, hydrationData, sleepData, date) {
     this.populateSleepData(sleepData);
     this.populateHydrationData(hydrationData);
     this.populateActivityData(activityData);
     this.getUserAverageData();
     this.populateFriendsData(
       userData,
       activityData,
       hydrationData,
       sleepData,
       date
     );
     this.populateFriendsRepos(activityData, hydrationData, sleepData);
   }
   getUserAverageData() {
     this.sleepQualityAverage = this.sleepRecord.getAllTimeAverageByKey(
       "sleepQuality"
     ); // need to come before populating and RETURN
     this.hoursSleptAverage = this.sleepRecord.getAllTimeAverageByKey(
       "hoursSlept"
     );
     this.ouncesAverage = this.ouncesRecord.getAllTimeAverageByKey("numOunces");
     this.totalStepsThisWeek = this.activityRecord.getWeeklyTotalByDateAndKey(
       this.date,
       "numSteps"
     );
   }

   getFirstName() {
     let parsedName = this.name.split(" ");
     return parsedName[0].toUpperCase();
   }
   updateHydration(date, ounces) {
     this.ouncesRecord.addNewHydrationData(date, ounces);
     if (this.ouncesRecord.dataObjectArray.length) {
       this.ouncesAverage = this.ouncesRecord.getAllTimeAverageByKey(
         "numOunces"
       );
     } else {
       this.ouncesAverage = ounces;
     }
   }
   updateSleep(date, hours, quality) {
     this.sleepRecord.addNewSleepData(date, hours, quality);
     if (this.sleepRecord.dataObjectArray.length) {
       this.hoursSleptAverage = this.sleepRecord.getAllTimeAverageByKey(
         "hoursSlept"
       );
       this.sleepQualityAverage = this.sleepRecord.getAllTimeAverageByKey(
         "sleepQuality"
       );
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
     return this.ouncesRecord.getTotalByDateAndKey(date, "numOunces");
   }

   findClimbingRecord() {
     return this.activityRecord.getHighLowDataPointByKey(
       "flightsOfStairs",
       "high"
     ).flightsOfStairs;
   }
   getActivityDataByDate(date, dataType) {
     return this.activityRecord.findDataObjectByDate(date)[dataType];
   }
   calculateDailyCalories(date) {
     let totalMinutes = this.activityRecord.getTotalByDateAndKey(
       date,
       "minutesActive"
     );
     return Math.round(totalMinutes * 7.6);
   }
   calculateAverageMinutesActiveThisWeek(date) {
     return this.activityRecord.getAverageDataByWeekAndKey(
       date,
       "minutesActive",
       0
     );
   }
   calculateAverageStepsThisWeek(date) {
     return this.activityRecord.getAverageDataByWeekAndKey(date, "numSteps");
   }
   calculateAverageFlightsThisWeek(date) {
     return this.activityRecord.getAverageDataByWeekAndKey(
       date,
       "flightsOfStairs"
     );
   }
   calculateTotalStepsThisWeek(date) {
     return this.totalStepsThisWeek;
   }

   calculateAverageQualityThisWeek(date) {
     return this.sleepRecord.getAverageDataByWeekAndKey(
       date,
       "sleepQuality",
       1
     );
   }

   calculateAverageHoursThisWeek(date) {
     return this.sleepRecord.getAverageDataByWeekAndKey(date, "hoursSlept", 1);
   }

   findFriendsNames(friends) {
     this.friendObjects.forEach((friend) => {
       this.friendsNames.push(friend.getFirstName());
     });
   }
   findFriendsTotalStepsForWeek(date) {
     return (this.friendsActivityRecords = this.friendObjects.map(
       (friendObject) => {
         return {
           id: friendObject.id,
           firstName: friendObject.getFirstName(),
           totalWeeklySteps: friendObject.activityRecord.getStepsThisWeek(date),
         };
       }
     ));
   }

   findTrendingStairsDays() {
     let positiveDays = [];
     this.activityRecord.dataObjectArray.forEach(
       (activityObject, i, record) => {
         if (
           record[i + 1] &&
           record[i].flightsOfStairs > record[i + 1].flightsOfStairs
         ) {
           positiveDays.unshift(record[i].date);
         } else if (positiveDays.length > 2) {
           this.trendingStairsDays.push(
             `Your most recent positive climbing streak was ${
               positiveDays[0]
             } - ${positiveDays[positiveDays.length - 1]}!`
           );
           positiveDays = [];
         }
       }
     );
   }

   findTrendingStepDays() {
     let positiveDays = [];
     this.activityRecord.dataObjectArray.forEach(
       (activityObject, i, record) => {
         if (record[i + 1] && record[i].numSteps > record[i + 1].numSteps) {
           positiveDays.unshift(record[i].date);
         } else if (positiveDays.length > 2) {
           this.trendingStepDays.push(
             `Your most recent positive step streak was ${positiveDays[0]} - ${
               positiveDays[positiveDays.length - 1]
             }!`
           );
           positiveDays = [];
         }
       }
     );
   }
 }
