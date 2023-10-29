import React from "react";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { useGetPhoto } from "../../hooks/useGetPhoto";
import UserPhoto from "../UserPhoto";



const Profile = ({ name, profilePhoto }) => {
  const { profileStatus, setProfileStatus } = useContext(UserContext);
  return (
    console.log("RETURN DO PROFILE OK")
  );
};

export default Profile;
