import { normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import {color} from "@/styles/color";

const GlobalStyle = createGlobalStyle`
${normalize}

/** Fonts **/

@font-face {
  font-family: "Open Sans";
  src: local("Open Sans"), url("/fonts/OpenSans.ttf") format("ttf");
}

/* @font-face {
  font-family: "Archivo";
  src: local("Archivo"), url("/fonts/Archivo/Archivo-Medium.woff") format("woff");
} */

/** Defaults **/

html,body, #root {
  font-family: 'Open Sans', sans-serif;
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
`;


export default GlobalStyle;
