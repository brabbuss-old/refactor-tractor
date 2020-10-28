import Data from './Data';

export default class Activity extends Data {
  constructor(dataObject) {
    super(dataObject);
    this.numSteps = dataObject.numSteps;
    this.minutesActive = dataObject.minutesActive;
    this.flightsOfStairs = dataObject.flightsOfStairs;
    this.milesWalked = 0;
    this.reachedStepGoal = null;
  }
}

// getMilesWalked() {          //TODO user class
//   let user = this.getUserObject();
// }
//
// //strideLength": 4.3,
// //"dailyStepGoal": 10000,
