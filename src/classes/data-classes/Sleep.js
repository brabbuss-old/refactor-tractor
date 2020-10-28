import Data from './Data';

export default class Sleep extends Data {
  constructor(dataObject) {
    super(dataObject);
    this.hoursSlept = dataObject.hoursSlept;
    this.sleepQuality = dataObject.sleepQuality;
  }
}
