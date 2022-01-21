import React from "react";
import LoginPage from "./LoginPage";
import useAuth from "./useCustom";

export default function withAuth(AppComponent) {
  return () => {
    const auth = useAuth();
    return auth === "OK" ? <AppComponent /> : <LoginPage />;
  };
}
