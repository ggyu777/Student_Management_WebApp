import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import Main from "./pages/Main";
import Login from "./pages/Login";

const App = () => {
  const { isLogin } = useContext(Context);

  return (
    <Routes>
      <Route
        path="/"
        element={isLogin ? <Navigate to="/report/monthly" /> : <Login />}
      />
      <Route path="/*" element={isLogin ? <Main /> : <Navigate to="/" />} />
    </Routes>
  );
};

export default App;
