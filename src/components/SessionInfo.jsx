import React from 'react';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import '../index.css';

const SessionInfo = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (user) {
    return (
      <div className="card bg-primary rounded">
        <img src={user.photoURL} alt="User Photo" className="card-img-top user-photo" />
        <div className="card-body">
          <h5 className="card-title">Saudações, {user.displayName}!</h5>
          <p className="card-text">Por favor, aguarde o redirecionamento...</p>
        </div>
      </div>

    );
  }
};

export default SessionInfo;
