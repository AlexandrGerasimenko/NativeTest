import React from "react";
import { StyleSheet, TouchableOpacity, Text, ScrollView } from "react-native";
import { Actions } from "react-native-router-flux";
import list from "../videoSamples/mainList";

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      {list.map(item => (
        <TouchableOpacity
          key={item.name}
          style={styles.videoItem}
          onPress={() => {
            Actions.video({ videoLink: item.link, title: item.name });
          }}
        >
          <Text style={styles.itemName}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    backgroundColor: "#000",
    flex: 1
  },
  itemName: {
    textAlign: "center",
    borderColor: "#fff",
    color: "#fff",
    padding: 15
  },
  videoItem: {
    color: "#fff",
    borderColor: "#fff",
    borderBottomWidth: 1
  }
});
export default Home;
