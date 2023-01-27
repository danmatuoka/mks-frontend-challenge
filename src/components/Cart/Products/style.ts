import styled from "styled-components";

export const DivAside = styled.div`
  display: flex;
  padding: 15px;
  width: 100%;
  justify-self: flex-start;
`;

export const DivContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  width: 100%;
  padding: 15px;
  border-radius: 8px;
`;

export const NameText = styled.p`
  font-size: 13px;
`;

export const DivQt = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #bfbfbf;
  border-radius: 8px;
  padding: 3px;

  span {
    border-left: 1px solid #bfbfbf;
    border-right: 1px solid #bfbfbf;
    font-size: 13px;
    width: 25px;
    text-align: center;
  }
`;

export const BtnCheck = styled.button`
  border: none;
  padding: 3px 6px 3px 6px;
  background-color: white;
`;
