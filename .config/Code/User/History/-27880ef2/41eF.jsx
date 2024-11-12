import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import { styled } from 'nativewind';



export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-blue">
      <Text className='text-3xl'>Dumidu!</Text>
      <StatusBar style="auto" />
      <Link href="/profile" >Go to Profile page</Link>
    </View>
  );
}




