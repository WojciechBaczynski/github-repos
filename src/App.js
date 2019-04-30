import React from "react";
import Repositories from "./containers/Repositories";
import "../src/assets/styles/tailwind/tailwind-compiled.css";
import "../src/assets/styles/fonts/Jost/Jost.css";
import "../src/assets/styles/fonts/LeagueSpartan/index.css";
import "./App.css";

import { ThemeContext, themes } from "./context";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.jupiter
    };
  }

  render() {
    return (
      <div className="App">
        <div className={`bg-hero-${this.state.theme}-black`}>
          <select
            onChange={event => this.setState({ theme: event.target.value })}
          >
            <option value={themes.jupiter}>Theme 1</option>
            <option value={themes.morphingDiamonds}>Theme 2</option>
            <option value={themes.formalInvitation}>Theme 3</option>
          </select>
        </div>

        <ThemeContext.Provider value={this.state.theme}>
          <Repositories />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
