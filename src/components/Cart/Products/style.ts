import styled from "styled-components";

export const DivAside = styled.div`
  display: flex;
  padding: 15px;
  width: 100%;
  justify-self: flex-start;
  position: relative;

  .btn-card-cart {
    height: 18px;
    width: 18px;
    background-color: black;
    border-radius: 50%;
    border: none;
    color: white;
    font-size: 8px;
    position: absolute;
    right: 8px;
    top: 5px;
  }
  @media only screen and (max-width: 800px) {
    .btn-card-cart {
      background-color: white;
      color: black;
      height: 30px;
      width: 30px;
      font-size: 20px;
      right: 20px;
      top: 20px;
    }
  }
`;

export const DivContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  width: 100%;
  padding: 15px;
  border-radius: 8px;

  p {
    font-weight: 700;
    font-size: 14px;
  }

  @media only screen and (max-width: 800px) {
    flex-direction: column;

    p {
      font-weight: 400;
    }
  }
`;

export const NameText = styled.p`
  font-size: 13px;
  width: 70px;

  @media only screen and (max-width: 800px) {
    width: 100%;
    text-align: center;
    font-weight: 300;
  }
`;

export const DivLabel = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #bfbfbf;
  border-radius: 8px;
  padding: 3px;

  label {
    position: absolute;
    font-size: 8px;
    top: -15px;
    left: 2px;

    @media only screen and (max-width: 800px) {
      display: none;
    }
  }
`;

export const DivQt = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px;
  gap: 15px;

  span {
    border-left: 1px solid #bfbfbf;
    border-right: 1px solid #bfbfbf;
    font-size: 13px;
    width: 25px;
    text-align: center;
  }

  @media only screen and (max-width: 800px) {
    gap: 25px;
    p {
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
`;

export const BtnCheck = styled.button`
  border: none;
  padding: 3px 6px 3px 6px;
  background-color: white;
`;
