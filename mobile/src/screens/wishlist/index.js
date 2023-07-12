/* eslint-disable prettier/prettier */
import { ActivityIndicator, FlatList, Image, Platform, RefreshControl, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Background from '@components/Background';
import CustomHeader from '@components/CustomHeader.js';
import CustomText from '@components/CustomText/CustomText';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Router } from '../../navigators/router';
import { fetchGetWishList } from '@screens/home/homeSlice';
import { Theme } from '@common/theme';
import { formatCurrency } from '../../helpers/helpers'
import { styles } from './styles';
const WishListScreen = () => {
  const [wishItems, setWishItems] = useState();
  const [refreshing, onRefreshing] = useState();

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.auth.isLogin);
  const handleOnPress = (id) => {
    navigation.navigate(Router.ProductDetailScreen, { id: id })
  }
  const _renderItem = ({ item }) => {
    return (
      <TouchableOpacity activeOpacity={.7} style={styles.container} onPress={() => handleOnPress(item.product_id)}>
        <View style={styles.imageArea}>
          <Image source={{ uri: process.env.APP_URL + item.product_media }} style={styles.itemImg} resizeMode='cover' />
        </View>
        <View style={styles.itemInfo}>
          <View>
            <View style={{ width: '86%' }}>
              <CustomText numberOfLines={2} color={Theme.COLORS.sub}>{item.product_label}</CustomText>
            </View>
            <CustomText bold fontSize={16}>{item.product_type}</CustomText>
          </View>
          <View style={styles.priceAndAmount}>
            <CustomText bold fontSize={16}>{formatCurrency(item.product_price)} đ</CustomText>

            <View style={styles.amount}>

            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  };
  const getWishList = async () => {
    setWishItems(null);
    let obj = {
      page: 0
    }
    const { payload } = await dispatch(fetchGetWishList(obj))
    if (payload?.results) {
      onRefreshing(false);
      let data = payload?.results
      setWishItems(data);
    }
  }
  const onRefresh = () => {
    setWishItems([]);
    getWishList();
  }
  useEffect(() => {
    if (isLogin && isLogin == true) {
      getWishList();
    } else {
      navigation.navigate(Router.Login)
    }
  }, [isLogin])
  return (
    <Background>
      <CustomHeader headerName={'Yêu thích'} isBack={true} rightIcon={'cart-outline'} onRightPress={() => navigation.navigate(Router.CartScreen)} />
      {
        isLogin
          ?
          wishItems
            ? wishItems.length > 0
              ?
              <View style={{ flex: 1, paddingHorizontal: 15, paddingBottom: 90 }}>
                <FlatList
                  data={wishItems}
                  showsVerticalScrollIndicator={false}
                  renderItem={_renderItem}
                  keyExtractor={item => item.product_id}
                  refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />
                  }
                />

              </View>
              : <CustomText style={{ padding: 24, alignSelf: 'center' }}>Bạn chưa có sản phẩm nào trong mục yêu thích!</CustomText>
            : <View style={styles.loader}><ActivityIndicator size={'large'} /></View>
          :
          <View>
            <CustomText style={{ padding: 24, textAlign: 'center' }}>Bạn chưa đăng nhập, vui lòng đăng nhập để xem sản phẩm yêu thích!</CustomText>
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate(Router.Login)}>
              <CustomText fontSize={20} color={'red'}>Đăng nhập</CustomText>
            </TouchableOpacity>
          </View>
      }
    </Background >
  );
};

export default WishListScreen;

