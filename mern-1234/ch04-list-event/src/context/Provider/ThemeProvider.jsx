import ThemeContext from "../ThemeContext";

function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value="light">{children}</ThemeContext.Provider>
  );
}


export default ThemeProvider