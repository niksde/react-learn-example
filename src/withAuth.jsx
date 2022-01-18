import React, { useEffect, useState } from "react";

export default function withAuth(AppComponent) {
  return () => {
    const [auth, setAuth] = useState(() => {
      return localStorage.getItem("login");
    });

    useEffect(() => {
      const handleLogin = () => {
        setAuth(localStorage.getItem("login"));
      };
      window.addEventListener("storage", handleLogin);
      return () => {
        window.removeEventListener("storage", handleLogin);
      };
    }, []);

    if (auth === "OK") return <AppComponent />;
    return <div>Please login</div>;
  };
}
