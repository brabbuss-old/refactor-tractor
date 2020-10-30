import { expect } from 'chai';

import HydrationRepository from '../src/classes/HydrationRepository';
import Hydration from '../src/classes/data-classes/Hydration';

describe('HydrationRepository', function() {
  let hydrationDataObject1;
  let hydrationDataObject2;
  let hydrationDataObject3;
  let hydrationDataObject4;
  let hydrationDataObject5;
  let hydrationDataObject6;
  let hydrationDataObject7;
  let hydrationDataObject8;
  let hydrationDataObject9;
  let hydrationDataObject10;

  let hydrationRepository;
  let hydrationArray;
  let user;

  beforeEach(() => {
    user = ({
      'id': 1,
      'name': 'Luisa Hane',
      'address': '15195 Nakia Tunnel, Erdmanport VA 19901-1697',
      'email': 'Diana.Hayes1@hotmail.com',
      'strideLength': 4.3,
      'dailyStepGoal': 10000,
      'friends': [
        16,
        4,
        8
      ]
    });

    hydrationDataObject1 = ({
      "userID": 1,
      "date": "2019/07/01",
      "numOunces": 1
    });
    hydrationDataObject2 = ({
      "userID": 1,
      "date": "2019/07/02",
      "numOunces": 12
    });
    hydrationDataObject3 = ({
      "userID": 1,
      "date": "2019/07/03",
      "numOunces": 13
    });
    hydrationDataObject4 = ({
      "userID": 1,
      "date": "2019/07/04",
      "numOunces": 15
    });
    hydrationDataObject5 = ({
      "userID": 1,
      "date": "2019/07/05",
      "numOunces": 19
    });
    hydrationDataObject6 = ({
      "userID": 1,
      "date": "2019/07/06",
      "numOunces": 100
    });
    hydrationDataObject7 = ({
      "userID": 1,
      "date": "2019/07/07",
      "numOunces": 111
    });
    hydrationDataObject8 = ({
      "userID": 1,
      "date": "2019/07/08",
      "numOunces": 122
    });
    hydrationDataObject9 = ({
      "userID": 1,
      "date": "2019/07/09",
      "numOunces": 133
    });
    hydrationDataObject10 = ({
      "userID": 1,
      "date": "2019/07/10",
      "numOunces": 43
    });
  hydrationArray = [
    hydrationDataObject1,
    hydrationDataObject2,
    hydrationDataObject3,
    hydrationDataObject4,
    hydrationDataObject5,
    hydrationDataObject6,
    hydrationDataObject7,
    hydrationDataObject8,
    hydrationDataObject9,
    hydrationDataObject10
  ]
  hydrationRepository = new HydrationRepository(hydrationArray, user, 'hydration')
  });

  it('should be a function', function() {
    expect(HydrationRepository).to.be.a('function');
  });
  it('should be an instance of hydrationRepository', function() {
    expect(hydrationRepository).to.be.an.instanceof(HydrationRepository);
  });
  it('should hold Hydration Class objects', function() {
    expect(hydrationRepository.dataObjectArray[0]).to.be.instanceof(Hydration);
  });
  it('should hold a userID', function() {
    expect(hydrationRepository.dataObjectArray[0].userID).to.equal(1);
  });
  it('should find a dataObject by date', function() {
    expect(hydrationRepository.findDataObjectByDate('2019/07/09')).to.deep.equal(hydrationDataObject9);
  });
  it('should be able to add hydrationObject to hydration record', function() {
    hydrationRepository.addNewHydrationData(hydrationDataObject10);

    expect(hydrationRepository.dataObjectArray[9]).to.be.instanceof(Hydration);
    expect(hydrationRepository.dataObjectArray.length).to.equal(11);
    expect(hydrationRepository.dataObjectArray[9].numOunces).to.equal(43);
  });
  it('should be able to return ounces consumed for specific date', function() {
    expect(hydrationRepository.getDataByDateAndKey("2019/07/01", 'numOunces')).to.equal(1);
  });
  it('should return an array of seven days of data by date', function() {
    expect(hydrationRepository.getPastWeekData('2019/07/09').length).to.equal(7);
  });
})
