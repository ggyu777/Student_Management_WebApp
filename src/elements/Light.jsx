import styled from "styled-components";
import { useState } from "react";
import { light_off, light_on } from "../assets/index";
export default function Light({
  top,
  left,
  highLightWidth,
  highLightWidth2,
  highLightTop,
  highLightTop2
}) {
  const [light, setLight] = useState(true);
  return (
    <>
      <Lamp
        className="light"
        onClick={() => {
          setLight(!light);
        }}
        top={top}
        left={left}
      >
        {light ? (
          <img src={light_on} alt="LAPM_ON" top={top} left={left} />
        ) : (
          <img src={light_off} alt="LAPM_OFF" top={top} left={left} />
        )}
      </Lamp>
      <HighLigth
        top={highLightTop}
        top2={highLightTop2}
        width={highLightWidth}
        width2={highLightWidth2}
      />
    </>
  );
}

const Lamp = styled.div`
  position: absolute;
  top: ${props => props.top + "rem"};
  left: ${props => props.left + "rem"};
  cursor: pointer;
  z-index: 5;
  img {
    height: 7rem;
  }
  @media screen and (max-width: 668px) {
    top: ${props => props.top - 0.1 + "rem"};
    left: ${props => props.left + "rem"};
    img {
      height: 6rem;
    }
  }
`;

const HighLigth = styled.div`
  position: absolute;
  width: ${props => props.width + "rem"};
  border: 4px solid rgba(247, 192, 15, 0.4);
  border-radius: 3px;
  top: ${props => props.top - 0.625 + "rem"};
  @media screen and (max-width: 668px) {
    width: ${props => props.width2 - 1.3 + "rem"};
    top: ${props => props.top2 - 1.3 + "rem"};
  }
`;
