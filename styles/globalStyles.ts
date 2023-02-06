import { normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import {color} from "@/styles/color";

const GlobalStyle = createGlobalStyle`
${normalize}

/** Fonts **/

@font-face {
  font-family: "Untitled Sans";
  src: local("Untitled Sans"), url("/fonts/UntitledSans.woff2") format("woff2");
}

/* @font-face {
  font-family: "Archivo";
  src: local("Archivo"), url("/fonts/Archivo/Archivo-Medium.woff") format("woff");
} */

/** Defaults **/

html,body, #root {
  font-family: 'Untitled Sans', sans-serif;
  font-weight: 400;
  background-color:${color.grey1};
  // transition: all .1s ease-out; // Option for faded intro?
  height:100%;
  /*
  }
  next can be declared only for body but won't hurt if both html/body
  body {
  */
  display:flex;
  flex-flow:column;
}
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

/** Input Fields **/
input:focus, textarea:focus, select:focus{
        outline: none;
    }

    a{
      color: inherit;
    }
`;


export default GlobalStyle;
