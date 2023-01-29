import styled from "styled-components";

export const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 15px;
  align-items: center;
  width: 230px;
  height: 285px;
  padding-top: 10px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 0px 8px 1px rgba(168, 168, 168, 1);

  .title-card {
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: space-between;
    padding: 0px 15px 0px 15px;
    gap: 5px;

    h3 {
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      color: #2c2c2c;
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #373737;
      color: white;
      width: 80px;
      height: 25px;
      border-radius: 8px;
      padding: 8px;
      font-weight: 700;
    }
  }

  p {
    font-size: 10px;
    font-weight: 300;
    line-height: 12px;
    color: #2c2c2c;
    padding: 0px 15px 0px 15px;
    text-align: start;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    -webkit-box-orient: vertical;
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
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;
