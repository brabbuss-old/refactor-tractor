import Activity from './data-classes/Activity';
import Hydration from './data-classes/Hydration';
import Sleep from './data-classes/Sleep';
import User from './User';

class ClassChooser {
  constructor(className) {
    this.className = className;
  }
  instantiateClass(dataObject) {
    if (this.className === 'activities') {
      return new Activity(dataObject)
    } else if (this.className === 'sleep') {
      return new Sleep(dataObject)
    } else if (this.className === 'hydration') {
      return new Hydration(dataObject)
    } else if (this.className === 'users') {
      return new User(dataObject)
    }
  }
}

export default ClassChooser;
