import { useEffect, useState } from "react";
import DarkTheme from "./DarkTheme";

function loadDarkMode() {
  if (typeof localStorage === "undefined") {
    return false;
  }

  const value = localStorage.getItem("darkMode");

  return value === null ? false : JSON.parse(value);
}

function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(loadDarkMode);

  const onClick = () => {
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));

    setDarkMode(!darkMode);
  };

  const text = darkMode ? "Light Mode" : "Dark Mode";

  return (
    <>
      <button onClick={onClick} suppressHydrationWarning>
        {text}
      </button>
      <style jsx>{`
        button {
          background: none;
          border: none;
          cursor: pointer;
          color: inherit;
        }
      `}</style>
      {darkMode && <DarkTheme />}
    </>
  );
}

export default ThemeSwitch;
