/* eslint-disable prettier/prettier */
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from '@components/CustomText/CustomText'
import { Theme, WidthScreen } from '@common/theme'
import Ionicons from 'react-native-vector-icons/Ionicons'
const Background = ({ children, bgColor }) => {
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: bgColor ? bgColor : Theme.COLORS.bg }]}>
            {children}
        </SafeAreaView>
    )
}

export default Background

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})