/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, { useCallback, useState } from "react";
import { View, SafeAreaView, TouchableOpacity, ScrollView, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import { Theme } from "@common/theme";
import { useNavigation, useRoute } from "@react-navigation/native";
import CustomText from "@components/CustomText/CustomText";

const ProductDetail = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const name = route.params.name;
    const image = route.params.image;
    const description = route.params.description;
    const price = route.params.price;
    const selling_price = route.params.selling_price;

    const rating = 4.8;
    const [quantity, setQuantity] = useState(1);
    const [textShown, setTextShown] = useState(false); //To show ur remaining Text
    const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line

    const toggleNumberOfLines = () => { //To toggle the show text or hide it
        setTextShown(!textShown);
    }
    const onTextLayout = useCallback(e => {
        setLengthMore(e.nativeEvent.lines.length >= 4); //to check the text is more than 4 lines or not
        // console.log(e.nativeEvent);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.imageContainer}>
                    <View style={styles.backAndLove}>
                        <View style={styles.back}>
                            <TouchableOpacity onPress={() => {
                                navigation.goBack();
                            }}>
                                <Ionicons name="chevron-back-outline" size={25} color={Theme.COLORS.color2} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.back}>
                            <TouchableOpacity onPress={() => {
                                navigation.goBack();
                            }}>
                                <Ionicons name="heart-outline" size={25} color={Theme.COLORS.color2} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Image source={image} style={styles.image} />
                </View>
                <View style={styles.productContainer}>

                    {/* Tên và giá sản phẩm */}
                    <View style={{ borderBottomColor: Theme.COLORS.grey, borderBottomWidth: 1, paddingVertical: 12 }}>
                        <CustomText style={styles.name} >{name}</CustomText>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <CustomText bold>{selling_price}  </CustomText>
                                <CustomText style={selling_price ? { textDecorationLine: 'line-through' } : null}>{price}</CustomText>
                            </View>
                            <View style={styles.rate}>
                                <Ionicons name="star" size={16} color={'#ffbf00'} />
                                <CustomText bold color={'#ffbf00'}>{" "}{ }{rating}</CustomText>
                            </View>
                        </View>
                    </View>

                    {/* Mô tả sản phẩm */}
                    <View style={{ marginTop: 12 }}>
                        <CustomText bold>Mô tả</CustomText>
                        <View>
                            <CustomText
                                onTextLayout={onTextLayout}
                                numberOfLines={textShown ? undefined : 3}
                                style={{ lineHeight: 21 }}>{description}</CustomText>

                            {
                                lengthMore
                                    ?
                                    <TouchableOpacity
                                        onPress={toggleNumberOfLines}
                                        style={{
                                            marginTop: 12,
                                            padding: 8,
                                            borderTopColor: Theme.COLORS.grey,
                                            borderTopWidth: 1,
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
                        <CustomText bold>Đánh giá</CustomText>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row' }}>
                                {'qwt'.split('').map(item => {
                                    return (
                                        <Ionicons key={item} name="star" color={'#ffbf00'} size={16} />
                                    )
                                }
                                )}
                                <CustomText color={Theme.COLORS.danger}>{" "}{rating}/5</CustomText>
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
                    <View style={{ flexDirection: 'row' }}>
                        <CustomText bold>Màu sắc: </CustomText>
                        <TouchableOpacity style={[styles.color, { backgroundColor: 'red' }]}></TouchableOpacity>
                        <TouchableOpacity style={[styles.color, { backgroundColor: 'grey' }]}></TouchableOpacity>
                        <TouchableOpacity style={[styles.color, { backgroundColor: 'black' }]}></TouchableOpacity>

                    </View>

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
                <TouchableOpacity style={styles.addToCartContainer}>
                    <CustomText style={styles.addToBasket}>Thêm vào giỏ</CustomText>
                    <View style={{ width: 1, backgroundColor: '#fff', height: '100%', marginHorizontal: 12 }}>
                    </View>
                    <View style={styles.priceContainer}>
                        <CustomText style={styles.price}>$ {(selling_price ? selling_price : price) * quantity}</CustomText>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default ProductDetail;