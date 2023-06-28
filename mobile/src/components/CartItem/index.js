/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Theme, WidthScreen } from '@common/theme'
import CustomText from '@components/CustomText/CustomText'
import IconButton from '@components/IconButton/index'
import Ionicons from 'react-native-vector-icons/Ionicons'
const CartItem = ({ item, handleOnPress, deleteItem, onAdd, onMinus }) => {
    return (
        <TouchableOpacity activeOpacity={.7} style={styles.container} onPress={handleOnPress}>
            <View style={styles.imageArea}>
                <Image source={item.image} style={styles.itemImg} resizeMode='contain' />
            </View>
            <View style={styles.itemInfo}>
                <View>
                    <TouchableOpacity style={styles.check} onPress={deleteItem}>
                        <Ionicons name={'close-outline'} size={25} color={Theme.COLORS.color1} />
                    </TouchableOpacity>
                    <CustomText color={Theme.COLORS.sub}>{item.name}</CustomText>
                    <CustomText bold fontSize={16}>{item.category}</CustomText>
                </View>
                <View style={styles.priceAndAmount}>
                    <CustomText bold fontSize={16}>{item.price}</CustomText>

                    <View style={styles.amount}>
                        <IconButton iconName={'remove'} iconColor={'black'} iconSize={14} onPress={onMinus} />
                        <CustomText fontSize={16}>{"  "}{item?.quantity}{"  "}</CustomText>
                        <IconButton iconName={'add'} iconColor={'black'} iconSize={14} onPress={onAdd} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default CartItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: Theme.COLORS.white,
        borderRadius: 12,
        marginVertical: 12
    },
    removeIcon: {
        position: 'absolute',
        right: 0,
    },
    itemImg: {
        width: '100%',
        height: '100%',
    },
    imageArea: {
        height: WidthScreen / 4,
        width: WidthScreen / 4,
        backgroundColor: Theme.COLORS.bg,
        borderRadius: 12,
        margin: 8
    },
    itemInfo: {
        flex: 1,
        marginLeft: 12,
        justifyContent: 'center'
    },
    amount: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 12
    },
    priceAndAmount: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    check: {
        position: 'absolute',
        right: 10,
        top: -5,
        zIndex: 1
    },

})