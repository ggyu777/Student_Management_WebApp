import React from "react";
import styled from "styled-components";

import { dropdown_icon } from "../../../assets";

const ToggleButton = ({ onClick, padding }) => {
  return (
    <Div>
      <DropDownIcon src={dropdown_icon} onClick={onClick} />
    </Div>
  );
};

const Div = styled.div`
  padding: ${props => props.padding};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DropDownIcon = styled.img`
  cursor: pointer;
  margin: auto;
`;

export default ToggleButton;
