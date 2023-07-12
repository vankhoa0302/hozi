import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from '@components/Background/index'
import { Theme } from '@common/theme'
import CustomText from '@components/CustomText/CustomText'
import CustomButton from '@components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { Router } from '../../navigators/router'
import { styles } from './styles'

const CheckoutSuccess = () => {

    const navigation = useNavigation();
    return (
        <Background bgColor={'#fff'} >
            <View style={{ flex: 1, backgroundColor: Theme.COLORS.color2, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('@assets/pictures/Hozi-logo.png')} resizeMode='cover' style={{ width: '100%', height: '100%' }} />
            </View>
            <View style={{ flex: 1, paddingHorizontal: 20, marginTop: -20 }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>

                    <CustomText bold fontSize={20} >Đặt hàng thành công</CustomText>

                </View>
                <CustomText style={{ textAlign: 'center' }}>Đơn hàng của bạn đã được tiếp nhận, chúng tôi sẽ chuẩn bị và giao hàng cho bạn trong thời gian sớm nhất !</CustomText>
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <CustomButton
                        onPress={() => navigation.navigate(Router.BottomTab)}
                        label={'Trang chủ'}
                        labelColor={Theme.COLORS.color2}
                        style={[styles.checkoutSuccessBtn]}
                    />
                </View>
            </View>
        </Background>
    )
}

export default CheckoutSuccess
