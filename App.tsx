import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from "./app/navigation/Navigation";

export default function App() {
    return (
        <NavigationContainer>
            <BottomTabs />
        </NavigationContainer>
    );
}