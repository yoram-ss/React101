import { useContext } from "react";
import { ThemeContext, themes } from "./contexts/ThemeContext";

const Footer = ({ name }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <div style={{ backgroundColor: theme.background }}>
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
    </>
  );
};

export default Footer;
