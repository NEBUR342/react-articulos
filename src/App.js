import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/users/Login";
import Articulos from "./components/articles/Articulos";

function App() {
  const [iniciarSession, setIniciarSession] = useState(false);
  const [usuario, setUsuario] = useState("");

  const handleLogin = (usuario) => {
    setUsuario(usuario);
    setIniciarSession(true);
  };

  const cerrarSesion = () => {
    setUsuario("");
    setIniciarSession(false);
  };
  return (
    <div>
      <BrowserRouter>
        {/* Cabecera */}
        <header className="bg-dark text-light py-3">
          <div className="container">
            <div className="mb-2 row justify-content-between">
              <Link to="" className="col-auto link-unstyled">
                <h1 className="h1-style py-0">Articulos</h1>
              </Link>
              <Link to="/login" className="col-auto my-auto py-0">
                <button className="btn btn-success mx-1">Login</button>
              </Link>
            </div>
          </div>
        </header>
        <div className="container mt-5">
          <Routes>
            <Route path="" element={<Articulos onLogin={handleLogin} />} />
            <Route
              path="/login"
              element={
                !iniciarSession ? (
                  <Login onLogin={handleLogin} />
                ) : (
                  <div>
                    <h2 className="mt-3">Bienvenido {usuario}</h2>
                    <button
                      className="btn btn-danger mt-3"
                      onClick={cerrarSesion}
                    >
                      Logout
                    </button>
                  </div>
                )
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
