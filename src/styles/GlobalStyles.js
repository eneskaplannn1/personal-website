import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


::root {

--color-orange-0 : #e68956;
--color-orange-100 : #e47f47;
--color-orange-200 : #e27438;
--color-orange-300 : #df6a2a;
--color-orange-400: #c95a1e;
--color-orange-500: #ba541c;


--color-white-0 : #fff;
--color-white-100 : #f7f7f7;
--color-white-200 : #eee;
--color-white-300 : #ddd;
--color-white-400: #ccc;
--color-white-500: #bbb;
--color-white-600: #777;
--color-white-700: #4d4d4d;
--color-white-800: #3b3b3b;
--color-white-900: #222;
--color-white-950: #000;

--border-radius-sm :6px;
--border-radius-md :9px;
--border-radius-lg :15px;


}

*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &:disabled {
        cursor: not-allowed;
    }
}


button {
    cursor: pointer;
    outline: none;
    border: none;
}

a {
  color: inherit;
  text-decoration: none;
}
ul {
    list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

`;

export default GlobalStyles;
