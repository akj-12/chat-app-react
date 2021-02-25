import React from "react";
import { ChatEngine, ChatFeed } from "react-chat-engine";
import ChatFeeds from "./components/ChatFeeds";

import "./App.css";

const App = () => {
  return (
    <div>
      <ChatEngine
        height="100vh"
        projectID="31a09468-01ef-4f07-8539-6eaf1a7eac81"
        userName="Jack"
        userSecret="amitjhacse"
        renderChatFeed={(chatAppProps) => <ChatFeeds {...chatAppProps} />}
      />
    </div>
  );
};

export default App;
