import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  background-color: #F9F9F9;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
    cursor: pointer;
}

button:hover {
    opacity: 0.8;
    transition: 300ms;
}

`;
