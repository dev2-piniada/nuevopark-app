import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
    return (
        <Tabs screenOptions={{ tabBarStyle: { height: 60 } }}>
            <Tabs.Screen name="home" options={{
                tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
                title: 'Home',
            }} />
            <Tabs.Screen name="notifications" options={{
                tabBarIcon: ({ color }) => <Ionicons name="notifications-outline" size={24} color={color} />,
                title: 'Notifications',
            }} />
            <Tabs.Screen name="my-parks" options={{
                tabBarIcon: ({ color }) => <Ionicons name="car" size={24} color={color} />,
                title: 'My Parks',
            }} />
            <Tabs.Screen name="sign-in" options={{
                tabBarIcon: ({ color }) => <Ionicons name="person-outline" size={24} color={color} />,
                title: 'Sign-in',
            }} />
        </Tabs>
    );
}