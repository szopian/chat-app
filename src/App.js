import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./App.css";

function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID="5a7581d9-1fe1-4be2-8ec2-fecda1814be9"
      userName="Greg"
      userSecret="qwerty"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
