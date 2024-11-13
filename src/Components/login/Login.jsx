import { GoogleAuthProvider } from "firebase/auth/web-extension";
import React from "react";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const buttonHandel = () => {
    console.log("comming soon");
  };

  return (
    <div>
      <button onClick={buttonHandel}>Login with google</button>
    </div>
  );
};

export default Login;
