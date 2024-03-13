// import darkThemeIcon from "../../src/components/assets/dark-theme-icon.svg";
// import whithemeIcon from "../../src/components/assets/brightThemeIcon.svg"
import { useContext } from "react";
import { ThemeContext } from "../App";

const Navright = () => {

  const {ToggleTheme,Theme}=useContext(ThemeContext)
  const handleTheme=()=>{
    ToggleTheme()
  }

  return (
    <div className="Nav-right-section">
      <button className="blue-button">buy now</button>

      <label className="ui-switch">
         <input type="checkbox"  checked={Theme==="dark"} onChange={handleTheme}/>
          <div className="slider"  >
             <div className="circle"></div>
         </div>
      </label>
      {/* <ReactSwitch checked={setTheme}  onChange={handleTheme}/> */}
    </div>
  )
}
export default Navright