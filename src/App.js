import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import style from "./mystyle.module.css";

function App() {
  const [name, setName] = useState("...");
  const [count, setCount] = useState(0);
  // const countme = 0;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>
            Hello my name is {name} {count}
          </code>
        </p>
        <button className={style.btnGreen} onClick={() => setName("yoram")}>
          Change Name
        </button>
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
        <button onClick={() => setCount((prev) => prev - 1)}>-</button>
        {/* <button onClick={() => countme + 1}>update var</button> */}
      </header>
    </div>
  );
}

export default App;
