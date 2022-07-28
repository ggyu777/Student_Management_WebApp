import React from "react";
import { useEffect, useRef, useState } from "react";
import "./ToggleStyle.css";

import styled from "styled-components";
import GradeUnitDetailBox from "./component/GradeUnitDetailBox";

import ToggleButton from "./ToggleButton";
const UnitDetailCorrectRate = ({ detilUnitData }) => {
  const ContentSize = useRef(); //내가 원래 갖고 있는 콘텐츠 사이즈
  const componentSize = useRef([]);
  const [loading, setLoading] = useState(false);
  const [toggleArr, setToggleArr] = useState(
    Object.values(detilUnitData).map(i => false)
  );
  let subTitleArr = [];

  useEffect(() => {
    setLoading(true);
  }, []);

  const onToggleFun = (idx, e) => {
    const newArr = [...toggleArr];
    newArr[idx] = !newArr[idx];
    setToggleArr(newArr);

    if (toggleArr[idx] == true) {
      e.target.style.transform = "rotate(0deg)";
    } else {
      e.target.style.transform = "rotate(180deg)";
    }
  };

  return (
    <>
      {loading ? (
        <ContentBox ref={ContentSize}>
          <div>
            {detilUnitData &&
              Object.values(detilUnitData)?.map((subject, idx) => {
                const mapTitle = subject.filter(el => el.subTitle)[0].subTitle;
                return (
                  <Ul key={`${mapTitle}_${idx}`}>
                    <FlexBox>
                      {subTitleArr.forEach(sub => console.log(sub))}
                      <SubTitle>{mapTitle}</SubTitle>
                      <ToggleBox>
                        <ToggleButton
                          onClick={e => {
                            onToggleFun(idx, e);
                          }}
                          padding="0px"
                        />
                      </ToggleBox>
                    </FlexBox>
                    <div
                      className={toggleArr[idx] ? "show-item" : "hide-item off"}
                      ref={el => (componentSize.current[idx] = el)}
                    >
                      {subject
                        .filter(data => !isNaN(data.avg))
                        .map((data, idx) => {
                          if (data.avg)
                            return (
                              <GradeUnitDetailBox
                                key={`${idx}_${data.FULL_DESCR}`}
                                data={data}
                                idx={idx}
                              />
                            );
                        })}
                    </div>
                  </Ul>
                );
              })}
          </div>
        </ContentBox>
      ) : (
        "로딩중.."
      )}
    </>
  );
};

const FlexBox = styled.div`
  margin-top: 10px;
  display: flex;
`;
const Ul = styled.ul`
  @media (max-width: 900px) {
    max-width: 600px;
  }
`;

const ToggleBox = styled.div`
  margin-top: 3px;
  margin-left: 8px;
`;

const SubTitle = styled.div`
  text-align: left;
  color: #252525;
  height: 40px;
  font-size: 17px;
  font-weight: 700;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ContentBox = styled.div`
  padding: 35px;
`;

const Li = styled.li`
  list-style: none;
  @media (max-width: 768px) {
    /* mobile */
  }

  @media (min-width: 768px) {
    /* tablet */
  }
`;

export default UnitDetailCorrectRate;
