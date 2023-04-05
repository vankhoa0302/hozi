/* eslint-disable prettier/prettier */
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Background from '@components/Background';
import CustomHeader from '@components/CustomHeader.js';
import CartItem from '@components/CartItem';
import IconButton from '@components/IconButton';
import { PRODUCTS } from '../../data/data';
const WishListScreen = () => {
  return (
    <Background>
      <CustomHeader headerName={'Yêu thích'} />
      <View style={{ flex: 1 }}>
        <FlatList
          data={PRODUCTS}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) =>
            <CartItem item={item} childrenStyle={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
              <IconButton iconName={'cart'} iconColor={'black'} iconSize={20} />
            </CartItem>
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

export default WishListScreen;

const styles = StyleSheet.create({});
