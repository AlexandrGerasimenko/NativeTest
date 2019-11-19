import React from 'react'
import { TouchableOpacity, Text,View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import list from '../videoSamples/mainList'

const Home = () => {
  
   return (
    <View>
         {list.map(item => (
      <TouchableOpacity key = {item.name} style = {{ margin: 12 }} onPress = { () => {
         Actions.video({ videoLink: item.link,title : item.name})
         
      }}>
<Text>{item.name}</Text>
         
            
      </TouchableOpacity>
      ))}
      </View>
   )
}
export default Home