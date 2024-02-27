import React, { useState } from 'react';
import {View, Image, StyleSheet, Text, TextInput} from "react-native";
import { useNavigation} from '@react-navigation/native';


const Login = () => {
    const navigation = useNavigation();

    const [connexion, setConnexion]=useState({});
    const [data, setData]=useData([]);

    const connection = () => {
        axios.post("http://137.74.5.158:5000/api/v1/users/signin-with-email/", connexion).then((result) => {

          console.log(result.data);
          if (result.data === "Login OK") {
            navigation.navigate('Listing') 
          } else {
            alert("Vérifiez le mail ou le mot de passe svp!")
          }
        });
    }

    const getReservation =async ()=>{
        const id=await AsyncStorage.getItem('id')
        axios.get("http://137.74.5.158:5000/api/v1/products/"+id)
         .then((res)=>{
          setreservation(res.data)
         })
      }
    
    const handleLogin = (key, value) => {
        setConnexion({
          ...admin,
          [key]: value,
        });
      };

  return (
    <View>
        <View style={styles. images} >
        <Image 
            source={require('../Images/Upper bg.png')}
            style={styles.upper}
        />
        <Image
            source={require('../Images/Dots.png')}
            style={styles.dots}
        />
        <Text >Bienvenue !</Text>
        <Text>S'identifier</Text>
        </View>
        <TextInput
        placeholder="E-mail"
        underlineColorAndroid="transparent"
        onChangeText={(e) => {
            handleLogin("email", e.target.value);
          }}
        />
        <TextInput
        placeholder="Mot de passe"
        underlineColorAndroid="transparent"
        secureTextEntry={true}
        onChangeText={(e) => {
            handleLogin("password", e.target.value);
          }}
        />
    </View>

  )
};

const styles = StyleSheet.create({
    upper:{
        position: 'absolute',
        width: 375,
        height: 261.67,
        left: 0,
        top: 0,
        background: '#0C1064',

    },

    // dots:{
    //     width: '299.17px',
    //     height: '292.76px',
    //     top: '-70px',
    //     left: '51px'

    // },

    images:{
        width:'100%',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

    },
    bienvenue:{
        fontFamily: 'Calibri',
        fontSize: '32px',
        fontWeight: '700',
        lineHeight: '40px',
        letterSpacing: '0em',
        textAlign: 'center',
        background: '#FFFFFF'


    }
})
export default  Login;