import React from "react";
import styled from "styled-components";

const SubjectTypho = ({ border, grade, oneside }) => {
  if (border) {
    return (
      <>
        <Border />
        <Container>
          <Title>{grade["과목"]}</Title>
          <Score>{grade["당월점수"]}</Score>점
        </Container>
        {oneside ? null : <Border />}
      </>
    );
  }

  return (
    <Container>
      <Title>{grade["과목"]}</Title>
      <Score>{grade["당월점수"]}</Score>점
    </Container>
  );
};

export default SubjectTypho;

const Container = styled.div`
  font-size: 18px;
  font-weight: 500;
  width: 107px;
  height: 101px;
  color: black;
  text-align: center;
  padding: 13px 0 19px 0;
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: #58a2eb;
  margin-bottom: 13px;
`;

const Score = styled.span`
  display: inline-block;
  font-size: 36px;
  font-weight: 700;
`;

const Border = styled.div`
  height: 76px;
  border-right: 1px solid #c8c8c8;
  margin: 0 24px;

  @media (max-width: 667px) {
    display: none;
  }
`;
