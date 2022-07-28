import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";
import { FilledStar, UnfilledStar } from "../assets";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/Context";
import { getClass, getSubject } from "../utils";

const Rating = () => {
  const [star, setStar] = useState({});
  const navigate = useNavigate();
  const { userInfo } = useContext(Context);

  const subject = getSubject(getClass(userInfo["SRC_TITLE"]));

  useEffect(() => {
    const id = JSON.parse(sessionStorage.getItem("userId"));

    const sendStar = async () => {
      const key = Object.keys(star);

      if (key.length === 3) {
        await fetch(
          `https://kimcodi.kr/external_api/report/putStarRating.php?userid=${id}&${
            key[0].tag
          }=${star[key[0]]}&${key[1].tag}=${star[key[1]]}&${key[2].tag}=${
            star[key[2]]
          }`
        );
      }

      if (key.length === 5) {
        await fetch(
          `https://kimcodi.kr/external_api/report/putStarRating.php?userid=${id}&${
            key[0].tag
          }=${star[key[0]]}&${key[1].tag}=${star[key[1]]}&${key[2].tag}=${
            star[key[2]]
          }&${key[3].tag}=${star[key[3]]}&${key[4].tag}=${star[key[4]]}`
        );
      }

      navigate("/report/monthly");
    };

    if (Object.keys(star).length === subject.length) {
      sendStar();
    }
  }, [star]);
  return (
    <Page>
      <Question>모의고사 난이도는 어땠나요?</Question>
      <SubText>성적 열람을 위해 난이도 평가를 먼저 진행해주세요.</SubText>
      <CardContainer>
        {subject.map((list, idx) => (
          <Card key={list.title}>
            <Title>{list.title}</Title>
            <SubTitle>{list.teacher}</SubTitle>

            <ReactStars
              size={50}
              onChange={newRating => {
                const title = list.title;
                const obj = {};
                obj[title] = newRating;
                setStar({ ...star, ...obj });
              }}
              emptyIcon={<Icon src={UnfilledStar} />}
              filledIcon={<Icon src={FilledStar} />}
            />
          </Card>
        ))}
      </CardContainer>
    </Page>
  );
};

export default Rating;

const Page = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  background-color: rgba(77, 77, 77, 0.62);
  display: flex;
  justify-content: center;
  padding-bottom: 508px;

  @media (max-width: 667px) {
    padding-bottom: 136px;
  }
`;

const Icon = styled.img`
  width: 48p;
  height: 48px;
`;

const Card = styled.div`
  width: ${(384 / 1512) * 100}vw;
  min-width: 260px;
  height: 194px;
  border-radius: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;

  @media (max-width: 991px) {
    width: 384px;
  }

  @media (max-width: 480px) {
    width: 320px;
  }
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  margin-top: 20px;
`;

const SubTitle = styled.div`
  font-weight: 300;
  font-size: 12px;
  line-height: 17px;
  margin-bottom: 33px;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 24px;
  margin: 356px auto 0 auto;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 991px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const Question = styled.h2`
  position: absolute;
  top: 174px;
  left: ${(189 / 1512) * 100}vw;
  font-weight: 700;
  font-size: 48px;
  font-style: normal;
  line-height: 24px;
  color: #fff;

  @media (max-width: 667px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const SubText = styled.p`
  position: absolute;
  top: 243px;
  left: ${(189 / 1512) * 100}vw;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: #fff;

  @media (max-width: 667px) {
    display: flex;
    white-space: normal;
    font-size: 16px;
  }
`;
