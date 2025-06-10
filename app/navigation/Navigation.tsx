import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from "../home"; // or '@expo/vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    let iconName = 'home';

                    if (route.name === 'Home') {
                        iconName = 'home-outline';
                    } else if (route.name === 'Notification') {
                        iconName = 'notifications-outline';
                    } else if (route.name === 'My Parks') {
                        iconName = 'car-sport-outline';
                    } else if (route.name === 'Sign In') {
                        iconName = 'person-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                },
                tabBarActiveTintColor: '#1D4ED8',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Notification" component={HomeScreen} />
            <Tab.Screen name="My Parks" component={HomeScreen} />
            <Tab.Screen name="Sign In" component={HomeScreen} />
        </Tab.Navigator>
    );
}