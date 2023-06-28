/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import { View } from 'react-native';
import React, { memo } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomText from '@components/CustomText/CustomText';
import { SIZES } from '@common/theme';
const CustomButton = ({
  style,
  onPress,
  children,
  labelColor,
  label,
  disabled,
  labelWeight,
  color,
  labelSize,
  ...props }) => {

  const buttonStyle = {
    marginVertical: 8,
    padding: 16,
    flexDirection: 'row',
    borderRadius: 6,
    justifyContent: 'center',
    backgroundColor: color,
  }
  return (
    <TouchableOpacity
      activeOpacity={.7}
      style={[buttonStyle, style]}
      onPress={onPress}
      disabled={disabled}
      {...props}
    >
      {label
        &&
        <CustomText
          fontSize={SIZES.h4}
          style={{
            lineHeight: 24,
            color: labelColor,
          }}
        >{label}
        </CustomText>}
      {children}
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
});

export default memo(CustomButton);