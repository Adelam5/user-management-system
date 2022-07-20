import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { theme } from "theme";
/* import { ReactQueryDevtools } from "@tanstack/react-query-devtools"; */

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        {/*  <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
