import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";
import { BsFillTrashFill as Trash } from "react-icons/bs";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";


const Message = ({ from, message, time, id, like }) => {
  const { currentUser } = useContext(UserContext);
  return (
  console.log("MESSAGEOK")
  );
};

export default Message;
