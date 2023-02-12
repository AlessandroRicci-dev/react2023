import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/Globals";
import { Theme } from "./styles/Theme";

import Homepage from "./pages/HomePage";

interface AppProps {}

export default function App(props: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Homepage />
    </ThemeProvider>
  );
}
