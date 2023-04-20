import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import locked from "../../assets/Locked-Security.svg";
import { AuthContext } from "../../context/auth/authContext";
import { timedAlert } from "../../utils/alerts";
import "./ResetPassword.css";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const { forgotPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const sendMail = async (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      timedAlert("top-left", "error", "Please put your email address");
      return;
    }
    //some c# code to change the logged in user password
    const res = await forgotPassword(email.trim());
    if (res.succeeded) {
      timedAlert("top-right", "success", res.message);
      navigate("/login");
    } else {
      timedAlert("top-right", "error", res.message);
    }
  };
  return (
    <div className="reset_pswd_container">
      <div className="reset_pswd">
        <img src={locked} className="reset_paswdLogo" />
        <h5>Enter Email of your account</h5>
      </div>
      <div className="reset_pswd_form">
        <form>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />

          <br />
          <button type="submit" onClick={sendMail} className="reset_pswdButton">
            Send Mail
          </button>
        </form>
      </div>
    </div>
  );
}
