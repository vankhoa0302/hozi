/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import { HeightScreen, Theme, WidthScreen } from "@common/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    profileInfo: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
    },
    avatarArea: {
        height: WidthScreen / 4,
        width: WidthScreen / 4,
    },
    infoArea: {
        alignItems: 'center',
    },
    camera: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        backgroundColor: Theme.COLORS.bg,
        padding: 8,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        backgroundColor: Theme.COLORS.white2,
        borderRadius: 12,
        alignItems: 'center',
        flexDirection: 'row',
        padding: 14,
        marginVertical: 8,
        justifyContent: 'space-between'

    },
    btnLoginRegister: {
        borderRadius: 38
    }
});
