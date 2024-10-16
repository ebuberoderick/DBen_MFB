import { View, Image, Text, FlatList } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "@expo/vector-icons/AntDesign";
import Fontisto from "@expo/vector-icons/Fontisto";
import Feather from "@expo/vector-icons/Feather";

export default function Profile() {
  profile_code = [
    {
      name: "QR Code ",
      icon: <AntDesign name="qrcode" size={24} color="#4c00b0" />,
      color: "#4c00b0",
    },
    {
      name: "Email       ",
      icon: <Fontisto name="email" size={24} color="#169496" />,
      color: "#169496",
    },
    {
      name: "Password",
      icon: (
        <Feather
          name="lock"
          size={24}
          color="orange"
        // backgroundColor="orange"
        // width={35}
        // height={35}
        // borderRadius={10}
        />
      ),
      color: "orange",
    },
  ];

  return (
    <View>
      <View
        style={{
          width: 200,
          height: 200,
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
        }}>
        <View>
          <Image
            source={{
              uri: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={{
              width: 80,
              height: 80,
              borderRadius: 30,
            }}
          />
        </View>

        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontWeight: "800", fontSize: 20 }}>
            Jimmy Sullivan
          </Text>
          <Text style={{ fontWeight: "500", fontSize: 12, color: "gray" }}>
            @Jimmy28
          </Text>
        </View>
      </View>


      <View
        style={{
          backgroundColor: "#4c00b0",
          height: 220,
          width: "93%",
          alignSelf:"center",
          justifyContent:"space-between",
          borderRadius: 20,
          paddingBottom:20
        }}>
        <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 20, paddingVertical: 10 }}>
          <View className="flex-grow">
            <Text style={{ color: "white" }}>****6806</Text>
          </View>
          <Image
            source={{
              uri: "https://img.icons8.com/?size=160&id=pRrkw6sJDhF_&format=png",
            }}
            style={{ height: 50, width: 50 }}
          />
        </View>
        <View style={{ flexDirection: "row", paddingHorizontal:20, paddingVertical: 10 }}>
          <View style={{ marginLeft: 15, flexGrow:1, marginTop: 10 }}>
            <Text style={{ color: "white", fontSize: 11, fontFamily: '400' }}>Balance</Text>
            <Text style={{ color: "#fff", fontSize: 20, fontFamily: '900' }}>
              ${Number(4069746).toLocaleString("en-US")}
            </Text>
          </View>

          <Image
            source={{
              uri: "https://www.pngplay.com/wp-content/uploads/12/Visa-Card-Logo-PNG-Photo-Clip-Art-Image.png",
            }}
            style={{ height: 40, width: 150, marginTop: 10 }}
          />
        </View>
      </View>

      <FlatList
        data={profile_code}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              paddingVertical: 20,
              backgroundColor: 'white',
              marginTop: 9,
              gap: 7,
              borderRadius: 10,
              width: "93%",
              marginLeft: 14,
              alignItems: "center"
            }}>
            <View style={{ flexDirection: "row", flexGrow: 1 }}>
              <View style={{ backgroundColor: item.color, height: 40, width: 40, borderRadius: 10, justifyContent: 'center', alignItems: 'center', opacity: 0.3 }}>{item.icon}</View>
              <Text style={{ marginLeft: 5, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>{item.name}</Text>
            </View>
            <AntDesign name="right" size={24} color="black" />
          </View>
        )}
      />
    </View>
  );
}
