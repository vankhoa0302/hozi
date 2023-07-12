/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
/* eslint-disable */
import { Theme } from '@common/theme';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import AppNavigator from '@navigators';
import React, { useEffect } from 'react';
import {
  StatusBar,
  View,
} from 'react-native';
import ShippingAddressScreen from '@screens/shipping address';
import CheckoutScreen from '@screens/checkout';
import SplashScreen from 'react-native-splash-screen';
import CheckoutSuccess from '@screens/checkout/success';
import { NavigationContainer } from '@react-navigation/native';
import LoadingOverlay from '@screens/auth/LoadingOverlay';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor={Theme.COLORS.bg} barStyle='dark-content' />
        <AppNavigator />
        <LoadingOverlay />
        {/* <CheckoutScreen /> */}
        {/* <NavigationContainer>

          <CheckoutSuccess />
        </NavigationContainer> */}
      </View>
    </Provider>

  );
};


export default App;
