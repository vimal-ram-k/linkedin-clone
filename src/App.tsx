import { Outlet } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleDarkModeChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    };

    const checkSystemTheme = window.matchMedia("(prefers-color-scheme: dark)");

    // Check the initial theme
    handleDarkModeChange(checkSystemTheme);

    // Add event listener for changes
    checkSystemTheme.addEventListener("change", handleDarkModeChange);

    // Cleanup function
    return () => {
      checkSystemTheme.removeEventListener("change", handleDarkModeChange);
    };
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
