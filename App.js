import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartUpScreen from "./screens/startup.js";
import Home from "./screens/Home.js"

const Stack = createNativeStackNavigator();



function App() {
  return (

    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen  options={{headerShown: false}} name="StartUpScreen" component={StartUpScreen} />
    //     <Stack.Screen  options={{headerShown: false}} name="Home" component={Home} />
    //   </Stack.Navigator>
    // </NavigationContainer>
<Home/>
   
   
  );
}

export default App




