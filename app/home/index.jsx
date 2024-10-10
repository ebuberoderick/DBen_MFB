import { View, Text, Image, TextInput, FlatList } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Octicons from '@expo/vector-icons/Octicons';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import { LinearGradient } from 'expo-linear-gradient';

const index = () => {

    const listOfItem = [
        {
            icon: "",
            name: "",
            description:"",
            id:1
        },

        {
            icon: "",
            name: "",
            description: "",
            id:2
        },

        {
            icon: "",
            name: "",
            description: "",
            id:3
        },

        {
            icon: "",
            name: "",
            description: "",
            id:4
        }
    ];

    return (
        <View style={{ flex: 1, backgroundColor: "#fff", gap: 33, paddingTop: 50, paddingHorizontal: 20 }}>
            {/* hero section */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flexGrow: 1, flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                    <View style={{ width: 50, overflow: 'hidden', height: 50, borderRadius: 99 }}>
                        <Image height={50} width={50} source={{ uri: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 13 }}>Hello Juan</Text>
                        <Text style={{ fontWeight: '900', fontSize: 18 }}>Welcome Back!</Text>
                    </View>
                </View>
                <View style={{ width: 50, height: 50, borderWidth: 1, borderRadius: 99, borderColor: "#E3E3E3", justifyContent: 'center', alignItems: 'center' }}>
                    <FontAwesome name="bell" size={30} color="gray" />
                </View>
            </View>

            {/* search section */}
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "#f9f7f7", paddingHorizontal: 16, borderRadius: 16 }}>
                <Octicons name="search" size={24} color="gray" />
                <TextInput
                    style={{ flexGrow: 1, paddingVertical: 14, paddingHorizontal: 5 }}
                    placeholder="Search"

                />
            </View>

            {/* balance section */}

            <LinearGradient end={[1, .7]} colors={["#6186f8", "#10329b"]} style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "blue", paddingVertical: 50, paddingHorizontal: 30, borderRadius: 20 }}>
                {/* <LinearGradient /> */}
                <View style={{ flexGrow: 1, gap: 4 }}>
                    <Text style={{ color: "#fff" }}>Total Balance</Text>
                    <Text style={{ color: "#fff", fontWeight: '800', fontSize: 35 }}>${Number(4069746).toLocaleString("en-US")}</Text>
                </View>
                <View style={{ width: 50, borderRadius: 99, height: 50, backgroundColor: "#fff", justifyContent: 'center', alignItems: 'center' }}>
                    <Entypo name="plus" size={30} color="blue" />
                </View>
            </LinearGradient>


            {/* home cards */}

            <FlatList
                numColumns={2}
                data={listOfItem}
                scrollEnabled={false}
                gap={4}
                style={{}}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={{ width: "49%", padding: 15 }}>
                        <View style={{ borderWidth: 1, borderRadius: 20, gap: 7, borderColor: "#f1f2f7", paddingVertical: 40, paddingHorizontal: 25 }}>
                            <View style={{ borderWidth: 1, borderColor: "#E3E3E3", width: 50, height: 50, borderRadius: 99, justifyContent: 'center', alignItems: 'center' }}>
                                <FontAwesome name="paper-plane" size={24} color="red" />
                            </View>
                            <Text style={{ fontWeight: '800', fontSize: 20 }}>Send Money</Text>
                            <Text style={{ color: "gray", fontSize: 10 }}>send to other account</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

export default index