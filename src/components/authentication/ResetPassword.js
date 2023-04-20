import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/auth/authContext";
import { useNavigate } from "react-router";
import { timedAlert } from "../../utils/alerts";
import locked from "../../assets/Locked-Security.svg";
import "./ResetPassword.css";

export default function ResetPassword() {
  const [CurrentPassword, setCurrentPassword] = useState("");
  const [NewPassword, setNewPassword] = useState("");
  const [ConfirmNewPassword, setConfirmNewPassword] = useState("");
  const navigate = useNavigate();
  const { changePassword } = useContext(AuthContext);

  const changePswd = async (e) => {
    e.preventDefault();
    if (
      CurrentPassword.trim() === "" ||
      NewPassword.trim() === "" ||
      ConfirmNewPassword.trim() === ""
    ) {
      timedAlert("top-left", "error", "Please fill the password fields");
      return;
    }
    if (ConfirmNewPassword !== NewPassword.trim()) {
      timedAlert(
        "top-left",
        "error",
        "Confirmed password not the same as new password"
      );
      return;
    }
    var res = await changePassword({
      CurrentPassword,
      NewPassword,
      ConfirmNewPassword,
    });
    if (res.succeeded) {
      timedAlert("top-rigth", "success", res.message);
      navigate("/login");
    } else {
      timedAlert("top-left", "error", res.message);
    }
    //some c# code to change the logged in user password
  };
  return (
    <div className="reset_pswd_container">
      <div className="reset_pswd">
        <img src={locked} className="reset_paswdLogo" />
        <h5>Please choose a new password to login</h5>
      </div>
      <div className="reset_pswd_form">
        <form>
          <input
            type="password"
            value={CurrentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Current Password"
          />
          <br />
          <input
            type="password"
            value={NewPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password"
          />
          <br />
          <input
            type="password"
            value={ConfirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            placeholder="Re-enter New Password"
          />
          <br />
          <button
            type="submit"
            onClick={changePswd}
            className="reset_pswdButton"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
}
