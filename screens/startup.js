import React from 'react';
import {View,Image,StyleSheet} from 'react-native';





const StartUpScreen = ({navigation}) => {
  setTimeout(()=>{
    navigation.navigate('Home')
  },2000)
  return (
    <View style={styles.Container} className='flex-1 items-center justify-center'>
    <Image style={styles.Logo}  source={require('../assets/SplashLogo.png')}/>
    <Image style={styles.Company} source={require('../assets/Company.png')}/>
    </View>
    );
};

const styles = StyleSheet.create({
Container:{
  flex:1,
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

export default StartUpScreen;