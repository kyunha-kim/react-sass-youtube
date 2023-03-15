import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { SearchContextProvider } from "./context/SearchContext";
import { SideBarContextProvider } from "./context/SideBarContext";

import "./scss/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SearchContextProvider>
      <SideBarContextProvider>
        <App />
      </SideBarContextProvider>
    </SearchContextProvider>
  </BrowserRouter>
);
