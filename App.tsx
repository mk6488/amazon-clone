import { StatusBar } from "expo-status-bar";
import { SafeAreaView, useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <HomeScreen />
      <StatusBar style={isDarkMode ? "light" : "dark"} />
    </SafeAreaView>
  );
}
