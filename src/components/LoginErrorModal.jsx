import { useContext } from "react";
import { setError } from "../context/reducer/action";
import { Context } from "../context/Context";
import styled from "styled-components";

const LoginErrorModal = ({ onRemoveInputValue }) => {
  const { dispatch } = useContext(Context);
  return (
    <ModalContainer>
      <Modal>
        <H3>인증실패</H3>
        <P>아이디 또는 비밀번호가 일치하지 않습니다.</P>
        <Button
          onClick={() => {
            onRemoveInputValue();
            dispatch(setError(null));
          }}
        >
          OK
        </Button>
      </Modal>
    </ModalContainer>
  );
};

export default LoginErrorModal;

const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba(77, 77, 77, 0.62);
`;

const Modal = styled.aside`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 375px;
  height: 174px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #ffffff;
  @media screen and (max-width: 667px) {
    width: 272px;
  }
`;

const H3 = styled.h3`
  background-color: #ff3737;
  padding: 10px 16px;
  color: #ffffff;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.63rem;
  height: 48px;
  @media screen and (max-width: 667px) {
    font-size: 0.875rem;
  }
`;

const P = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  color: #1b1b1b;
  padding: 30px 16px 14px;
  border-bottom: 1px solid #d8d8d8;
  @media screen and (max-width: 667px) {
    font-size: 0.75rem;
  }
`;

const Button = styled.button`
  position: absolute;
  right: 16px;
  bottom: 15px;
  color: #ffffff;
  border: none;
  background-color: #ff3737;
  width: 40px;
  height: 32px;
  border-radius: 5px;
  font-size: 0.75rem;
  font-weight: 700;
  &:hover {
    cursor: pointer;
  }
`;
