/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, { useCallback, useEffect, useState } from "react";
import { View, SafeAreaView, TouchableOpacity, ScrollView, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import { Theme } from "@common/theme";
import { useNavigation, useRoute } from "@react-navigation/native";
import CustomText from "@components/CustomText/CustomText";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddToWish, fetchgetProductDetail } from "@screens/home/homeSlice";
import { Router } from '../../navigators/router';
import { fetchAddToCart } from "@screens/cart/cartSlice";
import { formatCurrency } from '../../helpers/helpers'
import { alert } from '@baronha/ting';
import { AlertOptions } from '@baronha/ting'
const ProductDetail = () => {
    const [quantity, setQuantity] = useState(1);
    const [textShown, setTextShown] = useState(false); //To show ur remaining Text
    const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line
    const [productDetail, setProductDetail] = useState({});
    const [disaleBtn, setDisableBtn] = useState(false);

    const [wish, setWish] = useState();
    const route = useRoute();
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const isLogin = useSelector(state => state.auth.isLogin);
    const numberCart = useSelector((state) => state.cart.numberCart)


    const toggleNumberOfLines = () => { //To toggle the show text or hide it
        setTextShown(!textShown);
    }
    const onTextLayout = useCallback(e => {
        setLengthMore(e.nativeEvent.lines.length >= 4); //to check the text is more than 4 lines or not
    }, []);

    const getProductDetail = async () => {
        let productId = route.params?.id

        const { payload } = await dispatch(fetchgetProductDetail({
            id: productId,
        }));
        if (payload?.results) {
            let data = payload.results;
            setWish(data.product_is_favorite);
            setProductDetail(data)
        }
    };
    const addToCart = async () => {
        if (isLogin == true) {
            setDisableBtn(true);
            let obj = {
                "product_id": productDetail.product_id,
                "product_quantity": quantity,
            }
            const { payload } = await dispatch(fetchAddToCart(obj))
            if (payload) {
                const options = {
                    title: 'Đã thêm vào giỏ !',
                };
                alert(options); // easy to use
                setDisableBtn(false);
            }
        } else {
            navigation.navigate(Router.Login)
        }
    }
    const handleSearch = () => {
        navigation.navigate('SearchScreen');
    };
    const addToWish = async () => {
        let obj = {
            product_id: productDetail.product_id
        }
        let { payload } = await dispatch(fetchAddToWish(obj))
        if (payload) {
            setWish(true)
        }
    }
    useEffect(() => {
        getProductDetail()
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.backAndLove}>
                <View style={styles.back}>
                    <TouchableOpacity onPress={() => {
                        navigation.goBack();
                    }}>
                        <Ionicons name="chevron-back-outline" size={25} color={Theme.COLORS.color2} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    activeOpacity={.7}
                    style={styles.search}
                    onPress={handleSearch}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name={'search-outline'} size={24} color={'black'} />
                        <CustomText color={Theme.COLORS.sub}>{"  "}{productDetail.product_type}</CustomText>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate(Router.CartScreen)}
                >
                    <Ionicons name="cart-outline" size={30} color={Theme.COLORS.color2} />
                    {numberCart > 0
                        ?
                        <CustomText style={styles.numberCart}>{numberCart}</CustomText>
                        : null
                    }
                </TouchableOpacity>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.imageContainer}>

                    <Image source={{ uri: process.env.APP_URL + productDetail.product_media }} style={styles.image} />
                </View>
                <View style={styles.productContainer}>

                    {/* Tên và giá sản phẩm */}
                    <View style={{ borderBottomColor: Theme.COLORS.grey, borderBottomWidth: 1, paddingVertical: 12 }}>
                        <CustomText style={styles.name} >{productDetail.product_label}</CustomText>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <CustomText bold fontSize={18}>{formatCurrency(productDetail.product_price - (productDetail.product_price * productDetail.product_discount / 100))} đ</CustomText>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <CustomText fontSize={18} style={styles.price}>{formatCurrency(productDetail.product_price)} đ</CustomText>
                                    <View style={styles.discount}>
                                        <CustomText bold color={'#fff'}>{productDetail.product_discount}%</CustomText>
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.back, { position: 'absolute', right: 0, bottom: 2 }]}>
                                <TouchableOpacity disabled={productDetail.product_is_favorite == 1} onPress={addToWish}>
                                    <Ionicons name={wish == 0 ? "heart-outline" : "heart"} size={25} color={wish == 0 ? Theme.COLORS.color2 : Theme.COLORS.danger} />

                                </TouchableOpacity>
                            </View>
                            {/* <View style={styles.rate}>
                                <Ionicons name="star" size={16} color={'#ffbf00'} />
                                <CustomText bold color={'#ffbf00'}>{" "}{ }{productDetail.product_evaluate}</CustomText>
                            </View> */}
                        </View>
                    </View>

                    {/* Mô tả sản phẩm */}
                    <View style={{ marginTop: 12 }}>
                        <CustomText bold fontSize={16}>Mô tả</CustomText>
                        <View>
                            <CustomText
                                onTextLayout={onTextLayout}
                                numberOfLines={textShown ? undefined : 3}
                                style={{ lineHeight: 21 }}>{productDetail.product_description}</CustomText>

                            {
                                lengthMore
                                    ?
                                    <TouchableOpacity
                                        onPress={toggleNumberOfLines}
                                        style={{
                                            padding: 8,
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                        }}
                                    >

                                        <CustomText>{textShown ? 'Ẩn bớt  ' : 'Xem thêm  '}</CustomText>
                                        <Ionicons name={textShown ? 'chevron-up-outline' : 'chevron-down-outline'} size={18} color={Theme
                                            .COLORS.color2} />
                                    </TouchableOpacity>
                                    : null
                            }
                        </View>
                    </View>
                    {/* Đánh giá sản phẩm */}
                    <View style={{}}>
                        <CustomText bold fontSize={16}>Đánh giá</CustomText>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row' }}>
                                {'qwt'.split('').map(item => {
                                    return (
                                        <Ionicons key={item} name="star" color={'#ffbf00'} size={16} />
                                    )
                                }
                                )}
                                <CustomText color={Theme.COLORS.danger}>{" "}{productDetail.product_evaluate}/5</CustomText>
                            </View>
                            <TouchableOpacity style={{ flexDirection: 'row', }}>
                                <CustomText>Xem tất cả</CustomText>
                                <Ionicons name="chevron-forward-outline" size={20} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <View style={styles.quantityContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end' }}>
                        <CustomText bold>Số lượng: </CustomText>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => {
                                if (quantity > 1) {
                                    setQuantity(quantity - 1);
                                }
                            }}>
                                <View style={styles.quantityIcon}>
                                    <Ionicons name="remove-outline" size={10} color={Theme.COLORS.primary} />
                                </View>
                            </TouchableOpacity>
                            <CustomText style={styles.quantity}>{quantity}</CustomText>
                            <TouchableOpacity onPress={() => {
                                setQuantity(quantity + 1);
                            }}>
                                <View style={styles.quantityIcon}>
                                    <Ionicons name="add-outline" size={10} color={Theme.COLORS.primary} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <TouchableOpacity disabled={disaleBtn} onPress={addToCart} activeOpacity={.5} style={styles.addToCartContainer}>
                    <CustomText style={styles.addToBasket}>Thêm vào giỏ</CustomText>
                    {/* <View style={{ width: 1, backgroundColor: '#fff', height: '100%', marginHorizontal: 12 }}>
                    </View> */}
                    <View style={styles.priceContainer}>
                        {/* <CustomText style={styles.price}>$ {(selling_price ? selling_price : price) * quantity}</CustomText> */}
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default ProductDetail;