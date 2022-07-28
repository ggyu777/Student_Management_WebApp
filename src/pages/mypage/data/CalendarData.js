// ----- 날짜 설정 -----
// start : 시작일 (당일 포함)
// end : 종료일 (당일 미포함) => 이벤트 종료일 다음 날로 작성

// ----- ClassNames Category 구분 -----
// day = 단일 행사, week = 장기행사

// ----- ClassNames Event Category -----
// finalTest => 국가시험일정
// monthTest => 월별 모의고사
// breakTime => 정기 외박
// classOpen => 과목별 개강일
// event => 이벤트

const info = {
  2022: {
    weeks: [
      {
        title: "지방직 필기합격자 발표",
        start: "2022-07-05",
        end: "2022-07-30",
        classNames: "week event"
      },
      {
        title: "정기외박",
        start: "2022-07-16",
        end: "2022-07-18",
        classNames: "week breakTime"
      },
      {
        title: "지방직 최종합격자 발표",
        start: "2022-08-03",
        end: "2022-08-21",
        classNames: "week event"
      }
    ],
    days: [
      { title: "입학식", date: "2022-07-03", classNames: "day event" },
      {
        title: "국가직 최종합격자 발표",
        date: "2022-07-06",
        classNames: "day event"
      },
      {
        title: "군무원 필기시험",
        date: "2022-07-16",
        classNames: "day finalTest"
      },
      {
        title: "월별 모의고사",
        date: "2022-07-24",
        classNames: "day monthTest"
      },
      {
        title: "소방직 최종합격자 발표",
        date: "2022-07-29",
        classNames: "day event"
      },
      {
        title: "경찰 2차 필기시험",
        date: "2022-08-20",
        classNames: "day finalTest"
      },
      { title: "정기외박", date: "2022-08-20", classNames: "day breakTime" },
      {
        title: "경찰 체력특강 개강",
        date: "2022-08-22",
        classNames: "day classOpen"
      },
      {
        title: "월별 모의고사",
        date: "2022-08-28",
        classNames: "day monthTest"
      }
    ]
  },
  2023: [{}]
};

export default info;
