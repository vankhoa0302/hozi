/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import { FONTWEIGHT, SIZES, Theme, WidthScreen } from "@common/theme";
import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    // header: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    //     marginTop: 12,
    // },
    search: {
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 8,
        paddingVertical: 12,
        paddingLeft: 12,
        backgroundColor: Theme.COLORS.lightGrey,
        justifyContent: 'space-between',
        marginTop: 8
    },
    categoryTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    seeAllBtn: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
    },
    filter: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    header: {
        paddingTop: 5,
        paddingHorizontal: 15,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleBold: {
        fontSize: SIZES.h1,
        fontWeight: FONTWEIGHT.bold,
    },
    title: {
        fontSize: SIZES.h2,
    },
    subtitle: {
        color: Theme.COLORS.accent,
        fontWeight: FONTWEIGHT.weight500,
    },
    categoriesTab: {
        paddingTop: 10,
        marginLeft: 10,
    },
    category: {
        borderRadius: 50,
        minWidth: 80,
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: 'center',
    },
    productContainer: {
        paddingVertical: 5,
        paddingBottom: Platform.OS === "ios" ? 50 : 210,

    },
    product: {
        margin: 5,
        padding: 10,
        backgroundColor: Theme.COLORS.bg,
        borderRadius: 15,
        width: WidthScreen / 2 - 25,
        alignItems: 'center',
        flexBasis: '46%',
    },
    image: {
        width: WidthScreen / 3,
        height: 150,
        resizeMode: 'contain',
    },
    add: {
        position: 'absolute',
        right: 10,
        top: 10,
        zIndex: 1,
        backgroundColor: Theme.COLORS.color2,
        padding: 5,
        borderRadius: 9,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        shadowOpacity: 0.3,
        elevation: 10,
    },

    price: {
        fontWeight: FONTWEIGHT.bold
    },
});
