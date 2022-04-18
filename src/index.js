import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import WebFont from "webfontloader";
import Container from "./elements/Container";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogIn from "./components/LogIn";
import EditSpending from "./components/EditSpending";
import Register from "./components/Register";
import SpendingsByCategories from "./components/SpendingsByCategories";
import SpendinngList from "./components/SpendingsList";
import { Helmet } from "react-helmet";
import Favicon from "./images/logo.png";
import Backgraund from "./elements/Background";
import { AuthProvider } from "./contexts/AuthContext";
import PrivatePath from "./components/PrivatePath";

WebFont.load({
  google: {
    families: ["Work Sans:400,500,700", "sans-serif"],
  },
});

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Spendings App</title>
        <link rel="icon" href={Favicon} type="image/x-icon" />
      </Helmet>
      <AuthProvider>
        <Router>
          <Container>
            <Switch>
              <Route path="/login" component={LogIn} />
              <Route path="/register" component={Register} />
              <PrivatePath path="/categories">
                <SpendingsByCategories />
              </PrivatePath>
              <PrivatePath path="/list">
                <SpendinngList />
              </PrivatePath>
              <PrivatePath path="/edit/:id">
                <EditSpending />
              </PrivatePath>
              <PrivatePath path="/">
                <App />
              </PrivatePath>
            </Switch>
          </Container>
        </Router>
      </AuthProvider>
      <Backgraund></Backgraund>
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
