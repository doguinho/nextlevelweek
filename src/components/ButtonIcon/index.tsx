import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableOpacityProps
} from "react-native";
import { styles } from "./styles";
import discordImg from '../../assets/discord.png';
//define um tipo Props para poder ser 
// desestruturado e passado como parametro
// Aqui todas as propriedades dos botões são importadas e somadas 
// ao tipo que criei
type Props = TouchableOpacityProps & {
  title: string
}

// ...restProps são toas as prorpiedades e são passadas 
// sem que eu tenha
// que declarar uma a uma
export function ButtonIcon({title, ...restProps}:Props){
  return(
    <TouchableOpacity {...restProps}
    style={styles.container}>
      <View style={styles.iconWrapper}>
        <Image style={styles.icon} source={discordImg}></Image>
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}