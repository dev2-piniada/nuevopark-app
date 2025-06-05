// app/(tabs)/home.tsx
import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import HomeTile from '../../components/HomeTile';

const Home: React.FC = () => {
    return (
        <View className="flex-1 bg-gray-100 p-4 pt-12">
            <Text className="text-center text-sm bg-blue-100 text-blue-800 py-2 px-4 rounded-full mb-4">
                Register for Charge parking & save
            </Text>

            <View className="flex-row flex-wrap justify-between">
                <HomeTile icon={require('../../assets/Icon_Book.svg')} title="Enter" subtitle="Enter & exit a carpark" />
                <HomeTile icon={require('../../assets/Icon_Book.svg')} title="Book" subtitle="Book parking in advance" />
                <HomeTile icon={require('../../assets/Icon_Book.svg')} title="Pay" subtitle="Pay using the App" />
                <HomeTile icon={require('../../assets/Icon_Book.svg')} title="Validate" subtitle="Validate a parking ticket" />
                <HomeTile icon={require('../../assets/Icon_Book.svg')} title="QuickPark" subtitle="Repeat a previous park" />
                <HomeTile icon={require('../../assets/Icon_Book.svg')} title="Park" subtitle="Park with the App" />
            </View>

            <View className="mt-6 items-center">
                <Text className="text-gray-600 text-sm">Install this App to access all its features</Text>
                <TouchableOpacity className="mt-2 px-4 py-2 bg-blue-500 rounded-full">
                    <Text className="text-white">Download App</Text>
                </TouchableOpacity>

                <View className="flex-row space-x-4 mt-4">
                    <TouchableOpacity>
                        <Text className="text-blue-600 underline">Provide your feedback</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text className="text-blue-600 underline">View Terms & Conditions</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Home;