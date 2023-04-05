/* eslint-disable prettier/prettier */
import { FONTWEIGHT, SIZES, Theme, WidthScreen } from "@common/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.COLORS.bg,
    },
    back: {
        padding: 8,
        borderRadius: 30,
        backgroundColor: 'white',
    },
    imageContainer: {
        alignItems: 'center',
    },
    image: {
        width: WidthScreen - 50,
        height: WidthScreen - 50,
        resizeMode: 'contain',
    },
    name: {
        fontSize: SIZES.h3,
    },
    quantityContainer: {
        flexDirection: 'row',
        marginVertical: 12,
        alignItems: 'center',
        borderRadius: 5,
        justifyContent: 'space-between'
    },
    quantity: {
        textAlign: 'center',
        fontWeight: FONTWEIGHT.bold,
        minWidth: 20,
    },
    quantityIcon: {
        backgroundColor: Theme.COLORS.white2,
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    description: {
        color: Theme.COLORS.accent,
    },
    priceContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    price: {
        color: Theme.COLORS.white2,
        fontSize: SIZES.h4,
    },
    addToCartContainer: {
        backgroundColor: '#557477',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 50,
        paddingVertical: 10,
        justifyContent: 'center',
    },
    addToBasket: {
        color: Theme.COLORS.white,
        fontSize: SIZES.h4,

    },
    basketIcon: {
        backgroundColor: Theme.COLORS.white,
        marginLeft: 10,
        borderRadius: 50,
        padding: 5,
    },
    backAndLove: {
        marginTop: 8,
        width: WidthScreen,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    productContainer: {
        padding: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: Theme.COLORS.white
    },
    footer: {
        padding: 20,
        backgroundColor: Theme.COLORS.white,
    },
    rate: {
        flexDirection: 'row',
        backgroundColor: '#ffff9d',
        borderRadius: 20,
        paddingHorizontal: 8,
        justifyContent: 'center',
        paddingVertical: 4,
    },
    color: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginLeft: 8
    }
});

export default styles;