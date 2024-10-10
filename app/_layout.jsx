import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


const _layout = () => {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name='home' options={{
                title:"Home",
                tabBarIcon: () => <Feather name="home" size={24} />
            }} />

            <Tabs.Screen name='cards' options={{
                title:"Card",
                tabBarIcon: () => <AntDesign name="creditcard" size={24} />
            }} />

            <Tabs.Screen name='transactions' options={{
                title:"Transaction",
                tabBarIcon: () => <FontAwesome5 name="poll" size={24} />
            }} />

            <Tabs.Screen name='profiles' options={{
                title:"Profile",
                tabBarIcon: () => <FontAwesome5 name="user-alt" size={24} />
            }} />
        </Tabs>
    )
}

export default _layout