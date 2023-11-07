import React from "react";
import ReactDOM from "react-dom/client";

import { GlobalStyles } from "./styles/global-styles";
import { ThemeProvider } from "styled-components";
import { themefn } from "./styles/themefn";
import { Home } from "./templates/Home";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={themefn}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);
