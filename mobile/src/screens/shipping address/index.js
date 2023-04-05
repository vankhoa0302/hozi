import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Background from '@components/Background'
import CustomHeader from '@components/CustomHeader.js'
import { styles } from './style';
import CustomText from '@components/CustomText/CustomText';
import { Theme, WidthScreen } from '@common/theme';
import Ionicons from 'react-native-vector-icons/Ionicons'
const ADDRESSES = [
    { id: 0, receiver: 'Van Khoa', phoneNumber: '+(84) 385 410 741', address: '38/19 Đường 147, phường Phước Long B, TP Thủ Đức', default: true },
    { id: 1, receiver: 'Van Khoa', phoneNumber: '+(84) 385 410 741', address: '38/19 Đường 147, phường Phước Long B, TP Thủ Đức', default: false },
    { id: 2, receiver: 'Van Khoa', phoneNumber: '+(84) 385 410 741', address: '38/19 Đường 147, phường Phước Long B, TP Thủ Đức', default: false },
];


const ShippingAddressScreen = () => {
    const [checked, setChecked] = useState();
    const [isDefaultAdd, setIsDefaultAdd] = useState();
    const onCheck = (id) => {
        setChecked(id);
    };
    const hanleAddAddress = () => {

    }
    const _renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.shippingAddItem}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.check} onPress={() => onCheck(item.id)}>
                        <Ionicons name={checked === item.id ? 'checkbox' : 'square-outline'} size={25} color={Theme.COLORS.color1} />
                    </TouchableOpacity>
                    <View style={{ maxWidth: WidthScreen * 0.7, }}>
                        <View style={[styles.row]}>
                            <CustomText bold>{item.receiver}</CustomText>
                            <View style={{ width: 1, backgroundColor: Theme.COLORS.black, height: '100%', margin: 8 }}></View>
                            <CustomText>{item?.phoneNumber}</CustomText>
                        </View>
                        <CustomText numberOfLines={2}>{item?.address}</CustomText>
                        {item?.default && <View style={styles.default}>
                            <CustomText color={Theme.COLORS.danger}>Mặc định</CustomText>
                        </View>}
                    </View>
                </View>
                <CustomText color={Theme.COLORS.danger}>Sửa</CustomText>

            </TouchableOpacity>
        )
    }
    return (
        <Background>
            <CustomHeader headerName={'Địa chỉ nhận hàng'} isBack={true} />
            <View style={styles.container}>
                <FlatList
                    data={ADDRESSES}
                    keyExtractor={(item) => item.id}
                    renderItem={_renderItem}
                    ListFooterComponent={() => {
                        return (
                            <TouchableOpacity style={styles.addBtn} onPress={hanleAddAddress}>
                                <CustomText>Thêm địa chỉ mới</CustomText>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </Background>
    )
}

export default ShippingAddressScreen
