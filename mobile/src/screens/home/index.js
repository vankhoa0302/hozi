/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { FlatList, Image, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import CustomText from '@components/CustomText/CustomText';
import CustomButton from '@components/CustomButton/CustomButton';
import { Theme } from '@common/theme';
import { useNavigation } from '@react-navigation/native';
import Background from '@components/Background';
import Ionicons from 'react-native-vector-icons/Ionicons'
import ProductCard from './ProductCard';
import { CATEGORIES, PRODUCTS } from '../../data/data';

const HomeScreen = () => {
  const [categoryId, setCategoryId] = useState('1');
  const navigation = useNavigation();
  const handleSearch = () => {
    navigation.navigate('SearchScreen');
  };
  const seeAllCategory = () => {
    navigation.navigate('Categories');
  };
  const onPressCart = () => {
    navigation.navigate('CartScreen');
  }

  return (
    <Background>
      <View style={styles.header}>
        <View style={styles.row}>
          <CustomText style={styles.title}>Welcome to</CustomText>
          <TouchableOpacity
            onPress={onPressCart}
          >
            <Ionicons name="cart" size={30} color={Theme.COLORS.color2} />
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
            <CustomText color={Theme.COLORS.sub}>{"  "}Chair, desk, lamp, etc</CustomText>
          </View>
          <TouchableOpacity style={styles.filter}>
            <Ionicons name={'options-outline'} size={24} color={Theme.COLORS.color2} />
          </TouchableOpacity>
        </TouchableOpacity>


      </View>
      <View style={styles.categoriesTab}>
        <CustomText bold fontSize={20}>Thể loại</CustomText>
        <FlatList
          data={CATEGORIES}
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
                }]}>{item.title}</CustomText>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.productContainer}>
        <FlatList
          data={PRODUCTS}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          key={({ item }) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {
              navigation.navigate('ProductDetail', {
                id: item.id,
                name: item.name,
                image: item.image,
                price: item.price,
                description: item.discription,
                selling_price: item.selling_price,
              })
            }}>
              <View style={styles.product}>
                <TouchableOpacity onPress={() => { }} style={styles.add}>
                  <Ionicons name="add-outline" size={15} color={Theme.COLORS.white} />
                </TouchableOpacity>
                <Image source={item.image} style={styles.image} />
                <CustomText style={styles.subtitle}>{item.name}</CustomText>
                <CustomText style={styles.price}>$ {item.price}</CustomText>
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

