import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';
import CartScreen from '../screens/CartScreen';
import ProductListing from '../screens/ProductListing';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-home` : 'md-home'}
    />
  )
};

HomeStack.path = '';

const ProductListingStack = createStackNavigator(
  {
    Home: ProductListing
  },
  config
);

ProductListingStack.navigationOptions = {
  tabBarLabel: 'Products',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-pricetags` : 'md-pricetags'}
    />
  )
};

ProductListingStack.path = '';

const CartStack = createStackNavigator(
  {
    Home: CartScreen
  },
  config
);

CartStack.navigationOptions = {
  tabBarLabel: 'Cart',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-cart` : 'md-cart'}
    />
  )
};

CartStack.path = '';

const AccountStack = createStackNavigator(
  {
    Home: AccountScreen
  },
  config
);

AccountStack.navigationOptions = {
  tabBarLabel: 'Account',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-person` : 'md-person'}
    />
  )
};

AccountStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ProductListingStack,
  CartStack,
  AccountStack
});

tabNavigator.path = '';

export default tabNavigator;
