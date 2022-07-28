import moment from "./moment.js"
import "moment/locale/ko";

// select에 넣어줄 데이터들
const todayOptionData = [
  "22년 7월 28일(목)",
  "22년 7월 27일(수)",
  "22년 7월 26일(화)",
  "22년 7월 25일(월)",
  "22년 7월 24일(일)",
  "22년 7월 23일(토)",
];
const weekOptionData = ["이번주", "지난주", "2주전", "3주전"];
const monthOptionData = [
  "22년 7월",
  "22년 6월",
  "22년 5월",
  "22년 4월",
  "22년 3월",
  "22년 2월",
];

export {todayOptionData, weekOptionData, monthOptionData};