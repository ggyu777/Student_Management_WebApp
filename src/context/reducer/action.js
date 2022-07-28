export const setData = data => ({
  type: "LOAD_DATA",
  payload: data
});

export const setLoading = isLoad => ({
  type: "SET_LOADING",
  payload: isLoad
});

export const setLogin = isLogin => ({
  type: "SET_LOGIN",
  payload: isLogin
});

export const setError = error => ({
  type: "SET_ERROR",
  payload: error
});

export const setUserInfo = userInfo => ({
  type: "SET_USERINFO",
  payload: userInfo
});

export const LogOut = () => {
  sessionStorage.clear();
  return {
    type: "LOGOUT"
  };
};

export const loadData = () => async (dispatch, state, navigate) => {
  dispatch(setLoading(true));

  const id = JSON.parse(sessionStorage.getItem("userId"));
  const data = await fetch(
    `https://kimcodi.kr/external_api/report/resultSearch.php?mem_id=${id}`
  )
    .then(res =>{ 
      return res.json();
    })
    .then(data => data.result)
    .catch(error => console.log(error));

  if (!data.length) {
    navigate("/noresult");
    return;
  }

  const groups = data.reduce((groups, list) => {
    const date = list["응시년월"];
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(list);
    return groups;
  }, {});

  const 응시월 = Object.keys(groups);

  const 응시내역 = 응시월.reduce((group, key) => {
    groups[key].forEach(grade => {
      const 응시년월 = key;
      if (!group[응시년월]) {
        group[응시년월] = {};
      }

      const 시험명 = grade["시험명"];
      if (!group[응시년월][시험명]) {
        group[응시년월][시험명] = [];
      }
      group[응시년월][시험명].push(grade);
    });

    return group;
  }, {});

  const 년월 = 응시월.reduce((group, yymm) => {
    const [year, month] = yymm.match(/.{1,4}/g);

    if (!group[year]) {
      group[year] = [];
    }

    group[year].push(month);
    return group;
  }, {});

  const 년 = Object.keys(년월);
  dispatch(setData({ 응시월, 응시내역, 년월, 년 }));
  dispatch(setLoading(false));
};

export const tryLogin = userData => async (dispatch, state, navigate) => {
  dispatch(setLoading(true));

  const { id, pw } = userData;

  try {
    const response = await fetch(
      "https://kimcodi.kr/external_api/report/login.php",
      {
        method: "POST",
        body: JSON.stringify({
          api_key: "EZVrTC4VVKNeeGQ7wbxdP4NzMNpgEmC2",
          user_id: id,
          user_pw: pw
        })
      }
    ).then(res => res.json());

    if (response.success === "true") {
      sessionStorage.setItem("userId", JSON.stringify(id));
      dispatch(setLogin(true));
      dispatch(setUserInfo(response.result[0]));
      navigate("/report/monthly");
      return;
    } else {
      dispatch(setError(response.msg));
    }
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error));
    dispatch(setLoading(false));
  }
};
