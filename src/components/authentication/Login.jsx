import React from "react";
import "./Register.css";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/auth/authContext";
import { timedAlert } from "../../utils/alerts";

const initialData = {
  username: "",
  password: "",
};

function Login() {
  const [data, setData] = useState(initialData);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = async () => {
    const { username, password } = data;
    if (username.trim() === "" || password.trim() === "") {
      timedAlert(
        "top-end",
        "error",
        "Please fill the username and password field"
      );
      return;
    }
    const res = await login(data);
    if (res.succeeded) {
      console.log(res);
      timedAlert("top-end", "success", res.message);
      navigate("/customer-dashboard");
    } else timedAlert("top-end", "error", res.message);
  };
  return (
    <div className="register">
      <div class="form">
        <div class="title">Login</div>

        <div class="input-container ic2">
          <input
            onChange={(e) =>
              setData((prev) => ({ ...prev, username: e.target.value }))
            }
            id="username"
            class="input"
            type="text"
            placeholder=" "
          />
          <div class="cut"></div>
          <label for="username" class="placeholder">
            Username
          </label>
        </div>
        <div class="input-container ic2">
          <input
            onChange={(e) =>
              setData((prev) => ({ ...prev, password: e.target.value }))
            }
            id="password"
            class="input"
            type="password"
            placeholder=" "
          />
          <div class="cut"></div>
          <label for="password" class="placeholder">
            Password
          </label>
        </div>
        <button onClick={handleLogin} type="text" class="submit">
          Login
        </button>
        <p>
          Don't have an account? <Link to="/register">Register</Link> or{" "}
          <Link to="/forget-password">Forget Password</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
