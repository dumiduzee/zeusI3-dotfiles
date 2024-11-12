import { StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router'

const settings = () => {
  return (
    <Stack>
        <Stack.Screen name='settings'/>
    </Stack>
  )
}

export default settings

const styles = StyleSheet.create({})