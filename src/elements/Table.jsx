import React from "react";
import styled from "styled-components";
import { Ad, Au } from "../assets";
const Table = ({ grade }) => {
  const slice = grade.slice(1, grade.length);

  return (
    <Tb>
      <thead>
        <Tr>
          <Th>과목명</Th>
          <Th>순위</Th>
          <Th>전월점수</Th>
          <Th>당월점수</Th>
          <Th>증감</Th>
          <Th>당월 목표</Th>
          <Th>달성도</Th>
          <Th>익월 목표</Th>
        </Tr>
      </thead>
      <tbody>
        {grade.map(score => {
          const {
            과목,
            달성도,
            당월목표,
            당월점수,
            순위,
            익월목표,
            증감,
            전월점수
          } = score;
          return (
            <Tr key={과목}>
              <Td>{과목}</Td>
              <Td>{순위}</Td>
              <Td>{전월점수}</Td>
              <Td>{당월점수}</Td>
              <Td>
                {Number(증감) > 0 ? (
                  <Icon src={Au} alt="arrow up image" />
                ) : (
                  <Icon src={Ad} alt="arrow down image" />
                )}
                {증감}
              </Td>
              <Td>{당월목표}</Td>
              <Td>{달성도}</Td>
              <Td>{익월목표}</Td>
            </Tr>
          );
        })}
      </tbody>
    </Tb>
  );
};

export default Table;

const Tb = styled.table`
  font-size: 0.643rem;
  font-weight: 400;

  @media (max-width: 991px) {
    Th:nth-child(8) {
      display: none;
    }

    Td:nth-child(8) {
      display: none;
    }

    Th:nth-child(7) {
      display: none;
    }

    Td:nth-child(7) {
      display: none;
    }
  }

  @media (max-width: 667px) {
    Th:nth-child(6) {
      display: none;
    }

    Td:nth-child(6) {
      display: none;
    }
    Th:nth-child(5) {
      display: none;
    }

    Td:nth-child(5) {
      display: none;
    }
  }

  @media (max-width: 449px) {
    Th:nth-child(3) {
      display: none;
    }

    Td:nth-child(3) {
      display: none;
    }
  }
`;

const Tr = styled.tr`
  display: flex;
  border-bottom: 0.125em solid #e6e7e9;

  &:nth-child(odd) {
    background-color: #f5f5f5;
  }

  &:nth-child(even) {
    background-color: #fff;
  }
`;

const Th = styled.th`
  background-color: #6464a5;
  width: 80px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 0.375em 0.813em;
  white-space: nowrap;
`;

const Td = styled.td`
  width: 80px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;
