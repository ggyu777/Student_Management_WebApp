// import { rest } from "msw";

// export const handlers = [
//   rest.get("/api/v1/report/result-list/wnsdn0924", async (req, res, ctx) => {
//     return res(
//       ctx.json([
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "4235",
//           EXM_NUMBER: "20220610083837.551",
//           EXM_TITLE: "형사법 진도별 TEST",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-06-10",
//           EXM_ACTUAL_DATE_YMD: "2022-06-10"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "4214",
//           EXM_NUMBER: "20220531081655.284",
//           EXM_TITLE: "경찰학 진도별테스트",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-05-31",
//           EXM_ACTUAL_DATE_YMD: "2022-05-31"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "4201",
//           EXM_NUMBER: "20220527085424.783",
//           EXM_TITLE: "형사법 진도별 TEST",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-05-27",
//           EXM_ACTUAL_DATE_YMD: "2022-05-27"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "4198",
//           EXM_NUMBER: "20220525084453.443",
//           EXM_TITLE: "경찰학 진도별테스트",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-05-25",
//           EXM_ACTUAL_DATE_YMD: "2022-05-25"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "4197",
//           EXM_NUMBER: "20220524082518.331",
//           EXM_TITLE: "경찰학 진도별테스트",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-05-24",
//           EXM_ACTUAL_DATE_YMD: "2022-05-24"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "4185",
//           EXM_NUMBER: "20220520085033.256",
//           EXM_TITLE: "형사법 진도별 TEST",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-05-20",
//           EXM_ACTUAL_DATE_YMD: "2022-05-20"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "4182",
//           EXM_NUMBER: "20220518083458.569",
//           EXM_TITLE: "경찰학 진도별테스트",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-05-18",
//           EXM_ACTUAL_DATE_YMD: "2022-05-18"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "4181",
//           EXM_NUMBER: "20220517084606.040",
//           EXM_TITLE: "경찰학 진도별테스트",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-05-17",
//           EXM_ACTUAL_DATE_YMD: "2022-05-17"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "4167",
//           EXM_NUMBER: "20220512085119.588",
//           EXM_TITLE: "헌법 진도별 TEST",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-05-12",
//           EXM_ACTUAL_DATE_YMD: "2022-05-12"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "4165",
//           EXM_NUMBER: "20220511083729.394",
//           EXM_TITLE: "경찰학 진도별테스트",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-05-11",
//           EXM_ACTUAL_DATE_YMD: "2022-05-11"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "4164",
//           EXM_NUMBER: "20220510083433.231",
//           EXM_TITLE: "경찰학 진도별테스트",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-05-10",
//           EXM_ACTUAL_DATE_YMD: "2022-05-10"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "4150",
//           EXM_NUMBER: "20220506085033.352",
//           EXM_TITLE: "형사법 진도별 TEST",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-05-06",
//           EXM_ACTUAL_DATE_YMD: "2022-05-06"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "4147",
//           EXM_NUMBER: "20220505082241.440",
//           EXM_TITLE: "헌법 진도별 TEST",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-05-05",
//           EXM_ACTUAL_DATE_YMD: "2022-05-05"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "4145",
//           EXM_NUMBER: "20220504083104.587",
//           EXM_TITLE: "경찰학 진도별테스트",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-05-04",
//           EXM_ACTUAL_DATE_YMD: "2022-05-04"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "4073",
//           EXM_NUMBER: "20220412091030.178",
//           EXM_TITLE: "경찰학 진도별테스트",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-04-12",
//           EXM_ACTUAL_DATE_YMD: "2022-04-12"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "4049",
//           EXM_NUMBER: "20220406092117.085",
//           EXM_TITLE: "경찰학 진도별테스트",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-04-06",
//           EXM_ACTUAL_DATE_YMD: "2022-04-06"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "4020",
//           EXM_NUMBER: "20220401091003.720",
//           EXM_TITLE: "형사법 진도별 TEST",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-04-01",
//           EXM_ACTUAL_DATE_YMD: "2022-04-01"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "4015",
//           EXM_NUMBER: "20220331084538.302",
//           EXM_TITLE: "헌법 진도별 TEST",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-03-31",
//           EXM_ACTUAL_DATE_YMD: "2022-03-31"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "4013",
//           EXM_NUMBER: "20220330093520.955",
//           EXM_TITLE: "경찰학 진도별테스트",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-03-30",
//           EXM_ACTUAL_DATE_YMD: "2022-03-30"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "3981",
//           EXM_NUMBER: "20220323092212.208",
//           EXM_TITLE: "경찰학 진도별테스트",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-03-23",
//           EXM_ACTUAL_DATE_YMD: "2022-03-23"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "3980",
//           EXM_NUMBER: "20220322091804.100",
//           EXM_TITLE: "경찰학 진도별테스트",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-03-22",
//           EXM_ACTUAL_DATE_YMD: "2022-03-22"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "3952",
//           EXM_NUMBER: "20220318085728.657",
//           EXM_TITLE: "형사법 진도별 TEST",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-03-18",
//           EXM_ACTUAL_DATE_YMD: "2022-03-18"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "3945",
//           EXM_NUMBER: "20220316082049.152",
//           EXM_TITLE: "경찰학 진도별테스트",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-03-16",
//           EXM_ACTUAL_DATE_YMD: "2022-03-16"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "3944",
//           EXM_NUMBER: "20220315082100.391",
//           EXM_TITLE: "경찰학 진도별테스트",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-03-15",
//           EXM_ACTUAL_DATE_YMD: "2022-03-15"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "3916",
//           EXM_NUMBER: "20220311084413.269",
//           EXM_TITLE: "형사법 진도별 TEST",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-03-11",
//           EXM_ACTUAL_DATE_YMD: "2022-03-11"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "3909",
//           EXM_NUMBER: "20220309082316.683",
//           EXM_TITLE: "경찰학 진도별테스트",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-03-09",
//           EXM_ACTUAL_DATE_YMD: "2022-03-09"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "3908",
//           EXM_NUMBER: "20220308082843.604",
//           EXM_TITLE: "경찰학 진도별테스트",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-03-08",
//           EXM_ACTUAL_DATE_YMD: "2022-03-08"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "3882",
//           EXM_NUMBER: "20220305082630.683",
//           EXM_TITLE: "형사법 진도별 TEST",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-03-05",
//           EXM_ACTUAL_DATE_YMD: "2022-03-05"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "3881",
//           EXM_NUMBER: "20220304082415.608",
//           EXM_TITLE: "형사법 진도별 TEST",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-03-04",
//           EXM_ACTUAL_DATE_YMD: "2022-03-04"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "3876",
//           EXM_NUMBER: "20220303081937.750",
//           EXM_TITLE: "헌법 진도별 TEST",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-03-03",
//           EXM_ACTUAL_DATE_YMD: "2022-03-03"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "3873",
//           EXM_NUMBER: "20220301082049.197",
//           EXM_TITLE: "경찰학 진도별테스트",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-03-01",
//           EXM_ACTUAL_DATE_YMD: "2022-03-01"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "3839",
//           EXM_NUMBER: "20220223082524.398",
//           EXM_TITLE: "경찰학 진도별테스트",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-02-23",
//           EXM_ACTUAL_DATE_YMD: "2022-02-23"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "3838",
//           EXM_NUMBER: "20220222083531.482",
//           EXM_TITLE: "경찰학 진도별테스트",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-02-22",
//           EXM_ACTUAL_DATE_YMD: "2022-02-22"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "3794",
//           EXM_NUMBER: "20220217082054.010",
//           EXM_TITLE: "헌법 진도별 TEST",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-02-17",
//           EXM_ACTUAL_DATE_YMD: "2022-02-17"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "3792",
//           EXM_NUMBER: "20220216085549.696",
//           EXM_TITLE: "경찰학 진도별테스트",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-02-16",
//           EXM_ACTUAL_DATE_YMD: "2022-02-16"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "3791",
//           EXM_NUMBER: "20220215080714.538",
//           EXM_TITLE: "경찰학 진도별테스트",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-02-15",
//           EXM_ACTUAL_DATE_YMD: "2022-02-15"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "3763",
//           EXM_NUMBER: "20220212091114.272",
//           EXM_TITLE: "형사법 진도별 TEST",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-02-12",
//           EXM_ACTUAL_DATE_YMD: "2022-02-12"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "3762",
//           EXM_NUMBER: "20220211083026.121",
//           EXM_TITLE: "형사법 진도별 TEST",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-02-11",
//           EXM_ACTUAL_DATE_YMD: "2022-02-11"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "3755",
//           EXM_NUMBER: "20220209082342.200",
//           EXM_TITLE: "경찰학 진도별테스트",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-02-09",
//           EXM_ACTUAL_DATE_YMD: "2022-02-09"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "3697",
//           EXM_NUMBER: "20220208084821.289",
//           EXM_TITLE: "경찰학진도별테스트",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-02-08",
//           EXM_ACTUAL_DATE_YMD: "2022-02-08"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "3721",
//           EXM_NUMBER: "20220204083351.549",
//           EXM_TITLE: "형사법 진도별 TEST",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-02-04",
//           EXM_ACTUAL_DATE_YMD: "2022-02-04"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "3699",
//           EXM_NUMBER: "20220127081729.616",
//           EXM_TITLE: "헌법 진도별 TEST",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-01-27",
//           EXM_ACTUAL_DATE_YMD: "2022-01-27"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "3708",
//           EXM_NUMBER: "20220126084829.292",
//           EXM_TITLE: "경찰학 진도별테스트",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-01-26",
//           EXM_ACTUAL_DATE_YMD: "2022-01-26"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "3696",
//           EXM_NUMBER: "20220125082745.788",
//           EXM_TITLE: "경찰학 진도별테스트",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-01-25",
//           EXM_ACTUAL_DATE_YMD: "2022-01-25"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "3663",
//           EXM_NUMBER: "20220122081929.507",
//           EXM_TITLE: "형사법 진도별 TEST",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-01-22",
//           EXM_ACTUAL_DATE_YMD: "2022-01-22"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "3662",
//           EXM_NUMBER: "20220121081536.479",
//           EXM_TITLE: "형사법 진도별 TEST",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-01-21",
//           EXM_ACTUAL_DATE_YMD: "2022-01-21"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "3657",
//           EXM_NUMBER: "20220120081156.854",
//           EXM_TITLE: "헌법 진도별 TEST",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-01-20",
//           EXM_ACTUAL_DATE_YMD: "2022-01-20"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "3655",
//           EXM_NUMBER: "20220119081932.908",
//           EXM_TITLE: "경찰학진도별테스트",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-01-19",
//           EXM_ACTUAL_DATE_YMD: "2022-01-19"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "3654",
//           EXM_NUMBER: "20220118080825.368",
//           EXM_TITLE: "경찰학 진도별테스트",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-01-18",
//           EXM_ACTUAL_DATE_YMD: "2022-01-18"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "3625",
//           EXM_NUMBER: "20220114081132.133",
//           EXM_TITLE: "형사법 진도별 TEST",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-01-14",
//           EXM_ACTUAL_DATE_YMD: "2022-01-14"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "3620",
//           EXM_NUMBER: "20220113080847.939",
//           EXM_TITLE: "헌법 진도별 TEST",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-01-13",
//           EXM_ACTUAL_DATE_YMD: "2022-01-13"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "3619",
//           EXM_NUMBER: "20220112080616.236",
//           EXM_TITLE: "경찰학 진도별테스트",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-01-12",
//           EXM_ACTUAL_DATE_YMD: "2022-01-12"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "3612",
//           EXM_NUMBER: "20220111080510.964",
//           EXM_TITLE: "경찰학개론 진도별테스트",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-01-11",
//           EXM_ACTUAL_DATE_YMD: "2022-01-11"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "3579",
//           EXM_NUMBER: "20220108081149.506",
//           EXM_TITLE: "형사법 진도별 TEST",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-01-08",
//           EXM_ACTUAL_DATE_YMD: "2022-01-08"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "3577",
//           EXM_NUMBER: "20220107081237.165",
//           EXM_TITLE: "형사법 진도별 TEST",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-01-07",
//           EXM_ACTUAL_DATE_YMD: "2022-01-07"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "3572",
//           EXM_NUMBER: "20220106083024.742",
//           EXM_TITLE: "헌법 진도별 TEST",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-01-06",
//           EXM_ACTUAL_DATE_YMD: "2022-01-06"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "3571",
//           EXM_NUMBER: "20220105080828.532",
//           EXM_TITLE: "경찰학 진도별테스트",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-01-05",
//           EXM_ACTUAL_DATE_YMD: "2022-01-05"
//         },
//         {
//           EXM_TYP: "02",
//           EXM_KEY: "3569",
//           EXM_NUMBER: "20220104081709.123",
//           EXM_TITLE: "경찰학 진도별테스트",
//           EXM_ID: "wnsdn0924",
//           EXM_NAME: "박준우",
//           RELEASE_DATE_YMD: "2022-01-04",
//           EXM_ACTUAL_DATE_YMD: "2022-01-04"
//         }
//       ])
//     );
//   }),
//   rest.get(
//     "api/v1/report/score-comparison/20220610083837.551/wnsdn0924",
//     async (req, res, ctx) => {
//       return res(
//         ctx.json([
//           {
//             EXM_TYP: "02",
//             EXM_KEY: "4235",
//             EXM_NUMBER: "20220610083837.551",
//             EXM_TITLE: "형사법 진도별 TEST",
//             EXM_ID: "wnsdn0924",
//             EXM_NAME: "박준우",
//             RELEASE_DATE_YMD: "2022-06-10",
//             EXM_ACTUAL_DATE_YMD: "2022-06-10",
//             EXM_SUBJECT_CODE: 33,
//             DESCRIPTION: "형사법(진도별)",
//             EXM_SUBJECT_POINT: "90.00",
//             EXM_SUBJECT_POINT_TOP10P: 100,
//             EXM_SUBJECT_POINT_RIVAL: 75.63
//           }
//         ])
//       );
//     }
//   )
// ];
