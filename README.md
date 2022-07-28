# STFE3-4_Final_Project_7TEAM

<br/>


# 팀명 : 😆 77ㅣ리 77ㅣ리

<br/>

## ➡️ 프로젝트 개요

**기업** : 에듀해시 글로벌 파트너스
<br/>
**주제** : 기숙 학원 전용 학생 관리 Web App 의 기능 추가.
<br/>
[STFE3-4_Final_Project_7TEAM](https://github.com/ggyu777/STFE3-4_Final_Project_7TEAM)

<br/>

## 🛠 사용기술

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

<br/>

## 프로젝트 일정

기획 및 환경 설정 : 06/30 ~ 07/05<br/>
기능 개발 (API 구현 중심) : 07/06 ~ 07/10<br/>
디자인 & 개발 병행 : 07/11 ~ 07/16<br/>
최종 개발 및 리팩토링 : 07/17 ~ 07/21

<br/>

## 폴더 구조
```
src
 ┣ assets
 ┣ components
 ┣ constructors
 ┣ containers
 ┣ context
 ┣ elements
 ┣ hooks
 ┣ pages
 ┣ App.jsx
 ┣ GlobalStyle.jsx
 ┗ main.jsx
 ```
 
 <br/>

 

## 프로젝트 기능 설명
- 성적확인
  - 각 단원별, 과목별, 소단원별 성적의 데이터를 API로 불러와 Apex 라이브러리를 통해 그래프로 시각화해 퍼센트로 보여줌.
- 시간활용
  - 일간, 주간, 월간 별로 사용자의 학습량, 비학습량의 시간 데이터를 API로 불러와 Apex 라이브러리를 통해 그래프로 시각화해 보여줌.
- 주요일정
  - 금년도 일정이 정리된 파일을 현재 년도에 맞게 불러와서 캘린더 라이브러리에 정보를 보내주어 화면에 구현
    우측에는 현재 보고있는 월의 이벤트를 모두 불러옴 (장기를 우선으로 위에 두고 아래에 단기 이벤트 배치)
    한 날짜에 이벤트가 4개가 넘어간다면 more (...) 아이콘으로 표현
    해당 아이콘을 클릭 시 우측에 공식 중요 일정이 해당 날짜의 일정을 보여주는 화면으로 변경됨

<br/>


## 🧑🏻‍💻 Git PR 양식

### **PR Type**

What kind of change does this PR introduce?

- [ ]  버그를 수정했어요.
- [ ]  새로운 기능을 추가했어요.
- [ ]  코드 스타일 업데이트를 했어요(포맷팅, 지역변수)
- [ ]  리팩토링을 했어요 (기능적인 변화 없이, api 변경 없이)
- [ ]  환경 설정을 변경했어요.
- [ ]  문서 내용을 변경했어요. ( == Rename)
- [ ]  기타 사항을 설명해 주세요.

### **What does this PR do?**

- [ ]  fireBase git ignore 추가 및 firebaseconfig 삭제

### 🤝 PR Label
🪳 bug : 
버그가 있어서 작동이 안돼요 ㅠㅠ
 
🧱 component : 
컴포넌트 단위의 작업을 진행해요!
 
⚙️ conf : 
환경 설정을 진행해요!
 
📋 documentation : 
문서 작업을 진행해요!
 
🌠 feature : 
새로운 기능을 만들어요!
 
🛠 fix : 
에러 혹은 버그를 고쳐요!
 
✈️ migration : 
마이그레이션을 작업을 진행해요!
 
♻️ refactor : 
리팩토링을 진행해요!
 
✍🏻 rename : 
이름을 변경했어요!
 
🎨 style : 
UI를 수정해요! (css작업)

<br/>

## 🤼‍♀️ 팀 구성

|                                  조규준                                  |                                 김지연                                 |                                  현병택                                  |                                윤서림                                |                                김윤성                                |
| :----------------------------------------------------------------------: | :--------------------------------------------------------------------: | :----------------------------------------------------------------------: | :------------------------------------------------------------------: | :------------------------------------------------------------------: |
|               [@ggyu777](https://github.com/ggyu777)               |                [@jytrack64](https://github.com/jytrack64)                |               [@ctaaag](https://github.com/ctaaag)               |                 [@yunseorim1116](https://github.com/yunseorim1116)                 |                 [@dbstjddbwls](https://github.com/dbstjddbwls)                 |
| <img src="https://i.esdrop.com/d/f/QO8Lg44uTN/jI7WF726mq.jpg" width="100"> | <img src="http://file3.instiz.net/data/file3/2019/01/16/3/6/8/368bf7fd300d73d9873ff1c303b603e2.gif" width="100" height="100"> | <img src="https://avatars.githubusercontent.com/ctaaag" width="100"> | <img src="https://postfiles.pstatic.net/MjAyMjA2MjFfMTcx/MDAxNjU1ODEyNjA2MTE2.jRjZyMq2x30kU-C62sj89fXCIlOsrKR_gsaKPatynssg.-DaNg9VjyDy1cBHA-Jkkg9ly3VvldONqnfPKHL-wKjQg.JPEG.tjfla6417/KakaoTalk_20220320_205253673.jpg?type=w580" width="100px" height="100px"/> | <img src="https://avatars.githubusercontent.com/u/37412832?s=400&u=0184907c083c3fbf2e0285b236f4d6c801b7d4a8&v=4" width="100"> |
