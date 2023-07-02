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
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddToCart, fetchDeleteCart, fetchdDeleteCartItem, fetchgetCartItem } from './cartSlice';
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
            { text: 'Xóa', onPress: () => deleteCart() },
        ])
    };

    const onAdd = (id) => {
        const updatedCartItems = cartItems.map((item) => {
            if (item.product_id === id) {
                const newQuantity = parseInt(item.cart_quantity) + 1;
                let obj={
                    product_id:id,
                    product_quantity :1
                }
                dispatch(fetchAddToCart(obj));
              return { ...item, cart_quantity: newQuantity };
            }
            return item;
          });
          setCartItems(updatedCartItems);
    };

    const onMinus = (id) => {
        const updatedCartItems = cartItems.map((item) => {
            if (item.product_id === id && item.cart_quantity > 1) {
                let obj={
                    product_id:id,
                    product_quantity :-1
                }
                dispatch(fetchAddToCart(obj));
                return { ...item, cart_quantity: item.cart_quantity - 1 };
            }
            return item;
          });     
          setCartItems(updatedCartItems);
    };
    


    const handleDeleteItem = async (id) => {
        let obj = {
            product_id:id
        }
        const {payload} = await dispatch(fetchdDeleteCartItem(obj))
        console.log(await dispatch(fetchdDeleteCartItem(obj)))
        // if(payload){
        //     const updatedCartItems = cartItems.filter((item) => item.product_id !== id);
        //     setCartItems(updatedCartItems);
        // }
    }

    const deleteCart = async () => {
        let {payload} = await dispatch(fetchDeleteCart())
        if(payload){
            setCartItems([])
        }
    }

    const handleOnPress = (id) => {
        navigation.navigate(Router.ProductDetailScreen, { id: id })
    }
    const  _renderItem = ({ item }) => {
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

    useEffect(()=>{
        getCartItem();
    },[])
    
    return (
        <Background>
            <CustomHeader headerName={'My Cart'} isBack={true} rightIcon={'trash-outline'} onRightPress={handleTrashPress} />
            <View style={{ flex: 1, paddingHorizontal: 15 }}>
                <FlatList
                    data={cartItems}
                    showsVerticalScrollIndicator={false}
                    renderItem={_renderItem}
                    keyExtractor={item => item.product_id}
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

