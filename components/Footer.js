import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        onPress={() => {
          Actions.home();
        }}
      >
        <Text style={styles.footerItem}>Go to main page</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Actions.about();
        }}
      >
        <Text style={styles.footerItem}>Go to about page</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#000",
    padding: 4,
    paddingRight: 12,
    height: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 3,
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
export default Footer;
