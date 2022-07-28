import React from "react";
import styled from "styled-components";

const NoneData = () => {
  return <Div>해당 데이터가 존재하지 않습니다 🥲</Div>;
};

const Div = styled.div`
  font-size: 18px;
  align-items: center;
  height: 300px;
  display: flex;
  justify-content: center;
`;
export default NoneData;
