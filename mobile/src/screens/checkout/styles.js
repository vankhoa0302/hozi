import { SIZES, Theme, WidthScreen } from "@common/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    address: {
        flexDirection: 'row',
        margin: 8,
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        height: WidthScreen / 4,
        width: WidthScreen / 4,
        backgroundColor: Theme.COLORS.bg,
        margin: 8
    },
    row2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15
    },
    paymentContainer: {
        backgroundColor: '#557477',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 50,
        paddingVertical: 10,
        marginHorizontal: 15,
        justifyContent: 'center',
        marginBottom: 12,
    },
    paymentText: {
        color: Theme.COLORS.white,
        fontSize: SIZES.h4,

    },
})
