/**
 * @author: SDamasceno.Dev@gmail.com
 * @description: Entry file of the App
 */

import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import './config/ReactotronConfig';

import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
      <Routes />
    </>
  );
}
