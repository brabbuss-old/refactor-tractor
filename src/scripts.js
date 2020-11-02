import "./css/base.scss";
import "./css/index.scss";

import {
  dailyOz,
  dropdownEmail,
  dropdownFriendsStepsContainer,
  dropdownGoal,
  dropdownName,
  headerName,
  hydrationCalendarCard,
  hydrationAllUsersToday,
  hydrationFriendsCard,
  hydrationInfoCard,
  hydrationInfoGlassesToday,
  hydrationMainCard,
  hydrationUserOuncesToday,
  hydrationNewInputCard,
  hydrationSubmitbutton,
  hydrationInputDate,
  numOuncesInput,
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
  stepsSubmitButton,
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
  stepsInputDate,
  stepsInputSteps,
  stepsInputActiveMins,
  stepsInputMiles,
  trendingStepsPhraseContainer,
  trendingStairsPhraseContainer,
  userInfoDropdown,
} from "./DOM-loader";

import UserRepository from "../src/classes/UserRepository";

//  <----        non-DOM vars        ---->   //
let userData;
let activityData;
let hydrationData;
let sleepData;
let user;
let userRepository;
let sortedHydrationDataByDate;

const date = "2020/01/22";

//        ****        EVENT LISTENERS       ****

stairsTrendingButton.addEventListener("click", function () {
  user.findTrendingStairsDays();
  trendingStairsPhraseContainer.innerHTML = `<p tabindex="0" class='trend-line'>${user.trendingStairsDays[0]}</p>`;
});

stepsTrendingButton.addEventListener("click", function () {
  user.findTrendingStepDays();
  trendingStepsPhraseContainer.innerHTML = `<p tabindex="0" class='trend-line'>${user.trendingStepDays[0]}</p>`;
});

sleepSubmitButton.addEventListener("click", function () {
  event.preventDefault()
  getSleepInput(
    sleepInputDate.value,
    sleepInputHours.value,
    sleepInputQuality.value
  );
});

stepsSubmitButton.addEventListener("click", function () {
  event.preventDefault();
  getActivityInput(
    stepsInputDate.value,
    stepsInputSteps.value,
    stepsInputActiveMins.value,
    stepsInputMiles.value
  );
});

hydrationSubmitbutton.addEventListener("click", function () {
  event.preventDefault();
  getHydrationInput(
    hydrationInputDate.value,
    numOuncesInput.value
  );
});

mainPage.addEventListener("click", showInfo);

profileButton.addEventListener("click", showDropdown);

stairsTrendingButton.addEventListener("click", updateTrendingStairsDays);

stepsTrendingButton.addEventListener("click", updateTrendingStepDays);


//        ****        USER DATA INPUT FUNCTIONS       ****

const getSleepInput = (date, hours, quality) => {
  let id = Number(user.id);
  date = date.replaceAll("-", "/");
  hours = Number(hours);
  quality = Number(quality);
  submitSleepData(id, date, hours, quality);
  user.updateSleep(date, hours, quality);
};

const getActivityInput = (date, numSteps, minutesActive, flightsOfStairs) => {
  let id = Number(user.id);
  date = date.replaceAll("-", "/");
  numSteps = Number(numSteps);
  minutesActive = Number(minutesActive);
  flightsOfStairs = Number(flightsOfStairs);
  submitActivityData(id, date, numSteps, minutesActive, flightsOfStairs);
  user.updateActivities(date, numSteps, minutesActive, flightsOfStairs);
};

const getHydrationInput = (date, numOunces) => {
  let id = Number(user.id);
  date = date.replaceAll("-", "/");
  numOunces = Number(numOunces);
  submitHydrationData(id, date, numOunces);
  user.updateHydration(date, numOunces)
};

const showInputFeedback = (message) => {
  inputFeedback.innerText = message;
  inputFeedback.classList.remove("hide");
  setTimeout(() => {inputFeedback.classList.add('hide')},5000);
};

const submitSleepData = (id, date, hours, quality) => {
  fetch("https://fe-apps.herokuapp.com/api/v1/fitlit/1908/sleep/sleepData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userID: id,
      date: date,
      hoursSlept: hours,
      sleepQuality: quality,
    }),
  })
    .then((resp) => resp.json())
    .then((resp) => {
      console.log(resp)
      showInputFeedback("Update successful.  Great job!");
    })
    .catch(() => {
      showInputFeedback("There was an error.  Please try again.");
    });
};

const submitActivityData = (id, date, numSteps, minutesActive, flightsOfStairs) => {
  fetch("https://fe-apps.herokuapp.com/api/v1/fitlit/1908/activity/activityData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userID: id,
      date: date,
      numSteps: numSteps,
      minutesActive: minutesActive,
      flightsOfStairs: flightsOfStairs,
    }),
  })
    .then((resp) => resp.json())
    .then(() => {
      showInputFeedback("Input success.  Great job!");
    })
    .catch(() => {
      showInputFeedback("There was an error.  Please try again.");
    });
};

const submitHydrationData = (id, date, numOunces) => {
  fetch(
    "https://fe-apps.herokuapp.com/api/v1/fitlit/1908/hydration/hydrationData",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID: id,
        date: date,
        numOunces: numOunces,
      }),
    }
  )
    .then((resp) => resp.json())
    .then(() => {
      showInputFeedback("Input success.  Great job!");
    })
    .catch(() => {
      showInputFeedback("There was an error.  Please try again.");
    });
};

//        ****        FETCH DATA FUNCTIONS / LOAD DATA FUNCTIONS       ****

const userPromise = fetch(
"https://fe-apps.herokuapp.com/api/v1/fitlit/1908/users/userData"
).then((resp) => resp.json());

const activityPromise = fetch(
  "https://fe-apps.herokuapp.com/api/v1/fitlit/1908/activity/activityData"
).then((resp) => resp.json());

const hydrationPromise = fetch(
  "https://fe-apps.herokuapp.com/api/v1/fitlit/1908/hydration/hydrationData"
).then((resp) => resp.json());

const sleepPromise = fetch(
  "https://fe-apps.herokuapp.com/api/v1/fitlit/1908/sleep/sleepData"
).then((resp) => resp.json());

Promise.all([userPromise, activityPromise, hydrationPromise, sleepPromise])
  .then((data) => {
    activityData = data[1].activityData;
    hydrationData = data[2].hydrationData;
    sleepData = data[3].sleepData;
    userData = data[0].userData;
    userRepository = new UserRepository(
      userData,
      activityData,
      hydrationData,
      sleepData,
      date
    );
  })
  .then(() => {
    loadApp();
  });

const loadApp = () => {
  user = userRepository.getRandomUser();
  user.populateUserData();
  user.findFriendsNames(userRepository.dataObjectArray); //TODO goes inside user as method
  updateText();
};

function loadFriendsActivityRecords() {
  user.findFriendsTotalStepsForWeek(date).sort((a,b)=>b.totalWeeklySteps-a.totalWeeklySteps);
  user.friendsActivityRecords.forEach(friend => {
    dropdownFriendsStepsContainer.innerHTML += `
    <p class='dropdown-p friends-steps'>${friend.firstName} |  ${friend.totalWeeklySteps}</p>
    `;
  });
  let friendsStepsParagraphs = document.querySelectorAll(".friends-steps");
  friendsStepsParagraphs.forEach((paragraph) => {
    if (friendsStepsParagraphs[0] === paragraph) {
      paragraph.classList.add("green-text");
    }
    if (
      friendsStepsParagraphs[friendsStepsParagraphs.length - 1] === paragraph
    ) {
      paragraph.classList.add("red-text");
    }
    if (paragraph.innerText.includes("YOU")) {
      paragraph.classList.add("yellow-text");
    }
  });
}

//        ****        UI DISPLAY FUNCTIONS       ****

const updateText = () => {
  displayUserInfo();
  displayHydrationInfo();
  displaySleepInfo();
  displayStairsInfo();
  displayStepsInfo();
};

const displayUserInfo = () => {
  dropdownGoal.innerText = `DAILY STEP GOAL | ${user.dailyStepGoal}`;
  dropdownEmail.innerText = `EMAIL | ${user.email}`;
  dropdownName.innerText = user.name.toUpperCase();
  headerName.innerText = `${user.getFirstName()}'S `;
};

const displayHydrationInfo = () => {
  let pastWeekHydration = user.ouncesRecord.getPastWeekData(date)
  hydrationUserOuncesToday.innerText = pastWeekHydration[6].numOunces;
  hydrationAllUsersToday.innerText = userRepository.getGlobalWaterAvgByDate(date);
  hydrationInfoGlassesToday.innerText = (pastWeekHydration[6].numOunces / 8).toFixed(1);
  pastWeekHydration.forEach((day, i) => {
    if(dailyOz[i]) {
      dailyOz[i].innerText = day.numOunces
    }
  });
};

const displaySleepInfo = () => {
  sleepCalendarHoursAverageWeekly.innerText = user.calculateAverageHoursThisWeek(date);
  sleepCalendarQualityAverageWeekly.innerText = user.calculateAverageQualityThisWeek(date);
  sleepFriendLongestSleeper.innerText = userRepository.userObjectArray.find(user => {
    return user.id === userRepository.getLongestSleepers(date)
  }).getFirstName();
  sleepFriendWorstSleeper.innerText = userRepository.userObjectArray.find(user => {
    return user.id === userRepository.getWorstSleepers(date)
  }).getFirstName();
  sleepInfoHoursAverageAlltime.innerText = user.hoursSleptAverage;
  stepsInfoMilesWalkedToday.innerText = user.activityRecord.getMilesWalked(date);
  sleepInfoQualityAverageAlltime.innerText = user.sleepQualityAverage;
  sleepInfoQualityToday.innerText = user.getSleepDataByDate(date, 'sleepQuality');
  sleepUserHoursToday.innerText = sleepUserHoursToday.innerText = user.getSleepDataByDate(date, 'hoursSlept');
};

const displayStairsInfo = () => {
  stairsCalendarFlightsAverageWeekly.innerText = user.calculateAverageFlightsThisWeek(date);
  stairsCalendarStairsAverageWeekly.innerText = (user.calculateAverageFlightsThisWeek(date) * 12).toFixed(0);
  stairsFriendFlightsAverageToday.innerText = (userRepository.getGlobalStairAvgByDate(date) / 12).toFixed(1);
  stairsInfoFlightsToday.innerText = user.getActivityDataByDate(date, 'flightsOfStairs');
  stairsUserStairsToday.innerText = user.getActivityDataByDate(date, 'flightsOfStairs') * 12;
  stairsCalendarFlightsAverageWeekly.innerText = user.calculateAverageFlightsThisWeek(date);
  stairsCalendarStairsAverageWeekly.innerText = (user.calculateAverageFlightsThisWeek(date) * 12).toFixed(0);
};

const displayStepsInfo = () => {
  stepsUserStepsToday.innerText = user.getActivityDataByDate(date, 'numSteps')
  stepsInfoActiveMinutesToday.innerText = user.getActivityDataByDate(date, 'minutesActive')
  stepsCalendarTotalStepsWeekly.innerText = user.activityRecord.getStepsThisWeek(date);
  stepsCalendarTotalActiveMinutesWeekly.innerText = user.calculateAverageMinutesActiveThisWeek(date);
  loadFriendsActivityRecords()
  displayStepsInfoFriends()
};

function displayStepsInfoFriends() {
  stepsFriendAverageStepGoal.innerText = userRepository.getGlobalStepGoal().toFixed(0);
  stepsFriendStepsAverageToday.innerText = userRepository.getGlobalStepAvgByDate(date).toFixed(0);
  stepsFriendActiveMinutesAverageToday.innerText = userRepository.getGlobalActiveAvgByDate(date).toFixed(0);
}

function updateTrendingStairsDays() {
  user.findTrendingStairsDays();
  trendingStairsPhraseContainer.innerHTML = `<p tabindex="0" class='trend-line'>${user.trendingStairsDays[0]}</p>`;
}

function updateTrendingStepDays() {
  user.findTrendingStepDays();
  trendingStepsPhraseContainer.innerHTML = `<p tabindex="0"class='trend-line'>${user.trendingStepDays[0]}</p>`;
}

//        ****        UI INTERACTION FUNCTIONS       ****


function flipCard(cardToHide, cardToShow) {
  cardToHide.classList.add("hide");
  cardToShow.classList.remove("hide");
}

function showDropdown() {
  userInfoDropdown.classList.toggle("hide");
}

function showInfo() {
  if (event.target.classList.contains("steps-info-button")) {
    flipCard(stepsMainCard, stepsInfoCard);
  }
  if (event.target.classList.contains("steps-friends-button")) {
    flipCard(stepsMainCard, stepsFriendsCard);
  }
  if (event.target.classList.contains("steps-trending-button")) {
    flipCard(stepsMainCard, stepsTrendingCard);
  }
  if (event.target.classList.contains("steps-calendar-button")) {
    flipCard(stepsMainCard, stepsCalendarCard);
  }
  if (event.target.classList.contains("steps-new-input-button")) {
    flipCard(stepsMainCard, stepsNewInputCard);
  }
  if (event.target.classList.contains("hydration-info-button")) {
    flipCard(hydrationMainCard, hydrationInfoCard);
  }
  if (event.target.classList.contains("hydration-friends-button")) {
    flipCard(hydrationMainCard, hydrationFriendsCard);
  }
  if (event.target.classList.contains("hydration-calendar-button")) {
    flipCard(hydrationMainCard, hydrationCalendarCard);
  }
  if (event.target.classList.contains("hydration-new-input-button")) {
    flipCard(hydrationMainCard, hydrationNewInputCard);
  }
  if (event.target.classList.contains("stairs-info-button")) {
    flipCard(stairsMainCard, stairsInfoCard);
  }
  if (event.target.classList.contains("stairs-friends-button")) {
    flipCard(stairsMainCard, stairsFriendsCard);
  }
  if (event.target.classList.contains("stairs-trending-button")) {
    flipCard(stairsMainCard, stairsTrendingCard);
  }
  if (event.target.classList.contains("stairs-calendar-button")) {
    flipCard(stairsMainCard, stairsCalendarCard);
  }
  if (event.target.classList.contains("stairs-new-input-button")) {
    flipCard(stairsMainCard, stairsNewInputCard);
  }
  if (event.target.classList.contains("sleep-info-button")) {
    flipCard(sleepMainCard, sleepInfoCard);
  }
  if (event.target.classList.contains("sleep-friends-button")) {
    flipCard(sleepMainCard, sleepFriendsCard);
  }
  if (event.target.classList.contains("sleep-calendar-button")) {
    flipCard(sleepMainCard, sleepCalendarCard);
  }
  if (event.target.classList.contains("sleep-new-input-button")) {
    flipCard(sleepMainCard, sleepNewInputCard);
  }
  if (event.target.classList.contains("steps-go-back-button")) {
    flipCard(event.target.parentNode, stepsMainCard);
  }
  if (event.target.classList.contains("hydration-go-back-button")) {
    flipCard(event.target.parentNode, hydrationMainCard);
  }
  if (event.target.classList.contains("stairs-go-back-button")) {
    flipCard(event.target.parentNode, stairsMainCard);
  }
  if (event.target.classList.contains("sleep-go-back-button")) {
    flipCard(event.target.parentNode, sleepMainCard);
  }
}