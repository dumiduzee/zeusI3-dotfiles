import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = () => {
    // You can add registration logic here
    router.push('/'); // Navigate back to the login screen
  };

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-3xl font-bold mb-8 text-blue-500">Register</Text>

      <TextInput
        className="w-80 p-4 border border-gray-300 rounded mb-4"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        className="w-80 p-4 border border-gray-300 rounded mb-4"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        className="w-80 p-4 bg-blue-500 rounded"
        onPress={handleRegister}
      >
        <Text className="text-center text-white font-bold">Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/')} className="mt-4">
        <Text className="text-blue-500">Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
