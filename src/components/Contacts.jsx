import React, { useContext, useEffect, useCallback } from "react";
import { UserContext } from "../../context/UserContext";
import { motion } from "framer-motion";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import { useGetPhoto } from "../../hooks/useGetPhoto";
import UserPhoto from "../UserPhoto";

const Contacts = () => {
  const { users, handleToggle, setSendTo, currentUser } =
    useContext(UserContext);
  const handleSelect = (child) => {
    setSendTo({ id: child.id, name: child.name });
    handleToggle();
  };

  return (
    console.log("RETURN OK DO CONTACTS")
  );
};

export default Contacts;
