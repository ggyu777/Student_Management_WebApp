import React, {
  useContext,
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactToPdf from "react-to-pdf";
import styled from "styled-components";
import { Context } from "../context/Context";
import {
  Table,
  IrregularPieGraph,
  TotalGraph,
  SkeletonCircle,
  SkeletonBar,
  ScoreTitle
} from "../elements";
import { CardWrapper, Dropdown } from "../components";
import { RankList, ScoreList } from "../containers";
import Sliders from "../components/slider/Slider";
import { PDFIcon, Runner } from "../assets";
import Light from "../elements/Light";
import NoResult from "./NoResult";

const options = {
  orientation: "p"
};

const Report = () => {
  const pdfRef = useRef();
  const [date, setDate] = useState(null);
  const [grade, setGrade] = useState([]);
  const { data, isLoading, userInfo } = useContext(Context);
  const { 응시월, 응시내역 } = data;
  const location = useLocation().pathname.split("/")[2];
  const navigate = useNavigate();
  const title = useMemo(() => {
    if (location === "monthly") return "모의고사";

    if (location === "weekly") return "중간종합";

    if (location === "physical") return "체력증감";
  }, [location]);

  const selectData = useCallback(selection => {
    setDate(selection);
  }, []);

  const { MEM_NAME } = userInfo;

  useEffect(() => {
    if (Object.keys(data).length !== 0) {
      let selection;
      if (!date) {
        selection = 응시월[응시월.length - 1];
        setDate(selection);
      } else {
        selection = date;
      }

      let category;
      if (title === "모의고사") {
        category = "정규 모의고사";
      } else if (title === "중간종합") {
        category = "중간종합 TEST (평균)";
      } else {
        category = "체력측정 결과";
      }
      setGrade(응시내역[selection][category]);
    }
  }, [data, title, date]);

  if (!data["응시내역"]) {
    return <NoResult />;
  }

  if (!date) {
    return null;
  }

  return (
    <Page>
      <Light
        top={0}
        left={0.5}
        highLightWidth={15.8}
        highLightWidth2={16.8}
        highLightTop={8}
        highLightTop2={9}
      />
      <Section ref={pdfRef}>
        <Title>
          {title}&nbsp;
          <Span>분석</Span>
        </Title>
        {Object.keys(data).length && (
          <DropdownContainer>
            <DropdownWrapper margin="20px">
              <Dropdown arr={응시월} _click={selectData} selected={date} />
            </DropdownWrapper>
            <ReactToPdf
              targetRef={pdfRef}
              filename={`${title}_${date}.pdf`}
              options={options}
              x={5}
              scale={0.8}
            >
              {({ toPdf }) => (
                <CloudIcon src={PDFIcon} alt="download pdf" onClick={toPdf} />
              )}
            </ReactToPdf>
          </DropdownContainer>
        )}

        <Wrapper>
          <Swap1>
            {[date].map((date, idx) => {
              const year = date.substring(0, 4);
              let day = date.substring(4, 6);
              if (day[0] === "0") {
                day = day.split("")[1];
              }

              return (
                <CardWrapper
                  key={idx}
                  width="100%"
                  height="100%"
                  title={`${MEM_NAME} 님의 ${year}년 ${day}월 ${title} 결과`}
                  star={false}
                  children={
                    isLoading || !grade.length ? (
                      <SkeletonCircle />
                    ) : (
                      <>
                        <ResultWrapper>
                          <LeftWrapper>
                            <ScoreTitle grade={grade} />

                            <TotalGraph grade={grade} />
                          </LeftWrapper>
                          <ScoreList grade={grade} />
                          <RunnerIcon src={Runner} />
                        </ResultWrapper>
                      </>
                    )
                  }
                />
              );
            })}
          </Swap1>
          <Swap2>
            <CardWrapper
              width="100%"
              title="과목별 추이"
              children={
                isLoading || !grade.length ? (
                  <SkeletonBar />
                ) : (
                  <>
                    <Sliders grade={grade} />
                  </>
                )
              }
            />
          </Swap2>
          <Swap3>
            <CardWrapper
              width="100%"
              title="순위"
              children={
                isLoading || !grade.length ? (
                  <SkeletonBar />
                ) : (
                  <RankList grade={grade} />
                )
              }
            />
          </Swap3>
          <Swap4>
            <CardWrapper
              width="100%"
              title="과목별 균형"
              children={
                isLoading || !grade.length ? (
                  <SkeletonCircle />
                ) : (
                  <IrregularPieGraph grade={grade} />
                )
              }
            ></CardWrapper>
          </Swap4>
          <Swap5>
            <CardWrapper
              width="100%"
              height="100%"
              padding="28px 26px"
              title="상세 점수 조회"
              children={
                isLoading || !grade.length ? (
                  <SkeletonBar />
                ) : (
                  <Table grade={grade} />
                )
              }
            />
          </Swap5>
          <Swap6>
            <CardWrapper
              width="100%"
              title="시험 총평/강사 코멘트"
              padding="2.5em 2.5em 4.375em 2.5em"
              children={
                isLoading ? (
                  <SkeletonBar />
                ) : (
                  <Paragraph>- 평가가 아직 작성되지 않았습니다.</Paragraph>
                )
              }
            />
          </Swap6>
        </Wrapper>
      </Section>
    </Page>
  );
};

export default Report;

const Page = styled.div`
  position: relative;
  width: auto;
  position: relative;
  box-sizing: border-box;
  margin-bottom: 85px;

  @media (max-width: 991px) {
    padding: 0 16px;
  }

  @media (max-width: 667px) {
    width: 100%;
  }
`;

const Section = styled.section`
  position: relative;
  width: 58.5em;

  @media (max-width: 991px) {
    width: auto;
  }

  @media (max-width: 667px) {
    width: auto;
  }
`;

const DropdownContainer = styled.div`
  position: absolute;
  top: -10px;
  right: 0;
  display: flex;
  align-items: center;

  @media (max-width: 667px) {
    top: -50px;
  }
`;

const CloudIcon = styled.img`
  width: 2.875em;
  height: 1.625em;
`;

const ResultWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  overflow: hidden;
  padding: 33px 0 30px 0;

  @media (max-width: 667px) {
    flex-direction: column;
  }
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RunnerIcon = styled.img`
  position: absolute;
  right: -10px;
  bottom: 0;
  width: 175px;
  height: 175px;
`;

const DropdownWrapper = styled.div`
  width: 72px;
  display: flex;
  align-items: center;
  margin-right: ${props => props.margin};
`;

const Title = styled.h1`
  width: 234px;
  font-size: 40px;
  font-weight: 700;
  line-height: 50px;
  margin: 77px 0 1em 11px;
`;

const Span = styled.span`
  font-weight: 400;
`;

const Wrapper = styled.div`
  background-color: #f5f5f5;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1.5em;
  row-gap: 1.375em;
  grid-template-areas:
    "swap1 swap1 swap1"
    "swap2 swap3 swap4"
    "swap5 swap5 swap5"
    "swap6 swap6 swap6";

  @media (max-width: 991px) {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1.063em;
    grid-template-areas:
      "swap1 swap1 swap1 swap1"
      "swap4 swap4 swap3 swap3"
      "swap2 swap2 swap2 swap2"
      "swap5 swap5 swap5 swap5"
      "swap6 swap6 swap6 swap6";
  }

  @media (max-width: 667px) {
    display: flex;
    flex-direction: column;
  }
`;

const Paragraph = styled.p`
  font-size: 0.75em;
  font-weight: 500;
  max-height: 8.25rem;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Swap1 = styled.div`
  grid-area: swap1;

  @media (max-width: 991px) {
    order: 1;
  }

  @media (max-width: 667px) {
    width: 100%;
  }
`;

const Swap2 = styled.div`
  grid-area: swap2;

  @media (max-width: 991px) {
    order: 4;
  }

  @media (max-width: 667px) {
    width: 100%;
  }
`;
const Swap3 = styled.div`
  grid-area: swap3;

  @media (max-width: 991px) {
    order: 2;
  }

  @media (max-width: 667px) {
    width: 100%;
  }
`;

const Swap4 = styled.div`
  grid-area: swap4;

  @media (max-width: 991px) {
    order: 3;
  }

  @media (max-width: 667px) {
    width: 100%;
  }
`;

const Swap5 = styled.div`
  grid-area: swap5;

  @media (max-width: 991px) {
    order: 5;
  }

  @media (max-width: 667px) {
    width: 100%;
  }
`;

const Swap6 = styled.div`
  grid-area: swap6;

  @media (max-width: 991px) {
    order: 6;
    flex: 1;
  }

  @media (max-width: 667px) {
    width: 100%;
  }
`;
