import { expect } from 'chai';

import User from '../src/classes/User';
import Sleep from '../src/classes/data-classes/Sleep';
import Activity from '../src/classes/data-classes/Activity';
import Hydration from '../src/classes/data-classes/Hydration';
import ClassChooser from '../src/classes/ClassChooser';

import {sleepSampleData, hydrationSampleData, userSampleData, activitySampleData} from "../src/data/test-sample-data"

describe('ClassChooser', function() {
  let classChooser;
  let classChooser1;
  let classChooser2;
  let classChooser3;
  let classChooser4;

  it('should be a function', function() {
    expect(ClassChooser).to.be.a('function');
  });
  it('should be an instance of ClassChooser', function() {

    classChooser = new ClassChooser()

    expect(classChooser).to.be.an.instanceof(ClassChooser);
  });
  it('should have a className', function() {
    classChooser = new ClassChooser('users')

    expect(classChooser.className).to.equal('users');
  });
  it('should instantiate Class objects', function() {
    classChooser1 = new ClassChooser('users');
    classChooser2 = new ClassChooser('activities');
    classChooser3 = new ClassChooser('hydration');
    classChooser4 = new ClassChooser('sleep');

    expect(classChooser1.instantiateClass('users')).to.be.instanceof(User);
    expect(classChooser2.instantiateClass('activities')).to.be.instanceof(Activity);
    expect(classChooser3.instantiateClass('hydration')).to.be.instanceof(Hydration);
    expect(classChooser4.instantiateClass('sleep')).to.be.instanceof(Sleep);
  });
})
