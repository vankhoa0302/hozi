/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import { HeightScreen, Theme, WidthScreen } from "@common/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    search: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 8,
        paddingVertical: 4,
        paddingLeft: 12,
        borderColor: '#DEDEDE',
        borderWidth: 1,
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
    }
});
