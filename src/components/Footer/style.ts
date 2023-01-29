import styled from "styled-components";

export const DivFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  height: 40px;
  background-color: #eeeeee;

  p {
    font-size: 12px;
  }
  @media only screen and (max-width: 800px) {
    position: fixed;
    bottom: 0;
  }
`;
