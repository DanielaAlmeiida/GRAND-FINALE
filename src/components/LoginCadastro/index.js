import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./style.css";

export default function LoginCadastro() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoginClicked, setLoginClicked] = useState(false);
  const [isCadastroClicked, setCadastroClicked] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setLoginClicked(true);
      setCadastroClicked(false);
    } else if (location.pathname === "/register") {
      setCadastroClicked(true);
      setLoginClicked(false);
    } else {
      setLoginClicked(false);
      setCadastroClicked(false);
    }
  }, [location.pathname]);

  const handleLoginClick = () => {
    navigate("/");
  };

  const handleCadastroClick = () => {
    navigate("/register");
  };

  return (
    <div className="btn-login-cadastro">
      <div className="btn-background">
        <button
          className={`btn-login ${isLoginClicked ? "clicked" : ""}`}
          type="button"
          onClick={handleLoginClick}
        >
          Login
        </button>
        <button
          className={`btn-cadastro ${isCadastroClicked ? "clicked" : ""}`}
          type="button"
          onClick={handleCadastroClick}
        >
          Cadastro
        </button>
      </div>
    </div>
  );
}
