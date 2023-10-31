import React, { useContext } from "react";
import { BiMessageDetail as Message } from "react-icons/bi";

const Home = () => {
  const { currentUser } = useContext(currentUser); // Obtém as informações do usuário do contexto

  return (
    <div className="home-container">
      <div className="user-card">
        <UserPhoto uid={currentUser.uid} />
        <h2>{currentUser.displayName}</h2>
        <p>{currentUser.email}</p>
      </div>

      {/* Outros componentes e seções, como mensagens, perfil, configurações, etc. */}
      <div className="message-section">
        <Message />
        <TextSection title="Mensagens" />
      </div>

      <div className="profile-section">
        <Profile />
      </div>

      <div className="settings-section">
        <Settings />
      </div>
    </div>
  );
};

export default Home;
