import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const Dashboard = () => {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/'); // Navigate back to the login screen
  };

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-3xl font-bold mb-8 text-blue-500">Dashboard</Text>

      <Text className="text-xl text-gray-700 mb-4">Welcome to the Dashboard!</Text>

      <TouchableOpacity
        className="w-80 p-4 bg-blue-500 rounded"
        onPress={handleLogout}
      >
        <Text className="text-center text-white font-bold">Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
