import moment from "moment";
import "moment/locale/ko";

moment.updateLocale('ko', {
  weekdaysShort: ["일", "월", "화", "수", "목", "금", "토"],
});

export default moment;