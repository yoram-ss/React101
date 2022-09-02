import { useContext } from "react";
import { ThemeContext, themes } from "./contexts/ThemeContext";

const Footer = ({ name }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="App mb">
      <div
        style={{ backgroundColor: theme.background, color: theme.foreground }}
      >
        {name && `My name is ${name}, and `}
        today I'm learning about react
      </div>
      <button
        onClick={() =>
          setTheme(theme === themes.dark ? themes.light : themes.dark)
        }
      >
        Change background
      </button>
    </div>
  );
};

export default Footer;
