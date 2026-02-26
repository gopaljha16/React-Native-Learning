import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabRoot() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" , tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
 }} />
      <Tabs.Screen name="about" options={{ title: "About" , tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
 }} />
      <Tabs.Screen name="profile"  options={{ title: "Profile" , tabBarIcon: ({ color }) => <AntDesign
 size={28} name="user" color={color} />,
 }} />
    </Tabs>
  );
}
