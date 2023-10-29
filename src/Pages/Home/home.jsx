/* import React, { useContext, useEffect, useRef } from "react";
import { UserContext } from "../../context/UserContext";
import { Room } from "../../components/Room";
import { doc, setDoc } from "firebase/firestore";
import { Contacts } from "../../components/Contacts";
import { BiMessageDetail as Message } from "react-icons/bi";
import TextSection from "../../components/TextSection";
import Profile from "../../components/Profile";
import Settings from "../../components/Settings";
import { useGetPhoto } from "../../hooks/useGetPhoto";
import UserPhoto from "../../components/UserPhoto";

const Home = () => {
  const {
    users,
    setUsers,
    currentUser,
    setCurrentUser,
    handleToggle,
    profileStatus,
    sendTo,
  } = useContext(UserContext);
  const profilePhoto = useGetPhoto(`${currentUser.uid}`);

  return (console.log("home-OK")
  );
};

export default Home;
 */