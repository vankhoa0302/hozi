import { ActivityIndicator, Alert, FlatList, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import Background from '@components/Background/index';
import CustomHeader from '@components/CustomHeader.js';
import { Theme } from '@common/theme';
import CustomText from '@components/CustomText/CustomText';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Router } from '../../navigators/router';
import { fetchCancelOrder, fetchGetListOrder } from '@screens/cart/cartSlice';
import { formatCurrency, timeStamp } from '../../helpers/helpers'
import CustomButton from '@components/CustomButton/CustomButton';
import { alert } from '@baronha/ting';

const OrderScreen = () => {
    const [tab, setTab] = useState('in_progressing');
    const [listOrder, setListOrder] = useState();
    const [refreshing, onRefreshing] = useState();

    const navigation = useNavigation();
    const dispatch = useDispatch();


    const arrTransaction = [
        { id: 'in_progressing', transaction: 'Chờ xác nhận' },
        { id: 'approved', transaction: 'Đang chuẩn bị' },
        { id: 'shipping', transaction: 'Đang giao' },
        { id: 'completed', transaction: 'Đã giao' },
        { id: 'cancel', transaction: 'Đã hủy' },
    ]

    const getListOrder = async () => {
        setListOrder(null)
        let obj = {
            transaction_status: tab
        }
        const { payload } = await dispatch(fetchGetListOrder(obj))
        if (payload?.results) {
            onRefreshing(false);
            setListOrder(payload.results)
        }
    }
    const renderTab = () => {
        return arrTransaction.map(item => {
            return (
                <TouchableOpacity
                    style={{
                        paddingVertical: 10,
                        margin: 10,
                        borderBottomColor: tab == item.id ? Theme.COLORS.color2 : 'transparent',
                        borderBottomWidth: 1.5,
                    }}
                    key={item.id}
                    onPress={() => setTab(item.id)}
                    disabled={tab == item.id ? true : false}>
                    <Text style={{ color: tab === item.id ? Theme.COLORS.color2 : 'black', fontSize: 16, fontWeight: '400' }}>{item.transaction}</Text>
                </TouchableOpacity>
            )
        })
    }
    const viewOderDetail = (id) => {
        navigation.navigate(Router.OrderDetail, { id: id })
    }

    const handleOnCancel = (id) => {
        Alert.alert('Hủy đơn hàng?', 'Bạn có chắc chắn muốn hủy đơn hàng này', [
            {
                text: 'Không',
                onPress: () => console.log('Cancel Pressed'),
                style: 'destructive',
            },
            { text: 'Hủy đơn', onPress: () => cancelOrder(id) },
        ])
    }
    const cancelOrder = async (orderId) => {
        let obj = {
            id: orderId
        }
        const { payload } = await dispatch(fetchCancelOrder(obj))
        if (payload) {
            const options = {
                title: 'Hủy đơn hàng thành công !',
            };
            alert(options);
            getListOrder()
        }
    }
    const statusButton = (item) => {
        switch (item.status) {
            case 'in_progressing':
                return (
                    <CustomButton
                        onPress={() => handleOnCancel(item?.id)}
                        style={{ padding: 8 }}
                        labelSize={16}
                        color={Theme.COLORS.color2}
                        label={'Hủy đơn hàng'}
                        labelColor={'#fff'}
                    />
                )
                break;
            case 'approved':
                return (
                    <CustomButton
                        style={{ padding: 8 }}
                        labelSize={16}
                        color={Theme.COLORS.color2}
                        label={'Hủy đơn hàng'}
                        labelColor={'#fff'}
                    />
                )
                break;
            case 'shipping':

                break;
            case 'completed':
                return (
                    <CustomButton
                        style={{ padding: 8 }}
                        labelSize={16}
                        color={Theme.COLORS.color2}
                        label={'Đánh giá'}
                        labelColor={'#fff'}
                    />
                )
                break;
            case 'cancel':
                return (
                    <CustomButton
                        style={{ padding: 8 }}
                        labelSize={16}
                        color={Theme.COLORS.color2}
                        label={'Mua lại'}
                        labelColor={'#fff'}
                    />
                )
                break;
        }
    }
    const statusText = (status) => {
        switch (status) {
            case 'in_progressing':
                return (
                    <CustomText color={Theme.COLORS.yellow}>Chờ xác nhận</CustomText>
                )
                break;
            case 'approved':
                return (
                    <CustomText color={Theme.COLORS.yellow}>Đã xác nhận</CustomText>
                )
                break;
            case 'shipping':
                return (
                    <CustomText color={Theme.COLORS.yellow}>Đang giao hàng</CustomText>
                )
                break;
            case 'completed':
                return (
                    <CustomText color={Theme.COLORS.yellow}>Hoàn thành</CustomText>
                )
                break;
            case 'cancel':
                return (
                    <CustomText color={Theme.COLORS.yellow}>Đã hủy</CustomText>
                )
                break;
        }
    }
    const _renderItem = ({ item }) => {
        return (
            <TouchableOpacity activeOpacity={.5} style={styles.orderItem} onPress={() => viewOderDetail(item.id)}>
                <View style={[styles.row, { borderTopWidth: 0 }]}>
                    <CustomText>Mã đơn hàng:{" "}
                        <CustomText bold >
                            #{item?.cart_id}
                        </CustomText>
                    </CustomText>
                    {statusText(item.status)}
                </View>
                <View style={styles.row}>
                    <CustomText># sản phẩm</CustomText>
                    <CustomText>Tổng cộng:{" "}
                        <CustomText color={'red'}>
                            {formatCurrency(item?.amount)} đ
                        </CustomText>

                    </CustomText>
                </View>
                <View style={styles.row}>
                    <CustomText>Ngày đặt: {timeStamp(parseFloat(item?.created))}</CustomText>
                    {statusButton(item)}
                </View>
            </TouchableOpacity>
        )
    }
    const onRefresh = () => {
        setListOrder(null);
        getListOrder();
    }
    useEffect(() => {
        getListOrder()
    }, [tab])
    return (
        <Background>
            <CustomHeader headerName={'Đơn mua'} isBack={true} />
            <View style={{ flexDirection: 'row', marginHorizontal: 12 }}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {renderTab()}
                </ScrollView>
            </View>
            {
                listOrder
                    ? listOrder.length > 0
                        ?
                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 1, paddingHorizontal: 15 }}>
                                <FlatList
                                    data={listOrder}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={_renderItem}
                                    keyExtractor={item => item.id}
                                    refreshControl={
                                        <RefreshControl
                                            refreshing={refreshing}
                                            onRefresh={onRefresh}
                                        />
                                    }
                                />
                            </View>
                        </View>
                        : null
                    : <View style={styles.loader}><ActivityIndicator size={'large'} /></View>
            }

        </Background >
    );
}

export default OrderScreen

const styles = StyleSheet.create({
    orderItem: {
        backgroundColor: Theme.COLORS.white,
        marginTop: 12,
        paddingHorizontal: 12,
        borderRadius: 8,
    },
    loader: {
        minHeight: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: Theme.COLORS.grey,
        alignItems: 'center',
        paddingVertical: 12
    }
})