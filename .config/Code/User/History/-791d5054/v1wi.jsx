import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View  className='bg-red' >
      <Text>Home Page</Text>
      <StatusBar style="auto" />
    </View>
  );
}

