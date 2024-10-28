import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";

export default function MyTab() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="MyHome" component={Home} options={{ headerShown: false, tabBarLabel: 'Home' }} />

    </Tab.Navigator>
  )
}
