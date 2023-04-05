/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomText from '@components/CustomText/CustomText'
import { Theme, WidthScreen } from '@common/theme'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomButton from '@components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
const CustomHeader = ({ headerName, isBack, rightIcon, onRightPress }) => {
    const navigation = useNavigation();

    return (
        <View style={[styles.container, { justifyContent: rightIcon ? 'space-between' : null }]}>
            {isBack && <View style={styles.back}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack();
                }}>
                    <Ionicons name="chevron-back-outline" size={25} color={Theme.COLORS.accent} />
                </TouchableOpacity>
            </View>}
            <View style={{ alignItems: 'center', flex: 1 }}>
                <CustomText fontSize={16} bold >{headerName}</CustomText>
            </View>

            {
                rightIcon && <View style={styles.back}>
                    <TouchableOpacity onPress={onRightPress}>
                        <Ionicons name={rightIcon} size={25} color={Theme.COLORS.accent} />
                    </TouchableOpacity>
                </View>
            }
        </View >
    )
}

export default CustomHeader

const styles = StyleSheet.create({
    container: {
        height: 44,
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: 'transparent',
        marginVertical: 8,
        paddingHorizontal: 15,
    },
    back: {
        padding: 8,
        borderRadius: 30,
        backgroundColor: 'white',
    },
})