import Logo from "../../Links/Logo"
import NavLinks from "../../Links/NavLinks"
import Navright from "../../Links/Navright"

import "./Nav.css"

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-items container">
        <div className="logo">
          <Logo/>
        </div>
        <div className="nav-links">
          <NavLinks/>
        </div>
        <div className="contact-section">
          <Navright/>
        </div>
      </div>
    </div>
  )
}
export default Nav