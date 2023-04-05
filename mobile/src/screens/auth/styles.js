/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import { Theme } from "@common/theme";
const { StyleSheet } = require("react-native");

export const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        justifyContent:'center',
        backgroundColor:Theme.COLORS.white,
    },
    textArea:{
        alignItems:'center'
    },
    greeting:{
        textTransform:'uppercase',
    },
    wrapBox: {
        padding:12,
        backgroundColor: Theme.COLORS.white,
        margin: 20,
        paddingHorizontal: 16,
        paddingBottom: 32,
        borderRadius: 8,
        shadowColor:'rgba(0,0,0)' ,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    
        elevation: 5,
      },
      inputArea:{ 
        marginVertical:8,
        borderRadius:4,
        borderColor:Theme.COLORS.sub,
        borderWidth:1,
        padding:6
      },
      textInput:{
        padding:4,
      },
      navigateText:{
        textAlign:'center',
        marginVertical:8,
      },
})