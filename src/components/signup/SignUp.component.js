import React, { useState } from "react";
import FormInput from "../form-input/FormInput.component";
import CustomButton from "../custom-button/CustomButton.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import Spinner from "../../spinner/Spinner";

import "./SignUp.style.scss";

const SignUp = () => {
  const [userCredentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [spinner, setSpinner] = useState(false);

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleChange = event => {
    const { name, value } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };
  const handleSubmit = event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    setSpinner(true);
    (async () => {
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );

        await createUserProfileDocument({ ...user, displayName });

        setSpinner(false);
        setCredentials({
          displayName: "",
          email: "",
          password: "",
          confirmPassword: ""
        });
      } catch (error) {
        setSpinner(false);
        (() => {
          alert(error.message);
        })();
      }
    })();
  };

  const element = spinner ? (
    <Spinner className="signing-up" text="Signing up..." />
  ) : null;

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          handleChange={handleChange}
          value={displayName}
          label="Display Name"
          required
        />
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="Email"
        />
        <FormInput
          name="password"
          type="password"
          handleChange={handleChange}
          value={password}
          label="Password"
        />
        <FormInput
          name="confirmPassword"
          type="password"
          handleChange={handleChange}
          value={confirmPassword}
          label="Confirm Password"
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
      {element}
    </div>
  );
};

export default SignUp;
