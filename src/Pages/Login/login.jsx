import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica de autenticação, por exemplo, fazendo uma solicitação para um servidor
    // Se as credenciais estiverem corretas, você pode redirecionar o usuário para a próxima página
    // Se as credenciais estiverem incorretas, você pode exibir uma mensagem de erro
  };

  return (
    <div>
      <h1>Página de Login</h1>
      <form>
        <div>
          <label>Nome de Usuário:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Senha:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" onClick={handleLogin}>Entrar</button>
      </form>
    </div>
  );
}

export default Login;
