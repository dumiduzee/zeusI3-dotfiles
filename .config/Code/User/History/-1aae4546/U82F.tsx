import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput placeholder="User id" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />
      <Text style={styles.forgotPassword}>Forgot password?</Text>
      <Button title="Login" onPress={() => router.push({ pathname: "index" })} />
      <Text onPress={() => router.push({ pathname: "register" })} style={styles.register}>
        Not a member? Register
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  forgotPassword: {
    color: "#007bff",
    marginBottom: 20,
    textAlign: "right",
  },
  register: {
    marginTop: 20,
    color: "#007bff",
    textAlign: "center",
  },
});
