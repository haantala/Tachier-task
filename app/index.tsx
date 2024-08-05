import { StyleSheet, View } from "react-native";
import {  useState } from "react";
import { Redirect } from "expo-router";

import { Provider,  } from 'react-redux';
import { store } from "./redux/store";
import LoginPage from "@/Pages/auth/login";

export default function App() {
  const [userData, setUserData] = useState()

  return (
    <View style={styles.container}>
      {/* <Provider store={store}>
        <LoginPage />
      </Provider> */}
      <Redirect href={!userData ? "/(routes)/home" : "/(routes)/login"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
