import { Routes, Route } from "react-router-dom";
import Profile from "../pages/mypage/Profile";

const MypageMain = () => {
  return (
    <Routes>
      <Route path="/mypage/profile" element={<Profile />} />
    </Routes>
  );
};

export default MypageMain;
