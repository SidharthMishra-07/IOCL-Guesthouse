import "./navbar.css"
import logo from "../../asset/logo.gif"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { useContext } from "react"

const Navbar = () => {
  const {user} = useContext(AuthContext)

  return (
    <div className="navbar">
      <div className="navContainer">
        {/* <span className="logo">Indian Oil &nbsp;</span> */}
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <img src={logo} alt="Logo"/>
        </Link>
        {user ? (
          <div className="navItems">
            {user.email}
            <button className="navButton">Logout</button>
          </div>
          ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <Link to = "/login">
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar