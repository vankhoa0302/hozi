/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import { ActivityIndicator, Alert, FlatList, Image, RefreshControl, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Background from '@components/Background';
import CustomHeader from '@components/CustomHeader.js';
import CartItem from '@components/CartItem';
import CustomButton from '@components/CustomButton/CustomButton';
import { Theme } from '@common/theme';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { Router } from '../../navigators/router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddToCart, fetchDeleteCart, fetchdDeleteCartItem, fetchgetCartItem } from './cartSlice';
import CustomText from '@components/CustomText/CustomText';
import { formatCurrency } from '../../helpers/helpers'


const CartScreen = () => {
    const [cartItems, setCartItems] = useState();
    const [refreshing, onRefreshing] = useState();
    const [loading, setLoading] = useState();
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const isLogin = useSelector(state => state.auth.isLogin);


    const handleTrashPress = () => {
        Alert.alert('Xóa giỏ hàng!', 'Xóa toàn bộ sản phẩm trong giỏ', [
            {
                text: 'Hủy',
                onPress: () => console.log('Cancel Pressed'),
                style: 'destructive',
            },
            { text: 'Xóa', onPress: () => deleteCart() },
        ])
    };

    const onAdd = (id) => {
        const updatedCartItems = cartItems.map((item) => {
            if (item.product_id === id) {
                const newQuantity = parseInt(item.cart_quantity) + 1;
                let obj = {
                    product_id: id,
                    product_quantity: 1
                }
                dispatch(fetchAddToCart(obj));
                return { ...item, cart_quantity: newQuantity };
            }
            return item;
        });
        setCartItems(updatedCartItems);
        calculateTotal();

    };

    const onMinus = (id) => {
        const updatedCartItems = cartItems.map((item) => {
            if (item.product_id === id && item.cart_quantity > 1) {
                let obj = {
                    product_id: id,
                    product_quantity: -1
                }
                dispatch(fetchAddToCart(obj));
                return { ...item, cart_quantity: item.cart_quantity - 1 };
            }
            return item;
        });
        setCartItems(updatedCartItems);
        calculateTotal();

    };



    const handleDeleteItem = async (id) => {
        let obj = {
            product_id: id
        }
        const { payload } = await dispatch(fetchdDeleteCartItem(obj))
        if (payload) {
            const updatedCartItems = cartItems.filter((item) => item.product_id !== id);
            setCartItems(updatedCartItems);
        }
        calculateTotal();
    }

    const deleteCart = async () => {
        let { payload } = await dispatch(fetchDeleteCart())
        if (payload) {
            setCartItems([])
        }
    }
    const calculateTotal = () => {
        const total = cartItems.reduce((accumulator, item) => {
            return accumulator + item.cart_quantity * item.product_price;
        }, 0);

        return total;
    };
    const handleOnPress = (id) => {
        navigation.navigate(Router.ProductDetailScreen, { id: id })
    }
    const _renderItem = ({ item }) => {
        return (
            <CartItem
                handleOnPress={() => handleOnPress(item.product_id)}
                item={item}
                deleteItem={() => { handleDeleteItem(item.product_id) }}
                onAdd={() => onAdd(item.product_id)}
                onMinus={() => onMinus(item.product_id)}
            />
        )
    };

    const getCartItem = async () => {
        let obj = {
            page: 0
        }
        const { payload } = await dispatch(fetchgetCartItem(obj))
        if (payload?.results) {
            onRefreshing(false);
            let data = payload?.results
            setCartItems(data);
        }
    }
    const onRefresh = () => {
        setCartItems(null);
        getCartItem();
    }
    useEffect(() => {
        if (isLogin && isLogin == true) {
            getCartItem();
        } else {
            navigation.navigate(Router.Login)
        }
    }, [isLogin])

    return (
        <Background>
            <CustomHeader headerName={'Giỏ hàng'} isBack={true} rightIcon={'trash-outline'} onRightPress={handleTrashPress} />
            {
                isLogin
                    ?
                    cartItems
                        ? cartItems.length > 0
                            ?
                            <View style={{ flex: 1 }}>
                                <View style={{ flex: 1, paddingHorizontal: 15 }}>
                                    <FlatList
                                        data={cartItems}
                                        showsVerticalScrollIndicator={false}
                                        renderItem={_renderItem}
                                        keyExtractor={item => item.product_id}
                                        refreshControl={
                                            <RefreshControl
                                                refreshing={refreshing}
                                                onRefresh={onRefresh}
                                            />
                                        }
                                    />

                                </View>
                                <View style={{ alignItems: 'flex-end', marginHorizontal: 20 }}>
                                    <CustomText>Tổng cộng:<CustomText bold fontSize={20} color={Theme.COLORS.danger}> {formatCurrency(calculateTotal())} đ</CustomText> </CustomText>

                                </View>
                                <CustomButton
                                    label={'Thanh toán'}
                                    labelColor={Theme.COLORS.white}
                                    color={Theme.COLORS.color2}
                                    style={[styles.checkoutContainer]}
                                    onPress={() => navigation.navigate(Router.CheckOutScreen)} />

                            </View>
                            : <CustomText style={{ padding: 24, alignSelf: 'center' }}>Bạn chưa có sản phẩm nào trong giỏ!</CustomText>

                        : <View style={styles.loader}><ActivityIndicator size={'large'} /></View>
                    :
                    <View>
                        <CustomText style={{ padding: 24, textAlign: 'center' }}>Bạn chưa đăng nhập, vui lòng đăng nhập để xem giỏ hàng!</CustomText>
                        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate(Router.Login)}>
                            <CustomText fontSize={20} color={'red'}>Đăng nhập</CustomText>
                        </TouchableOpacity>
                    </View>
            }
        </Background >
    );
};

export default CartScreen;

