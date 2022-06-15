import { Route, Routes } from "react-router-dom";

import Exchange from "./pages/exchange";
import Main from "./pages/main";
import Temporarily from "./pages/temporarily";
import Sell from "./pages/sell";
import Gift from "./pages/gift";

import "./App.css";
import Regstr from "./pages/regstr";
import Login from "./pages/login";
import Newbooks from "./pages/newbooks";
import Recommendeds from "./pages/Recommendeds";
import Childrenbooks from "./pages/childrenbooks";

function App() {
  return (
    <div className="App container-fluid">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/newbooks" element={<Newbooks />} />
        <Route path="/recommended" element={<Recommendeds />} />
        <Route path="/childrenbook" element={<Childrenbooks />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/temporarily" element={<Temporarily />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/regstr" element={<Regstr />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
