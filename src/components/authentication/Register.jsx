import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth/authContext";
import { timedAlert } from "../../utils/alerts";

import "./Register.css";
let intialData = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  password: "",
  phone: "",
  gender: "",
  age: 0,
  isActive: true,
  publicid: "Not yet set",
  avatar: "Not available",
};
function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState(intialData);
  const [confPass, setConfPass] = useState("");
  const { register } = useContext(AuthContext);
  const handleRegister = async () => {
    const { firstName, lastName, gender, age, password, userName, phone } =
      data;
    if (
      lastName == "" ||
      firstName == "" ||
      gender == "" ||
      gender == "" ||
      age == 0 ||
      phone == "" ||
      userName == "" ||
      password == ""
    ) {
      timedAlert("top-end", "error", "Please no field should be empty");
      return;
    }
    if (confPass !== password) {
      timedAlert(
        "top-end",
        "error",
        "Password should be equal to confirm password"
      );
      return;
    }
    //console.log(data);
    const res = await register(data);
    console.log(res);
    if (res.data?.succeeded) {
      timedAlert("top-end", "success", res.message);
      navigate("/login");
    } else
      timedAlert(
        "top-end",
        "error",
        "Unable to register, check your profile and try again later"
      );
  };
  return (
    <div className="register">
      <div className="form">
        <div className="title">Welcome</div>
        <div className="subtitle">Let's create your account!</div>
        <div className="input-container ic1">
          <input
            onChange={(e) =>
              setData((prev) => ({ ...prev, firstName: e.target.value }))
            }
            id="firstname"
            className="input"
            type="text"
            placeholder=" "
            required
          />
          <div className="cut"></div>
          <label for="firstname" className="placeholder">
            First name
          </label>
        </div>
        <div className="input-container ic2">
          <input
            onChange={(e) =>
              setData((prev) => ({ ...prev, lastName: e.target.value }))
            }
            id="lastname"
            className="input"
            type="text"
            placeholder=" "
            required
          />
          <div className="cut"></div>
          <label for="lastname" className="placeholder">
            Last name
          </label>
        </div>
        <div className="input-container ic2">
          <input
            onChange={(e) =>
              setData((prev) => ({ ...prev, userName: e.target.value }))
            }
            id="username"
            className="input"
            type="text"
            placeholder=" "
            required
          />
          <div className="cut"></div>
          <label for="username" className="placeholder">
            Username
          </label>
        </div>
        <div className="input-container ic2">
          <input
            onChange={(e) =>
              setData((prev) => ({ ...prev, phone: e.target.value }))
            }
            id="phone-number"
            className="input"
            type="text"
            placeholder=" "
            required
          />
          <div className="cut cut-mid"></div>
          <label for="phone-number" className="placeholder">
            Phone Number
          </label>
        </div>
        <div className="input-container ic2">
          <input
            onChange={(e) =>
              setData((prev) => ({ ...prev, email: e.target.value }))
            }
            id="email"
            className="input"
            type="text"
            placeholder=" "
            required
          />
          <div className="cut cut-short"></div>
          <label for="email" className="placeholder">
            Email
          </label>
        </div>
        <div className="input-container ic2">
          <input
            onChange={(e) =>
              setData((prev) => ({ ...prev, password: e.target.value }))
            }
            id="password"
            className="input"
            type="password"
            placeholder=" "
            required
          />
          <div className="cut"></div>
          <label for="password" className="placeholder">
            Password
          </label>
        </div>
        <div className="input-container ic2">
          <input
            onChange={(e) => setConfPass(e.target.value)}
            id="confirm-password"
            className="input"
            type="password"
            placeholder=" "
            required
          />
          <div className="cut cut-long"></div>
          <label for="confirm-password" className="placeholder">
            Confirm Password
          </label>
        </div>
        <div className="input-container ic2">
          <input
            onChange={(e) =>
              setData((prev) => ({ ...prev, age: e.target.value }))
            }
            id="age"
            className="input"
            type="number"
            placeholder=" "
            required
          />
          <div className="cut cut-short"></div>
          <label for="age" className="placeholder">
            Age
          </label>
        </div>
        <div className="input-container ic2">
          <select
            onChange={(e) =>
              setData((prev) => ({ ...prev, gender: e.target.value }))
            }
            id="sex"
            className="input"
            placeholder=" "
          >
            <option value="">--Select sex--</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <div className="cut cut-short"></div>
          <label for="sex" className="placeholder">
            Sex
          </label>
        </div>
        <button onClick={handleRegister} type="text" className="submit">
          Register
        </button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
