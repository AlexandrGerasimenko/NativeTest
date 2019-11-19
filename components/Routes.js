import React from 'react'
import { Router, Scene } from 'react-native-router-flux'

import Home from './Home.js'
import Video from './Video.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Title" initial = {true} />
         <Scene key = "video" component = {Video}  />
      </Scene>
   </Router>
)
export default Routes