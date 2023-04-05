/* eslint-disable prettier/prettier */
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Background from '@components/Background';
import CustomHeader from '@components/CustomHeader.js';
import { CATEGORIES } from '@data/data';
import CustomText from '@components/CustomText/CustomText';
import { WidthScreen } from '@common/theme';
import { styles } from './styles';

const CategoryScreen = () => {
    return (
        <Background>
            <CustomHeader headerName={'Khám phá'} />
            <View style={{ flex: 1 }}>
                <FlatList
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    data={CATEGORIES}
                    renderItem={({ item }) =>
                        <TouchableOpacity style={styles.category}>
                            <CustomText bold fontSize={20}>{item.title}</CustomText>
                        </TouchableOpacity>
                    }
                    keyExtractor={item => item.id}
                    ListFooterComponent={() => {
                        return (
                            <View style={{ height: 100, backgroundColor: 'transparent' }}>
                            </View>
                        )
                    }}
                />
            </View>
        </Background>
    );
};

export default CategoryScreen;

