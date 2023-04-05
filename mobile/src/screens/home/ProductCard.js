/* eslint-disable prettier/prettier */
import { StyleSheet, Text, TouchableOpacity, View, Platform, Image } from 'react-native'
import React from 'react'
import CustomText from '@components/CustomText/CustomText'
import { HeightScreen, WidthScreen } from '@common/theme'
const ProductCard = ({ item }) => {
    return (
        <TouchableOpacity activeOpacity={.7} style={styles.container}>
            <Image source={{ uri: item.image }} style={styles.image} resizeMode='cover' />
            <View style={{ padding: 4 }}>
                <CustomText numberOfLines={2} >{item.name}</CustomText>
                <CustomText>{item.price}</CustomText>
            </View>

        </TouchableOpacity>
    )
}

export default ProductCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: HeightScreen / 3,
        width: WidthScreen / 2.5,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginVertical: 8,
        marginHorizontal: 8,
        flexBasis: '46%',
    },
    image: {
        borderRadius: 8,
        width: '100%',
        height: '70%',
        resizeMode: 'contain',
        marginBottom: 10,
    },
})