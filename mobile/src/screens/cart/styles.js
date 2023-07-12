/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import { SIZES, Theme } from "@common/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    loader: {
        minHeight: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
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
        flexDirection: 'row',
        borderRadius: 38,
        marginHorizontal: 15,
        justifyContent: 'center',
        marginBottom: 12,
    },
    checkoutText: {
        color: Theme.COLORS.white,
        fontSize: SIZES.h4,
    },


});
