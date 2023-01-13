import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const cars = useSelector(selectCars);
  console.log(cars);

  const [burgerShow, setBurgerShow] = useState(false);
  return (
    <Container>
      <a>
        <img src="/tesla-clone-image/logo.svg" />
      </a>

      <Menu>
        {cars &&
          cars.map((car, index) => {
            <a key={index} href="#">
              {car}
            </a>;
          })}
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>{" "}
        <MainMenu
          onClick={() => {
            setBurgerShow(true);
          }}
        />
      </RightMenu>

      <BurgerNav show={burgerShow}>
        <CloseWrap>
          <Close
            onClick={() => {
              setBurgerShow(false);
            }}
          />
        </CloseWrap>
        {cars &&
          cars.map((car, index) => {
            <li key={index}>
              {" "}
              <a href="#">{car}</a>
            </li>;
          })}
        <li>
          <a href="#">Existing Invntory</a>
        </li>
        <li>
          <a href="#">Existing Invntory</a>
        </li>
        <li>
          <a href="#">Existing Invntory</a>
        </li>
        <li>
          <a href="#">Existing Invntory</a>
        </li>
        <li>
          <a href="#">Existing Invntory</a>
        </li>
        <li>
          <a href="#">Existing Invntory</a>
        </li>
        <li>
          <a href="#">Existing Invntory</a>
        </li>
        <li>
          <a href="#">Existing Invntory</a>
        </li>
      </BurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex: 1;

  a {
    padding: 0 10px;
    text-transform: uppercase;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  dispaly: flex;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const MainMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  background: white;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  z-index: 16;
  list-style: none;
  pdding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0.2);
  }

  a {
    font-weight: 600;
  }
`;

const Close = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrap = styled.div`
  text-align: right;
`;
