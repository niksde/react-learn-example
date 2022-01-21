import React from "react";

export default function LoginPage() {
  const handleLogin = () => {
    localStorage.setItem("login", "OK");
    window.dispatchEvent(new Event("storage"));
  };
  return (
    <div>
      Please login
      <button onClick={handleLogin}>login</button>
    </div>
  );
}
