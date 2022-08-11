import React from "react";
import { useContext } from "react";

function SixthComponent() {
    const ThemeContext = React.createContext("dark");
    const Display = () => {
      const theme = useContext(ThemeContext);
      return (
        <>
          <div
            style={{
              background: theme === "dark" ? "black" : "lightyellow",
              color: theme === "dark" ? "white" : "rgb(90, 89, 89)",
              width: "100%",
              minHeight: "200px",
            }}
            
          >
            {"The theme here is " + theme}
          </div>
        </>
      );
    };
    return (
      <>
        <Display/>
      </>
    );
  }

  export default SixthComponent