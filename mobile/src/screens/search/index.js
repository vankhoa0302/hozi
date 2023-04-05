/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Background from '@components/Background'
import { styles } from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Theme } from '@common/theme'
import { useNavigation } from '@react-navigation/native'
const SearchScreen = () => {
    const [keyword, setKeyword] = useState();

    const navigation = useNavigation();
    return (
        <Background>
            <View style={styles.header}>
                <Ionicons name={'chevron-back-outline'} size={24} onPress={() => navigation.goBack()} />
                <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
                    <TextInput
                        value={keyword}
                        onChangeText={(text) => setKeyword(text)}
                        style={styles.search}
                    >

                    </TextInput>
                    {(keyword && keyword !== '')
                        && <Ionicons
                            name='close-circle'
                            size={18}
                            style={{
                                position: 'absolute',
                                right: 50,
                            }}
                            color={Theme.COLORS.sub}
                            onPress={() => setKeyword('')}
                        />}
                </View>
                <TouchableOpacity activeOpacity={.7} style={styles.btnSearch}>
                    <Ionicons name='search-outline' size={24} color={'white'} />
                </TouchableOpacity>

            </View>
            <View style={{ flex: 1 }}>
                {/* <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) =>
            <CartItem item={item} childrenStyle={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
              <IconButton iconName={'cart'} iconColor={'black'} iconSize={20} />
            </CartItem>
          }
          keyExtractor={item => item.id}
        /> */}
            </View>
        </Background>
    )
}

export default SearchScreen;
