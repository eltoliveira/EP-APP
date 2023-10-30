import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../firebase.js';
function Login() {
  const [] = useState('');
  const [] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui você pode adicionar a lógica de autenticação, por exemplo, fazendo uma solicitação para um servidor
    // Se as credenciais estiverem corretas, você pode redirecionar o usuário para a próxima página
    // Se as credenciais estiverem incorretas, você pode exibir uma mensagem de erro

    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        navigate('/');
      })
      .catch((error) => {
        console.error("Erro ao fazer login com Google", error);
      });
  };

  return (
    <div>

      
<h1>Página de Login</h1>

      
<button
 
onClick={handleSubmit}>Entrar com Google</button>

    
</div>
  );
}

export default Login;