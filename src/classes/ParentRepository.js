import ClassChooser from './ClassChooser';

export default class ParentRepository {
  constructor(fetchedData, user, dataClass, date) {
    this.date = date;
    this.dataClass = dataClass;
    this.classChooser = new ClassChooser(this.dataClass, date)
    this.userID = user.id;
    this.dataObjectArray = this.parseData(fetchedData);
  }

  // Methods to add to data array of given class objects

  parseData(fetchedData) {
    return fetchedData.reduce((parsedData, dataObject) => {
      if (dataObject.userID === this.userID) {
        parsedData.push(this.classChooser.instantiateClass(dataObject))
      }
      return parsedData
    }, [])
  }
  addNewDataObject(dataObject) {
    this.dataObjectArray.push(this.classChooser.instantiateClass(dataObject));
  }

  // Data Array Parsing Methods

  findDataObjectByDate(date) {
    return this.dataObjectArray.find(dataObject => dataObject.date === date);
  }
  getAllTimeAverageByKey(dataObjectKey) {
    let dataTotal = this.dataObjectArray.reduce((dataTotal, dataObject) => {
      dataTotal += dataObject[dataObjectKey]
      return dataTotal
    }, 0)
    return Number((dataTotal / this.dataObjectArray.length).toFixed(1))
  }
  getPastWeekData(date) {
    let index = this.dataObjectArray.indexOf(this.findDataObjectByDate(date))
    return this.dataObjectArray.slice(index - 6, index + 1)
  }
  getDataByDateAndKey(date, dataObjectKey) {
    return this.findDataObjectByDate(date)[dataObjectKey];
  }
  getAverageDataByWeekAndKey(date, dataObjectKey, decimals) {
    let weeklyAverage = (this.getPastWeekData(date).reduce((dataTotal, dataObject) => {
      dataTotal += dataObject[dataObjectKey];
      return dataTotal;
    }, 0)/7);
    return decimals ? Number(weeklyAverage.toFixed(decimals)) : Math.round(weeklyAverage);
  }
  getHighLowDataPointByKey(dataObjectKey, highOrLow) {
    let sortedData = this.dataObjectArray.sort((a, b) => {
      return highOrLow === 'low' ? a[dataObjectKey] - b[dataObjectKey] : b[dataObjectKey] - a[dataObjectKey];
    })
    return sortedData[0]
  }
  getAllDataObjectsOnDate(date) {
    return this.dataObjectArray.filter(dataObject => {
      return dataObject.date === date;
    })
  }
  getTotalByDateAndKey(date, key) {
    let matchedData = this.getAllDataObjectsOnDate(date);
    if (matchedData) {
      return matchedData.reduce((total, dataObject) => {
        total += dataObject[key]
        return total
      }, 0)
    }
  }
  getWeeklyTotalByDateAndKey(date, key) {
    console.log(date,key);
    return this.getPastWeekData(date).reduce((dataTotal, dataObject) => {
      dataTotal += dataObject[key];
      return dataTotal;
    }, 0)
  }
}
