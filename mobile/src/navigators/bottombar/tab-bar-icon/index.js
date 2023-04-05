/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { Theme } from '@common/theme';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
// import { useSelector } from 'react-redux';
const TabBarIcon = ({ name, focused, ...props }) => {
    let focusColor = Theme.COLORS.color2;
    let unfocusColor = '#909090'
    // const profile_employee = useSelector((state) => state.home.profile_employee)
    // const statistic_notify = useSelector((state) => state.home.statistic_notify);
    // const statistic_request_befriend = useSelector((state) => state.friend.statistic_request_befriend)
    // const renderStaticNoti = (notifi) => {
    //     if (notifi > 0) {
    //         return (
    //             <Badge // bg="red.400"
    //                 colorScheme="danger" rounded="full" mb={-4} mr={-2} zIndex={1} variant="solid" alignSelf="flex-end" _text={{
    //                     fontSize: 12
    //                 }}>
    //                 {notifi > 99 ? '99+' : notifi}
    //             </Badge>
    //         );
    //     }
    // };

    // const renderStatisticRequest = (req) => {
    //     if (req > 0) {
    //         return (
    //             <Badge // bg="red.400"
    //                 colorScheme="danger" rounded="full" mb={-4} mr={-2} zIndex={1} variant="solid" alignSelf="flex-end" _text={{
    //                     fontSize: 12
    //                 }}>
    //                 {req > 99 ? '99+' : req}
    //             </Badge>
    //         );
    //     }
    // };
    return (
        <View>
            {name === 'Home' && (
                <View style={[styles.tabIcon, {
                    backgroundColor: focused ? focusColor : 'white'
                }]}>
                    <Ionicons name="home" size={25} color={focused ? Theme.COLORS.white : unfocusColor} />
                </View>
            )}
            {name === 'Category' && (
                <View style={[styles.tabIcon, {
                    backgroundColor: focused ? focusColor : 'white'
                }]}>
                    <Ionicons name="grid" size={25} color={focused ? Theme.COLORS.white : unfocusColor} />
                </View>
            )}
            {name === 'Wish' && (
                // {/* {renderStatisticRequest(statistic_request_befriend)} */}
                <View style={[styles.tabIcon, {
                    backgroundColor: focused ? focusColor : 'white'
                }]}>
                    <Ionicons name="heart" size={25} color={focused ? Theme.COLORS.white : unfocusColor} />
                </View>
            )}
            {name === 'Profile' && (
                // {/* {renderStaticNoti(statistic_notify)} */}
                <View
                    style={[styles.tabIcon, {
                        backgroundColor: focused ? focusColor : 'white'
                    }]}>
                    <Ionicons name="person" size={25} color={focused ? Theme.COLORS.white : unfocusColor} />
                </View>
            )}
        </View>
    );
};

export default TabBarIcon;
const styles = StyleSheet.create({
    tabIcon: {
        padding: 10,
        borderRadius: 50,
    }
})

