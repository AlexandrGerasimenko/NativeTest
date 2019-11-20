import React from "react";
import { Actions } from "react-native-router-flux";
import { SafeAreaView, StyleSheet} from "react-native";
import Video from "react-native-video";
import {deviceHeight} from '../helpers/const'
class About extends React.Component {
  constructor(props) {
    super(props);
    this.goToHome = () => {
      Actions.home();
    };
  }
  render() {
    return (
      <>
        <SafeAreaView>
          <Video
            source={{ uri: this.props.videoLink }}
            style={styles.backgroundVideo}
            ref={(ref) => {
               this.player = ref
             }}  
            onBuffer={this.onBuffer}                // Callback when remote video is buffering
            onError={this.videoError}               // Callback when video cannot be loaded
            style={styles.backgroundVideo} 
            controls
          />
          
          
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  backgroundVideo: {
   //  position: "absolute",
   //  top: 0,
   //  left: 0,
   //  bottom: 0,
   //  right: 0,
   // flex:1,
    height: deviceHeight/2,
  }
});

export default About;
