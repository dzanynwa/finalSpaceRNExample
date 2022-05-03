/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NativeBaseProvider} from 'native-base';
import React from 'react';
import Router from './src/navigation';
import {theme} from './src/theme';

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <Router />
    </NativeBaseProvider>
  );
};

export default App;
