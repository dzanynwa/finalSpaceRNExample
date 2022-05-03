import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Details, Home} from '../pages';

export type RootStackParamList = {
  Home: undefined;
  Details: {
    episode: {
      id: number;
      name: string;
      air_date: string;
      director: string;
      writer: string;
      characters: string[];
      img_url: string;
    };
  };
};
const Stack = createNativeStackNavigator<RootStackParamList>();
const Router: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default Router;
