import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    router.push('/dashboard');
  };

  return (
    <View style={styles.container}>
      {/* Blue Wave Background */}
      <Image source={require('../assets/images/bluewave.png')} style={styles.backgroundImage} />

      {/* Avatar Image */}
      <Image source={require('../assets/images/avatar.png')} style={styles.avatar} />

      {/* Sign In Text */}
      <Text style={styles.title}>Sign In</Text>

      {/* User ID Input */}
      <TextInput
        style={styles.input}
        placeholder="User id"
        value={userId}
        onChangeText={setUserId}
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Register Link */}
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Not a member?</Text>
        <TouchableOpacity onPress={() => router.push('/register')}>
          <Text style={styles.registerLink}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  backgroundImage: {
    width: '100%',
    height: 200,
    position: 'absolute',
    top: 0,
    resizeMode: 'cover', // Ensures the background covers the area nicely
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 120, // Moves avatar down from the top
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 30,
  },
  input: {
    width: '85%',
    padding: 15,
    borderRadius: 25,
    backgroundColor: '#E6F7F8',
    marginBottom: 15,
    textAlign: 'center',
  },
  forgotPassword: {
    color: 'gray',
    fontSize: 14,
    marginBottom: 20,
  },
  button: {
    width: '85%',
    padding: 15,
    backgroundColor: '#333',
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  registerContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  registerText: {
    color: 'gray',
  },
  registerLink: {
    color: '#1E90FF',
    marginLeft: 5,
  },
});

export default Login;
