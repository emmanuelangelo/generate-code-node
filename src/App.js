import './App.css';
import './normal.css';

function App() {
  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="sidetext">
          <span>+</span>
          Generate New
        </div>
      </aside>
      <section className="chatbox" rows="1">
        <div className="chat-log"></div>
        <div className="chat-message">
          <div className="avatar"> Me </div>
          <div className="message"> Hello World</div>
        </div>
        <div className="chat-input-hold">
          <textarea className="chat-input-text" placeholder="Input Syntax">
          </textarea>
        </div>
      </section>
    </div>
  );
}

export default App;
