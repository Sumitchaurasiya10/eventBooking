import { createContext, useState, useMemo } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() =>
    JSON.parse(localStorage.getItem("user") || "null")
  );

  const login = (payload) => {
    localStorage.setItem("user", JSON.stringify(payload));
    setAuth(payload);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setAuth(null);
  };

  const value = useMemo(() => ({ auth, login, logout }), [auth]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
