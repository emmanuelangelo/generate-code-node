import axios from "axios"
import './App.css';
import './normal.css';
import { useState } from 'react';


function App() {

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  // const [chatLog, setChatLog] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let cache = [...messages, { user: "me", message: input }]
    setMessages(cache)
    try {
      const response = await axios.post('https://wahala.onrender.com', { prompt: input })
      setInput("")
      setMessages([...cache, { user: "AI", message: response.data.bot }])
    } catch (err) {

    }
  }

  return (
    <div className="App">
      {/* <aside className="sidemenu">
        <div className="sidetext">
          <span>+</span>
          Generate New
        </div>
      </aside> */}
      <section className="chatbox" rows="1">
        {messages.map((message) => <ChatMessage message={message} />)}

        <form className="chat__form" onSubmit={handleSubmit}>
          <input rows="1" value={input}
            onChange={(e) => setInput(e.target.value)}
            className="chat-input-text" placeholder="Input Syntax" />
          <button type='submit' className='chat__button'>Generate</button>
        </form>

      </section>
    </div>
  );
}
const ChatMessage = ({ message }) => {
  return (
    <div className="chat-message">
      <div className="chat-message-center">
        <div className={`avatar ${message?.user ? "gpt" : "chatgpt"}`}>

        </div>
        <pre className="message">
          {message?.message}
        </pre>
      </div>
    </div>
  )
}
export default App;
