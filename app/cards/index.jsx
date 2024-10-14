import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { Entypo } from '@expo/vector-icons';

export default function Card() {
  const [activeTab, updateActiveTab] = useState("daily")
  return (
    <View className='flex-1 gap-8 bg-white p-4 '>
      {/* Top buttons */}
      <View className="gap-4 flex-row">
        <TouchableOpacity className="flex-grow gap-x-3 flex-row items-center justify-center bg-blue-100 rounded-xl border border-blue-600">
          <Entypo name="plus" size={30} color="blue" />
          <Text className="uppercase text-blue-800 text-2xl">add new card</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-12 h-12 justify-center items-center border border-gray-200 rounded-full">
          <AntDesign name="questioncircleo" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity className="w-12 h-12 justify-center items-center border border-gray-200 rounded-full">
          <AntDesign name="notification" size={24} color="black" />
        </TouchableOpacity>
      </View>


      <View className="h-64 bg-blue-700 rounded-2xl"></View>
      <View>
        <View className="flex-row p-2 bg-gray-100 rounded-3xl">
          <TouchableOpacity className={`w-1/2 absolute bg-white h-full m-2 transition-all duration-700 rounded-2xl ${activeTab !=="daily" && "right-0"}`}></TouchableOpacity>
          <TouchableOpacity onPress={() => updateActiveTab("daily")} className="w-1/2"><Text className={`uppercase py-3 text-center text-xl ${activeTab === "daily" ? "text-blue-600" : "text-gray-400" }`}>Daily</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => updateActiveTab("monthly")} className="w-1/2"><Text className={`uppercase py-3 text-center text-xl ${activeTab === "monthly" ? "text-blue-600" : "text-gray-400" }`}>Monthly</Text></TouchableOpacity>
        </View>
        <View></View>
      </View>
    </View>
  )
}