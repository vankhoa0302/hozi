/* eslint-disable prettier/prettier */
import COLORS from '@common/theme/colors';
import { Dimensions } from 'react-native';
export const WidthScreen = Dimensions.get('window').width
export const HeightScreen = Dimensions.get('window').height


export const SIZES = {
    h1: 30,
    h2: 24,
    h3: 20,
    h4: 18,
    h5: 16,
    h6: 14,
};

export const FONTWEIGHT = {
    bold: 'bold',
    normal: 'normal',
    weight500: '500',
    weight700: '700',
};

export const Theme = {
    COLORS,
}