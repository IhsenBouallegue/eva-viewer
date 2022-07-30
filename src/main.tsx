import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { EvaViewerContextProvider } from "./context/EvaViewerContext";
import "./index.css";
import theme from "./theme";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <EvaViewerContextProvider>
        <App />
      </EvaViewerContextProvider>
    </MantineProvider>
  </React.StrictMode>
);
