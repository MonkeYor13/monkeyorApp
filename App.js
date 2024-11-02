import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./navigation/MyStack";
import { useFonts } from "expo-font";
import { StatusBar } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Anton: require("./assets/fonts/AntonSC-Regular.ttf"),
    InterReg: require("./assets/fonts/Inter_24pt-Regular.ttf"),
    InterSemiBold: require("./assets/fonts/Inter_24pt-SemiBold.ttf"),
    InterItalic: require("./assets/fonts/Inter_24pt-Italic.ttf"),
  });
  if (!fontsLoaded) return null;

      

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <MyStack />
    </NavigationContainer>
  );
}
