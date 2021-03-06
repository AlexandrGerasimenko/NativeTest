import React from "react";
import { Router, Scene } from "react-native-router-flux";
import Home from "./Home.js";
import Video from "./Video.js";
import About from "./About.js";

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="home" component={Home} title="Title" initial={true} />
      <Scene key="video" component={Video} />
      <Scene key="about" title="About" component={About} />
    </Scene>
  </Router>
);

export default Routes;
