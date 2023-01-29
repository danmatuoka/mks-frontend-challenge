import styled from "styled-components";

export const DivHome = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const DivShow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 980px;
  max-height: 601px;
  margin: 80px auto;

  @media only screen and (max-width: 800px) {
    justify-content: center;
    margin: 0 auto;
    height: 100%;
    max-height: 100%;
    margin-bottom: 60px;
  }
`;
