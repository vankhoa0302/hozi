/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { FlatList, Image, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import CustomText from '@components/CustomText/CustomText';
import { Theme } from '@common/theme';
import { useNavigation } from '@react-navigation/native';
import Background from '@components/Background';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Router } from '../../navigators/router';
import { useDispatch } from 'react-redux';
import { fetchgetProductByType, fetchgetProductType } from './homeSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

// console.log(process.env.APP_URL)

const HomeScreen = () => {
  const [categoryId, setCategoryId] = useState('table');
  const navigation = useNavigation();
  const [listProduct, setListProduct] = useState([]);
  const [prodType, setProdType] = useState([]);


  const dispatch = useDispatch();


  const handleSearch = () => {
    navigation.navigate('SearchScreen');
  };
  const seeAllCategory = () => {
    navigation.navigate('Categories');
  };
  const onPressCart = () => {
    navigation.navigate('CartScreen');
  };

  const getProductType = async () => {
    const { payload } = await dispatch(fetchgetProductType())
    if (payload.results) {
      setProdType(payload.results)
    }
  }

  const getProductByType = async (typeid) => {
    const { payload } = await dispatch(fetchgetProductByType({
      type: typeid
    }));
    if (payload.results) {
      let data = payload?.results
      setListProduct(data);
    };
  }
  useEffect(() => {
    getProductType();
  }, []);
  useEffect(() => {
    getProductByType(categoryId);
  }, [categoryId])

  return (
    <Background>
      <View style={styles.header}>
        <View style={styles.row}>
          <CustomText style={styles.title}>Welcome to</CustomText>
          <TouchableOpacity
            onPress={onPressCart}
          >
            <Ionicons name="cart" size={30} color={Theme.COLORS.color2} />
            <CustomText style={styles.numberCart}>1</CustomText>
          </TouchableOpacity>
        </View>
        <CustomText style={styles.titleBold}>Hozi</CustomText>
        <TouchableOpacity
          activeOpacity={.7}
          style={styles.search}
          onPress={handleSearch}
        >
          <View style={styles.row}>
            <Ionicons name={'search-outline'} size={24} color={'black'} />
            <CustomText color={Theme.COLORS.sub}>{"  "}Tìm kiếm sản phẩm</CustomText>
          </View>
          {/* <TouchableOpacity style={styles.filter}>
            <Ionicons name={'options-outline'} size={24} color={Theme.COLORS.color2} />
          </TouchableOpacity> */}
        </TouchableOpacity>


      </View>
      <View style={styles.categoriesTab}>
        <FlatList
          data={prodType}
          horizontal
          showsHorizontalScrollIndicator={false}
          key={({ item }) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {
              setCategoryId(item.id);
            }}>
              <View style={[styles.category, {
                backgroundColor: item.id === categoryId ? Theme.COLORS.color2 : 'transparent'
              }]}>
                <CustomText style={[styles.subtitle, {
                  color: item.id === categoryId ? Theme.COLORS.white : Theme.COLORS.color1,
                }]}>{item.typeName}</CustomText>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.productContainer}>
        <FlatList
          data={listProduct}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          key={({ item }) => item.product_id}
          renderItem={({ item }) => (
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
          )}
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

export default HomeScreen;

