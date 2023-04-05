import { HeightScreen, SIZES, Theme, WidthScreen } from "@common/theme";
import { StyleSheet } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
    category: {
        margin: 5,
        padding: 10,
        backgroundColor: Theme.COLORS.bg,
        borderRadius: 15,
        width: WidthScreen / 2 - 25,
        height: HeightScreen / 3,
        alignItems: 'center',
        flexBasis: '46%',
    }


});
