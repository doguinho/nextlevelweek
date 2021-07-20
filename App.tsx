import React from "react";
import { SignIn } from "./src/screens/SignIn/index";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import { Rajdhani_500Medium, Rajdhani_700Bold } from "@expo-google-fonts/rajdhani";
import AppLoading from "expo-app-loading";
import { StatusBar } from "react-native";
import { Background } from "./src/components/Background";


export default function App() {

  // função que monitora o estado do carregamento das fontes
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  //enquanto as fontes ainda não foram carregadas, 
  // mostra o componente da tela de splash
  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Background>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent' translucent
      ></StatusBar>
      <SignIn />
    </Background>
  )
}
