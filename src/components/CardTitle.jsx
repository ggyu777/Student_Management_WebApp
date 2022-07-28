import React from "react";
import styled from "styled-components";
import { cardtitle_icon } from "../assets/";

export default function CardTitle(props) {
  return (
    <CardHead mapWidth={props.mapWidth} mapMargin={props.mapMargin}>
      <li>{props.title}</li>
      {props.first && <li>{props.first}</li>}
      {props.second && <li>{props.second}</li>}
    </CardHead>
  );
}

const CardHead = styled.ul`
  display: flex;
  width: ${props => props.mapWidth || '100%'};
  margin-bottom: ${props => props.mapMargin || '16px'};
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.0156em;
  color: #6a6a6a;

  li {
    display: flex;
    align-items: center;
    user-select: none;

    &::after {
      content: "";
      background-image: url(${cardtitle_icon});
      background-size: cover;
      display: block;
      height: 13px;
      width: 8px;
      margin: 0 8px;

      @media (min-width: 768px) {
        margin: 0 14px;
      }
    }

    &:first-child {
      font-size: 14px;
      color: #000000;

      @media (min-width: 768px) {
        font-size: 20px;
        line-height: 30px;
      }
    }
    &:last-child {
      margin: 0;

      &::after {
        display: none;
      }
    }
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: ${props => props.mapMargin || '32px'};
  }
  @media (min-width: 900px) {
    margin-bottom: 0;
  }
`;
