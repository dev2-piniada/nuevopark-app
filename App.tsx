import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './app/navigation/Navigation';
import { Provider } from 'react-redux';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </Provider>
  );
}
