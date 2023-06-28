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
import LoginScreen from '@screens/auth/LoginScreen';
import RegisterScreen from '@screens/auth/RegisterScreen';
import { Router } from './router';

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
        <Stack.Screen name='BottomTab' component={BottomTab} />
        <Stack.Screen name={Router.CartScreen} component={CartScreen} />
        <Stack.Screen name={Router.SearchScreen} component={SearchScreen} />
        <Stack.Screen name={Router.ProductDetailScreen} component={ProductDetail} />
        <Stack.Screen name={Router.ShippingAddressScreen} component={ShippingAddressScreen} />
        <Stack.Screen name={Router.CheckOutScreen} component={CheckoutScreen} />
        <Stack.Screen name={Router.Login} component={LoginScreen} />
        <Stack.Screen name={Router.Register} component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
