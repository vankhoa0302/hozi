import { Image, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Background from '@components/Background'
import CustomHeader from '@components/CustomHeader.js'
import { styles } from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Zocial from 'react-native-vector-icons/Zocial'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Theme, WidthScreen } from '@common/theme'
import CustomText from '@components/CustomText/CustomText'
import { PRODUCTS } from '@data/data.js'
import { useNavigation } from '@react-navigation/native'
import Divider from '@components/Divider/Divider.js'
import { TextInput } from 'react-native'
import CustomButton from '@components/CustomButton/CustomButton'
import { Router } from '../../navigators/router'
const CheckoutScreen = () => {
    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <Background>
            <ScrollView>
                <CustomHeader headerName={'Thanh toán'} isBack={true} />
                <TouchableOpacity style={styles.address} onPress={() => navigation.navigate(Router.ShippingAddressScreen)}>
                    <Ionicons name='location-outline' color={Theme.COLORS.color2} size={24} />
                    <View style={{ marginHorizontal: 8, }}>
                        <CustomText>Địa chỉ nhận hàng</CustomText>
                        <View style={{ maxWidth: WidthScreen * 0.7, }}>
                            <View style={[styles.row]}>
                                <CustomText bold>Van Khoa</CustomText>
                                <View style={{ width: 1, backgroundColor: Theme.COLORS.black, height: '100%', margin: 8 }}></View>
                                <CustomText>(+84) 385 410 741</CustomText>
                            </View>
                            <CustomText numberOfLines={2}>38/19 Đường 147, phường Phước Long B, TP Thủ Đức</CustomText>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
                        <Ionicons name='chevron-forward-outline' size={24} color={Theme.COLORS.color2} />
                    </View>
                </TouchableOpacity>
                <Divider height={6} />

                {PRODUCTS.slice(0, 2).map((item) => {
                    return (
                        <View key={item.id} style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, borderBottomColor: Theme.COLORS.lightGrey, borderBottomWidth: 0.5 }}>
                            <View style={styles.image}>
                                <Image source={item?.image} resizeMode='contain' style={{ width: '100%', height: '100%' }} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <CustomText bold numberOfLines={1}>{item?.name}</CustomText>
                                <CustomText>{item?.category}</CustomText>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <CustomText>{item?.price}</CustomText>
                                    <CustomText>sl: {item?.quantity}</CustomText>
                                </View>
                            </View>
                        </View>
                    )
                })}
                <Divider height={6} />
                <View style={styles.row2}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name='chatbox-ellipses' size={24} color={Theme.COLORS.color2} />
                        <CustomText style={{ marginLeft: 8 }}>Tin nhắn:</CustomText>
                    </View>
                    <TextInput
                        textAlign='right'
                        placeholder='Lưu ý cho shop...'
                        style={{ flex: 1, padding: 0 }}
                    />
                </View>
                <Divider height={1} />

                <TouchableOpacity style={styles.row2}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Fontisto name='ticket' size={24} color={Theme.COLORS.color2} />
                        <CustomText style={{ marginLeft: 8 }}>Voucher</CustomText>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <CustomText color={Theme.COLORS.sub}>Chọn mã giảm giá</CustomText>
                        <Ionicons name='chevron-forward-outline' size={24} color={Theme.COLORS.sub} />

                    </View>
                </TouchableOpacity>
                <Divider height={1} />

                <TouchableOpacity style={styles.row2}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Zocial name='bitcoin' size={24} color={Theme.COLORS.color2} />
                        <CustomText style={{ marginLeft: 8 }}>Dùng 300 Hozi coin</CustomText>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <CustomText color={Theme.COLORS.sub}>[-300]</CustomText>
                        <Switch
                            trackColor={{ false: "#767577", true: Theme.COLORS.color2 }}
                            thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />

                    </View>
                </TouchableOpacity>
                <Divider height={7} />
                <View>
                    <TouchableOpacity style={styles.row2}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <MaterialIcons name='payment' size={24} color={Theme.COLORS.color2} />
                            <CustomText style={{ marginLeft: 8 }}>Phương thức thanh toán</CustomText>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                            <CustomText color={Theme.COLORS.sub}>COD</CustomText>
                            <Ionicons name='chevron-forward-outline' size={24} color={Theme.COLORS.sub} />
                        </View>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15 }}>
                        <CustomText color={Theme.COLORS.sub}>Tổng tiền hàng</CustomText>
                        <CustomText>2000000d</CustomText>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15 }}>
                        <CustomText color={Theme.COLORS.sub}>Phí vận chuyển</CustomText>
                        <CustomText>200d</CustomText>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15 }}>
                        <CustomText fontSize={18}>Tổng thanh toán</CustomText>
                        <CustomText fontSize={18}>2000000d</CustomText>
                    </View>
                </View>
                <Divider height={7} />
                <View>
                    <View style={styles.row2}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <MaterialIcons name='local-police' size={24} color={Theme.COLORS.color2} />
                            <CustomText style={{ marginLeft: 8 }}>Nhấn đặt hàng đồng nghĩa với việc bạn đồng ý tuân theo<CustomText color={Theme.COLORS.danger}> Điều khoản của Hozi</CustomText></CustomText>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <CustomButton
                label={'Đặt hàng'}
                labelColor={Theme.COLORS.white}
                color={Theme.COLORS.color2}
                style={[styles.paymentContainer]}
            />
        </Background>
    )
}

export default CheckoutScreen
