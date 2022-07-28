import React from "react";
import styled from "styled-components";
import { Light } from "../elements";

const NoResult = () => {
  return (
    <Section>
      <Container>
        <Light
          top={0}
          highLightWidth={15}
          highLightWidth2={15}
          highLightTop={12}
          highLightTop2={12}
        />
        <ErrorTitle>시험정보가 없습니다</ErrorTitle>
        <ErrorMsg>시험을 응시해주세요</ErrorMsg>
      </Container>
    </Section>
  );
};

export default NoResult;

const Section = styled.section`
  width: 100%;
  padding-bottom: 465px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorTitle = styled.h1`
  font-size: 80px;
  font-weight: 700;
  line-height: 116px;
  color: #d8d8d8;
  margin: 80px 0 0 0;
`;

const ErrorMsg = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #6a6a6a;
  margin-top: 6px;
`;

const Button = styled.div`
  width: 129px;
  height: 30px;
  background: #032164;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 44px;
`;
