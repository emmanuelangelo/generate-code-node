import axios from "axios"
import './App.css';
import './normal.css';
import {useState} from 'react';


function App() {

const [input, setInput] = useState("");
const [messages] = useState([{user:"me",message:"Hello world"}, {user:"AI",message:"Hi, I am Chat ghghgh"}]);
// const [chatLog, setChatLog] = useState([]);

  const handleSubmit = async (e) => {
  e.preventDefault();
      try{
      const response = await axios.post('http://localhost:3080', {prompt: input })
      console.log(response)
      }catch(err){
        
      }
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
      {messages.map((message)=><ChatMessage message={message} />)}
     
        <form className="chat__form" onSubmit={handleSubmit}>
          <input rows="1" value={input}  
          onChange={(e) => setInput (e.target.value)}
          className="chat-input-text" placeholder="Input Syntax" />
          <button type='submit' className='chat__button'>Generate</button>
        </form>
      
      </section>
    </div>
  );
}
const ChatMessage = ({message}) => {
  return (
    <div className="chat-message">
      <div className="chat-message-center">
        <div className={`avatar ${message?.user ? "gpt" : "chatgpt"}`}>

        </div>
        <div className="message">
          {message?.message}
        </div>
      </div>
    </div>
  )
}
export default App;
