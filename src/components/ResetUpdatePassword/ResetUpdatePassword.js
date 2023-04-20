import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import locked from "../../assets/Locked-Security.svg";
import { AuthContext } from "../../context/auth/authContext";
import "../authentication/ResetPassword.css";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function UpdatePassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const { resetPassword } = useContext(AuthContext);
  const query = useQuery();

  const changePswd = async (e) => {
    e.preventDefault();
    // console.log(query.get("token"));
    if (newPassword.trim() === "" || confirmNewPassword.trim() === "") {
      setErrMsg("Please fill the password fields");
      return;
    }
    if (confirmNewPassword !== newPassword.trim()) {
      setErrMsg("Please fill the password fields");
      return;
    }
    setErrMsg("");
    let pas = {
      password: newPassword,
      token: query.get("token").trim(),
      email: query.get("email"),
    };
    const res = await resetPassword(pas);
    console.log(res);
    //some c# code to change the logged in user password
  };
  return (
    <div className="reset_pswd_container">
      <div className="reset_pswd">
        <img src={locked} className="reset_paswdLogo" />
        <h5>Reset Password</h5>
      </div>
      {errMsg !== "" && <p style={{ color: "red" }}>{errMsg}</p>}
      <div className="reset_pswd_form">
        <form>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password"
          />
          <br />
          <input
            type="password"
            value={confirmNewPassword}
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

export default UpdatePassword;
