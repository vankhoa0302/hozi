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
import CheckoutSuccess from '@screens/checkout/success';
import ProductByCategory from '@screens/category/ProductByCategory';
import CategoryScreen from '@screens/category';
import OrderScreen from '@screens/checkout/order';
import OrderDetail from '@screens/checkout/orderDetail';
import ChangePassword from '@screens/profile/ChangePassword';

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
        <Stack.Screen options={{ animation: 'slide_from_right' }} name={Router.CartScreen} component={CartScreen} />
        <Stack.Screen name={Router.SearchScreen} component={SearchScreen} />
        <Stack.Screen name={Router.ProductDetailScreen} component={ProductDetail} />
        <Stack.Screen name={Router.ShippingAddressScreen} component={ShippingAddressScreen} />
        <Stack.Screen name={Router.CheckOutScreen} component={CheckoutScreen} />
        <Stack.Screen name={Router.Login} component={LoginScreen} />
        <Stack.Screen name={Router.Register} component={RegisterScreen} />
        <Stack.Screen name={Router.CheckoutSuccess} component={CheckoutSuccess} />
        <Stack.Screen options={{ animation: 'slide_from_right' }} name={Router.ProductByCategory} component={ProductByCategory} />
        <Stack.Screen options={{ animation: 'slide_from_right' }} name={Router.Explore} component={CategoryScreen} />
        <Stack.Screen options={{ animation: 'slide_from_right' }} name={Router.OrderScreen} component={OrderScreen} />
        <Stack.Screen options={{ animation: 'slide_from_right' }} name={Router.OrderDetail} component={OrderDetail} />
        <Stack.Screen options={{ animation: 'slide_from_right' }} name={Router.ChangePassword} component={ChangePassword} />





      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
