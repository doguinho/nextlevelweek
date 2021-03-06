import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:theme.colors.background,
    alignItems:'center',
    justifyContent:'center'
  },
  content:{
    marginTop:-40,
    paddingHorizontal:50
  },
  image:{
    width:'100%',
    height:360
  },
  input:{
    height: 50,
    width:200,
    borderBottomWidth:2
  },
  title:{
    color:theme.colors.heading,
    fontSize:40,
    textAlign:'center',
    marginBottom:16
  },
  subtitle:{
    color:theme.colors.heading,
    fontSize:15,
    textAlign:'center',
    marginBottom:64
  }
})