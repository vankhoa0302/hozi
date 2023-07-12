/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Theme } from '@common/theme'
import CustomText from '@components/CustomText/CustomText'
import CustomButton from '@components/CustomButton/CustomButton'
import { styles } from './styles'
import Background from '@components/Background/index'
import CustomHeader from '@components/CustomHeader.js'
import { useNavigation } from '@react-navigation/native'
import { Router } from '../../navigators/router'
import { useDispatch } from 'react-redux'
import { fetchRegister } from './authSlice'
import { Toast } from 'toastify-react-native'
import { emailValidator, emailValidatorLogin, nameValidator, passwordValidator } from './authValidator'
import { setLoading } from '@screens/home/homeSlice'

const RegisterScreen = () => {

  const [email, setEmail] = useState({ value: '', error: '' });
  const [name, setName] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [pwdConfirm, setPwdConfirm] = useState({ value: '', error: '' });
  const [disaleBtn, setDisableBtn] = useState(false);


  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleRegister = async () => {

    //validate
    const emailError = emailValidator(email.value);
    const nameError = nameValidator(name.value);
    const passwordError = passwordValidator(password.value);
    const comfirmPwdError = passwordValidator(pwdConfirm.value);
    if (passwordError || nameError || emailError || comfirmPwdError) {
      setEmail({ ...email, error: emailError });
      setName({ ...name, error: nameError });
      setPassword({ ...password, error: passwordError });
      setPwdConfirm({ ...pwdConfirm, error: comfirmPwdError });
      return;
    } else if (pwdConfirm.value != password.value) {
      setPwdConfirm({ ...pwdConfirm, error: 'Xác nhận mật khẩu chưa chính xác !' });
      return;
    }

    setDisableBtn(true);
    dispatch(setLoading(true));

    let obj = {
      "mail": email.value,
      "name": name.value,
      "pass": password.value
    }
    const { payload } = await dispatch(fetchRegister(obj))
    console.log(await dispatch(fetchRegister(obj)))
    if (payload) {
      setDisableBtn(false);
      dispatch(setLoading(false));
      navigation.goBack();
      Toast.success('Đăng ký tài khoản thành công')
    }
  }
  return (
    <Background>
      <CustomHeader isBack={true} />

      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ alignItems: 'center' }}>

            <Image source={require('@assets/pictures/Hozi-login.png')} style={{ height: 200, width: 200 }} resizeMode='contain' />
          </View>
          <View style={{ flex: 1 }}>
            <View style={styles.inputArea}>
              <CustomText color={Theme.COLORS.sub}>Email</CustomText>
              <TextInput
                value={email.value}
                onChangeText={text => setEmail({ value: text, error: '' })}
                style={styles.textInput}
              />
            </View>
            {email.error && <Text style={styles.error}>{email.error}</Text>}
            <View style={styles.inputArea}>
              <CustomText color={Theme.COLORS.sub}>Tên đăng nhập</CustomText>
              <TextInput
                value={name.value}
                onChangeText={text => setName({ value: text, error: '' })}
                style={styles.textInput}
              />
            </View>
            {name.error && <Text style={styles.error}>{name.error}</Text>}
            <View style={styles.inputArea}>
              <CustomText color={Theme.COLORS.sub}>Mật khẩu</CustomText>
              <TextInput
                value={password.value}
                onChangeText={text => setPassword({ value: text, error: '' })}
                secureTextEntry
                style={styles.textInput}
              />
            </View>
            {password.error && <Text style={styles.error}>{password.error}</Text>}
            <View style={styles.inputArea}>
              <CustomText color={Theme.COLORS.sub}>Xác nhận mật khẩu</CustomText>
              <TextInput
                value={pwdConfirm.value}
                onChangeText={text => setPwdConfirm({ value: text, error: '' })}
                secureTextEntry
                style={styles.textInput}
              />
            </View>
            {pwdConfirm.error && <Text style={styles.error}>{pwdConfirm.error}</Text>}
            <CustomButton
              disabled={disaleBtn}
              label={'Đăng ký'}
              labelColor={Theme.COLORS.white}
              color={Theme.COLORS.color2}
              style={[styles.checkoutContainer]}
              onPress={handleRegister} />

            <CustomText style={styles.navigateText}>Đã có tài khoản?
              <CustomText bold onPress={() => navigation.navigate(Router.Login)}>{" "}
                Đăng nhập
              </CustomText>
            </CustomText>
          </View>

        </ScrollView>
      </View>

    </Background>
  )
}

export default RegisterScreen

