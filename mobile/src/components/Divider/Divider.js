import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Theme, WidthScreen } from '@common/theme'

const Divider = ({ height }) => {
    return (
        <View style={{ width: WidthScreen, height: height, backgroundColor: Theme.COLORS.lightGrey }}>
        </View>
    )
}

export default Divider