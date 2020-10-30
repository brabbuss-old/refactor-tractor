import ClassChooser from './ClassChooser';
import ParentRepository from './ParentRepository';

export default class HydrationRepository extends ParentRepository {
  constructor(fetchedData, user, dataClass) {
    super(fetchedData, user, dataClass)
    this.numOunces = user.strideLength;
  }
  //      this is for the input forms
  addNewHydrationData(date, ounces) {
    let activityDataObject = {
    "userID": this.userID,
    "date": date,
    "numOunces": ounces
    }
    this.addNewDataObject(activityDataObject)
  }
}
