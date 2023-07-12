import { HeightScreen, SIZES, Theme, WidthScreen } from "@common/theme";
import { StyleSheet } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
    loader: {
        minHeight: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    category: {
        margin: 8,
        padding: 10,
        backgroundColor: Theme.COLORS.lightGrey,
        borderRadius: 15,
        width: WidthScreen / 2 - 25,
        height: HeightScreen / 3,
        alignItems: 'center',
    },
    search: {
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 8,
        paddingVertical: 12,
        paddingLeft: 12,
        backgroundColor: Theme.COLORS.lightGrey,
        justifyContent: 'space-between',
        marginTop: 8,
        marginHorizontal: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    searchFeild: {
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 8,
        paddingLeft: 12,
        backgroundColor: Theme.COLORS.lightGrey,
        justifyContent: 'space-between',
        marginTop: 8,
        marginHorizontal: 12
    },
    productContainer: {
        alignItems: 'center',
        paddingVertical: 5,
        paddingBottom: Platform.OS === "ios" ? 50 : 140,
    },
    product: {
        width: WidthScreen / 2 - 20,
        alignItems: 'center',
    },

});
