/* eslint-disable prettier/prettier */
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Theme } from '@common/theme'
const IconButton = ({ iconName, iconSize, iconColor, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Ionicons name={iconName} size={iconSize} color={iconColor} />
        </TouchableOpacity>
    )
}

export default IconButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: Theme.COLORS.bg,
        padding: 10,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    }
})