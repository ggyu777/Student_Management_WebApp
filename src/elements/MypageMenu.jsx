import styled from "styled-components";

const MypageMenu = ({ children, menuClick }) => {
  return (
    <MenuLi
      onClick={e => {
        menuClick(e);
      }}
    >
      {children} <img src="../src/assets/arrow_right.png" alt="ARROWRIGHT" />{" "}
    </MenuLi>
  );
};

const MenuLi = styled.div`
  height: ${(50 / 1512) * 100 + "vw"};
  display: flex;
  align-items: center;
  justify-content: right;
  font-weight: 500;
  font-size: ${(18 / 1512) * 100 + "vw"};
  line-height: ${(26 / 1512) * 100 + "vw"};
  text-align: right;
  color: #1b1b1b;
  img {
    width: ${(20 / 1512) * 100 + "vw"};
    margin-left: ${(10 / 1512) * 100 + "vw"};
    margin-right: ${(10 / 1512) * 100 + "vw"};
  }
`;

export default MypageMenu;
