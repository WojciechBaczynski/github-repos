import React from "react";
import Repositories from "./containers/Repositories";
import "../src/assets/styles/tailwind/tailwind-compiled.css";
import "../src/assets/styles/fonts/Jost/Jost.css";
import "../src/assets/styles/fonts/LeagueSpartan/index.css";
import { ThemeContext, themes } from "./context";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.stripes
    };
  }

  render() {
    return (
      <React.Fragment>
        <div
          className={`bg-hero-${this.state.theme}-indigo flex justify-center`}
        >
          <select
            onChange={event => this.setState({ theme: event.target.value })}
          >
            <option value={themes.stripes}>Theme 1</option>
            <option value={themes.deathStar}>Theme 2</option>
            <option value={themes.fancyRectangles}>Theme 3</option>
            <option value={themes.houndstooth}>Theme 4</option>
          </select>
        </div>

        <ThemeContext.Provider value={this.state.theme}>
          <Repositories />
        </ThemeContext.Provider>
      </React.Fragment>
    );
  }
}

export default App;
