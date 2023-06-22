import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import States from "./components/States";
import Example from "./components/Example";

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        displayView: "Example",
      };
    }
  
    changeView = () => {
      this.setState((prevState) => {
        const newView = prevState.displayView === "Example" ? "States" : "Example";
        return {
          displayView: newView
        };
      });
    };
  
    renderButtonLabel = () => {
      if (this.state.displayView === "Example") {
        return "Show me the States view!";
      } else {
        return "Show me the Example view!";
      }
    };
  
    renderView = () => {
      if (this.state.displayView === "Example") {
        return <Example />;
      } else {
        return <States />;
      }
    };
  
    render() {
      const buttonStyle = {
        margin: '12px',
        fontFamily: "courier",
        fontWeight: "bold"
      };
  
      return (
        <div>
          <button onClick={this.changeView} style={buttonStyle}>
            {this.renderButtonLabel()}
          </button>
          {this.renderView()}
        </div>
      );
    }
  }
  
  ReactDOM.render(<div><Header/>, <App/></div>, document.getElementById("reactapp"));