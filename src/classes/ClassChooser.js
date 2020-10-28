import Activity from './data-classes/Activity';
import Hydration from './data-classes/Hydration';
import Sleep from './data-classes/Sleep';

class ClassChooser {
  constructor(className) {
    this.className = className;
  }
  instantiateClass(dataObject) {
    if (this.className === 'Activity') {
      return new Activity(dataObject)
    } else if (this.className === 'Sleep') {
      return new Sleep(dataObject)
    } else if (this.className === 'Hydration') {
      return new Hydration(dataObject)
    }
  }
}

export default ClassChooser;
