import { createContext, useState } from "react";
import { apiPost } from "../../utils/apiHelpers";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [user, setUser] = useState({});
  const register = async (data) => {
    var res = await apiPost("Authentication/Register", data, {}, false);
    return res;
  };
  const login = async (value) => {
    const { data } = await apiPost("Authentication/Login", value, {}, false);
    if (data.succeeded) {
      localStorage.setItem("token", data.data.token);
      setUser((user) => ({ ...user, ...data.data }));
      console.log("User1", user);
      console.log("User", data.data);
    }

    return data;
  };
  const forgotPassword = async (email) => {
    let dataObj = { email };
    const { data } = await apiPost(
      "Authentication/Reset-Password",
      dataObj,
      {},
      false
    );
    return data;
  };
  //
  const resetPassword = async (value) => {
    const { data } = await apiPost(
      "Authentication/Reset-Update-Password",
      value,
      {},
      false
    );
    return data;
  };
  const changePassword = async (value) => {
    const { data } = await apiPost("Authentication/Change-Password", value, {});
    if (data.succeeded) localStorage.removeItem("token");
    return data;
  };
  return (
    <AuthContext.Provider
      value={{
        register,
        login,
        forgotPassword,
        resetPassword,
        changePassword,
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
