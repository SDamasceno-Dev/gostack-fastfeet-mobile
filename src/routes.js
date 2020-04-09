/**
 * @author: SDamasceno.Dev@gmail.com
 * @description: Routes file of the App
 */

import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';
import SignIn from './pages/SignIn';

import Entregas from './pages/Entregas';
import Profile from './pages/Profile';

import DeliveryDetail from './pages/DeliveryDetail';
import DeliveryProblem from './pages/DeliveryProblem';
import DeliveryProblemView from './pages/DeliveryProblemView';
import DeliveryConfirm from './pages/DeliveryConfirm';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
        }),
        App: createBottomTabNavigator(
          {
            New: {
              screen: createStackNavigator({
                Entregas,
                DeliveryDetail,
                DeliveryProblem,
                DeliveryProblemView,
                DeliveryConfirm,
              }),
              navigationOptions: {
                tabBarLabel: 'Entregas',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="reorder" size={25} color={tintColor} />
                ),
              },
            },
            Profile,
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#7D40E7',
              inactiveTintColor: '#999999',
              style: {
                backgroundColor: '#fff',
              },
            },
          }
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      }
    )
  );
