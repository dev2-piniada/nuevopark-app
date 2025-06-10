import './global.css';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from "@expo/vector-icons";
import Home from "./app/home";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName: string;

                        switch (route.name) {
                            case 'Home':
                                iconName = 'home-outline';
                                break;
                            case 'Notification':
                                iconName = 'notifications-outline';
                                break;
                            case 'My Parks':
                                iconName = 'car-outline';
                                break;
                            case 'Sign In':
                                iconName = 'person-outline';
                                break;
                            default:
                                iconName = 'ellipse-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#1D4ED8',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false,
                })}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Notification" component={Home} />
                <Tab.Screen name="My Parks" component={Home} />
                <Tab.Screen name="Sign In" component={Home} />
            </Tab.Navigator>
        </NavigationContainer>
    </>
  );
}
