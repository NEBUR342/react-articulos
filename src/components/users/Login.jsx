import React, { useState } from "react";
import jsonData from "../json/users.json";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar si el nombre de usuario y la contraseña son válidos
    const user = jsonData.usuarios.find(
      (usuario) => usuario.email === email && usuario.password === password
    );

    if (user) {
      // Llamar a la función onLogin pasando el nombre de usuario
      onLogin(user.username);
      // Limpiar los datos del formulario y el mensaje de error
      setEmail("");
      setPassword("");
      setError("");
    } else {
      // Mensaje de error
      setError("Email o contraseña incorrectos");
    }
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Login</h5>
        <form onSubmit={handleSubmit}>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={handleChangeEmail}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={handleChangePassword}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
