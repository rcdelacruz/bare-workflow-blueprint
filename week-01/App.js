/**
 * Personal Profile App - Week 1 Project
 * A showcase React Native bare workflow application
 * 
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StatusBar,
  Platform,
} from 'react-native';

import ProfileScreen from './src/components/ProfileScreen';

const App = () => {
  return (
    <>
      <StatusBar 
        barStyle="dark-content" 
        backgroundColor="#f8f9fa"
        translucent={Platform.OS === 'android'}
      />
      <ProfileScreen />
    </>
  );
};

export default App;