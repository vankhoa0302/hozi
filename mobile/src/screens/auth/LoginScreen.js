/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import { SafeAreaView, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Theme } from '@common/theme'
import CustomText from '@components/CustomText/CustomText'
import CustomButton from '@components/CustomButton/CustomButton'
import { styles } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import Background from '@components/Background/index'
import CustomHeader from '@components/CustomHeader.js'
import { fetchLogin, isAuth } from './authSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { Router } from '../../navigators/router'

const LoginScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { errorLogin, isLogin, isAuthLoading } = useSelector(state => state.auth);
  useEffect(() => {
    if (isLogin) {
      navigation.goBack();
    }
  }, [isLogin]);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const formData = new FormData();
    formData.append('grant_type', 'password');
    formData.append('client_id', process.env.client_id);
    formData.append('client_secret', process.env.client_secret);
    formData.append('username', email);
    formData.append('password', password);
    let { payload } = await dispatch(fetchLogin(formData));
    if (payload) {
      dispatch(isAuth(true))
    }
  }
  return (
    <Background>
      <CustomHeader isBack={true} />
      <View style={styles.container}>
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
            <CustomText color={Theme.COLORS.sub}>Mật khẩu</CustomText>
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
              style={styles.textInput}
            />
          </View>
          <CustomText style={styles.navigateText}>Quên mật khẩu</CustomText>
          <CustomButton
            onPress={handleLogin}
            label={'Đăng nhập'}
            labelColor={Theme.COLORS.white}
            color={Theme.COLORS.black}
            labelSize={16}
          />
          <CustomText style={styles.navigateText}>Đăng ký</CustomText>

        </View>
      </View>
    </Background>

  )
}

export default LoginScreen
