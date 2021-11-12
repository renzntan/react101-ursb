import React, { Component } from "react";

import Header from "./components/header";
import Profile from "./components/profile";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Hello World!</h1>
        <Profile />
      </div>
    );
  }
}

export default App;
