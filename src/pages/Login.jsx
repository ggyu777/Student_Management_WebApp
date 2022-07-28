import { useState, useContext } from "react";
import styled from "styled-components";
import { Login_image, Logo_new } from "../assets";
import { Context } from "../context/Context";
import { tryLogin } from "../context/reducer/action";
import LoginErrorModal from "../components/LoginErrorModal";

const Login = () => {
  const { error, dispatch } = useContext(Context);
  const [user, setUser] = useState({ id: "", pw: "" });

  const handleInputId = e => {
    setUser({ ...user, id: e.target.value });
  };

  const handleInputPw = e => {
    setUser({ ...user, pw: e.target.value });
  };

  const removeInputValue = () => {
    setUser({ id: "", pw: "" });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (user.id === "" || user.pw === "") {
      alert("아이디와 비밀번호를 입력하세요");
    } else {
      dispatch(tryLogin(user));
    }
  };

  return (
    <LoginPage>
      <LoginImg>
        <img src={Login_image} alt="Login_image" />
      </LoginImg>
      <LoginSection>
        <Form onSubmit={handleSubmit}>
          <Logo src={Logo_new} alt="logo" />
          <Input
            type="text"
            placeholder="아이디"
            value={user.id}
            onChange={handleInputId}
          />
          <Input
            type="password"
            placeholder="비밀번호"
            value={user.pw}
            onChange={handleInputPw}
          />
          <Button type="submit">로그인</Button>
          <Span>아이디, 비밀번호 찾기는 홈페이지에서 이용 부탁드립니다.</Span>
        </Form>
      </LoginSection>
      {error && <LoginErrorModal onRemoveInputValue={removeInputValue} />}
    </LoginPage>
  );
};

export default Login;

const LoginPage = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

const LoginImg = styled.div`
  img {
    height: 100%;
  }
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

const LoginSection = styled.div`
  margin: auto;
`;

const Form = styled.form`
  padding: 5.5px 0;
  margin: auto;
  width: 334px;
  height: 293px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  @media screen and (max-width: 667px) {
    padding: 0;
    width: 291px;
    height: 224px;
  }
`;

const Logo = styled.img`
  width: 142px;
  margin: 0 auto;
`;

const Input = styled.input`
  height: 39px;
  border-radius: ${39 / 2}px;
  border: 1px solid #d8d8d8;
  background-color: #f5f5f5;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 400;
  @media screen and (max-width: 667px) {
    height: 29px;
    border-radius: ${29 / 2}px;
    font-size: 12px;
    padding: 7px 14px;
  }
`;

const Button = styled.button`
  font-family: "Noto Sans KR", sans-serif;
  border: none;
  height: 55px;
  border-radius: ${55 / 2}px;
  background-color: #032164;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 667px) {
    height: 40px;
    border-radius: ${40 / 2}px;
    font-size: 1.125rem;
  }
`;

const Span = styled.span`
  font-size: 0.75rem;
  font-weight: 400;
  color: #6a6a6a;
  @media screen and (max-width: 667px) {
    font-size: 0.5rem;
  }
`;
