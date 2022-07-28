import moment from 'moment';
import "moment/locale/ko";
moment.updateLocale('ko', {
  week:{
    dow : 1, // 한 주의 시작 요일은 월요일(1)
    doy : 4
  }
})

const getToday = (gap = 0) => {
  return moment().subtract(gap, 'day').format("YYYYMMDD");
}

const getWeeklyNum = (dayInfo, gap = 0) => {
  let temp = moment().subtract(gap, 'week').format("YYYYMMDD")
  return moment(gap ? temp : dayInfo, "YYYYMMDD").week();
}

const getYearMonth = (dayInfo, gap = 0) => {
  if(gap)
    return moment().subtract(gap, 'month').format("YYYYMM");
  else
    return moment(dayInfo).format("YYYYMM");
}

const getLearningTime = (arr = [], condition, type) => {
  return arr.reduce((acc, el) => {
    let con;
    switch (type) {
      case "day":
        con = el.TEST_DATE;
        break;
      case "week":
        con = getWeeklyNum(el.TEST_DATE);
        break;
    }

    if(type === "month") {
      el.test_Learn === "LRN" ? acc.learn += (el.test_Term / 3600)  : acc.nonLearn += (el.test_Term / 3600);
    }
    else {
      if(con === condition)
        el.TEST_LEARN === "LRN" ? acc.learn += el.TEST_HR : acc.nonLearn += el.TEST_HR;
    }

    return acc;
  }, {learn: 0, nonLearn: 0});
}

const getPlaceTime = (arr = [], condition, type) => {
  return arr.reduce((acc, el) => {
    let con;
    switch (type) {
      case "day":
        con = el.TEST_DATE;
        break;
      case "week":
        con = getWeeklyNum(el.TEST_DATE);
        break;
    }

    if(type === "month") {
      switch (el.areaName) {
        case "실강":
          acc.realTimeClass += (el.test_Term / 60);
          break;
        case "자습":
        case "인강":
          acc.selfStudy += (el.test_Term / 60);
          break;
        case "식사":
          acc.meal += (el.test_Term / 60);
          break;
        case "수면":
          acc.sleep += (el.test_Term / 60);
          break;
        case "휴식":
          acc.rest += (el.test_Term / 60);
          break;
        default:
          acc.etc += (el.test_Term / 60);
          break;
      }
    }
    else {
      if(con === condition) {
        switch (el.TEST_PLACE) {
          case "실강":
            acc.realTimeClass += el.TEST_MIN;
            break;
          case "자습":
          case "인강":
            acc.selfStudy += el.TEST_MIN;
            break;
          case "식사":
            acc.meal += el.TEST_MIN;
            break;
          case "수면":
            acc.sleep += el.TEST_MIN;
            break;
          case "휴식":
            acc.rest += el.TEST_MIN;
            break;
          default:
            acc.etc += el.TEST_MIN;
            break;
        }
      }
    }

    return acc;
  }, {realTimeClass: 0, selfStudy: 0, meal: 0, sleep: 0, rest: 0, etc: 0});
}

export {getToday, getWeeklyNum, getYearMonth, getLearningTime, getPlaceTime};