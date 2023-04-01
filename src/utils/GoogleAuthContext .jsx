import React from "react";
import { useGoogleLogin } from "react-use-googlelogin";

const GoogleAuthContext = React.createContext();

export const GoogleAuthProvider = ({ children }) => {
  const googleAuth = useGoogleLogin({
    // clientId: "945929365983-46pi9c4g1h67q93nceggeneum9nan50f.apps.googleusercontent.com",
    clientId:
      "365062625571-oipgvhgr69fn34i2hahqdk1483hdqllg.apps.googleusercontent.com", // Your clientID from Google.
    redirectUri: "http://localhost:5173/signin",
    scope: "email",
    uxMode: "popup",
  });

  return (
    <GoogleAuthContext.Provider value={googleAuth}>
      {children}
    </GoogleAuthContext.Provider>
  );
};

export const useGoogleAuth = () => React.useContext(GoogleAuthContext);
