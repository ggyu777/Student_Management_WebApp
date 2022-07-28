import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const NavToggleList = ({ list, job, state }) => {
  let location = useLocation();
  let listArr = ["모의고사", "중간종합", "체력증감"];
  let urlArr = ["/report/monthly", "/report/weekly", "/report/physical"];
  if (job === "admin") {
    listArr = ["모의고사", "중간종합"];
    urlArr = ["/report/monthly", "/report/weekly"];
  }
  if (list === "notice") {
    listArr = ["전체공지"];
    urlArr = ["/notice/main"];
  } 
  if (list === "mypage") {
    listArr = ["기본정보", "시간표"];
    urlArr = ["/mypage/main", "/mypage/schedule"];
  }
  if (list === "time") {
    listArr = ["시간활용"];
    urlArr = ["/time"];
  } else if (list === "test") {
    listArr = ["성적확인"];
    urlArr = ["/test"];
  }
  else if (list === "score") {
    listArr = ["진도별테스트"];
    urlArr = ["/score/dailytest", "/score/answerrate"];
  }

  return (
    <ToggleList job={job} className="toggle_list" state={state} arr={listArr}>
      <div className="line"></div>
      {listArr.map((li, i) => {
        return (
          <NavLink
            to={urlArr[i]}
            className={isActive => {
              return urlArr[i] === location.pathname
                ? "navlist selected"
                : "navlist";
            }}
            key={i}
          >
            {li}
          </NavLink>
        );
      })}
    </ToggleList>
  );
};

const ToggleList = styled.div`
  height: ${props => {
    return props.state ? `${props.arr.length * 2.5}rem` : "0";
  }};
  width: 7.875rem;
  position: absolute;
  top: 3.5rem;
  left: 0;
  box-shadow: 0px 8px 22px -6px rgba(24, 39, 75, 0.12),
    0px 14px 64px -4px rgba(24, 39, 75, 0.12);
  z-index: 99;
  border-radius: 0 0 0.625rem 0.625rem;
  background-color: #fff;
  transition: height 0.4s ease-out;
  overflow: hidden;
  .navlist {
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #032164;
    :hover {
      color: #032164;
      background-color: #f1f3ff;
    }
    &.selected {
      background-color: #ffcb60;
    }
  }
  .line {
    position: absolute;
    border: 1px solid #f7c00f;
    top: ${(1 / 12) * 100 + "%"};
    left: ${(14 / 126) * 100 + "%"};
    width: ${(1 / 1512) * 100 + "vw"};
    height: ${(10 / 12) * 100 + "%"};
    border-radius: 1px;
  }
  @media screen and (max-width: 991px) {
    width: 6.25rem;
  }
`;

export default NavToggleList;
