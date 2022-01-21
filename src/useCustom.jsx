import { useEffect, useState } from "react";

export default function useAuth() {
  const [auth, setAuth] = useState(() => {
    return localStorage.getItem("login");
  });

  useEffect(() => {
    const handleLogin = () => {
      console.log("handleLogin", localStorage.getItem("login"));
      setAuth(localStorage.getItem("login"));
    };
    window.addEventListener("storage", handleLogin);
    return () => {
      window.removeEventListener("storage", handleLogin);
    };
  }, []);

  return auth;
}
