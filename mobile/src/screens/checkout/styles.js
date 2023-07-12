import { SIZES, Theme, WidthScreen } from "@common/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    // address: {
    //     flexDirection: 'row',
    //     margin: 8,
    //     justifyContent: 'space-between',
    //     paddingHorizontal: 15,
    // },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 20,
        width: '80%',
        maxWidth: 300,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        marginBottom: 10,
        paddingHorizontal: 10,
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
        borderRadius: 50,
        marginHorizontal: 15,
        justifyContent: 'center',
        marginBottom: 12,
    },
    paymentText: {
        color: Theme.COLORS.white,
        fontSize: SIZES.h4,

    },
    checkoutSuccessBtn: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderRadius: 50,
        marginHorizontal: 15,
        justifyContent: 'center',
        marginBottom: 12,
        borderColor: Theme.COLORS.color2,
        borderWidth: 1,
    },
    row3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    loader: {
        minHeight: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
