import Data from './Data';

export default class Hydration extends Data {
  constructor(dataObject) {
    super(dataObject);
    this.numOunces = dataObject.numOunces;
  }
}
