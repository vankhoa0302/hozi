import { Theme } from "@common/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    shippingAddItem: {
        flex: 1,
        backgroundColor: Theme.COLORS.white,
        borderRadius: 12,
        marginVertical: 12,
        paddingVertical: 20,
        paddingHorizontal: 12,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    check: {
        marginRight: 8
    },
    default: {
        padding: 2,
        borderColor: Theme.COLORS.danger,
        borderWidth: 1,
        alignItems: 'center',
        width: 82,
        marginVertical: 8
    },
    addBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: Theme.COLORS.color2,
        padding: 12
    }
})