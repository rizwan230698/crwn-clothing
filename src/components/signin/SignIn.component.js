import React, { useState } from "react";
import "./SignIn.style.scss";
import FormInput from "../form-input/FormInput.component";
import CustomButton from "../custom-button/CustomButton.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import { auth } from "../../firebase/firebase.utils";

import Spinner from "../../spinner/Spinner";

const SignIn = () => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: ""
  });
  const [spinner, setSpinner] = useState(false);

  const { email, password } = userCredentials;

  const handleSubmit = event => {
    event.preventDefault();
    setSpinner(true);
    (async () => {
      try {
        await auth.signInWithEmailAndPassword(email, password);
        setCredentials({ email: "", password: "" });
        setSpinner(false);
      } catch (error) {
        setSpinner(false);
        (() => {
          alert(error.message);
        })();
      }
    })();
  };
  const handleChange = event => {
    const { name, value } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  const element = spinner ? (
    <Spinner className="signing-in" text="Signing In..." />
  ) : null;
  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          name="email"
          type="email"
          value={email}
          label="email"
          autoComplete="off"
          required
        />

        <FormInput
          handleChange={handleChange}
          name="password"
          type="password"
          value={password}
          label="password"
          autoComplete="off"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
      {element}
    </div>
  );
};

export default SignIn;
