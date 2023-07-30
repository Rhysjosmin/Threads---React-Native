import {react} from 'react'
import { React } from "react";
import { View, Text, Image } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import { PaperProvider, MD3Colors, IconButton } from "react-native-paper";
import CommenterPics from "../CommenterPics";
import PostButtons from '../PostButtons';

function PostImage(props){
    return (
        <PaperProvider>
          <TailwindProvider>
            <View className='mt-2'
              style={{
                padding: 4,
                width: 350,
                flex: 0,
                flexDirection: "row",
                gap: -5,
                marginBottom: 8,
                paddingBottom: 20,
                borderBottomColor: "#EEEEEE",
                borderBottomWidth: 1,
                left:-10
              }}
            >
              <View className="p-1 flex-1 items-center">
                <Image
                  style={{
                    width: 38,
                    height: 38,
                    marginBottom: 10,
                    borderRadius: 20,
                  }}
                  source={{
                    uri: "https://rhysjosmin.netlify.app/Media/Images/Rhys-V2.jpg",
                  }}
                />
                <View className="bg-gray-300 w-[2px] h-[81%] mb-2" />
                <CommenterPics/>
              </View>
              <View>
                <View
                  style={{
                    flex: 0,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: -18,
                  }}
                >
                  <Text style={{ fontWeight: "600", fontSize: 16 }}>
                    {props.name}
                  </Text>
                  <View
                  className='flex flex-row items-start gap-2'
                  
                  >
                    <Text
                      style={{ fontWeight: "400", color: "#aaa", fontSize: 15 }}
                    >
                      2m
                    </Text>
                    <IconButton
                    icon="dots-horizontal"
                    className='p-1 top-[-7px]'
                    size={22}
                    onPress={() => console.log("Pressed")}
                  />
                  </View>
                </View>
                <Text style={{ fontSize: 14, marginBottom: 8,lineHeight:24 }}>{props.text}</Text>
                <Image
                  style={{ width: 280, height: 340, borderRadius: 10 }}
                  source={{ uri: props.Image }}
                />
    
              <PostButtons/>
                <View style={{ marginTop: 6 }}>
                  <Text className="text-gray-500 font-light ml-3 mt-[-10px]">
                    11 replies · 101 likes
                  </Text>
                </View>
              </View>
            </View>
          </TailwindProvider>
        </PaperProvider>
      );
}

export default PostImage