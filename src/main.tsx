import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/App";
import { GlobalStyles } from "./styles/global-styles";
import { ThemeProvider } from "styled-components";
import { themefn } from "./styles/themefn";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={themefn}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);
