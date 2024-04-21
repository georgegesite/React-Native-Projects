import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Welcome Developers!</Text>
      <Text>This is my first React-Native App</Text>
      <StatusBar style="auto" />
    </View>
  );
}
// npm run web: to run on web
// npm run android: to run on android
// npx expo start: to run on expo go
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
