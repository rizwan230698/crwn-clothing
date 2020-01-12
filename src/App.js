import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";
import "./App.css";
import Homepage from "./pages/homepage/HomePage.component";
import ShopPage from "./pages/shop/Shop.component";
import SignInAndSignUpPage from "./pages/signin-and-signup-page/Signin-And-Signup.component";
import Header from "./components/header/Header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  unsubscribeFromAuth = null;

  setUser = async user => {
    const { uid } = user;
    const response = await axios.get(`http://localhost:8080/user/${uid}`);
    if (response.data.exist) {
      this.props.setCurrentUser(response.data);
    }
  };

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        await createUserProfileDocument(userAuth);
        setTimeout(() => this.setUser(userAuth), 1000);
      } else {
        this.props.setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

/*
****************************Firebase Sign in with Google and Backend*****************
as we click "sign in with Google" button in SignIn Component, function signInWithGoogle() will be called
and the special function auth.onAuthStateChanged() in App Component which is listening to signin/signout
will be called with userAuth(object) then it will call function createUserProfileDocument(userAuth) 
in this function if user,s credential does not exist in database then it will do a post request and store user,s credential. after this it will come back to createUserProfileDocument() and do a get request and if now user,s credential exist then finally call setState() with user,s credential.
*/
