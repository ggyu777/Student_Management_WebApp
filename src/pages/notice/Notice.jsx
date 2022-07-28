import styled from "styled-components";
import { useState, createContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NoticeBoard from "./NoticeBoard";
import NoticeDetail from "./NoticeDetail";

export const NoticeContext = createContext();

export const Notice = () => {
  const [noticeList, setNoticeList] = useState([{}]);

  const getNotice = async (a, b) => {
    const response = await fetch(
      `https://kimcodi.kr/external_api/report/notice.php?start=${a}&end=${b}`
    )
      .then(res => res.json())
      .then(res => res.result)
      .then(res => {
        noticeList.length === 1
          ? setNoticeList(res)
          : setNoticeList(noticeList.concat(res));
      });
  };

  useEffect(() => {
    getNotice(1, 10);
  }, []);

  return (
    <Page>
      <NoticeContext.Provider value={noticeList}>
        <div>
          <NoticeBoard data={noticeList} getNotice={getNotice} />
        </div>
        <Routes>
          <Route path="main" element={<NoticeDetail />} />
          <Route path="main/:id" index element={<NoticeDetail />} />
        </Routes>
      </NoticeContext.Provider>
    </Page>
  );
};

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  width: 100vw;
  position: relative;
  overflow-y: auto;
  margin-bottom: 2.5rem;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  overflow: visible;
`;
