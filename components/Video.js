import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import {AppRegistry,
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   StatusBar,
 } from 'react-native';
 import Video from 'react-native-video';


class About extends React.Component {
   constructor(props){
      super(props)
      this.goToHome = () => {
         Actions.home()
      }
   }
   render(){
   return (
      <>
            <SafeAreaView>
           <Video source={{uri: this.props.videoLink}}
                style={styles.backgroundVideo} />
            </SafeAreaView>
          </>
   )
}
}

const styles = StyleSheet.create({
 
   backgroundVideo: {
   position: 'absolute',
   top: 0,
   left: 0,
   bottom: 0,
   right: 0,
   height:1500,
   width:1500
 }
});
// const About = () => {
//    const goToHome = () => {
//       Actions.home()
//    }
//    return (
//       <TouchableOpacity style = {{ margin: 128 }} onPress = {goToHome}>
//          <Text>This is ABOUT</Text>
//          {/* <Text>Track{track}</Text> */}
//       </TouchableOpacity>
//    )
// }
export default About