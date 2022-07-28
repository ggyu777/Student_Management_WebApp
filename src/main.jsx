import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./context/Context";
import TestComponent from "./TestComponent";
// import { worker } from "./mocks/browser";

// if (process.env.NODE_ENV === "development") {
//   worker.start();
// }

ReactDOM.render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      <ContextProvider>
        <TestComponent />
        <App />
      </ContextProvider>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
