import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    router.push('/dashboard'); // Navigate to the dashboard
  };

  return (
    <View className="flex-1 justify-center items-center bg-white px-6">
      {/* Header Text */}
      <Text className="text-2xl font-bold text-black mb-6">Login Screen</Text>

      {/* Container for Form */}
      <View className="bg-white w-full max-w-md p-6 rounded-lg items-center">
        {/* Avatar Image */}
        <Image
          source={{ uri: 'https://example.com/avatar.png' }} // Replace with your image URL
          style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 20 }}
        />

        {/* Sign In Text */}
        <Text className="text-2xl font-semibold text-gray-800 mb-6">Sign In</Text>

        {/* User ID Input */}
        <TextInput
          className="w-full p-4 border border-gray-300 rounded-full mb-4 bg-gray-100"
          placeholder="User id"
          value={userId}
          onChangeText={setUserId}
          textAlign="left"
        />

        {/* Password Input */}
        <TextInput
          className="w-full p-4 border border-gray-300 rounded-full mb-2 bg-gray-100"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          textAlign="center"
        />

        {/* Forgot Password */}
        <TouchableOpacity className="self-end mb-6">
          <Text className="text-gray-500 text-sm">Forgot password?</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity
          className="w-full p-4 bg-black rounded-full mb-6"
          onPress={handleLogin}
        >
          <Text className="text-center text-white font-bold">Login</Text>
        </TouchableOpacity>

        {/* Register Link */}
        <View className="flex-row justify-center">
          <Text className="text-gray-600">Not a member?</Text>
          <TouchableOpacity onPress={() => router.push('/register')}>
            <Text className="text-blue-500 ml-1">Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
