/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import { HeightScreen, Theme, WidthScreen } from "@common/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        paddingTop: 5,
        paddingHorizontal: 15,
    },
    search: {
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 8,
        paddingLeft: 12,
        backgroundColor: Theme.COLORS.lightGrey,
        justifyContent: 'space-between',
        marginTop: 8,
    },
    btnSearch: {
        width: 44,
        alignItems: 'center',
        position: 'absolute',
        right: 0,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        backgroundColor: Theme.COLORS.sub,
        padding: 6,
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
    productContainer: {
        paddingVertical: 5,
        paddingBottom: Platform.OS === "ios" ? 50 : 70,

    },
    image: {
        width: WidthScreen / 3,
        height: 150,
        resizeMode: 'contain',
    },
});
