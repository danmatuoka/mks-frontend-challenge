import styled from "styled-components";

export const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 218px;
  height: 285px;
  border-radius: 5px;
  box-shadow: 0px 0px 8px 1px rgba(168, 168, 168, 1);

  h3 {
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    color: #2c2c2c;
  }

  p {
    font-size: 10px;
    font-weight: 300;
    line-height: 12px;
    color: #2c2c2c;
  }

  button {
    width: 100%;
    border: none;
    height: 36px;
    background-color: #0f52ba;
    border-radius: 0px 0px 8px 8px;
    color: white;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 1px;
  }
`;
