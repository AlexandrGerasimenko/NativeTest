import React from 'react'
import { StyleSheet, Text,View,TouchableOpacity} from 'react-native';
// import { Actions } from 'react-native-router-flux';
// import list from '../videoSamples/mainList'

const Footer = () => {
  
   return (
//     <View style={{flex: 1 ,flexDirection: 'row'}}>
//     {/* <View style={{flex: 1, backgroundColor: 'powderblue'}} />
//     <View style={{flex: 1, backgroundColor: 'powderblue'}} />
//     <View style={{flex: 1, backgroundColor: 'powderblue'}} />
//     <View style={{flex: 1, backgroundColor: 'powderblue'}} /> */}
//     <Text>tdytdf</Text>
//   </View>
<View style={styles.footer}>
     <TouchableOpacity>
        <Text style={styles.footerItem} >1</Text>
     </TouchableOpacity>
     <TouchableOpacity>
        <Text style={styles.footerItem} >2</Text>
     </TouchableOpacity>
     <TouchableOpacity>
        <Text style={styles.footerItem} >3</Text>
     </TouchableOpacity>
     <TouchableOpacity>
        <Text style={styles.footerItem} >4</Text>
     </TouchableOpacity>


</View>
   )
}

const styles = StyleSheet.create({

    footer: {
      color: 'red',
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      height: 100,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    footerItem:{
      fontSize: 25,

    }
  });
export default Footer