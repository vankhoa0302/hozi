import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Background from '@components/Background/index'
import CustomHeader from '@components/CustomHeader.js'
import { useDispatch } from 'react-redux'
import { useNavigation, useRoute } from '@react-navigation/native'
import { fetchGetCartOrder, fetchGetOrderDetail, fetchgetCartItem } from '@screens/cart/cartSlice'
import { Router } from '../../navigators/router'
import CustomText from '@components/CustomText/CustomText'
import Divider from '@components/Divider/Divider'
import CustomButton from '@components/CustomButton/CustomButton'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Zocial from 'react-native-vector-icons/Zocial'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Theme, WidthScreen } from '@common/theme'
import { formatCurrency, timeStamp } from '../../helpers/helpers'
import { styles } from './styles'

const OrderDetail = () => {
    const [OrderDetail, setOrderDetail] = useState();
    const [cartItems, setCartItems] = useState([]);

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const route = useRoute();

    const getOrderDetail = async () => {
        let obj = {
            id: route.params.id
        }
        const { payload } = await dispatch(fetchGetOrderDetail(obj))
        if (payload?.results) {
            setOrderDetail(payload.results)
        }
    }
    const getCartItem = async () => {
        let obj = {
            id: OrderDetail?.cart_id
        }
        const { payload } = await dispatch(fetchGetCartOrder(obj))
        if (payload?.results) {
            let data = payload?.results
            setCartItems(data);
        }
    }
    const statusText = (status) => {
        switch (status) {
            case 'in_progressing':
                return (
                    <CustomText fontSize={16} bold color={Theme.COLORS.yellow}>Chờ xác nhận</CustomText>
                )
                break;
            case 'approved':
                return (
                    <CustomText fontSize={16} bold color={Theme.COLORS.yellow}>Đã xác nhận</CustomText>
                )
                break;
            case 'shipping':
                return (
                    <CustomText fontSize={16} bold color={Theme.COLORS.yellow}>Đang giao hàng</CustomText>
                )
                break;
            case 'completed':
                return (
                    <CustomText fontSize={16} bold color={Theme.COLORS.yellow}>Hoàn thành</CustomText>
                )
                break;
            case 'cancel':
                return (
                    <CustomText fontSize={16} bold color={Theme.COLORS.yellow}>Đã hủy</CustomText>
                )
                break;
        }
    }
    const decText = (status) => {
        switch (status) {
            case 'in_progressing':
                return (
                    <CustomText >Đơn hàng đang được tiếp nhận, chúng tôi sẽ sớm liên hệ đến bạn !</CustomText>
                )
                break;
            case 'approved':
                return (
                    <CustomText >Đơn hàng đang được chuẩn bị và sẽ sớm giao điến cho bạn !</CustomText>
                )
                break;
            case 'shipping':
                return (
                    <CustomText >Đơn hàng đã được giao cho đơn vị vận chuyển</CustomText>
                )
                break;
            case 'completed':
                return (
                    <CustomText >Giao hàng thành công</CustomText>
                )
                break;
            case 'cancel':
                return (
                    <CustomText >Đơn hàng đã bị hủy</CustomText>
                )
                break;
        }
    }
    useEffect(() => {
        if (OrderDetail) {
            getCartItem();
        }
    }, [OrderDetail])
    useEffect(() => {
        if (route) {
            getOrderDetail();
        }
    }, [])
    return (
        <Background>
            <CustomHeader headerName={'Thông tin đơn hàng'} isBack={true} />
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ paddingHorizontal: 8, justifyContent: 'flex-start', backgroundColor: Theme.COLORS.lightGrey, paddingVertical: 12 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <CustomText bold>Trạng thái:
                            </CustomText>
                            <View style={{ padding: 4 }}>

                                {statusText(OrderDetail?.status)}
                            </View>

                        </View>
                        {decText(OrderDetail?.status)}
                    </View>
                    <View style={{ paddingHorizontal: 8, paddingVertical: 12 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons name='location' color={Theme.COLORS.color2} size={24} />
                            <CustomText>Địa chỉ nhận hàng</CustomText>
                        </View>
                        <View>
                            <CustomText numberOfLines={2}>{OrderDetail?.address}</CustomText>
                        </View>
                    </View>
                    <Divider height={6} />
                    <View>
                        <View style={{ padding: 20 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <MaterialIcons name='payment' size={24} color={Theme.COLORS.color2} />
                                <CustomText bold fontSize={14} style={{ marginLeft: 8 }}>Phương thức thanh toán</CustomText>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <CustomText style={{ marginLeft: 28 }} color={Theme.COLORS.sub}>Thanh toán khi nhận hàng</CustomText>
                            </View>
                        </View>

                    </View>
                    <Divider height={7} />
                    {
                        (cartItems && cartItems.length > 0)
                            ? cartItems.map((item) => {
                                return (
                                    <View key={item.product_id} style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, borderBottomColor: Theme.COLORS.lightGrey, borderBottomWidth: 0.5 }}>
                                        <View style={styles.image}>
                                            <Image source={{ uri: process.env.APP_URL + item.product_media }} resizeMode='contain' style={{ width: '100%', height: '100%' }} />
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <CustomText bold numberOfLines={1}>{item?.product_label}</CustomText>
                                            <CustomText>{item?.product_type}</CustomText>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <CustomText>{formatCurrency(item?.product_price)} đ</CustomText>
                                                <CustomText>số lượng: {item?.cart_quantity}</CustomText>
                                            </View>
                                        </View>
                                    </View>
                                )
                            })
                            : null
                    }

                    <Divider height={7} />

                    <View>
                        <View style={{ padding: 20 }}>
                            <View style={styles.row3}>
                                <CustomText bold fontSize={14}>Mã đơn hàng</CustomText>
                                <CustomText bold fontSize={14}>#{OrderDetail?.cart_id}</CustomText>

                            </View>
                            <View style={styles.row3}>
                                <CustomText color={Theme.COLORS.sub}>Ngày đặt hàng</CustomText>
                                <CustomText bold fontSize={14}>{timeStamp(parseFloat(OrderDetail?.created))}</CustomText>
                            </View>
                            <View style={styles.row3}>
                                <CustomText color={Theme.COLORS.sub}>Tổng tiền hàng</CustomText>
                                <CustomText bold>{formatCurrency(OrderDetail?.amount)} đ</CustomText>
                            </View>
                            <View style={styles.row3}>
                                <CustomText color={Theme.COLORS.sub}>Phí vận chuyển</CustomText>
                                <CustomText>0đ</CustomText>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <CustomText fontSize={18}>Tổng thanh toán</CustomText>
                                <CustomText fontSize={16} color={'red'} bold>{formatCurrency(OrderDetail?.amount)} đ</CustomText>
                            </View>
                        </View>

                    </View>
                </ScrollView>

            </View>


            {/* <CustomButton
                // onPress={handleCheckOut}
                label={'Đặt hàng'}
                labelColor={Theme.COLORS.white}
                color={Theme.COLORS.color2}
                style={[styles.paymentContainer]}
            /> */}
        </Background>
    )
}

export default OrderDetail
