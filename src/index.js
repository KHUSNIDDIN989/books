import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { AuthContex } from "./contexts/AuthContex";
import { UserContex } from "./contexts/UserContex";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContex>
        <UserContex>
          <App />
        </UserContex>
      </AuthContex>
    </BrowserRouter>
  </React.StrictMode>
);
