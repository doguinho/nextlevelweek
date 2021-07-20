import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StatusBar
} from "react-native";
import { styles } from "./styles";
import illustra from '../../assets/illustration.png';
import { ButtonIcon } from "../../components/ButtonIcon";

export function SignIn() {

  //essa é a forma simplificada de declarar um estado
  // [getter,setter]
  // const [text, setText] = useState('nada ainda');

  return (
    <View style={styles.container}>
      <StatusBar
      barStyle='light-content'
      backgroundColor='transparent' translucent
      ></StatusBar>
      <Image
        resizeMode="stretch"
        style={styles.image}
        source={illustra}></Image>
      <View style={styles.content}>

        <Text style={styles.title}>
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>

        <ButtonIcon activeOpacity={0.7} title="Entrar com o discord"></ButtonIcon>

      </View>
    </View>
  )
}
