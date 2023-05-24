import "./navbar.css"
import logo from "../../asset/logo.gif"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        {/* <span className="logo">Indian Oil &nbsp;</span> */}
        <img src={logo} alt="Logo"/>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar