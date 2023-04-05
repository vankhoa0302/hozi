/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import { SIZES, Theme } from "@common/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    itemChild: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
    },
    priceContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    price: {
        color: Theme.COLORS.white2,
        fontSize: SIZES.h4,
    },
    checkoutContainer: {
        backgroundColor: '#557477',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 50,
        paddingVertical: 10,
        marginHorizontal: 15,
        justifyContent: 'center',
        marginBottom: 12,
    },
    checkoutText: {
        color: Theme.COLORS.white,
        fontSize: SIZES.h4,

    },


});
