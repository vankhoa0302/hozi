/* eslint-disable prettier/prettier */
import { ActivityIndicator, FlatList, Image, RefreshControl, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Background from '@components/Background';
import CustomHeader from '@components/CustomHeader.js';
import CustomText from '@components/CustomText/CustomText';
import { styles } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Theme } from '@common/theme';
import { fetchgetProductByType } from '@screens/home/homeSlice';
import { useDispatch } from 'react-redux';
import ProductItem from '@screens/home/ProductItem';
const ProductByCategory = () => {

    const [keyword, setKeyword] = useState();
    const [listProduct, setListProduct] = useState();
    const [refreshing, onRefreshing] = useState();

    const route = useRoute();
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const getProduct = async () => {
        setListProduct(null);
        var obj = {};
        if (keyword != '') {
            obj = {
                hot: route.params.hot,
                type: route.params.type,
                label: keyword
            };
        } else {
            obj = {
                hot: route.params.hot,
                type: route.params.type,
            };
        }
        const { payload } = await dispatch(fetchgetProductByType(obj));
        if (payload?.results) {
            onRefreshing(false);
            let data = payload.results
            setListProduct(data);
        };
    }
    const onRefresh = () => {
        setListProduct(null);
        getProduct();
    }
    useEffect(() => {
        if (route) {
            getProduct();
        }
    }, [])
    useEffect(() => {
        // if (keyword || keyword !== '') {
        getProduct()
        // } 
    }, [keyword])
    return (
        <Background>
            <CustomHeader isBack={true} headerName={route?.params.header} />

            <View style={[styles.searchFeild, { flexDirection: 'row', alignItems: 'center' }]}>
                <Ionicons name={'search-outline'} size={24} color={'black'} />

                <TextInput
                    placeholder={`Tìm kiếm`}
                    value={keyword}
                    onChangeText={(text) => setKeyword(text)}
                    style={{ flex: 1, marginLeft: 8 }}
                >

                </TextInput>
                {(keyword && keyword !== '')
                    && <Ionicons
                        name='close-circle'
                        size={18}
                        style={{
                            position: 'absolute',
                            right: 10,
                        }}
                        color={Theme.COLORS.sub}
                        onPress={() => setKeyword('')}
                    />}
            </View>
            <View style={{ backgroundColor: Theme.COLORS.grey, width: '100%', height: 1, marginTop: 12 }}></View>

            {
                listProduct
                    ? listProduct.length > 0
                        ?
                        <View style={styles.productContainer}>
                            <FlatList
                                data={listProduct}
                                numColumns={2}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item }) =>
                                    <ProductItem item={item} style={styles.product} />
                                }
                                keyExtractor={item => item.product_id}
                                refreshControl={
                                    <RefreshControl
                                        refreshing={refreshing}
                                        onRefresh={onRefresh}
                                    />
                                }
                            />
                        </View>
                        : <View style={{ margin: 20, alignSelf: 'center' }}>
                            <CustomText>Không tìm thấy sản phẩm nào</CustomText>
                        </View>
                    : <View style={styles.loader}><ActivityIndicator size={'large'} /></View>
            }
        </Background>
    );
};

export default ProductByCategory;

