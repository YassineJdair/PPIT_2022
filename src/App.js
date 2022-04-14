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
import Learn from "./Components/learn";
import Currency from "./Components/currency";
import { Add } from "./Components/add";
import { View } from "./Components/view";
import { Update } from "./Components/update";
import { LogRegister } from "./Components/LogRegister";


import logo from '../src/images/logo.jpg'
import Nft from "./Components/Nft";

class App extends Component {
  render() {
    return (

      <Router>
        <div className="App">
          <Navbar className="w-full flex md:justify-center justify-between items-center p-4 color-nav">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
              <img src={logo} alt="logo" className="w-32 cursor-pointer" />
            </div>
            <Navbar.Brand href="/home">Cryptonia</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/exchanges">Exchanges</Nav.Link>
              <Nav.Link href="/learn">Learn</Nav.Link>
              <Nav.Link href="/add">Add Crypto</Nav.Link>
              <Nav.Link href="/view">View portfolio</Nav.Link>
              <Nav.Link href="/LogRegister">Login/Register</Nav.Link>
              <Nav.Link href="/nft">Nft Portfolio</Nav.Link>

            </Nav>
          </Navbar>


          <Route>
            <Route path="/" component={Currency} exact />
            <Route path="/home" component={Currency} exact />
            <Route path="/exchanges" component={Exchanges} exact />
            <Route path="/learn" component={Learn} />
            <Route path="/welcome" component={Add} />
            <Route path="/view" component={View} />
            {<Route path="/update" component={Update} />}
            <Route path="/LogRegister" component={LogRegister} />
            <Route path="/nft" component={Nft} />

          </Route>
        </div>
      </Router>

    );
  }
}
export default App;
