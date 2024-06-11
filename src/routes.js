import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import DefaultPage from "./components/DefaultPage";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Connections from "./pages/Connections";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Login />} /> {/*Outlet */}
          <Route path="inicio" element={<Home />} /> {/* Outlet */}
          <Route path="connections" element={<Connections />} /> {/* Outlet */}
          <Route path="perfil" element={<Profile />} /> {/* Outlet */}
          <Route path="register" element={<Register />} /> {/* Outlet */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
