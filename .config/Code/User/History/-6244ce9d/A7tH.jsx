import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import "../global.css";

const RootLayout = () => {
  return (
   <Stack >
    <Stack.Screen name='index' options={{headerShown:false}}>
    <Stack.Screen name="register" options={{ headerShown: false }} />
    <Stack.Screen name="dashboard" options={{ headerShown: false }} />
    </Stack.Screen>
   </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({})