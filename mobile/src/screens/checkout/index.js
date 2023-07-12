import { Image, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View, Modal, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
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
import { fetchCheckOut, fetchgetCartItem } from '@screens/cart/cartSlice'
import { formatCurrency } from '../../helpers/helpers'
import { useDispatch, useSelector } from 'react-redux'
import IconButton from '@components/IconButton/index'
import { alert } from '@baronha/ting'

const CheckoutScreen = () => {
    const navigation = useNavigation();
    const [cartItems, setCartItems] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [province, setProvince] = useState();
    const [district, setDistrict] = useState();
    const [ward, setWard] = useState();
    const [address, setAddress] = useState();

    const [totalMoney, setTotalMoney] = useState();
    const dispatch = useDispatch();

    const cart_id = useSelector((state) => state.cart.cartId)

    const handleOpenModal = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    const handleSaveAddress = () => {
        // Đóng modal
        setModalVisible(false);
    };
    const handleCheckOut = async () => {
        loading();
        let obj = {
            payment_id: 1,
            cart_id: cart_id,
            ip_address: "127.0.0.1",
            address: address + ward + district + province
        }
        const { payload } = await dispatch(fetchCheckOut(obj))
        console.log(await dispatch(fetchCheckOut(obj)))
        if (payload) {
            navigation.navigate(Router.CheckoutSuccess)
        }
    }

    const getCartItem = async () => {
        let obj = {
            page: 0
        }
        const { payload } = await dispatch(fetchgetCartItem(obj))
        if (payload?.results) {
            let data = payload?.results
            setCartItems(data);
        }
    }
    const calculateTotal = () => {
        const total = cartItems.reduce((accumulator, item) => {
            return accumulator + item.cart_quantity * item.product_price;
        }, 0);

        return total;
    };
    const loading = () => {
        const options = {
            preset: 'spinner',
            duration: 2
        };
        alert(options); // easy to use
    }
    useEffect(() => {
        getCartItem();
    }, [])


    return (
        <Background>
            <Modal visible={modalVisible} animationType="fade" transparent={true} onRequestClose={handleCloseModal}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View>
                            <CustomText bold>*Tỉnh/Thành phố</CustomText>
                            <TextInput
                                style={styles.input}
                                placeholder=""
                                value={province}
                                onChangeText={(text) => setProvince(text)}
                            />
                        </View>
                        <View>
                            <CustomText bold>*Quận/Huyện</CustomText>
                            <TextInput
                                style={styles.input}
                                placeholder=""
                                value={district}
                                onChangeText={(text) => setDistrict(text)}
                            />
                        </View>
                        <View>
                            <CustomText bold>*Phường/Xã</CustomText>
                            <TextInput
                                style={styles.input}
                                placeholder=""
                                value={ward}
                                onChangeText={(text) => setWard(text)}
                            />
                        </View>
                        <View>
                            <CustomText bold>*Địa chỉ cụ thể (số nhà, tên đường)</CustomText>
                            <TextInput
                                style={styles.input}
                                placeholder=""
                                value={address}
                                onChangeText={(text) => setAddress(text)}
                            />
                        </View>
                        <View style={styles.buttonContainer}>
                            <CustomButton onPress={handleCloseModal} label={'Hủy'} color={'red'} labelColor={'#fff'} />
                            <CustomButton onPress={handleSaveAddress} style={{ marginLeft: 8 }} label={'Lưu'} color={Theme.COLORS.color2} labelColor={'#fff'} />
                        </View>
                    </View>
                </View>
            </Modal>
            <ScrollView>
                <CustomHeader headerName={'Thanh toán'} isBack={true} />
                <View style={styles.address} onPress={() => navigation.navigate(Router.ShippingAddressScreen)}>
                    <View style={styles.row2}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons name='location' size={24} color={Theme.COLORS.color2} />
                            <CustomText style={{ marginLeft: 8 }}>Địa chỉ nhận hàng</CustomText>
                        </View>
                        <TouchableOpacity onPress={handleOpenModal}>
                            <CustomText>{address || ward || district || province ? 'Sửa địa chỉ' : 'Thêm địa chỉ'}</CustomText>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginLeft: 42, marginBottom: 12, flexDirection: 'row', flexWrap: 'wrap' }}>
                        {
                            address
                            &&
                            <CustomText numberOfLines={2}> {address}</CustomText>
                        }
                        {
                            ward
                            &&
                            <CustomText numberOfLines={2}>, {ward}</CustomText>
                        }

                        {
                            district
                            &&
                            <CustomText numberOfLines={2}>, {district}</CustomText>
                        }

                        {
                            province
                            &&
                            <CustomText numberOfLines={2}>, {province}</CustomText>
                        }
                    </View>
                </View>
                <Divider height={6} />

                {cartItems.map((item) => {
                    return (

                        <View key={item.product_id} style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, borderBottomColor: Theme.COLORS.lightGrey, borderBottomWidth: 0.5 }}>
                            <View style={styles.image}>
                                <Image source={{ uri: process.env.APP_URL + item.product_media }} resizeMode='contain' style={{ width: '100%', height: '100%' }} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <CustomText bold numberOfLines={1}>{item?.product_label}</CustomText>
                                <CustomText>{item?.product_type}</CustomText>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <CustomText>{formatCurrency(item?.product_price)}</CustomText>
                                    <CustomText>số lượng: {item?.cart_quantity}</CustomText>
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
                {/* <Divider height={1} /> */}

                {/* <TouchableOpacity style={styles.row2}>
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
                </TouchableOpacity> */}
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
                        <CustomText>{formatCurrency(calculateTotal())} đ</CustomText>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15 }}>
                        <CustomText color={Theme.COLORS.sub}>Phí vận chuyển</CustomText>
                        <CustomText>0đ</CustomText>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15 }}>
                        <CustomText fontSize={18}>Tổng thanh toán</CustomText>
                        <CustomText fontSize={18} color={'red'}>{formatCurrency(calculateTotal())} đ</CustomText>
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
                onPress={handleCheckOut}
                label={'Đặt hàng'}
                labelColor={Theme.COLORS.white}
                color={Theme.COLORS.color2}
                style={[styles.paymentContainer]}
            />
        </Background>
    )
}

export default CheckoutScreen
