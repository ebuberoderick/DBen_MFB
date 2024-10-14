import { View, Text, Image, TextInput, FlatList, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Octicons from "@expo/vector-icons/Octicons";
import Entypo from "@expo/vector-icons/Entypo";
import { LinearGradient } from "expo-linear-gradient";

const index = () => {
  const [showAccountDetailsModal, updateAccountDetailsModal] = useState(false)
  const listOfItem = [
    {
      icon: <Entypo name="paper-plane" size={24} color="red" />,
      name: "Send Money",
      description: "To acc to acc",
      id: 1,
    },

    {
      icon: <FontAwesome name="thumbs-up" size={24} color="green" />,
      name: "Recieve Money",
      description: "Manage Account",
      id: 2,
    },

    {
      icon: <FontAwesome name="credit-card" size={24} color="purple" />,
      name: "Mobile Prepaid",
      description: "Recharge Mobile",
      id: 3,
    },

    {
      icon: <FontAwesome name="bank" size={24} color="yellow" />,
      name: "Bank to Bank",
      description: "Send Money",
      id: 4,
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        gap: 33,
        paddingTop: 50,
        paddingHorizontal: 20,
      }}>


      <Modal animationType="slide" visible={showAccountDetailsModal}>
        <View className="flex-1 items-center justify-center">
          <TouchableOpacity onPress={() => updateAccountDetailsModal(false)}><Text >Close</Text></TouchableOpacity>
        </View>
      </Modal>


      {/* hero section */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            flexGrow: 1,
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}>
          <View
            style={{
              width: 50,
              overflow: "hidden",
              height: 50,
              borderRadius: 99,
            }}>
            <Image
              height={50}
              width={50}
              source={{
                uri: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
            />
          </View>
          <View>
            <Text style={{ fontSize: 13 }}>Hello Juan</Text>
            <Text style={{ fontWeight: "900", fontSize: 18 }}>
              Welcome Back!
            </Text>
          </View>
        </View>
        <View
          style={{
            width: 50,
            height: 50,
            borderWidth: 1,
            borderRadius: 99,
            borderColor: "#E3E3E3",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <FontAwesome name="bell" size={30} color="gray" />
        </View>
      </View>

      {/* search section */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#f9f7f7",
          paddingHorizontal: 16,
          borderRadius: 16,
        }}>
        <Octicons name="search" size={24} color="gray" />
        <TextInput
          style={{ flexGrow: 1, paddingVertical: 14, paddingHorizontal: 5 }}
          placeholder="Search"
        />
      </View>

      {/* balance section */}

      <LinearGradient
        end={[1, 0.7]}
        colors={["#6186f8", "#10329b"]}
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "blue",
          paddingVertical: 70,
          paddingHorizontal: 30,
          borderRadius: 20,
        }}>
        <View style={{ flexGrow: 1, gap: 4 }}>
          <Text style={{ color: "#fff" }}>Total Balance</Text>
          <Text style={{ color: "#fff", fontWeight: "800", fontSize: 35 }}>
            ${Number(4069746).toLocaleString("en-US")}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => updateAccountDetailsModal(true)}
          style={{
            width: 50,
            borderRadius: 99,
            height: 50,
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Entypo name="plus" size={30} color="blue" />
        </TouchableOpacity>
      </LinearGradient>

      {/* home cards */}

      <FlatList
        numColumns={2}
        data={listOfItem}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ width: "49%", padding: 5 }}>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 20,
                gap: 7,
                borderColor: "#f1f2f7",
                paddingVertical: 20,
                paddingHorizontal: 25,
                shadowOffset: { width: 30, height: 30 },
                shadowColor: "#e0dede",
                shadowOpacity: 0.1,
                elevation: 1,

              }}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "#E3E3E3",
                  width: 50,
                  height: 50,
                  borderRadius: 99,
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                {item.icon}
              </View>
              <Text style={{ fontWeight: "800", fontSize: 20 }}>
                {item.name}
              </Text>
              <Text style={{ color: "gray", fontSize: 10 }}>
                {item.description}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default index;
