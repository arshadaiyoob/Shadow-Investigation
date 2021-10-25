import React, { useState, useEffect, useMemo } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./theme";
import Header from "./components/header";
import { Container } from "./components/style/container.styled";
import Fixture from "./components/fixture";
import CardStat from "./components/stats";
import Table from "./components/table";
import { data } from "./components/makeData";
import { Footer, FooterView, Text } from "./components/style/footer.styled";
const App = () => {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? "light" : "dark";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <Header passc={toggleTheme} theme={theme} />
        <Container>
          <Fixture />
          <CardStat />
          <Table data={data} />
        </Container>
        <FooterView>
          <Footer>
            <Text>Made with ❤️ by Team L1 Support</Text>
          </Footer>
        </FooterView>
      </>
    </ThemeProvider>
  );
};
export default App;
