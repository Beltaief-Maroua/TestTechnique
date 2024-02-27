import React from "react";
import { View, StyleSheet, Image, Pressable, Button, Text } from "react-native";

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../Images/Group 1231.png")} style={styles.logo} />
      <Text style={styles.odio}>Odioay</Text>
      <Text style={styles.boost}>Boost your sales today</Text>
      <View style={styles.button}>
      <Pressable style={styles.register}>
        <Text > Register </Text>
      </Pressable>
      <Pressable 
      style={styles.login}
      onPress={()=>navigation.navigate("Login")}
      >
        <Text> Login </Text>
      </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 414,
    height: 812,
    backgroundColor: "#0C1064",
    borderRadius: 32,
  },
  logo: {
    width: 54.73,
    height: 44.99,
    top: 247.41,
    left: 174,
  },
  odio: {
    position: "absolute",
    width: 352,
    height: 64,
    left: 25,
    top: 335,

    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 43,
    color: "#FFFFFF",

    display: "flex",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: 0.04,
  },
  boost: {
    position: "absolute",
    width: 209,
    height: 58,
    left: 97,
    top: 399,

    display: "flex",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: 0.06,

    color: "#FFFFFF",
  },

  register: {
  
    width: 113,
    height: 30,
    

    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 25,
    lineHeight: 30,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: 0.015,
    backgroundColor:'#FFFFFF',
    borderRadius:5,
    
    color: '#333333'

  },
  login: {
    width: 113,
    height: 30,
    

    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 25,
    lineHeight: 30,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: 0.015,
    backgroundColor:'#00B3F3',
    borderRadius:5,

    color: '#FFFFFF'

  },
  button:{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom:0,
    padding:150,
    marginBottom: '10%',
  }
});

export default Onboarding;
