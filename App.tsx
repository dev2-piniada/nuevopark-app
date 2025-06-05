import './global.css';
import {View, Text} from "react-native";

export default function App() {
  return (
    <>
        <View className="flex-1 items-center justify-center bg-red-100">
            <Text className="text-blue-600 font-bold text-xl">Hello Tailwind</Text>
        </View>
    </>
  );
}
