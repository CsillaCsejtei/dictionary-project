import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Welcome to my Dictionary Application</header>
        <main>
          <Dictionary defaultKeyword="sun"/>
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Csilla Csejtei and is open-sourced on {" "}
            <a
              href="https://github.com/CsillaCsejtei/dictionary-project"
              target="_blank"
              rel="noopener noreferrer"
            >Github
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
