import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/HomePage.component";
import ShopPage from "./pages/shop/Shop.component";
import SignInAndSignUpPage from "./pages/signin-and-signup-page/Signin-And-Signup.component";
import Header from "./components/header/Header.component";
import { auth } from "./components/firebase/firebase.utils";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user }, () => console.log(user));
    });
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
