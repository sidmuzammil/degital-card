import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/HomePage/Home"
import { createContext, useState } from "react"
// import ReactSwitch from "react-switch"
// import Logo from "./Links/Logo"



export const ThemeContext = createContext()

const App = () => {

  const [Theme, setTheme] = useState("dark")

  const ToggleTheme = () => {
    setTheme((mainTheme) => mainTheme === "bright" ? "dark" : "bright")
  }
  return (
    <ThemeContext.Provider value={{ ToggleTheme, Theme, setTheme }} >
      <div className="app-wrapper" id={Theme}>
        <Router>
          <Routes>

            <Route path="/" element={<Home />} />
          </Routes>
        </Router>

      </div>
    </ThemeContext.Provider>
  )
}
export default App