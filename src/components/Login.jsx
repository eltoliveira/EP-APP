import { useState, useEffect } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import "../configs/firebase";
import SessionInfo from "../components/SessionInfo";
import "../index.css";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    try {
      await signInWithPopup(auth, provider);
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
      // Exportar as informações de login para o Firestore
    } catch (error) {
      console.log(error);
      window.location.reload();
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (isLoggedIn) {
        // Realizar ações quando o usuário está logado
        return (
          <SessionInfo />
        )
    }
  }, [isLoggedIn]);

  if (isLoggedIn) {
    return (
      <div>
        <button onClick={handleLogout}>Logout</button>
        <SessionInfo />
      </div>
    );
  }

  return (
    <div className="background-login">
      <div className="container">
        <h1>Entre para continuar</h1>
        <button className="Botao0login" onClick={handleLogin}>
          Fazer login com o Google
        </button>
      </div>
    </div>
  );
};

export default Login;
