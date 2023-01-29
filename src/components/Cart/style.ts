import styled from "styled-components";

export const ContainerAside = styled.aside`
  width: 420px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: -100%;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #0f52ba;
  box-shadow: 0px 0px 8px 1px;
  transition: 850ms;
  transition-timing-function: ease-in-out;

  &.active {
    right: 0;
    transition: 550ms;
  }

  @media only screen and (max-width: 800px) {
    width: 320px;
  }
`;

export const DivTitle = styled.div`
  display: flex;
  padding: 20px;
  width: 100%;
  height: 80px;
  justify-content: space-between;
  align-items: center;

  p {
    color: white;
    font-weight: 600;
    font-size: 18px;
  }

  button {
    background-color: black;
    border: none;
    width: 38px;
    height: 38px;
    border-radius: 100%;
    font-size: 14px;
    color: white;
  }
`;

export const DivCartProducts = styled.div`
  width: 100%;
  bottom: 0;
  position: absolute;
`;

export const DivTotal = styled.div`
  display: flex;
  padding: 20px;
  width: 100%;
  justify-content: space-between;
  color: white;
  font-weight: 600;
`;

export const BtnCart = styled.button`
  background-color: black;
  border: none;
  width: 100%;
  height: 50px;
  font-size: 18px;
  color: white;
  font-weight: 600;
`;
