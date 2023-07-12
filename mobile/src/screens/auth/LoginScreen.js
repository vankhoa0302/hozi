/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import { Image, SafeAreaView, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Theme } from '@common/theme'
import CustomText from '@components/CustomText/CustomText'
import CustomButton from '@components/CustomButton/CustomButton'
import { styles } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import Background from '@components/Background/index'
import CustomHeader from '@components/CustomHeader.js'
import { fetchLogin, isAuth } from './authSlice'
import { useNavigation } from '@react-navigation/native'
import { fetchgetCartItem } from '@screens/cart/cartSlice'
import { Router } from '../../navigators/router'
import { alert, toast } from '@baronha/ting';
import { setLoading } from '@screens/home/homeSlice'
import { emailValidatorLogin, passwordValidator } from './authValidator'

const LoginScreen = () => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [disaleBtn, setDisableBtn] = useState(false);

  const { errorLogin, isLogin, isAuthLoading } = useSelector(state => state.auth);
  useEffect(() => {
    if (isLogin) {
      navigation.goBack();
    }
  }, [isLogin]);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogin = async () => {

    //validate
    const emailError = emailValidatorLogin(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    setDisableBtn(true);
    dispatch(setLoading(true));
    const formData = new FormData();
    formData.append('grant_type', 'password');
    formData.append('client_id', process.env.client_id);
    formData.append('client_secret', process.env.client_secret);
    formData.append('username', email.value);
    formData.append('password', password.value);
    let results = await dispatch(fetchLogin(formData));
    if (results?.error) {
      dispatch(setLoading(false));
      setDisableBtn(false);
      const options = {
        title: 'Thông tin đăng nhập chưa chính xác !',
        preset: 'error'
      };
      alert(options);
    } else if (results?.payload) {
      let obj = {
        page: 0
      }
      await dispatch(fetchgetCartItem(obj))
      dispatch(isAuth(true))
      const options = {
        title: 'Đăng nhập thành công !',
      };
      toast(options); // easy to use
      setDisableBtn(false);
      dispatch(setLoading(false));
    }
  }


  return (
    <Background>
      <CustomHeader isBack={true} />

      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Image source={require('@assets/pictures/Hozi-login.png')} style={{ height: '100%', width: '100%' }} resizeMode='contain' />
        </View>
        <View style={{ flex: 2 }}>
          {/* <View style={styles.textArea}>
            <CustomText style={styles.greeting} bold fontSize={25}>Welcome Back</CustomText>
          </View> */}
          <View style={styles.inputArea}>
            <CustomText color={Theme.COLORS.sub}>Tên đăng nhập</CustomText>
            <TextInput
              value={email.value}
              onChangeText={text => setEmail({ value: text, error: '' })}
              style={styles.textInput}

            />
          </View>
          {email.error && <Text style={styles.error}>{email.error}</Text>}
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
          <View style={{ alignItems: 'flex-end', marginHorizontal: 20 }}>
            <CustomText style={styles.navigateText}>Quên mật khẩu?</CustomText>
          </View>
          <CustomButton
            disabled={disaleBtn}
            label={'Đăng nhập'}
            labelColor={Theme.COLORS.white}
            color={Theme.COLORS.color2}
            style={[styles.checkoutContainer]}
            onPress={handleLogin} />

          <CustomText style={styles.navigateText}>Bạn chưa có tài khoản?
            <CustomText bold onPress={() => navigation.navigate(Router.Register)}>{" "}
              Đăng ký
            </CustomText>
          </CustomText>
        </View>



      </View>
    </Background>

  )
}

export default LoginScreen
