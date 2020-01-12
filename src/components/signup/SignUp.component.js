import React from "react";
import FormInput from "../form-input/FormInput.component";
import CustomButton from "../custom-button/CustomButton.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import Spinner from "../../spinner/Spinner";

import "./SignUp.style.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      spinner: false
    };
  }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    this.setState({ spinner: true }, async () => {
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );

        await createUserProfileDocument({ ...user, displayName });

        this.setState({
          displayName: "",
          email: "",
          password: "",
          confirmPassword: "",
          spinner: false
        });
      } catch (error) {
        this.setState({ spinner: false }, () => {
          console.error(error.message);
          alert(error.message);
        });
      }
    });
  };
  render() {
    const element = this.state.spinner ? (
      <Spinner className="signing-up" text="Signing up..." />
    ) : (
      <div></div>
    );

    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            handleChange={this.handleChange}
            value={displayName}
            label="Display Name"
            required
          />
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={email}
            label="Email"
          />
          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={password}
            label="Password"
          />
          <FormInput
            name="confirmPassword"
            type="password"
            handleChange={this.handleChange}
            value={confirmPassword}
            label="Confirm Password"
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
        {element}
      </div>
    );
  }
}

export default SignUp;
