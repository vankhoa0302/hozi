/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Theme } from '@common/theme'
import CustomText from '@components/CustomText/CustomText'
import CustomButton from '@components/CustomButton/CustomButton'
import { styles } from './styles'
import { useDispatch } from 'react-redux'
import { fetchDogs, fetchRegister } from './authSlice'
import axios from 'axios'


const LoginScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const dispatch = useDispatch();
  const handleLogin = () => {

  }
  const handleRegister = () => {
    let obj = {
      mail: "test_ttv@mailinator.com",
      name: "member1",
      pass: "123123"
    }
    let { payload } = dispatch(fetchRegister(obj))
    console.log(payload)
    // axios.get('https://dog.ceo/api/breeds/image/random')
    //   .then(response => {
    //     // Handle successful response here
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     // Handle error here
    //     console.log(error);
    //   });

  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textArea}>
        <CustomText bold>Hello!</CustomText>
        <CustomText style={styles.greeting} bold fontSize={25}>Welcome Back</CustomText>
      </View>
      <View style={styles.wrapBox}>
        <View style={styles.inputArea}>
          <CustomText color={Theme.COLORS.sub}>Email</CustomText>
          <TextInput

            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.textInput}

          />
        </View>
        <View style={styles.inputArea}>
          <CustomText color={Theme.COLORS.sub}>Password</CustomText>
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            style={styles.textInput}
          />
        </View>
        <CustomText style={styles.navigateText}>Forgot Password</CustomText>
        <CustomButton
          onPress={handleLogin}
          label={'Log in'}
          labelColor={Theme.COLORS.white}
          color={Theme.COLORS.black}
          labelSize={16}
        />
        <CustomButton
          onPress={handleRegister}
          label={'Register'}
          labelColor={Theme.COLORS.white}
          color={Theme.COLORS.black}
          labelSize={16}
        />
        <CustomText style={styles.navigateText}>Sign up</CustomText>

      </View>
    </SafeAreaView>
  )
}

export default LoginScreen
