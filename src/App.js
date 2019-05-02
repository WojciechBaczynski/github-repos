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
      theme: themes.circuitBoard
    };
  }

  render() {
    return (
      <React.Fragment>
        <div
          className={`bg-white h-12 flex justify-between items-center p-4 px-8 shadow-sm`}
        >
          <div className="font-body text-2xl text-indigo-dark">
            Github repos
          </div>
          <select
            className="appearance-none mt-1 bg-white border-1 border border-indigo rounded p-2 font-body text-indigo-dark opacity-25 hover:opacity-100 outline"
            onChange={event => this.setState({ theme: event.target.value })}
          >
            {Object.keys(themes).map((key, index) => (
              <option key={`theme-${index}`} value={themes[key]}>
                Theme {index + 1}
              </option>
            ))}
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
