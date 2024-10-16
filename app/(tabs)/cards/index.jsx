import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Entypo } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function Card() {
  const sales = [
    {
      name: "Food",
      icon: <Ionicons name="fast-food-sharp" size={24} color="#800020" />,
      amount: "         $235",
      id: 1,
    },

    {
      name: "Shopping",
      icon: <MaterialIcons name="shopping-cart" size={24} color="#FFC300" />,
      amount: "$250",
      id: 2,
    },

    {
      name: "Taxi",
      icon: <FontAwesome6 name="taxi" size={24} color="#DAF6A6" />,
      amount: "          $342",
      id: 3,
    },
  ];

  const [activeTab, updateActiveTab] = useState("daily");
  return (
    <View className="flex-1 gap-6 bg-white p-2 ">
      {/* Top buttons */}
      <View className="gap-2 flex-row">
        <TouchableOpacity className="flex-grow gap-x-3 flex-row items-center justify-center bg-blue-200 rounded-xl border border-blue-600">
          <Entypo name="plus" size={20} color="blue" />
          <Text className="uppercase text-blue-900 text-1xl">add new card</Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-10 h-10 justify-center items-center border border-gray-200 rounded-full">
          <AntDesign name="questioncircleo" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity className="w-10 h-10 justify-center items-center border border-gray-200 rounded-full">
          <AntDesign name="notification" size={20} color="black" />
        </TouchableOpacity>
      </View>

      <View className="h-56 bg-blue-700 rounded-3xl">
        <View style={{ flexDirection: "row", paddingRight:16 }}>
          <View className="flex-grow">
            <Image
              source={{
                uri: "https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_circles_92px_2x.png",
              }}
              className={"h-9 w-11 ml-4 mt-4"}
            />
          </View>

          <Text
            style={{
              color: "#fff",
              fontWeight: "700",
              fontSize: 25,
              marginTop: 19,
              marginLeft: 120,
            }}>
            ${Number(4069746).toLocaleString("en-US")}
          </Text>
        </View>
        <View>
          <Text style={{ color: '#fff', fontSize: 14, fontWeight: '400', paddingVertical: 5, marginLeft: 20, marginTop: 20 }}>Card Number</Text>
          <Text style={{ color: '#fff', fontSize: 20, fontWeight: '700', marginLeft: 20 }}>3829 4820 4629 5025</Text>
        </View>
        <View style={{ flexDirection: 'row', gap: 20 }}>
          <View>
            <Text style={{ color: '#fff', fontSize: 12, fontWeight: '300', paddingVertical: 5, marginLeft: 20, marginTop: 20 }}>Account Name</Text>
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: '500', marginLeft: 20 }}>Anita Rose</Text>
          </View>
          <View style={{ marginLeft: 40 }}>
            <Text style={{ color: '#fff', fontSize: 12, fontWeight: '300', paddingVertical: 5, marginLeft: 20, marginTop: 20 }}>CCS</Text>
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: '500', marginLeft: 20 }}>05/22</Text>
          </View>
        </View>
      </View>
      <View className="gap-y-2">
        <View className="flex-row p-2 bg-gray-100 rounded-3xl">
          <TouchableOpacity
            className={`w-1/2 absolute bg-white h-full m-2 transition-all duration-700 rounded-2xl ${activeTab !== "daily" && "right-0"
              }`}></TouchableOpacity>
          <TouchableOpacity
            onPress={() => updateActiveTab("daily")}
            className="w-1/2">
            <Text
              className={`uppercase py-3 text-center text-x ${activeTab === "daily" ? "text-blue-400" : "text-gray-400"
                }`}>
              Daily
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => updateActiveTab("monthly")}
            className="w-1/2">
            <Text
              className={`uppercase py-3 text-center text-x ${activeTab === "monthly" ? "text-blue-400" : "text-gray-400"
                }`}>
              Monthly
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={sales}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                marginLeft: 10,
                paddingVertical: 10,
              }}>
              <View
                style={{
                  backgroundColor: "#FAF9F6",
                  height: 45,
                  width: 45,
                  borderRadius: 99,
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                {item.icon}
              </View>
              <Text style={{ marginLeft: 20, marginTop: 10 }}>{item.name}</Text>
              <View style={{ marginLeft: 160, marginTop: 10 }}>
                <Text>{item.amount}</Text>
              </View>
            </View>
          )}
        />

        {/* <View
          className={`h-96 ${
            activeTab === "daily" ? "bg-green-200" : "bg-blue-200"
          }`}></View> */}
      </View>
    </View>
  );
}
