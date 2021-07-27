import * as React from 'react';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const MainStack = createStackNavigator();

/**
 * Screens
 */
import { MainScreen } from './src/screens/MainScreen';
import { MultiSelectionScreen } from './src/screens/MultiSelectionScreen';

/**
 * Main App with Navigator
 */
export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="MainScreen" headerMode="screen">
        <MainStack.Screen name="MainScreen" component={MainScreen} />
        <MainStack.Screen
          name="MultiSelectionScreen"
          component={MultiSelectionScreen}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
