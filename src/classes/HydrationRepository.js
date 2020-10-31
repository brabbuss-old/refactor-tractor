import ClassChooser from './ClassChooser';
import ParentRepository from './ParentRepository';

export default class HydrationRepository extends ParentRepository {
  constructor(fetchedData, user, dataClass) {
    super(fetchedData, user, dataClass)
    this.numOunces;
  }
  //      this is for the input forms
  addNewHydrationData(date, ounces) {
    let hydrationDataObject = {
    "userID": this.userID,
    "date": date,
    "numOunces": ounces
    }
    this.addNewDataObject(hydrationDataObject)
  }
}
