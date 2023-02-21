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
      <section className="chatbox">
        <div className="chat-input-hold">
          <textarea className="chat-input" placeholder="Input Syntax">
          </textarea>
        </div>
      </section>
    </div>
  );
}

export default App;
