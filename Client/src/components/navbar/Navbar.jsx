import "./navbar.css"
import logo from "../../asset/logo.gif"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        {/* <span className="logo">Indian Oil &nbsp;</span> */}
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <img src={logo} alt="Logo"/>
        </Link>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar