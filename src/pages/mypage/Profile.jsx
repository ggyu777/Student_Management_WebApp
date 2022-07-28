import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MypageSection from "../../elements/MypageSection";
import Light from "../../elements/Light";
import { Context } from "../../context/Context";
import { LogOut } from "../../context/reducer/action";

const Profile = () => {
  const { userInfo, dispatch } = useContext(Context);
  const navigate = useNavigate();

  if (!userInfo) return null;

  const { MEM_NAME, MEM_BIRTH_DATE, MEM_ADDRESS1, MEM_ADDRESS2, MEM_MOBILE } =
    userInfo;
  const [year, month, day] = MEM_BIRTH_DATE.split(" ")[0].split("-");

  return (
    <>
      <Light
        top={0}
        left={-0.6}
        highLightWidth={7.4}
        highLightWidth2={7.4}
        highLightTop={7.3}
        highLightTop2={7.3}
      />
      <MypageSection title="기본정보" subtitle="개인정보를 확인하세요.">
        <Info>
          <div className="info-box">
            <div className="name">
              <div className="title">이름</div>
              <div className="box">
                <span>{MEM_NAME}</span>
              </div>
            </div>
            <div className="phone">
              <div className="title">휴대폰</div>
              <div className="box">
                <span>{MEM_MOBILE}</span>
              </div>
            </div>
            <div className="adress">
              <div className="title">주소</div>
              <div className="box">
                <span>{MEM_ADDRESS1 + MEM_ADDRESS2}</span>
              </div>
            </div>
            <div className="birthday">
              <div className="title">생년월일</div>
              <div className="box">
                <span>{year}</span>년 <span>{month}</span>월 <span>{day}</span>
                일
              </div>
            </div>
          </div>
          <div className="btn-box">
            <button>
              <a
                href="https://kimcodi.kr/p/member/login-new?rUrl=https://kimcodi.kr/p/product/submain-1"
                target="_blank"
              >
                변경하러 가기
              </a>
            </button>
            <p>클릭시 올라에듀 홈페이지로 이동합니다.</p>
          </div>
          <LogOutLink
            onClick={e => {
              e.preventDefault();
              dispatch(LogOut());
              navigate("/");
            }}
          >
            로그아웃
          </LogOutLink>
        </Info>
      </MypageSection>
    </>
  );
};

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 8px 22px -6px rgba(24, 39, 75, 0.12),
    0px 14px 64px -4px rgba(24, 39, 75, 0.12);
  margin-bottom: ${(92 / 982) * 100 + "vh"};
  & > .info-box {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.448rem;
    color: #6a6a6a;
    margin: ${(56 / 1512) * 100 + "vw"} ${(16 / 1512) * 100 + "vw"};
    .birthday {
      margin-bottom: 0;
    }
    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      margin-bottom: ${(32 / 1512) * 100 + "vw"};
      .box {
        width: 332px;
        height: auto;
        background: #d8d8d8;
        border-radius: 5px;
        padding: 0 ${(16 / 1512) * 100 + "vw"};
        text-align: left;
        padding: 0.3rem 0.7rem;
      }
      & > div {
        width: 6.25rem;
        text-align: right;
        padding-right: ${(20 / 1512) * 100 + "vw"};
      }
      @media screen and (max-width: 667px) {
        flex-direction: column;
        align-items: flex-start;
        .box {
          width: 70vw;
        }
        .title {
          text-align: left;
          margin-bottom: 8px;
        }
      }
    }
  }
  & > .btn-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px 21px;
      border: none;
      width: 138px;
      height: 42px;
      background: #f7c00f;
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 500;
      font-size: 14.015px;
      line-height: 20px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #1b1b1b;
      border-radius: 4px;
    }
    p {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 17px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #6a6a6a;
      margin-top: 16px;
    }
  }
`;

const LogOutLink = styled.a`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-decoration: underline;
  cursor: pointer;
  color: #5358cb;
  margin: ${(30 / 1512) * 100 + "vw"} 0;
`;

export default Profile;
