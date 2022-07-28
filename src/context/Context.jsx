import { createContext, useEffect } from "react";
import reducer from "./reducer/reducer";
import { loadData } from "./reducer/action";
import { useMwReducer } from "../hooks";
import INITIAL_STATE from "./store";

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useMwReducer(reducer, INITIAL_STATE);
  useEffect(() => {
    sessionStorage.setItem("isLogin", JSON.stringify(state.isLogin));
    sessionStorage.setItem("userInfo", JSON.stringify(state.userInfo));
    console.log("데이터 호출 시도");
    if (state.isLogin || state.userInfo) {
      console.log("getting fetch");
      dispatch(loadData());
    }
  }, [state.isLogin, state.userInfo]);

  return (
    <Context.Provider
      value={{
        data: state.data,
        userId: state.userId,
        isLoading: state.isLoading,
        isLogin: state.isLogin,
        error: state.error,
        userInfo: state.userInfo,
        dispatch: dispatch
      }}
    >
      {children}
    </Context.Provider>
  );
};
