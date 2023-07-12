/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { ActivityIndicator, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import CustomText from '@components/CustomText/CustomText';
import { Theme, WidthScreen } from '@common/theme';
import { useNavigation } from '@react-navigation/native';
import Background from '@components/Background';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Router } from '../../navigators/router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetSlide, fetchgetProductByType, fetchgetProductType, setLoading } from './homeSlice';
import { formatCurrency } from '../../helpers/helpers'
import ProductItem from './ProductItem';


// const images = [
//   'https://cdn.pixabay.com/photo/2016/04/18/13/53/room-1336497_1280.jpg',
//   'https://cdn.pixabay.com/photo/2017/03/19/01/43/living-room-2155376_1280.jpg',
//   'https://cdn.pixabay.com/photo/2014/08/11/21/39/wall-416060_1280.jpg'
// ]

const HomeScreen = () => {
  const [categoryId, setCategoryId] = useState('All');
  const navigation = useNavigation();
  const [listProduct, setListProduct] = useState();
  const [hotProducts, setHotProducts] = useState([]);
  const [prodType, setProdType] = useState([]);
  const [imgActive, setImgActive] = useState(0)
  const [images, setImages] = useState([]);

  const dispatch = useDispatch();
  const numberCart = useSelector((state) => state.cart.numberCart)

  const handleSearch = () => {
    navigation.navigate('SearchScreen');
  };
  const onPressCart = () => {
    navigation.navigate('CartScreen');
  };

  const getProductType = async () => {
    const { payload } = await dispatch(fetchgetProductType())
    if (payload?.results) {
      setProdType(payload.results)
    }
  }

  const getProductByCate = async (typeid) => {
    setListProduct(null);
    const { payload } = await dispatch(fetchgetProductByType({
      type: typeid
    }));
    if (payload?.results) {
      let data = payload.results
      setListProduct(data);
    };
  }
  const getAllCategory = async () => {
    setListProduct(null);
    const { payload } = await dispatch(fetchgetProductByType());
    if (payload?.results) {
      let data = payload.results
      setListProduct(data);
    };
  }
  const getSlide = async () => {
    const { payload } = await dispatch(fetchGetSlide())
    if (payload?.results) {
      setImages(payload.results)
      setLoadingg(false);

    }
  }
  const getHotProduct = async () => {
    const { payload } = await dispatch(fetchgetProductByType({
      hot: 1
    }));
    if (payload?.results) {
      let data = payload.results
      setHotProducts(data);
    };
  }
  const onChange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if (slide != imgActive) {
        setImgActive(slide)
      }
    }
  }
  const setLoadingg = (type) => {
    dispatch(setLoading(type));
  }
  useEffect(() => {
    setLoadingg(true);
    getSlide();
    getHotProduct();
    getProductType();
  }, []);
  useEffect(() => {
    if (categoryId == 'All') {
      getAllCategory();
    } else {
      getProductByCate(categoryId);
    }
  }, [categoryId])

  return (
    <Background>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.row}>
            <CustomText style={styles.title}>Welcome to</CustomText>
            <TouchableOpacity
              onPress={onPressCart}
            >
              <Ionicons name="cart-outline" size={30} color={Theme.COLORS.color2} />
              {numberCart > 0
                ?
                <CustomText style={styles.numberCart}>{numberCart}</CustomText>
                : null
              }
            </TouchableOpacity>
          </View>
          <CustomText style={styles.titleBold}>Hozi</CustomText>
          {/* search */}
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
        </View>

        {/* slide */}
        <View style={styles.wrap}>
          <ScrollView
            onScroll={({ nativeEvent }) => onChange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.wrap}
          >
            {
              images.map((item, index) =>
                <Image
                  key={index}
                  resizeMode='cover'
                  style={styles.wrap}
                  source={{ uri: item?.image }
                  }
                />
              )
            }
          </ScrollView>
          <View style={styles.wrapDot}>
            {
              images.map((item, index) =>
                <Text
                  key={index}
                  style={imgActive == index ? styles.dotActive : styles.dot}
                >
                  ●
                </Text>
              )
            }

          </View>
        </View>

        {/* Sản phẩm hot */}
        <View style={styles.tab}>
          <View style={styles.titleCate}>
            <CustomText bold fontSize={18}>Sản phẩm hot</CustomText>
            <TouchableOpacity style={styles.row} onPress={() => navigation.navigate(Router.ProductByCategory, { hot: 1, header: 'Sản phẩm hot' })}>
              <CustomText>Xem tất cả</CustomText>
              <Ionicons name='chevron-forward-outline' size={20} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={hotProducts}
            horizontal
            showsHorizontalScrollIndicator={false}
            key={({ item }) => item.product_id}
            renderItem={({ item }) => (
              <ProductItem item={item} />
            )}
          />
        </View>

        {/* Danh mục */}
        <View style={styles.tab}>
          <View style={styles.titleCate}>
            <CustomText bold fontSize={18}>Danh mục</CustomText>
            <TouchableOpacity style={styles.row} onPress={() => navigation.navigate(Router.Explore)}>
              <CustomText>Xem tất cả</CustomText>
              <Ionicons name='chevron-forward-outline' size={20} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={prodType}
            horizontal
            showsHorizontalScrollIndicator={false}
            key={({ item }) => item.it}
            renderItem={({ item }) => (
              <TouchableOpacity activeOpacity={.5} style={styles.cateItem} onPress={() => navigation.navigate(Router.ProductByCategory, { type: item.id, header: item.typeName })}>
                <Image resizeMode='stretch' style={{ width: '50%', height: '100%' }} source={{ uri: item.image }} />
                <CustomText bold>{item.typeName}</CustomText>
              </TouchableOpacity>
            )}
          />
        </View>
        {/* Sản phẩm theo danh mục */}
        <View style={styles.tab}>
          <View style={styles.titleCate}>
            <CustomText bold fontSize={18}>Sản phẩm theo danh mục</CustomText>
            <TouchableOpacity style={styles.row}>
              <CustomText>Xem tất cả</CustomText>
              <Ionicons name='chevron-forward-outline' size={20} />
            </TouchableOpacity>
          </View>
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
            ListHeaderComponent={<TouchableOpacity onPress={() => {
              setCategoryId('All');
            }}>
              <View style={[styles.category, {
                backgroundColor: categoryId === 'All' ? Theme.COLORS.color2 : 'transparent'
              }]}>
                <CustomText style={[styles.subtitle, {
                  color: categoryId === 'All' ? Theme.COLORS.white : Theme.COLORS.color1,
                }]}>Tất cả</CustomText>
              </View>
            </TouchableOpacity>}
          />
          {
            listProduct
              ? listProduct.length > 0
                ?
                <View style={styles.productContainer}>
                  <FlatList
                    data={listProduct}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    key={({ item }) => item.product_id}
                    renderItem={({ item }) => (
                      <ProductItem item={item} />
                    )}
                  />
                </View>
                : <CustomText style={{ padding: 24, alignSelf: 'center' }}>Đang cập nhật ...</CustomText>
              : <View style={styles.loader}><ActivityIndicator size={'large'} /></View>
          }
        </View>
      </ScrollView>
    </Background>
  );
};

export default HomeScreen;

