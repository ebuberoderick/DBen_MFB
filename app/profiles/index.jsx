import { View, Image, Text, FlatList } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
import Feather from '@expo/vector-icons/Feather';

export default function Profile() {
  profile_code = [
    {
      name: "QR Code",
      icon: <AntDesign name="qrcode" size={24} color="black" />,
      color: "",
    },
    {
      name: "Email",
      icon: <Fontisto name="email" size={24} color="black" />,
      color: "",
    },
    {
      name: "Password",
      icon: <Feather name="lock" size={24} color="black" />,
      color: "",
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
          height: 150,
          width: 320,
          alignSelf: "center",
          borderRadius: 20,
        }}>
        <View style={{ flexDirection: "row", paddingVertical: 10 }}>
          <Text style={{ color: "white",marginLeft:20 }}>****6806</Text>
          <Image
            source={{
              uri: "https://img.icons8.com/?size=160&id=pRrkw6sJDhF_&format=png",
            }}
            style={{ height: 50, width: 50, marginLeft:170}}
          />
        </View>
        <View>
        
        <Image
            source={{
              uri: "https://static-00.iconduck.com/assets.00/verve-icon-2048x709-8iunu5yi.png",
            }}
            height={70}
          width={100}
          />
        </View>
      </View>

      <FlatList 
data={profile_code}
renderItem={({item}) =>(
<View style={{flexDirection:'row', paddingHorizontal:20, paddingVertical:20}}>
<View style={{flexDirection:'row'}}>
{item.icon}
<Text>{item.name}</Text>
</View>
  <AntDesign name="right" size={24} color="black" />
</View>
)}

/> 

    </View>
  );
}
