/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Background from '@components/Background';
import CustomHeader from '@components/CustomHeader.js';
import CartItem from '@components/CartItem';
import CustomText from '@components/CustomText/CustomText';
import CustomButton from '@components/CustomButton/CustomButton';
import { Theme } from '@common/theme';
import { PRODUCTS } from '../../data/data';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
const CartScreen = () => {
    const [totalAmount, setTotalAmount] = useState(1);
    const [cartItems, setCartItems] = useState([]);
    const [checked, setChecked] = useState([]);

    const navigation = useNavigation();

    const handleTrashPress = () => {
    };
    const handleOnCheck = (id) => {
        // const index = checked.findIndex((check) => check == id )
        if (checked.includes(id)) {
            setChecked(checked.filter(checks => checks !== id));
            return;
        }
        setChecked(checks => checks.concat(id));
    };
    const onMinus = (item) => {
        if (item?.quantity < 1) {
            return;
        } else {
            const newCartItems = cartItems.map((cartItem) => {
                if (cartItem.id === item.id) {
                    return { ...cartItem, quantity: cartItem.quantity - 1 };
                } else {
                    return cartItem;
                }
            });
            setCartItems(newCartItems);
        }
    };
    const onAdd = (item) => {
        const newCartItems = cartItems.map((cartItem) => {
            if (cartItem.id === item.id) {
                return { ...cartItem, quantity: cartItem.quantity + 1 };
            } else {
                return cartItem;
            }
        });
        setCartItems(newCartItems);
    };
    const _renderItem = ({ item }) => {
        return (
            <CartItem
                item={item}
                isCheck={checked.includes(item.id)}
                onCheck={() => { handleOnCheck(item.id) }}
                onAdd={() => onAdd(item)}
                onMinus={() => onMinus(item)}
            />
        )
    };
    useEffect(() => {
        setCartItems(PRODUCTS);
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
            <TouchableOpacity style={styles.checkoutContainer} onPress={() => navigation.navigate('Checkout')}>
                <CustomText style={styles.checkoutText}>Thanh toán</CustomText>
                {/* <View style={{ width: 1, backgroundColor: '#fff', height: '100%', marginHorizontal: 12 }}>
                </View>
                <View style={styles.priceContainer}>
                    <CustomText style={styles.price}></CustomText>
                </View> */}
            </TouchableOpacity>
        </Background>
    );
};

export default CartScreen;

