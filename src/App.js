import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="text-center">
      <header className="bg-slate-800 min-h-screen flex flex-col items-center justify-center text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl calc(10px + 2vmin)">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="">
          Edit <code className="font-mono">src/App.js</code> and save to reload.
        </p>
        <a
          className="text-cyan-400"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
