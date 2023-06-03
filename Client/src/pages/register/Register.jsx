import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import mascot from "../../asset/mascot.png";
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
      navigate("/login");
    } catch (err) {
      dispatch({ type: "REGISTER_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="register">
      <div className="rContainer">
        <input
          type="number"
          placeholder="Employee Number"
          id="username"
          value={credentials.username}
          onChange={handleChange}
          className="rInput"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={credentials.password}
          onChange={handleChange}
          className="rInput"
        />
        <button
          disabled={loading}
          onClick={handleRegister}
          className="rButton"
        >
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
  );
};

export default Register;
