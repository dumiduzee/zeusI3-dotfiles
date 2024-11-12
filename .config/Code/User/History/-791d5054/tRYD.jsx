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
      {/* Avatar Image */}
      <Image
        source={{ uri: 'https://example.com/avatar.png' }} // Replace with your image URL
        style={{ width: 80, height: 80, borderRadius: 40, marginBottom: 20 }}
      />

      {/* Sign In Text */}
      <Text className="text-3xl font-bold mb-8 text-gray-800">Sign In</Text>

      {/* User ID Input */}
      <TextInput
        className="w-full p-4 border border-gray-300 rounded-full mb-4 bg-gray-100 text-center"
        placeholder="User id"
        value={userId}
        onChangeText={setUserId}
      />

      {/* Password Input */}
      <TextInput
        className="w-full p-4 border border-gray-300 rounded-full mb-2 bg-gray-100 text-center"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text className="text-gray-500 text-sm mb-6">Forgot password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity
        className="w-full p-4 bg-gray-800 rounded-full mb-4"
        onPress={handleLogin}
      >
        <Text className="text-center text-white font-bold">Login</Text>
      </TouchableOpacity>

      {/* Register Link */}
      <View className="flex-row mt-4">
        <Text className="text-gray-600">Not a member?</Text>
        <TouchableOpacity onPress={() => router.push('/register')}>
          <Text className="text-blue-500 ml-2">Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
