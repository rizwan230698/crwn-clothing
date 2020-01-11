import React from "react";
import "./Signin-And-Signup.style.scss";

import SignIn from "../../components/signin/SignIn.component";
import SignUp from "../../components/signup/SignUp.component";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
