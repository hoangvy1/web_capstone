import axios from "axios";
import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    const res = await axios.post(
      "https://realnodedjshv.up.railway.app/users/login",
      inputs
    );

    setCurrentUser(res.data);
  };

  const logout = async (inputs) => {
    await axios.post("https://realnodedjshv.up.railway.app/users/logout");
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
