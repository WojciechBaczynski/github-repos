import React from "react";
import Repositories from "./containers/Repositories";
import "../src/assets/styles/tailwind/tailwind-compiled.css";
import "../src/assets/styles/fonts/Jost/Jost.css";
import "../src/assets/styles/fonts/LeagueSpartan/index.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Repositories />
    </div>
  );
}

export default App;
