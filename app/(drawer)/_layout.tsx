import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { DrawerToggleButton } from "@react-navigation/drawer";

const DrawerRoot = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerLeft: () => <DrawerToggleButton />,
        }}
      >
        <Drawer.Screen name="index" options={{ title: "Home" }} />
        <Drawer.Screen name="about" options={{ title: "About" }} />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerRoot;
