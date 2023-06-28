/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from './tab-bar-icon';
import HomeScreen from '@screens/home';
import WishListScreen from '@screens/wishlist';
import ProfileScreen from '@screens/profile';
import CategoryScreen from '@screens/category';
import { useSelector } from 'react-redux';
import HomeAuth from '@screens/auth/HomeAuth';

const Tab = createBottomTabNavigator();

const BottomTab = () => {

  const isLogin = useSelector(state => state.auth.isLogin);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 74,
          position: 'absolute',
          left: 16,
          right: 16,
          bottom: 16,
          borderRadius: 50,

        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name={'Home'} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name={'Category'} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="WishList"
        component={WishListScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name={'Wish'} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={isLogin ? ProfileScreen : HomeAuth}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name={'Profile'} focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
