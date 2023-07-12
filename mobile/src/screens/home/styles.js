/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import { FONTWEIGHT, HeightScreen, SIZES, Theme, WidthScreen } from "@common/theme";
import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    loader: {
        minHeight: HeightScreen / 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: Platform.OS === "ios" ? 70 : 210,
    },
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
    tab: {
        paddingTop: 12,
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
        paddingBottom: Platform.OS === "ios" ? 70 : 100,
    },
    product: {
        margin: 5,
        backgroundColor: Theme.COLORS.white,
        borderRadius: 8,
        width: WidthScreen / 2.5,
        height: HeightScreen / 2.5,
        alignItems: 'center',
    },
    image: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        width: '100%',
        height: '100%',
    },
    add: {
        position: 'absolute',
        right: 6,
        bottom: 10,
        zIndex: 1,
        backgroundColor: Theme.COLORS.color2,
        padding: 6,
        borderRadius: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        shadowOpacity: 0.3,
        elevation: 10,
    },

    price: {
        fontWeight: FONTWEIGHT.bold,
    },
    numberCart: {
        position: 'absolute',
        right: -8,
        top: -6,
        backgroundColor: 'red',
        width: 22,
        borderRadius: 12,
        textAlign: 'center',
        fontSize: 11,
        color: '#fff',
        borderWidth: 1,
        borderColor: '#fff',
        paddingTop: 2,
    },
    cateItem: {
        flexDirection: 'row',
        alignItems: 'center',
        width: WidthScreen / 2,
        height: HeightScreen / 6,
        marginRight: 8,
        borderRadius: 12,
        backgroundColor: Theme.COLORS.lightGrey,
        justifyContent: 'space-evenly'
    },
    titleCate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 12,
    },
    wrap: {
        marginTop: 4,
        width: WidthScreen,
        height: HeightScreen / 3.8,
    },
    wrapImg: {
        width: '100%',
        height: '100%',
    },
    wrapDot: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    dotActive: {
        margin: 3,
        color: Theme.COLORS.color2,
    },
    dot: {
        margin: 3,
        color: 'white',
    }
});
