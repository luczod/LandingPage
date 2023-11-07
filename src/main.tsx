import React from "react";
import ReactDOM from "react-dom/client";
import ProvidersUseQuery from "./providers/queryClient";

import { GlobalStyles } from "./styles/global-styles";
import { ThemeProvider } from "styled-components";
import { themefn } from "./styles/themefn";
import { Home } from "./templates/Home";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProvidersUseQuery>
      <ThemeProvider theme={themefn}>
        <Home />
        <GlobalStyles />
      </ThemeProvider>
    </ProvidersUseQuery>
  </React.StrictMode>
);
