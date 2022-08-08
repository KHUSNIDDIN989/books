import { Route, Routes } from "react-router-dom";

import Exchange from "./pages/exchange";
import Main from "./pages/main";
import Gift from "./pages/gift";
import Regstr from "./pages/regstr";

import "./App.css";
import Login from "./pages/login";
import Newbooks from "./pages/newbooks";
import Recommendeds from "./pages/Recommendeds";
import Childrenbooks from "./pages/childrenbooks";
import Profiles from "./pages/profiles";
import Aboutbook from "./pages/aboutbook";
import Addbooks from "./pages/addbooks";

import "./App.css";

function App() {
  return (
    <div className="App container-fluid">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/aboutbook/:id" element={<Aboutbook />} />
        <Route path="/newbooks" element={<Newbooks />} />
        <Route path="/recommended" element={<Recommendeds />} />
        <Route path="/childrenbook" element={<Childrenbooks />} />
        <Route path="/profile" element={<Profiles />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/AddBooks" element={<Addbooks />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/regstr" element={<Regstr />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
