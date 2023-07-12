import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { formatCurrency } from '../../helpers/helpers'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomText from '@components/CustomText/CustomText'
import { useNavigation } from '@react-navigation/native'
import { Router } from '../../navigators/router'
import { Theme } from '@common/theme'
import { styles } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAddToCart } from '@screens/cart/cartSlice'
import { alert } from '@baronha/ting';
const ProductItem = ({ item, style }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const isLogin = useSelector(state => state.auth.isLogin);

    const addToCart = async (id) => {
        if (isLogin == true) {
            let obj = {
                "product_id": id,
                "product_quantity": 1,
            }
            const { payload } = await dispatch(fetchAddToCart(obj))
            if (payload) {
                const options = {
                    title: 'Đã thêm vào giỏ !',
                };
                alert(options); // easy to use
            }
        } else {
            navigation.navigate(Router.Login)
        }
    }
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate(Router.ProductDetailScreen, {
                id: item.product_id,
            })
        }}>
            <View style={[styles.product, style]}>
                <TouchableOpacity onPress={() => addToCart(item.product_id)} style={styles.add}>
                    <Ionicons name="cart-outline" size={20} color={Theme.COLORS.white} />
                </TouchableOpacity>
                <View style={{ height: '65%', width: '100%' }}>
                    <Image source={{ uri: process.env.APP_URL + item.product_media[0] }} style={styles.image} resizeMode='cover' />
                </View>
                <View style={{ height: '35%', width: '100%', padding: 10 }}>
                    <View style={{ flex: 1 }}>
                        <CustomText numberOfLines={2} style={styles.subtitle}>{item.product_label}</CustomText>

                    </View>
                    <CustomText style={styles.price}>{formatCurrency(item.product_price)} đ</CustomText>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductItem
