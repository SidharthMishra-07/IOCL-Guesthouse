import "./navbar.css"
import logo from "../../asset/logo.gif"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { useContext } from "react"

const Navbar = () => {
  const {user} = useContext(AuthContext)
  // const [isLoggedin, setIsLoggedin] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = '/';
  };
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
            <button className="navButton" onClick={handleLogout}>Logout</button>
          </div>
          ) : (
          <div className="navItems">
            <Link to = "/register">
            <button className="navButton">Register</button>
            </Link>
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