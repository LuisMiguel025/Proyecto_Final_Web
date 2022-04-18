import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./../contexts/AuthContext";

const PrivatePath = ({ children, ...props }) => {
  const { user } = useAuth();
  if (user) {
    return <Route {...props}>{children}</Route>;
  } else {
    return <Redirect to="/login" />;
  }
};

export default PrivatePath;
