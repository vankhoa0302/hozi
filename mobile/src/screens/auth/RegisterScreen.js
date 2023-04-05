/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Theme } from '@common/theme'
import CustomText from '@components/CustomText/CustomText'
import CustomButton from '@components/CustomButton/CustomButton'
import { styles } from './styles'

const RegisterScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.textArea}>
            <CustomText style={styles.greeting} bold fontSize ={25}>Welcome</CustomText>
        </View>
        <View style={styles.wrapBox}>
            <View style={styles.inputArea}>
              <CustomText color={Theme.COLORS.sub}>Name</CustomText>
              <TextInput  style={styles.textInput} />
            </View>
            <View style={styles.inputArea}>
              <CustomText color={Theme.COLORS.sub}>Email</CustomText>
              <TextInput style={styles.textInput} />
            </View>
            <View style={styles.inputArea}>
              <CustomText color={Theme.COLORS.sub}>Password</CustomText>
              <TextInput  style={styles.textInput} />
            </View>
            <View style={styles.inputArea}>
              <CustomText color={Theme.COLORS.sub}>Confirm Password</CustomText>
              <TextInput style={styles.textInput} />
            </View>
            <CustomButton 
              label={'Sign up'} 
              labelColor={Theme.COLORS.white}
              color={Theme.COLORS.black}
              labelSize={16}
            />
            <CustomText 
              style={{textAlign:'center',marginVertical:8}} 
              color={Theme.COLORS.sub}>
                Already have an account?
                <CustomText bold onPress={()=>console.log('first')} > Sign in</CustomText>
            </CustomText>

        </View>
    </SafeAreaView>
  )
}

export default RegisterScreen

