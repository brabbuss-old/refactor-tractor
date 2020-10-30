import Data from './Data';

export default class Activity extends Data {
  constructor(dataObject) {
    super(dataObject);
    this.numSteps = dataObject.numSteps;
    this.minutesActive = dataObject.minutesActive;
    this.flightsOfStairs = dataObject.flightsOfStairs;
  }
}
