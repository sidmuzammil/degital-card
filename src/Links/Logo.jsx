import { Link } from "react-router-dom"
import "./Links.css"

const Logo = () => {
  return (
    <div className="Logo-container">
        <Link to="/"><h1>AMCH</h1></Link>
    </div>
  )
}
export default Logo