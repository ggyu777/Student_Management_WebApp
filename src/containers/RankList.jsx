import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ProgressBar } from "../elements";
const RankList = ({ grade }) => {
  const total = grade.filter(x => x["과목"] === "TOTAL");
  const slice = grade.filter(x => x["과목"] !== "TOTAL");
  const gradeCount = slice.length === 3;
  const { 시험명, 순위, 응시인원 } = total[0];

  let 만점 = 250;

  if (!gradeCount) {
    만점 = 500;
  }

  useEffect(() => {}, [gradeCount]);

  return (
    <Container padding={gradeCount ? "24px 22px" : "8px 22px"}>
      <TitleConatiner>
        <TyphoGraphy fs="12px" fw={700}>
          총점
        </TyphoGraphy>
        <Absolute>
          <ProgressBar
            bg="rgba(100, 100, 165, 0.8)"
            cg="#6464A5"
            score={순위 / 응시인원}
          />
        </Absolute>
        <TyphoGraphy fs="12px" fw={700}>
          {total[0]["순위"]}등
          <TyphoGraphy fs="10px" fw={300}>
            /{total[0]["응시인원"]}명
          </TyphoGraphy>
        </TyphoGraphy>
      </TitleConatiner>
      <Border top={gradeCount ? "58px" : "41px"} />
      <Ul margin={gradeCount ? "17px" : "9px"}>
        {slice.map(obj => {
          return (
            <Li key={obj["과목"]} margin={gradeCount ? "15px" : "1px"}>
              <TyphoGraphy fs="12px" fw={400}>
                {obj["과목"]}
              </TyphoGraphy>
              <Absolute>
                <ProgressBar score={obj["순위"] / obj["응시인원"]} />
              </Absolute>
              <TyphoGraphy fs="12px" fw={700}>
                {obj["순위"]}등
                <TyphoGraphy fs="10px" fw={300}>
                  /{obj["응시인원"]}명
                </TyphoGraphy>
              </TyphoGraphy>
            </Li>
          );
        })}
      </Ul>
    </Container>
  );
};

export default RankList;

const Container = styled.section`
  position: relative;
  width: 296px;
  height: 100%;
  padding: ${props => props.padding};
  display: flex;
  flex-direction: column;
`;

const TitleConatiner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 249px;
  height: 29px;
  flex-shrink: 0;
`;

const Absolute = styled.div`
  position: absolute;
  right: 62px;
  display: flex;
  align-items: center;
`;

const TyphoGraphy = styled.span`
  font-size: ${props => props.fs};
  font-weight: ${props => props.fw};
  margin: ${props => props.margin};
`;

const Border = styled.div`
  position: absolute;
  top: ${props => props.top};
  left: 0;
  right: 0;
  margin: auto;
  width: 249px;
  border-bottom: 0.5px solid #d8d8d8;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: ${props => props.margin};
`;

const Li = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 29px;
  white-space: nowrap;
  padding: 2.5px 0;

  & + & {
    margin-top: ${props => props.margin};
  }
`;
