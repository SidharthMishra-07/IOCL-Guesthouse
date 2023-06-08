import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import mascot from "../../asset/mascot.png";
import logo from "../../asset/logo.gif";
import "./register.css";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    dispatch({ type: "REGISTER_START" });
    try {
      const res = await axios.post("/auth/register", credentials);
      dispatch({ type: "REGISTER_SUCCESS", payload: res.data.details });
      navigate("/register");
    } catch (err) {
      dispatch({ type: "REGISTER_FAILURE", payload: err.response.data });
    }
  };

  return (
    <>
      <div className="loginNav">
        <div className="navContainer">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <img src={logo} alt="Logo" width={250} height={100} />
          </Link>
        </div>
      </div>
      <div className="register">
        <div className="rContainer">
          <input type="number" placeholder="Employee Number" id="username" value={credentials.username} onChange={handleChange}className="rInput"/>
          <input type ="email" placeholder="Email" id="email" value={credentials.email} onChange={handleChange} className="rInput" />
          <input type="password" placeholder="Password" id="password" value={credentials.password} onChange={handleChange} className="rInput"/>

          <button disabled={loading} onClick={handleRegister} className="rButton">
            Register
          </button>

          <div className="isreg">
            Already Registered? &nbsp;<a href="/login">Login</a>
          </div>

          {error && <span>{error.message}</span>}
        </div>
        
        <div className="imgDiv">
          <img src={mascot} alt="mascot" className="rImg" />
        </div>
      </div>
    </>
  );
};

export default Register;
