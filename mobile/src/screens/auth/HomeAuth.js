import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from '@components/Background/index'
import CustomHeader from '@components/CustomHeader.js'
import CustomButton from '@components/CustomButton/CustomButton'
import CustomText from '@components/CustomText/CustomText'
import { Theme } from '@common/theme'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { Router } from '../../navigators/router'
import ToastManager, { Toast } from 'toastify-react-native'

const HomeAuth = () => {
    const navigation = useNavigation();
    return (
        <Background>
            <ToastManager />
            <CustomHeader headerName={'My Profile'} />
            <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 25 }}>
                <CustomButton
                    onPress={() => navigation.navigate(Router.Login)}
                    label={'Đăng nhập'}
                    labelColor={Theme.COLORS.white}
                    color={Theme.COLORS.color2}
                    style={[styles.btnLoginRegister]}
                />
                <CustomText style={{ textAlign: 'center' }}>Bạn chưa có tài khoản?</CustomText>
                <CustomButton
                    onPress={() => navigation.navigate(Router.Register)}
                    label={'Đăng ký'}
                    labelColor={Theme.COLORS.color2}
                    color={Theme.COLORS.white}
                    style={[styles.btnLoginRegister, { borderWidth: 1, borderColor: Theme.COLORS.color2 }]}
                />
            </View>
        </Background>
    )
}

export default HomeAuth