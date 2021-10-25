import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap');
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
    font-family: Comfortaa, sans-serif;
  }
`;
export const lightTheme = {
  body: "#f1f1f1",
  text: "#121620",
  skin: "#fff",
  toggle: "#fff",
  tr: "#ECEFF1",
};
export const darkTheme = {
  body: "#121620",
  text: "#f1f1f1",
  skin: "#263238",
  toggle: "#121620",
  tr: "#37474F",
};
