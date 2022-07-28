import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import GradeSubBox from "./component/GradeSubBox";
import NoneData from "./NoneData";

const SubjectCorrectRate = ({
  allSubData,
  setSelectDate,
  currentFilter,
  BoxSizeRef
}) => {
  useEffect(() => {
    setSelectDate(currentFilter);
  }, [currentFilter]);

  return (
    <>
      {allSubData ? (
        <ContentBox ref={BoxSizeRef}>
          <Ul>
            {allSubData &&
              allSubData
                .sort((a, b) => b.avg - a.avg)
                .map((subData, idx) => {
                  return <GradeSubBox subData={subData} idx={idx} />;
                })}
          </Ul>
        </ContentBox>
      ) : (
        <NoneData />
      )}
    </>
  );
};

const ContentBox = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
  @media (max-width: 900px) {
    margin-top: 0;
  }
`;

const Ul = styled.ul`
  /* padding: 40px; */
  /* width: 100%; */
`;

export default SubjectCorrectRate;
