import React, { useState, useEffect, useContext } from "react";
import { auth } from "./../firebase/firebaseConfig";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [User, setUser] = useState(false);

  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const cancelAuth = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    return cancelAuth;
  }, []);

  return (
    <AuthContext.Provider value={{ user: User }}>
      {!Loading && children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthContext, AuthProvider, useAuth };
