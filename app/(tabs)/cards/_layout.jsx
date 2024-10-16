import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo';

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{
        title: "Card Details",
        headerTitleStyle:{
          fontWeight:'900'
        },
        headerTitleAlign: 'center',
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
        headerLeft: () => <TouchableOpacity className="w-10 h-10 rounded-full text-gray-300 justify-center items-center border border-gray-200">
          <Entypo name="grid" size={24} className="text-gray-200" />
        </TouchableOpacity>
      }} />
    </Stack>
  )
}

export default _layout