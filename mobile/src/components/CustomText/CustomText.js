/* eslint-disable space-infix-ops */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { Theme } from '@common/theme';
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const defaultProps = {
  style: {},
  fontSize: undefined,
  bold: false,
  color: undefined,
};
const CustomText = ({
  fontSize,
  bold,
  color,
  style,
  children,
  onPress,
  numberOfLines,
  ...props
}) => {

  let FONTSIZE = 14;
  if (fontSize) {
    FONTSIZE = fontSize;
  }
  return (
    <Text
      numberOfLines={numberOfLines}
      {...props}
      onPress={onPress}
      style={[
        {
          fontSize: FONTSIZE,
          color: !color ? Theme.COLORS.color1 : color,
          fontFamily: bold ? 'Poppins-SemiBold' : 'Poppins-Regular',
        },
        style,
      ]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  customText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    // Add any other styles you want to apply to the text here
  },
});
CustomText.defaultProps = defaultProps;
export default CustomText;
