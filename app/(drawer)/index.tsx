import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Home = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 12 }}>
      <Text>Home</Text>
      <Link href="/(drawer)/about">Go to About</Link>
    </View>
  );
};

export default Home;
