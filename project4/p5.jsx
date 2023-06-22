import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import States from "./components/States";
import Example from "./components/Example";
import "./p5styles.css";

class Switcher extends React.Component {
  render() {
    return (
      <div>
        <div className="cs142-p5-topbar">
          <ul>
            <li>
              <Link to="/example">Example</Link>
            </li>
            <li>
              <Link to="/states">States</Link>
            </li>
          </ul>
        </div>
        <Route path="/example" component={Example} />
        <Route path="/states" component={States} />
      </div>
    );
  }
}

ReactDOM.render(<div><Header /> <HashRouter> <Switcher /> </HashRouter></div>, document.getElementById("reactapp"));