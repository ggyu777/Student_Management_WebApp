import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Report from "../pages/Report";
import Mypage from "../pages/Mypage";
import { Notice } from "../pages/notice/Notice";
import Rating from "../pages/Rating";
import Error from "../pages/Error";
import Noresult from "../pages/NoResult";
import Footer from "./Footer";
import TestByProgress from "../pages/TestByProgress";
import TimeManagement from "../pages/TimeManagement";

const ReportMain = () => {
  return (
    <Main>
      <Routes>
        <Route path="noresult" element={<Noresult />} />
        <Route path="rating" element={<Rating />} />
        <Route path="report/*" element={<Report />} />
        <Route path="notice/*" element={<Notice />} />
        <Route path="mypage/*" element={<Mypage />} />
        <Route path="test/*" element={<TestByProgress />} />
        <Route path="time/*" element={<TimeManagement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: #f5f5f5;
  overflow: auto;
  position: relative;
`;

export default ReportMain;
