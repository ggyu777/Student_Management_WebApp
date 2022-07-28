import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { NoticeContext } from "./Notice";
import { useContext, useState, useEffect, useRef, useCallback } from "react";
import { notice_arrow } from "../../assets";
import Attachment from "../../components/slider/Attachment";

const NoticeDetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const noticeList = useContext(NoticeContext);
  const [notice, setNotice] = useState({});
  const scrollRef = useRef();

  useEffect(() => {
    setNotice(noticeList[0]);
  }, [noticeList[0]]);

  useEffect(() => {
    if (params.id) setNotice(noticeList[params.id]);
    scrollRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end"
    });
  }, [params.id]);

  const htmlDecode = text => {
    const e = document.createElement("div");
    e.innerHTML = text;
    return e.childNodes[0].nodeValue ? e.childNodes[0].nodeValue : text;
  };

  return (
    <Notice
      params={params["*"] === "main" || params["*"] === "main/" ? true : false}
    >
      <Button
        onClick={() => {
          navigate(-1);
        }}
      >
        <img src={notice_arrow} alt="arrow_left" />
      </Button>
      <H2 ref={scrollRef}>{notice.NTC_TITLE}</H2>
      <Span>
        <Author>{notice.REG_ID}</Author>
        <Date>{notice.REG_DATE}</Date>
      </Span>
      {notice.FLA_ORG_NAME && (
        <Attachment
          orgName={notice.FLA_ORG_NAME}
          saveName={notice.FLA_SAVE_NAME}
          path={notice.FLA_SAVE_PATH}
          ext={notice.FLA_EXT}
        />
      )}
      <P
        dangerouslySetInnerHTML={{
          __html: htmlDecode(notice.NTC_CONTENTS)
        }}
      ></P>
      <Img src={notice.image} alt={notice.title} />
    </Notice>
  );
};

export default NoticeDetail;

const Notice = styled.div`
  font-family: Noto Sans KR;
  padding: 1.25rem;
  margin-right: 1rem;
  margin-top: 2.5rem;
  width: ${(1100 / 1512) * 100 + "vw"};
  height: ${(846 / 982) * 100 + "vh"};
  box-shadow: 0rem 0.5rem 1.375rem -0.375rem rgba(24, 39, 75, 0.12),
    0rem 0.875rem 4rem -0.25rem rgba(24, 39, 75, 0.12);
  background-color: #ffffff;
  border-radius: 10px;
  overflow-y: scroll;
  color: #1b1b1b;
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 991px) {
    display: ${props => (props.params ? "none" : "block")};
    width: 96vw;
    height: 100vh;
    margin-right: 0;
  }

  @media screen and (max-width: 667px) {
    width: 100vw;
    margin-top: 0;
    border-radius: 0;
    box-shadow: none;
  }
`;

const Button = styled.button`
  display: none;
  border: none;
  padding: 0;
  background-color: transparent;
  margin-bottom: 0.625rem;
  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 991px) {
    display: inline-block;
  }
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.625rem;
  @media screen and (max-width: 667px) {
    font-size: 1rem;
  }
`;

const Span = styled.span`
  display: block;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  color: #6a6a6a;
  border-bottom: 1px solid #e8e8e8;
  margin-bottom: 1.25rem;
  div {
    margin-bottom: 0.3125rem;
    @media screen and (max-width: 991px) {
      margin-bottom: 0;
    }
    @media screen and (max-width: 667px) {
      margin-bottom: 0.25rem;
    }
  }
`;

const Author = styled.div`
  @media screen and (max-width: 667px) {
    font-weight: 500;
  }
`;

const Date = styled.div`
  @media screen and (max-width: 667px) {
    font-weight: 300;
  }
`;

const P = styled.p`
  padding: 0.625rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.125rem;

  @media screen and (max-width: 991px) {
    padding: 0;
  }
`;

const Img = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;
