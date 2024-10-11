import { View,Image, Text } from 'react-native'
import React from 'react'

export default function Profile() {
  return (
    <View>
       <Image source={{uri: 'https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}} style={{width:50, height:50, alignItems:'center', justifyContent:'center'}}/>
    </View>
  )
}