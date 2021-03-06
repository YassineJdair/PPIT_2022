import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import { Exchanges } from "./Components/exchanges";
//import Learn from "./Components/learn";
import Currency from "./Components/currency";
import { Add } from "./Components/add";
import { View } from "./Components/view";
import { Update } from "./Components/update";
import { LogRegister } from "./Components/LogRegister";

//import logo from "../src/images/logo.jpg";
import Nft from "./Components/Nft";
import { About } from "./Components/about";

class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    };
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="grey" variant="dark">
            <Navbar.Brand href="/home">Cryptonia</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/exchanges">Exchanges</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/add">Add Crypto</Nav.Link>
              <Nav.Link href="/view">View portfolio</Nav.Link>
              <Nav.Link href="/LogRegister">Login/Register</Nav.Link>
              <Nav.Link href="/nft">Nft Portfolio</Nav.Link>
            </Nav>
          </Navbar>

          <Route>
            <Route exact path="/" component={Currency} />
            <Route path="/home" component={Currency} exact />
            <Route path="/exchanges" component={Exchanges} exact />
            <Route path="/about" component={About} />
            <Route path="/add" component={Add} />
            <Route path="/view" component={View} />
            <Route path="/update" component={Update} />
            <Route
              exact
              path={"/LogRegister"}
              render={(props) => (
                <LogRegister
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
            <Route path="/nft" component={Nft} />
          </Route>
        </div>
      </Router>
    );
  }
}
export default App;
