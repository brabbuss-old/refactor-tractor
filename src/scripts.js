import './css/base.scss';
import './css/index.scss'

import {
  dailyOz,
  dropdownEmail,
  dropdownFriendsStepsContainer,
  dropdownGoal,
  dropdownName,
  headerName,
  hydrationCalendarCard,
  hydrationFriendOuncesToday,
  hydrationFriendsCard,
  hydrationInfoCard,
  hydrationInfoGlassesToday,
  hydrationMainCard,
  hydrationUserOuncesToday,
  hydrationNewInputCard,
  mainPage,
  profileButton,
  sleepCalendarCard,
  sleepCalendarHoursAverageWeekly,
  sleepCalendarQualityAverageWeekly,
  sleepFriendLongestSleeper,
  sleepFriendsCard,
  sleepFriendWorstSleeper,
  sleepInfoCard,
  sleepInfoHoursAverageAlltime,
  sleepInfoQualityAverageAlltime,
  sleepInfoQualityToday,
  sleepMainCard,
  sleepUserHoursToday,
  sleepNewInputCard,
  sleepInputDate,
  sleepInputHours,
  sleepInputQuality,
  inputFeedback,
  sleepSubmitButton,
  stairsCalendarCard,
  stairsCalendarFlightsAverageWeekly,
  stairsCalendarStairsAverageWeekly,
  stepsMainCard,
  stepsInfoCard,
  stepsFriendsCard,
  stepsTrendingCard,
  stepsCalendarCard,
  stepsNewInputCard,
  stairsFriendFlightsAverageToday,
  stairsFriendsCard,
  stairsInfoCard,
  stairsInfoFlightsToday,
  stairsMainCard,
  stairsTrendingButton,
  stairsTrendingCard,
  stairsUserStairsToday,
  stairsNewInputCard,
  stepsCalendarTotalActiveMinutesWeekly,
  stepsCalendarTotalStepsWeekly,
  stepsFriendAverageStepGoal,
  stepsInfoActiveMinutesToday,
  stepsInfoMilesWalkedToday,
  stepsFriendActiveMinutesAverageToday,
  stepsFriendStepsAverageToday,
  stepsTrendingButton,
  stepsUserStepsToday,
  trendingStepsPhraseContainer,
  trendingStairsPhraseContainer,
  userInfoDropdown,
} from "./DOM-loader";

import UserRepository from '../src/classes/UserRepository';

//  <----        non-DOM vars        ---->   //
let userData;
let activityData;
let hydrationData;
let sleepData;
let user;
let userRepository;
let sortedHydrationDataByDate;

// const userRepository = new UserRepository();
const todayDate = "2020/01/22"

const getSleepInput = (date, hours, quality) => {
  // let id = Number(user.id);
  hours = Number(hours);
  quality = Number(quality);
  submitSleepData(id, date, hours, quality);
}

sleepSubmitButton.addEventListener('click', function () {

  getSleepInput(sleepInputDate.value, sleepInputHours.value, sleepInputQuality.value);
})

const showInputFeedback = (message) => {
  inputFeedback.innerText = message;
  inputFeedback.classList.remove('hide');
  setTimeout(() => {inputFeedback.classList.add('hide')}, 5000);
}

const submitSleepData = (id, date, hours, quality) => {
  fetch("https://fe-apps.herokuapp.com/api/v1/fitlit/1908/sleep/sleepData", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({"userID": id, "date": date, "hoursSlept": hours, "sleepQuality": quality})
  })
    .then(resp => resp.json())
    .then(() => {
      showInputFeedback("Input success.  Great job!");
    })
    .catch(() => {
      showInputFeedback("There was an error.  Please try again.")
    })
}

const userPromise = fetch("https://fe-apps.herokuapp.com/api/v1/fitlit/1908/users/userData")
  .then(resp => resp.json())

const activityPromise = fetch("https://fe-apps.herokuapp.com/api/v1/fitlit/1908/activity/activityData")
  .then(resp => resp.json())

const hydrationPromise = fetch("https://fe-apps.herokuapp.com/api/v1/fitlit/1908/hydration/hydrationData")
  .then(resp => resp.json())

const sleepPromise = fetch("https://fe-apps.herokuapp.com/api/v1/fitlit/1908/sleep/sleepData")
  .then(resp => resp.json())

Promise.all([userPromise, activityPromise, hydrationPromise, sleepPromise])
  .then(data => {
    activityData = data[1].activityData;
    hydrationData = data[2].hydrationData;
    sleepData = data[3].sleepData;
    userData = data[0].userData;
    userRepository = new UserRepository(userData, activityData, hydrationData, sleepData);
  })
  .then(() => {
    loadApp();
  })

const loadApp = () => {
  user = userRepository.getRandomUser()
  user.findFriendsNames(userRepository.dataObjectArray); //TODO goes inside user as method
  defineHydrationByDate();
  updateText();
}

const defineHydrationByDate = () => {
  sortedHydrationDataByDate = user.ouncesRecord.sort((a, b) => { //TODO is the hydration lifetime
    if (Object.keys(a)[0] > Object.keys(b)[0]) {
      return -1;
    }
    if (Object.keys(a)[0] < Object.keys(b)[0]) {
      return 1;
    }
    return 0;
  });
}

const updateText = () => {
  displayDailyOz();
  displayUserInfo();
  displayHydrationInfo();
  displaySleepInfo();
  displayStairsInfo();
  displayStepsInfo();
}

const displayDailyOz = () => {
  dailyOz.forEach((day, i) => {
    day.innerText = user.addDailyOunces(Object.keys(sortedHydrationDataByDate[i])[0])
  })
}

const displayUserInfo = () => {
  dropdownGoal.innerText = `DAILY STEP GOAL | ${user.dailyStepGoal}`;
  dropdownEmail.innerText = `EMAIL | ${user.email}`;
  dropdownName.innerText = user.name.toUpperCase();
  headerName.innerText = `${user.getFirstName()}'S `;
}

const displayHydrationInfo = () => {
  let hydroNum = hydrationData.find(hydration => {
    return hydration.userID === user.id && hydration.date === todayDate;
  }).numOunces;
  hydrationUserOuncesToday.innerText =
  hydrationFriendOuncesToday.innerText = userRepository.calculateAverageDailyWater(todayDate);
  hydrationInfoGlassesToday.innerText = hydrationData.find(hydration => {
    return hydration.userID === user.id && hydration.date === todayDate;
  }).numOunces / 8;
}

const displaySleepInfo = () => {
  sleepCalendarHoursAverageWeekly.innerText = user.calculateAverageHoursThisWeek(todayDate);

  sleepCalendarQualityAverageWeekly.innerText = user.calculateAverageQualityThisWeek(todayDate);

  sleepFriendLongestSleeper.innerText = userRepository.users.find(user => {
    return user.id === userRepository.getLongestSleepers(todayDate)
  }).getFirstName();

  sleepFriendWorstSleeper.innerText = userRepository.users.find(user => {
    return user.id === userRepository.getWorstSleepers(todayDate)
  }).getFirstName();

  sleepInfoHoursAverageAlltime.innerText = user.hoursSleptAverage;

  stepsInfoMilesWalkedToday.innerText = user.activityRecord.find(activity => {
    return (activity.date === todayDate && activity.userId === user.id)
  }).calculateMiles(userRepository);

  sleepInfoQualityAverageAlltime.innerText = user.sleepQualityAverage;

  sleepInfoQualityToday.innerText = sleepData.find(sleep => {
    return sleep.userID === user.id && sleep.date === todayDate;
  }).sleepQuality;

  sleepUserHoursToday.innerText = sleepData.find(sleep => {
    return sleep.userID === user.id && sleep.date === todayDate;
  }).hoursSlept;
}

const displayStairsInfo = () => {
  stairsCalendarFlightsAverageWeekly.innerText = user.calculateAverageFlightsThisWeek(todayDate);

  stairsCalendarStairsAverageWeekly.innerText = (user.calculateAverageFlightsThisWeek(todayDate) * 12).toFixed(0);

  stairsFriendFlightsAverageToday.innerText = (userRepository.calculateAverageStairs(todayDate) / 12).toFixed(1);

  stairsInfoFlightsToday.innerText = activityData.find(activity => {
    return activity.userID === user.id && activity.date === todayDate;
  }).flightsOfStairs;

  stairsUserStairsToday.innerText = activityData.find(activity => {
    return activity.userID === user.id && activity.date === todayDate;
  }).flightsOfStairs * 12;

  stairsCalendarFlightsAverageWeekly.innerText = user.calculateAverageFlightsThisWeek(todayDate);

  stairsCalendarStairsAverageWeekly.innerText = (user.calculateAverageFlightsThisWeek(todayDate) * 12).toFixed(0);

  stairsTrendingButton.addEventListener('click', function() {
    user.findTrendingStairsDays();
    trendingStairsPhraseContainer.innerHTML = `<p class='trend-line'>${user.trendingStairsDays[0]}</p>`;
  });
}

const displayStepsInfo = () => {
  stepsCalendarTotalActiveMinutesWeekly.innerText = user.calculateAverageMinutesActiveThisWeek(todayDate);

  stepsCalendarTotalStepsWeekly.innerText = user.calculateAverageStepsThisWeek(todayDate);

  stepsTrendingButton.addEventListener('click', function() {
    user.findTrendingStepDays();
    trendingStepsPhraseContainer.innerHTML = `<p class='trend-line'>${user.trendingStepDays[0]}</p>`;
  });

  stepsFriendActiveMinutesAverageToday.innerText = userRepository.calculateAverageMinutesActive(todayDate);

  stepsFriendAverageStepGoal.innerText = `${userRepository.globalStepGoal()}`;

  stepsFriendStepsAverageToday.innerText = userRepository.calculateAverageSteps(todayDate);

  stepsInfoActiveMinutesToday.innerText = activityData.find(activity => {
    return activity.userID === user.id && activity.date === todayDate;
  }).minutesActive;

  stepsUserStepsToday.innerText = activityData.find(activity => {
    return activity.userID === user.id && activity.date === todayDate;
  }).numSteps;

  user.findFriendsTotalStepsForWeek(userRepository.users, todayDate);

  user.friendsActivityRecords.forEach(friend => {
    dropdownFriendsStepsContainer.innerHTML += `
    <p class='dropdown-p friends-steps'>${friend.firstName} |  ${friend.totalWeeklySteps}</p>
    `;
  });

  let friendsStepsParagraphs = document.querySelectorAll('.friends-steps');

  friendsStepsParagraphs.forEach(paragraph => {
    if (friendsStepsParagraphs[0] === paragraph) {
      paragraph.classList.add('green-text');
    }
    if (friendsStepsParagraphs[friendsStepsParagraphs.length - 1] === paragraph) {
      paragraph.classList.add('red-text');
    }
    if (paragraph.innerText.includes('YOU')) {
      paragraph.classList.add('yellow-text');
    }
  });
}

mainPage.addEventListener('click', showInfo);
profileButton.addEventListener('click', showDropdown);
stairsTrendingButton.addEventListener('click', updateTrendingStairsDays);
stepsTrendingButton.addEventListener('click', updateTrendingStepDays);


function flipCard(cardToHide, cardToShow) {
  cardToHide.classList.add('hide');
  cardToShow.classList.remove('hide');
}

function showDropdown() {
  userInfoDropdown.classList.toggle('hide');
}

function showInfo() {
  if (event.target.classList.contains('steps-info-button')) {
    flipCard(stepsMainCard, stepsInfoCard);
  }
  if (event.target.classList.contains('steps-friends-button')) {
    flipCard(stepsMainCard, stepsFriendsCard);
  }
  if (event.target.classList.contains('steps-trending-button')) {
    flipCard(stepsMainCard, stepsTrendingCard);
  }
  if (event.target.classList.contains('steps-calendar-button')) {
    flipCard(stepsMainCard, stepsCalendarCard);
  }
  if (event.target.classList.contains("steps-new-input-button")) {
    flipCard(stepsMainCard, stepsNewInputCard);
  }
  if (event.target.classList.contains('hydration-info-button')) {
    flipCard(hydrationMainCard, hydrationInfoCard);
  }
  if (event.target.classList.contains('hydration-friends-button')) {
    flipCard(hydrationMainCard, hydrationFriendsCard);
  }
  if (event.target.classList.contains('hydration-calendar-button')) {
    flipCard(hydrationMainCard, hydrationCalendarCard);
  }
   if (event.target.classList.contains("hydration-new-input-button")) {
     flipCard(hydrationMainCard, hydrationNewInputCard);
   }
  if (event.target.classList.contains('stairs-info-button')) {
    flipCard(stairsMainCard, stairsInfoCard);
  }
  if (event.target.classList.contains('stairs-friends-button')) {
    flipCard(stairsMainCard, stairsFriendsCard);
  }
  if (event.target.classList.contains('stairs-trending-button')) {
    flipCard(stairsMainCard, stairsTrendingCard);
  }
  if (event.target.classList.contains('stairs-calendar-button')) {
    flipCard(stairsMainCard, stairsCalendarCard);
  }
  if (event.target.classList.contains("stairs-new-input-button")) {
    flipCard(stairsMainCard, stairsNewInputCard);
  }
  if (event.target.classList.contains('sleep-info-button')) {
    flipCard(sleepMainCard, sleepInfoCard);
  }
  if (event.target.classList.contains('sleep-friends-button')) {
    flipCard(sleepMainCard, sleepFriendsCard);
  }
  if (event.target.classList.contains('sleep-calendar-button')) {
    flipCard(sleepMainCard, sleepCalendarCard);
  }
  if (event.target.classList.contains("sleep-new-input-button")) {
    flipCard(sleepMainCard, sleepNewInputCard);
  }
  if (event.target.classList.contains('steps-go-back-button')) {
    flipCard(event.target.parentNode, stepsMainCard);
  }
  if (event.target.classList.contains('hydration-go-back-button')) {
    flipCard(event.target.parentNode, hydrationMainCard);
  }
  if (event.target.classList.contains('stairs-go-back-button')) {
    flipCard(event.target.parentNode, stairsMainCard);
  }
  if (event.target.classList.contains('sleep-go-back-button')) {
    flipCard(event.target.parentNode, sleepMainCard);
  }
}

function updateTrendingStairsDays() {
  user.findTrendingStairsDays();
  trendingStairsPhraseContainer.innerHTML = `<p class='trend-line'>${user.trendingStairsDays[0]}</p>`;
}

function updateTrendingStepDays() {
  user.findTrendingStepDays();
  trendingStepsPhraseContainer.innerHTML = `<p class='trend-line'>${user.trendingStepDays[0]}</p>`;
}
