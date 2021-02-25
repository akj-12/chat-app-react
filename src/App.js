import React from "react";
import { ChatEngine, ChatFeed } from "react-chat-engine";
import ChatFeeds from "./components/ChatFeeds";
import LoginForm from "./components/LoginForm";

import "./App.css";

const App = () => {
  if (!localStorage.getItem("username")) {
    return <LoginForm />;
  }
  return (
    <div>
      <ChatEngine
        height="100vh"
        projectID="31a09468-01ef-4f07-8539-6eaf1a7eac81"
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeeds {...chatAppProps} />}
      />
    </div>
  );
};

export default App;
