import moment from 'moment';
import "moment/locale/ko";
moment.updateLocale('ko', {
  week:{
    dow : 1, // 한 주의 시작 요일은 월요일(1)
    doy : 4
  }
})

const getToday = (gap = 0) => {
  // return moment().subtract(gap, 'day').format("YYYYMMDD");
  return "20220728";
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
        con = el.DATE;
        break;
      case "week":
        con = getWeeklyNum(el.DATE);
        break;
    }

    if(type === "month") {
      el.areaTcd === "LRN" ? acc.learn += (el.msrmntTerm / 3600)  : acc.nonLearn += (el.msrmntTerm / 3600);
    }
    else {
      if(con === condition)
        el.TCD === "LRN" ? acc.learn += el.HR : acc.nonLearn += el.HR;
    }

    return acc;
  }, {learn: 0, nonLearn: 0});
}

const getPlaceTime = (arr = [], condition, type) => {
  return arr.reduce((acc, el) => {
    let con;
    switch (type) {
      case "day":
        con = el.DATE;
        break;
      case "week":
        con = getWeeklyNum(el.DATE);
        break;
    }

    if(type === "month") {
      switch (el.areaName) {
        case "실강":
          acc.realTimeClass += (el.msrmntTerm / 60);
          break;
        case "자습":
        case "인강":
          acc.selfStudy += (el.msrmntTerm / 60);
          break;
        case "식사":
          acc.meal += (el.msrmntTerm / 60);
          break;
        case "수면":
          acc.sleep += (el.msrmntTerm / 60);
          break;
        case "휴식":
          acc.rest += (el.msrmntTerm / 60);
          break;
        default:
          acc.etc += (el.msrmntTerm / 60);
          break;
      }
    }
    else {
      if(con === condition) {
        switch (el.NM) {
          case "실강":
            acc.realTimeClass += el.MIN;
            break;
          case "자습":
          case "인강":
            acc.selfStudy += el.MIN;
            break;
          case "식사":
            acc.meal += el.MIN;
            break;
          case "수면":
            acc.sleep += el.MIN;
            break;
          case "휴식":
            acc.rest += el.MIN;
            break;
          default:
            acc.etc += el.MIN;
            break;
        }
      }
    }

    return acc;
  }, {realTimeClass: 0, selfStudy: 0, meal: 0, sleep: 0, rest: 0, etc: 0});
}

export {getToday, getWeeklyNum, getYearMonth, getLearningTime, getPlaceTime};