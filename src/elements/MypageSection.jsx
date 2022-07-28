import styled from "styled-components";

const MypageSection = ({ title, subtitle, children }) => {
  return (
    <Section>
      <Header>
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </Header>
      <Main>{children}</Main>
    </Section>
  );
};

export default MypageSection;

const Section = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  border-bottom: 1px solid #d8d8d8;
  padding-bottom: 1.5rem;
  @media screen and (max-width: 667px) {
    padding-bottom: 1rem;
  }

  .title {
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.875rem;
    display: flex;
    align-items: center;
    color: #1b1b1b;
    width: 125px;
    @media screen and (max-width: 667px) {
      font-size: 1.5rem;
      line-height: 2.172rem;
      width: 90px;
    }
  }
  .subtitle {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.063rem;
    display: flex;
    align-items: center;
    color: #6a6a6a;
    margin-top: 0.5rem;
    @media screen and (max-width: 667px) {
      font-size: 0.625rem;
      line-height: 0.905rem;
    }
  }
`;
const Main = styled.div`
  position: relative;
  width: 100%;
  margin-top: ${(56 / 1512) * 100 + "vw"};
`;
