import React from "react";
import { HeaderStyled, Nav } from "./style/header.styled";
import { Container } from "./style/container.styled";
import { Button } from "./style/button.styled";

export default function header({ passc, theme }) {
  const isDarkTheme = theme === "dark";
  return (
    <HeaderStyled>
      <Container>
        <Nav>
          <h1>Shadow Investigation</h1>
          <Button onClick={passc}> {isDarkTheme ? "🌞" : "🌜"}</Button>
        </Nav>
      </Container>
    </HeaderStyled>
  );
}
