/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import { FlatList, Image, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Background from '@components/Background'
import { styles } from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Theme } from '@common/theme'
import { useNavigation } from '@react-navigation/native'
import CustomHeader from '@components/CustomHeader.js'
import CustomText from '@components/CustomText/CustomText'
import { useDispatch } from 'react-redux'
import { fetchSearchProduct } from '@screens/home/homeSlice'
import { Router } from '../../navigators/router';
const SearchScreen = () => {
    const [keyword, setKeyword] = useState();
    const [results, setResults] = useState([]);
    const inputRef = useRef();
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const searchProduct = async () => {
        let obj = {
            label: keyword
        };
        const { payload } = await dispatch(fetchSearchProduct(obj))
        if (payload?.results) {
            let data = payload.results;
            setResults(data);
        }
    }
    useEffect(() => {
        if (keyword || keyword !== '') {
            searchProduct()
        } else {
            setResults([]);
        }
    }, [keyword])
    return (
        <Background>
            <CustomHeader isBack={true} headerName={'Tìm kiếm'} />
            <View style={styles.header}>


                <View style={[styles.search, { flexDirection: 'row', alignItems: 'center' }]}>
                    <Ionicons name={'search-outline'} size={24} color={'black'} />

                    <TextInput
                        ref={inputRef}
                        onLayout={() => inputRef.current.focus()}
                        placeholder='Tất cả sản phẩm'
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
            </View>



            {/* <TouchableOpacity activeOpacity={.7} style={styles.btnSearch}>
                <Ionicons name='search-outline' size={24} color={'white'} />
            </TouchableOpacity> */}

            <View style={styles.productContainer}>
                {
                    keyword && keyword !== ''
                        ?
                        <FlatList
                            data={results}
                            numColumns={2}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) =>
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate(Router.ProductDetailScreen, {
                                        id: item.product_id,
                                    })
                                }}>
                                    <View style={styles.product}>
                                        <TouchableOpacity onPress={() => { }} style={styles.add}>
                                            <Ionicons name="add-outline" size={15} color={Theme.COLORS.white} />
                                        </TouchableOpacity>
                                        <Image source={{ uri: process.env.APP_URL + item.product_media[0] }} style={styles.image} />
                                        <CustomText numberOfLines={1} style={styles.subtitle}>{item.product_label}</CustomText>
                                        <CustomText style={styles.price}>$ {item.product_price}</CustomText>
                                    </View>
                                </TouchableOpacity>
                            }
                            keyExtractor={item => item.product_id}
                            ListEmptyComponent={<View style={{ margin: 20, alignSelf: 'center' }}>
                                <CustomText>Không tìm thấy sản phẩm nào</CustomText>
                            </View>}

                        />
                        :
                        <View></View>
                }

            </View>
        </Background>
    )
}

export default SearchScreen;
