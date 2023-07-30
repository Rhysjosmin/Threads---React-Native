import { React } from "react";
import { View, Image } from "react-native";

function CommenterPics() {
  return (
    <View className="ml-2 mt-[2px] h-8 w-9 relative">
      <Image
        source={require('../../assets/People/Person1.jpg')}
        className="absolute rounded-full w-5 h-5 bg-sky-600 right-0"
      />
      <Image
        source={require('../../assets/People/Person2.jpg')}
        className="absolute rounded-full w-3 h-3 bg-rose-600 left-[-2px] bottom-[30%] "
      />
      <Image
        source={require('../../assets/People/Person3.jpg')}
        className="absolute rounded-full w-3 h-3 bg-teal-600  bottom-[-3px] left-[30%] "
      />
    </View>
  );
}

export default CommenterPics;
