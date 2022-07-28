const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_DATA":
      return { ...state, data: action.payload };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_LOGIN":
      return { ...state, isLogin: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_USERINFO":
      return { ...state, userInfo: action.payload };
    case "LOGOUT":
      return { ...state, isLogin: false, userInfo: null };
    default:
      return state;
  }
};

export default reducer;
