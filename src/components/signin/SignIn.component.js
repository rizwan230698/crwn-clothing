import React from "react";
import "./SignIn.style.scss";
import FormInput from "../form-input/FormInput.component";
import CustomButton from "../custom-button/CustomButton.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import { auth } from "../../firebase/firebase.utils";

import Spinner from "../../spinner/Spinner";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      spinner: false
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;

    this.setState({ spinner: true }, async () => {
      try {
        await auth.signInWithEmailAndPassword(email, password);
        this.setState({ email: "", password: "", spinner: false });
      } catch (error) {
        this.setState({ spinner: false }, () => {
          console.log(error.message);
          alert(error.message);
        });
      }
    });
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { spinner } = this.state;
    const element = spinner ? (
      <Spinner className="signing-in" text="Signing In..." />
    ) : null;
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            name="email"
            type="email"
            value={this.state.email}
            label="email"
            autoComplete="off"
            required
          />

          <FormInput
            handleChange={this.handleChange}
            name="password"
            type="password"
            value={this.state.password}
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
  }
}

export default SignIn;
