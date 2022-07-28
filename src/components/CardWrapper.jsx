import React from "react";
import styled from "styled-components";
import { Card } from "../elements";
import { Star } from "../assets";

const CardWrapper = ({
  width = "18.5em",
  height = "13em",
  title,
  children,
  padding = "none",
  star = true,
  // max
}) => {
  return (
    // <Article max={max}>
    <>
      {title &&
        <TitleContainer>
          {star ? <StarIcon src={Star} alt="starIcon" /> : null}
          <Title>{title}</Title>
        </TitleContainer>
      }
      <Center>
        <Card width={width} height={height} padding={padding}>
          {children}
        </Card>
      </Center>
    </>
    // </Article>
  );
};

export default CardWrapper;

// const Article = styled.article``;

const TitleContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  white-space: nowrap;
  margin: 0 0 0.688em 0;
`;

const StarIcon = styled.img`
  width: 1.5em;
  height: 1.438em;
  margin-right: 0.25em;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5em;
`;

const Center = styled.div`
  @media (max-width: 667px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
