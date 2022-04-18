import React from "react";
import { ReactComponent as LogOutIcon } from "./../images/log-out.svg";
import { Btn } from "./../elements/Btn";
import { auth } from "./../firebase/firebaseConfig";
import { useHistory } from "react-router";

const BtnLogOut = () => {
  const history = useHistory();
  const LogOut = () => {
    auth.signOut().then(() => {
      history.push("/login");
    });
  };
  return (
    <Btn bigIcon as="button" onClick={() => LogOut()}>
      <LogOutIcon />
    </Btn>
  );
};

export default BtnLogOut;
