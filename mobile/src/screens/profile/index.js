/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Background from '@components/Background';
import CustomHeader from '@components/CustomHeader.js';
import { styles } from './styles';
import CustomText from '@components/CustomText/CustomText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Theme } from '@common/theme';
import { useNavigation } from '@react-navigation/native';


const data = [
  { id: 1, title: 'Đơn mua', sub: '10 đơn hàng' },
  { id: 2, title: 'Địa chỉ nhận hàng', sub: '3 địa chỉ' },
  { id: 3, title: 'Phương thức thanh toán', sub: '2 thẻ đã được liên kết' },
  { id: 4, title: 'Đánh giá của tôi', sub: 'Review for 5 items' },
]
const ProfileScreen = () => {

  const navigation = useNavigation();
  const handlePress = (type) => {
    switch (type) {
      case 1:
        navigation.navigate('MyOders')
        break;
      case 2:
        navigation.navigate('ShippingAddresses')
        break;
      case 3:
        navigation.navigate('PaymentMethod')
        break;
      case 4:
        navigation.navigate('MyReviews')
        break;
      case 5:
        navigation.navigate('Setting')
        break;
    }
  }
  return (
    <Background>
      <CustomHeader headerName={'My Profile'} />
      <View style={{ marginHorizontal: 15 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={styles.card} onPress={() => handlePress(item.id)}>
                <View>
                  <CustomText bold>{item.title}</CustomText>
                  <CustomText>{item.sub}</CustomText>

                </View>
                <Ionicons name='chevron-forward-outline' size={28} />
              </TouchableOpacity>
            )
          }}
          ListHeaderComponent={() => {
            return (
              <View>
                <View style={styles.profileInfo}>
                  <View style={styles.avatarArea}>
                    <Image source={{ uri: 'https://th.bing.com/th/id/OIP.XpeGVH_r6WEnbaLYdqNCNQHaNK?pid=ImgDet&w=1440&h=2560&rs=1' }} style={styles.avatar} resizeMode='cover' />
                    <TouchableOpacity style={styles.camera} activeOpacity={.7}>
                      <Ionicons name='camera-outline' size={20} color={Theme.COLORS.black} />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.infoArea}>
                    <CustomText bold fontSize={18} >Van Khoa</CustomText>
                    <CustomText>abc@gmail.com</CustomText>
                  </View>
                </View>
                <CustomText bold color={Theme.COLORS.sub}>Account</CustomText>
              </View>
            )
          }}
          ListFooterComponent={() => {
            return (
              <View>
                <TouchableOpacity style={styles.card}>
                  <View>
                    <CustomText bold>Cài đặt</CustomText>
                    <CustomText>Notification, Password, FAQ, Contact</CustomText>
                  </View>
                  <Ionicons name='chevron-forward-outline' size={28} />
                </TouchableOpacity>
                <View style={{ height: 150, backgroundColor: 'transparent' }}>
                </View>
              </View>
            )
          }}
        />
      </View>
    </Background>
  );
};

export default ProfileScreen;


