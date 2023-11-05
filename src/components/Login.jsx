import { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "../configs/firebase";
import SessionInfo from "../components/SessionInfo";
import "../index.css";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    try {
      await signInWithPopup(auth, provider);
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
      window.location.reload();
    }
  };

  if (isLoggedIn) {
    return <SessionInfo />;
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
