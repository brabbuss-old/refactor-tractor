import Activity from './data-classes/Activity';
import Hydration from './data-classes/Hydration';
import Sleep from './data-classes/Sleep';
import User from './User';

class ClassChooser {
  constructor(dataClassName, date) {
    this.dataClassName = dataClassName;
    this.date = date;
  }
  instantiateClass(dataObject) {
    if (this.dataClassName === 'activities') {
      return new Activity(dataObject)
    } else if (this.dataClassName === 'sleep') {
      return new Sleep(dataObject)
    } else if (this.dataClassName === 'hydration') {
      return new Hydration(dataObject)
    } else if (this.dataClassName === 'users') {
      return new User(dataObject, this.date)
    }
  }
}

export default ClassChooser;
