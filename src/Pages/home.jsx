import React from "react";
import { Link } from "react-router-dom";
import Login from "../components/Login"; // Importe o componente Login
import '../index.css';


const Home = () => {
  return (
    <div>
      <Login
      subtitle="Seu Subtítulo Aqui" //ver pq nao funciona
      />
    </div>
  );
};

export default Home;
