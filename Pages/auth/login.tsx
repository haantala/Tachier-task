import color from "@/@core/color";
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button } from "react-native";
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { useContext, useEffect, useState } from "react";
import { AuthContext, AuthContextType } from '@/app/context/authContext';
import { router } from "expo-router";
import {handleLoginApi} from "../../app/Core/api/commoApi"
import { useDispatch, useSelector } from "react-redux";
import { ApiRoutes } from "@/app/Core/constants";
import { WebSocket } from "@/app/redux/reducer/common";

WebBrowser.maybeCompleteAuthSession();

export default function LoginPage() {
  const dispatch =  useDispatch()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const contextData: any | null = useContext(AuthContext)
  const [ws1, setWs1] = useState<any>()
  const { webSocketdata } = useSelector((store:any) => store.common);
  
  const connectWebsocket = () => {
    const webSocketConnect = new WebSocket(
      `${ApiRoutes.WS_HOSTNAME}/ws/{script}`
    );
    webSocketConnect.addEventListener("close", () => {
      connectWebsocket();
    });
    setWs1(webSocketConnect);
    dispatch(WebSocket(webSocketConnect));
  };
  const handleLogin = async () => {
    const Data= {username:email, password:password}
    await handleLoginApi(Data)
      .then(() => { 
        router.push('/home')
      })
      .catch((error) => {
        console.log(error);
        router.push('/home')
      });
      connectWebsocket()
    
    };
    useEffect(() => {
      if (webSocketdata == null) {
        connectWebsocket();
      }
    }, [])
  
    const messageReceiveHandler = async (event:any) => {
      // NotificationComponent(event)
    };
  
    useEffect(() => {
      if (ws1 != null) {
        ws1.addEventListener("message", messageReceiveHandler);
      }
    }, [ws1]);
    
  return (
    <View>
      <Image style={styles.image} source={require("../../assets/images/login.jpg")} />
      <View style={styles.container}>
        <Text style={styles.welcometitle}>Welcome to My app.</Text>
        <Text style={styles.subtitle}>Login</Text>
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 25,
    marginTop: -35,
    backgroundColor: "#FFF",
    borderTopRightRadius: 75,
    borderTopLeftRadius: 75
  },
  welcometitle: {
    marginTop: 60,
    fontSize: 45,
    fontWeight: "bold",
  },
  image: {
    maxWidth: 500,
    maxHeight: 300
  },
  subtitle: {
    fontSize: 25,
    paddingBottom: 25,
  },
  button: {
    backgroundColor: color.primary,
    cursor: "pointer",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    padding: 20,
    alignContent: "center",
    borderRadius: 20
  },
  buttontext: {
    fontSize: 28,
    marginStart: 20,
    color: "#FFFFFF"
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    marginHorizontal:10,
    paddingHorizontal: 8,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 12,
  },

});
