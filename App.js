import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomComponent from "./src/CustomComponent";
import FlatListDemo from "./src/FlatListDemo";
import Images from "./src/Images";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.t1}>Hello User</Text>
      {/* <FlatListDemo /> */}
      <Images />
      {/* <CustomComponent /> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  t1: {
    color: "red",
  },
});
