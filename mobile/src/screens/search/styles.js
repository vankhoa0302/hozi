/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import { HeightScreen, Theme, WidthScreen } from "@common/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    loader: {
        minHeight: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        paddingTop: 5,
        paddingHorizontal: 15,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: Theme.COLORS.grey
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
        width: WidthScreen / 2 - 20,
        alignItems: 'center',
    },
    productContainer: {
        paddingTop: 8,
        alignItems: 'center',
        paddingBottom: Platform.OS === "ios" ? 50 : 70,
    },
    image: {
        width: WidthScreen / 3,
        height: 150,
        resizeMode: 'contain',
    },
});
