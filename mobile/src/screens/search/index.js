/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import { ActivityIndicator, FlatList, Image, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
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
import ProductItem from '@screens/home/ProductItem'
const SearchScreen = () => {
    const [keyword, setKeyword] = useState();
    const [results, setResults] = useState();
    const inputRef = useRef();
    const dispatch = useDispatch();
    const searchProduct = async () => {
        setResults(null);
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
            setResults(null);
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

            {
                keyword && keyword !== ''
                    ?
                    results
                        ? results.length > 0
                            ?
                            <View style={styles.productContainer}>
                                <FlatList
                                    data={results}
                                    numColumns={2}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={({ item }) =>
                                        <ProductItem item={item} style={styles.product} />
                                    }
                                    keyExtractor={item => item.product_id}
                                    ListFooterComponent={<View style={{ height: 100 }}></View>}
                                />
                            </View>
                            :
                            <View style={{ margin: 20, alignSelf: 'center' }}>
                                <CustomText>Không tìm thấy sản phẩm nào</CustomText>
                            </View>
                        : <View style={styles.loader}><ActivityIndicator size={'large'} /></View>
                    : <View></View>
            }
        </Background>
    )
}

export default SearchScreen;
