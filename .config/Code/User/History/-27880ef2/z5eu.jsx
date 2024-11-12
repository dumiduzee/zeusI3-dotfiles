import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import "../global.css";


export default function App() {
  return (
    <View className="bg-red">
      <Text>Dumidu!</Text>
      <StatusBar style="auto" />
      <Link href="/profile" >Go to Profile page</Link>
    </View>
  );
}




