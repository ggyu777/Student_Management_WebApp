import React from "react";
import { useContext, useMemo } from "react";
import styled from "styled-components";
import { ReportMain, Nav } from "../constructors";
import { Context } from "../context/Context";
import { setUserInfo } from "../context/reducer/action";

const Main = () => {
  const { userInfo } = useContext(Context);
  const childrenProps = useContext(Context);

  React.useEffect(() => {
    if (!userInfo) return;
    else{ 
      console.log("userInfo: ", userInfo);
    };
  }, [setUserInfo])
  
  const category = userInfo.SRC_TITLE;

  const sub = category.substring(0, 2);
  const depart = useMemo(() => {
    if (sub === "경찰") {
      return "police";
    } else if (sub === "소방") {
      return "fire";
    } else if (sub === "행정") {
      return "admin";
    }
  }, []);

  return (
    <>
    <Page>
      <Nav depart={depart} />
      <ReportMain />
    </Page>
    </>
  );
};

const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export default Main;
