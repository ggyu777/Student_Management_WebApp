import React from "react";
import styled from "styled-components";
import { Tag, SubjectTypho } from "../elements";

const ScoreList = ({ grade }) => {
  const total = grade.filter(x => x["과목"] === "TOTAL");
  const slice = grade.filter(x => x["과목"] !== "TOTAL");

  return (
    <Container>
      <Tag percent={total[0]["달성도"]} />
      <InnerContainer>
        {slice.map((item, idx) => {
          if (slice.length === 5) {
            if (idx === 1) {
              <SubjectTypho key={item["과목"]} grade={item} border />;
            }

            if (idx === 4) {
              return (
                <SubjectTypho key={item["과목"]} grade={item} border oneside />
              );
            }
          }

          if (idx === 1 || idx === 5) {
            return <SubjectTypho key={item["과목"]} grade={item} border />;
          }

          return <SubjectTypho key={item["과목"]} grade={item} />;
        })}
      </InnerContainer>
    </Container>
  );
};

export default ScoreList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 33px 0 0 0;
`;

const InnerContainer = styled.div`
  width: 419px;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  margin: 13px 0 0 0;

  @media (max-width: 667px) {
    width: 214px;
  }
`;
