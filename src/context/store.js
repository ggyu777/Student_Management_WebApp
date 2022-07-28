const INITIAL_STATE = {
  data: [],
  isLoading: false,
  isLogin: JSON.parse(sessionStorage.getItem("isLogin")) || null,
  error: null,
  userInfo: JSON.parse(sessionStorage.getItem("userInfo")) || null
};

export default INITIAL_STATE;
