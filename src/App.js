import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import style from "./mystyle.module.css";
import Footer from "./Footer";
import { ThemeContext, themes } from "./contexts/ThemeContext";
import Fetch from "./Fetch";

function App() {
  const [name, setName] = useState("...");
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(themes.dark);
  // const countme = 0;

  useEffect(() => {
    document.title = `${count} ${name}`;
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div>
        <header className="App mb">
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
        <Footer name={name} />
        <Fetch />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
