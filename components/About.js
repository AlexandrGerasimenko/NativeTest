import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";

const About = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        onPress={() => {
          Actions.home();
        }}
      >
        <Text style={styles.footerItem}>Go to main page</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#000",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    borderColor: "#fff"
  },
  footerItem: {
    color: "#fff",
    padding: 10,
    fontSize: 20,
    borderColor: "#fff",
    borderRadius: 4,
    borderWidth: 1
  }
});

export default About;
