import React, { useEffect, useState } from "react";

import { ChatEngineWrapper, Socket, ChatFeed } from "react-chat-engine";

import { styles } from "../styles";

const ChatEngine = (props) => {
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    if (props.visible) {
      setTimeout(() => {
        setShowChat(true);
      }, 500);
    }
  });
  return (
    <div
      className="transition-5"
      style={{
        ...styles.chatEngineWindow,
        ...{
          height: props.visible ? "100%" : "0px",
          zIndex: props.visible ? "100" : "0",
        },
      }}
    >
      {showChat && (
        <ChatEngineWrapper className="bg-black">
          <Socket
            projectID={"efe5f6b4-5e78-4999-99a1-0e11bde12697"}
            userName={props.user.email}
            userSecret={props.user.email}
          />
          <ChatFeed activeChat={props.chat.id} />
        </ChatEngineWrapper>
      )}
    </div>
  );
};

export default ChatEngine;
