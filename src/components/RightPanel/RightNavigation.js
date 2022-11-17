import React from "react";
import { useState, useEffect } from "react";
import "../../styles/RightNavigation.scss";
import MessageCard from "./MessageCard";
import PostCard from "./PostCard";
import previousData from "./PreviousData";
import Virat from "../../Images/Virat.png";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";

function RightNavigation({ change }) {
  const [receivedMessage, setReceivedMessage] = useState([]);
  function handleclick() {
    change(false);
  }
  const func = (value) => {
    setReceivedMessage([
      {
        id: uuidv4(),
        name: "Virat",
        image: Virat,
        designation: "Marketing Expert",
        key: value,
        time: moment().format(),
      },
      ...receivedMessage,
    ]);
  };
  useEffect(() => {
    if (receivedMessage.length > 0)
      localStorage.setItem("stored-message", JSON.stringify(receivedMessage));
  }, [receivedMessage]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("stored-message"));
    if (items) {
      setReceivedMessage(items);
    }
  }, []);
  const deleteMessage = (receivedId) => {
    if (receivedMessage.length === 1) {
      localStorage.clear();
    }
    setReceivedMessage(receivedMessage.filter((del) => del.id !== receivedId));
  };

  return (
    <div className="right-navigation" onClick={handleclick}>
      <MessageCard content={func} />

      {receivedMessage.map((post) => (
        <PostCard
          image={post.image}
          name={post.name}
          designation={post.designation}
          time={moment(post.time).fromNow()}
          postContent={post.key}
          id={post.id}
          delete={deleteMessage}
        />
      ))}

      {previousData.map((post) => (
        <PostCard
          image={post.image}
          name={post.name}
          designation={post.designation}
          time={post.duration}
          postContent={post.text}
        />
      ))}
    </div>
  );
}
export default RightNavigation;
