import './App.css';
import './normal.css';
import {useState} from 'react';


function App() {

const [input, setInput] = useState("");
const [chatLog, setChatLog] = useState([]);

  async function handleSubmit(e) {
  e.preventDefault();
  setChatLog([chatLog, {user: "me", message: `${input}`}])
  setInput("");

  }
  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="sidetext">
          <span>+</span>
          Generate New
        </div>
      </aside>
      <section className="chatbox" rows="1">
        <div className="chat-log">

        </div>
        <div className="chat-message">
          <div className="chat-message-center">
            <div className="avatar"></div>
            <div className="message">Hello World</div>
          </div>
        </div>
        <div className="chat-message chatgpt">
          <div className="chat-message-center">
            <div className="avatar"></div>
            <div className="message">I am AI</div>
          </div>
        </div>
        <div className="chat-input-hold">
          <form OnSubmit={handleSubmit}>
            <input rows="1" 
            value={input}  
            onChange={(e) => setInput (e.target.value)}
            className="chat-input-text" placeholder="Input Syntax">
            </input>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
