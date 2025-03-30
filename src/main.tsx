import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { theme } from "src/theme/theme.ts";
import App from "./App.tsx";
import GlobalStyles from "./theme/globalStyles.ts";
import { store } from "./store/index.ts";
import { Provider } from "react-redux";
import "./App.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
