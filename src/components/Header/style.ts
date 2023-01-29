import styled from "styled-components";

export const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0f52ba;
  height: 101px;
  padding: 40px;

  button {
    border: none;
    width: 90px;
    height: 45px;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    font-weight: 600;
  }

  @media only screen and (max-width: 800px) {
    height: 50px;
    padding: 30px;

    button {
      width: 70px;
      height: 35px;
    }
  }
`;
