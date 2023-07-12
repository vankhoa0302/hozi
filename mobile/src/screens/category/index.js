/* eslint-disable prettier/prettier */
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Background from '@components/Background';
import CustomHeader from '@components/CustomHeader.js';
import CustomText from '@components/CustomText/CustomText';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Theme } from '@common/theme';
import { fetchgetProductType } from '@screens/home/homeSlice';
import { useDispatch } from 'react-redux';
import { Router } from '../../navigators/router';
const CategoryScreen = () => {

    const [prodType, setProdType] = useState([]);


    const navigation = useNavigation();
    const dispatch = useDispatch();
    const handleSearch = () => {
        navigation.navigate('SearchScreen');
    };

    const getProductType = async () => {
        const { payload } = await dispatch(fetchgetProductType())
        if (payload?.results) {
            setProdType(payload.results)
        }
    }

    useEffect(() => {
        getProductType();
    }, []);
    return (
        <Background>
            <CustomHeader headerName={'Khám phá'} isBack={true} />

            <TouchableOpacity
                activeOpacity={.7}
                style={styles.search}
                onPress={handleSearch}
            >
                <View style={styles.row}>
                    <Ionicons name={'search-outline'} size={24} color={'black'} />
                    <CustomText color={Theme.COLORS.sub}>{"  "}Tìm kiếm</CustomText>
                </View>
            </TouchableOpacity>
            <View style={{ backgroundColor: Theme.COLORS.grey, width: '100%', height: 1, marginTop: 12 }}></View>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <FlatList
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    data={prodType}
                    renderItem={({ item }) =>
                        <TouchableOpacity activeOpacity={.7} style={styles.category} onPress={() => navigation.navigate(Router.ProductByCategory, { type: item.id, header: item.typeName })}>
                            <Image resizeMode='stretch' style={{ width: '100%', height: '60%' }} source={{ uri: item.image }} />
                            <CustomText bold fontSize={20}>{item.typeName}</CustomText>
                        </TouchableOpacity>
                    }
                    keyExtractor={item => item.id}
                    ListFooterComponent={() => {
                        return (
                            <View style={{ height: 100, backgroundColor: 'transparent' }}>
                            </View>
                        )
                    }}
                />
            </View>
        </Background>
    );
};

export default CategoryScreen;

