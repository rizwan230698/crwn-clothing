import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/HomePage.component";
import ShopPage from "./pages/shop/Shop.component";
import SignInAndSignUpPage from "./pages/signin-and-signup-page/Signin-And-Signup.component";
import Header from "./components/header/Header.component";
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
