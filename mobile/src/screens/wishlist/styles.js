/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import { SIZES, Theme, WidthScreen } from "@common/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: Theme.COLORS.white,
        borderRadius: 12,
        marginVertical: 12
    },
    loader: {
        minHeight: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    removeIcon: {
        position: 'absolute',
        right: 0,
    },
    itemImg: {
        width: '100%',
        height: '100%',
        borderRadius: 12,

    },
    imageArea: {
        height: WidthScreen / 3.8,
        width: WidthScreen / 3.8,
        backgroundColor: Theme.COLORS.bg,
        borderRadius: 12,
        margin: 8
    },
    itemInfo: {
        flex: 1,
        marginLeft: 12,
        justifyContent: 'center'
    },
    amount: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 12
    },
    priceAndAmount: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    check: {
        position: 'absolute',
        right: 10,
        top: -5,
        zIndex: 1
    },
});
