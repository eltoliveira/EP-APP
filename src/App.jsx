import React from "react";
import { Outlet, useNavigate as Navigate } from "react-router-dom";
import { isLoggedIn } from './context/AuthProvider.jsx'; // Importe o contexto de autenticação
import Login from './Pages/Login/login.jsx'


const App = () => {
  return (
    <div className="app-container">
      {isLoggedIn ? (
        <Outlet />
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
