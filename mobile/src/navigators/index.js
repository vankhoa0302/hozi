/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import { StatusBar, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './bottombar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from '@screens/cart';
import SearchScreen from '@screens/search';
import ProductDetail from '@screens/productDetail';
import ShippingAddressScreen from '@screens/shipping address';
import CheckoutScreen from '@screens/checkout';

function AppNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator

        screenOptions={{
          headerShown: false,
          animation: 'fade_from_bottom'
        }}
      >
        <Stack.Screen name='Main' component={BottomTab} />
        <Stack.Screen name='CartScreen' component={CartScreen} />
        <Stack.Screen name='SearchScreen' component={SearchScreen} />
        <Stack.Screen name='ProductDetail' component={ProductDetail} />
        <Stack.Screen name='ShippingAddresses' component={ShippingAddressScreen} />
        <Stack.Screen name='Checkout' component={CheckoutScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
