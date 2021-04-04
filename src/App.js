import "./styles.css";
import { Router } from "./router/Router";
import { UserProvider } from "./providers/UserProvider";
import React from "react";

export default function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}
