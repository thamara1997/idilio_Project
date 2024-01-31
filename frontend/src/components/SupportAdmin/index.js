import React from "react";

import { ChatEngine } from "react-chat-engine";
import styles from "../SupportEngine/styles";

const SupportAdmin = () => {
  return (
    <ChatEngine
      projectID={"0d83bc44-5b66-46cc-abd3-e6bffe48af3a"}
      userName="IDILIO"
      userSecret="D@max143b"
      height="calc(100vh - 12px)"
      className="w-[80%] bg-black"
    />
  );
};

export default SupportAdmin;
