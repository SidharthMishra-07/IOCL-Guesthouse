import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import mascot from "../../asset/mascot.png";
import logo from "../../asset/logo.gif";
import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <>
      <div className="loginNav">
        <div className="navContainer">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <img src={logo} alt="Logo" width={250} height={100}/>
          </Link>
        </div>
      </div>
      <div className="login">
        <div className="imgDiv">
          <img src={mascot} alt="mascot" className="lImg" />
        </div>
        <div className="lContainer">
          <input type="number" placeholder="Employee Number" id="username" onChange={handleChange} className="lInput" />
          <input type="password" placeholder="Password" id="password" onChange={handleChange} className="lInput" />
          <button disabled={loading} onClick={handleClick} className="lButton">
            Login
          </button>
          <div className="isreg">
            Not Yet Registered? &nbsp;<a href="/register">Register</a>
          </div>
          {error && <span>{error.message}</span>}
        </div>
      </div>
    </>
  );
};

export default Login;
