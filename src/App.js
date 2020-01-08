import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/HomePage.component";

const HatsPage = () => {
  return <div>HATS PAGE</div>;
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
