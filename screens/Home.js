import React from "react";
import { View, Image, StyleSheet, Text ,ScrollView} from "react-native";
import Post from '../src/components/Post.jsx';




const Home = () => {
  return (
    <ScrollView>
    <View style={styles.Container}>
      <Post
      name='rhysjosmin'
        text="What’s the best thing about Switzerland?
I don’t know, but the flag is a big plus."
        Image="https://picsum.photos/seed/1/4096/4096"
      />
      <Post
      name='rhysjosmin'
        text={"Life is a gift that has been given to you. It is in your hands to make the best out of it--dare to believe that you can.\n\nEach experience--good and bad--makes you grow. Get along with life and surely, things will become easier for you.. Life is a gift that has been given to you. It is in your hands to make the best out of it--dare to believe that you can.\n\nEach experience--good and bad--makes you grow. Get along with life and surely, things will become easier for you.."}
      
      />
      
      <Post
      name='rhysjosmin'
        text="What’s the best thing about Switzerland?
I don’t know, but the flag is a big plus."
        Image="https://picsum.photos/seed/10/4096/4096"
      />
     
    </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 40,
  
   
  },
});

export default Home;
