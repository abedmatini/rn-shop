import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View>
      <Text style={styles.text}>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
});
