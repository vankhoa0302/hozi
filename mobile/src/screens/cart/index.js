/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Background from '@components/Background';
import CustomHeader from '@components/CustomHeader.js';
import CartItem from '@components/CartItem';
import CustomButton from '@components/CustomButton/CustomButton';
import { Theme } from '@common/theme';
import { PRODUCTS } from '../../data/data';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { Router } from '../../navigators/router';
import { useDispatch } from 'react-redux';
import { fetchAddToCart, fetchgetCartItem } from './cartSlice';
const CartScreen = () => {
    const [totalAmount, setTotalAmount] = useState(1);
    const [cartItems, setCartItems] = useState([]);

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const handleTrashPress = () => {
        Alert.alert('Xóa giỏ hàng!', 'Xóa toàn bộ sản phẩm trong giỏ', [
            {
                text: 'Hủy',
                onPress: () => console.log('Cancel Pressed'),
                style: 'destructive',
            },
            { text: 'Xóa', onPress: () => console.log('OK Pressed') },
        ])
    };

    const onMinus = (item) => {
        if (item?.quantity < 1) {
            return;
        } else {
            let obj={
                product_id:item.product_id,
                product_quantity :-1
            }
            dispatch(fetchAddToCart(obj));
        }
    };
    const onAdd = (item) => {
        console.log(item.product_id)
    };
    const handleDeleteItem = (id) => {
        console.log(id)
    }
    const handleOnPress = (id) => {
        navigation.navigate(Router.ProductDetailScreen, { id: id })
    }
    const  _renderItem = ({ item }) => {
        return (
            <CartItem
                handleOnPress={() => handleOnPress(item.product_id)}
                item={item}
                deleteItem={() => { handleDeleteItem(item.id) }}
                onAdd={() => onAdd(item)}
                onMinus={() => onMinus(item)}
            />
        )
    };

    const getCartItem = async () =>{
        let obj={
            page:0
        }
        const{payload} = await dispatch(fetchgetCartItem(obj))
        if(payload?.results){
            let data = payload?.results
            setCartItems(data);
        }
    }
    useEffect(() => {
        getCartItem();
    }, [])
    return (
        <Background>
            <CustomHeader headerName={'My Cart'} isBack={true} rightIcon={'trash-outline'} onRightPress={handleTrashPress} />
            <View style={{ flex: 1, paddingHorizontal: 15 }}>
                <FlatList
                    data={cartItems}
                    showsVerticalScrollIndicator={false}
                    renderItem={_renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
            <CustomButton
                label={'Thanh toán'}
                labelColor={Theme.COLORS.white}
                color={Theme.COLORS.color2}
                style={[styles.checkoutContainer]}
                onPress={() => navigation.navigate(Router.CheckOutScreen)}
            />
        </Background>
    );
};

export default CartScreen;

