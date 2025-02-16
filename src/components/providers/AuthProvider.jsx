import { useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = document.cookie.includes("auth-token");
    if (token) {
      setIsAuthenticated(true);
      setUser({ name: "Juan Pérez" }); // Simulación de usuario autenticado
    }
  }, []);

  const login = (token) => {
    document.cookie = `auth-token=${token}; path=/; max-age=3600`;
    setIsAuthenticated(true);
    setUser({ name: "Juan Pérez" });
  };

  const logout = () => {
    document.cookie = "auth-token=; path=/; max-age=0";
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
