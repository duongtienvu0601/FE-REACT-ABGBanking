import React from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { GoogleAuthProvider } from "./utils/GoogleAuthContext ";
import { GoogleOAuthProvider } from '@react-oauth/google'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <GoogleAuthProvider> */}
    {/* <GoogleOAuthProvider clientId="996098826211-7e1u28lev92u7cjv50fhdsca3jcubik9.apps.googleusercontent.com"> */}
      <Router>
        <App />
      </Router>
    {/* </GoogleOAuthProvider> */}
    {/* </GoogleAuthProvider> */}
  </React.StrictMode>
);