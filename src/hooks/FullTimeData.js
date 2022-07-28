import moment from "./moment.js"
import "moment/locale/ko";

// select에 넣어줄 데이터들
const todayOptionData = [];
for(let i=0; i<7; i++) {
  todayOptionData.push(moment().subtract(i, 'day').format("YY년 M월 D일(ddd)"));
}
const weekOptionData = ["이번주", "지난주", "2주전", "3주전"];
const monthOptionData = [
  moment().subtract(0, 'month').format("YY년 M월"),
  moment().subtract(1, 'month').format("YY년 M월"),
  moment().subtract(2, 'month').format("YY년 M월"),
  moment().subtract(3, 'month').format("YY년 M월"),
  moment().subtract(4, 'month').format("YY년 M월"),
  moment().subtract(5, 'month').format("YY년 M월"),
];

export {todayOptionData, weekOptionData, monthOptionData};