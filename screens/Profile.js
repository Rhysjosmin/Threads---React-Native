import React from 'react';
import {View,Image,Text,StyleSheet} from 'react-native';

const Profile = () => {
  return (
<View style={styles.Container} className='flex-1 items-center justify-center'>
<Text>Hello</Text>
    <Image style={styles.Logo}  source={require('../assets/Favicon.png')}/>
    <Image style={styles.Company} source={require('../assets/Company.png')}/>
    </View>
    );
};

const styles = StyleSheet.create({
Container:{
  flex:1,
  width:100,
  height:100,
  alignItems:'center',
  gap:240,
  marginTop:330,
},
  Logo: {
    height: 100,
    width:120,
  },
  Company:{
    height: 50,
    width:140,
  },

});

export default Profile;