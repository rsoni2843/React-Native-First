import {
  Button,
  Provider as PaperProvider,
  TextInput,
} from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  return (
    <PaperProvider>
      <View style={styles.container}>
        <TextInput
          style={{ flex: 0, width: 350 }}
          label={"Email"}
          onChangeText={(text) => setText(text)}
          value={text}
        />
        <Button style={{ width: 200 }} mode="contained">
          Submit
        </Button>
      </View>
      <View></View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    top: 50,
    margin: "auto",
  },
});
