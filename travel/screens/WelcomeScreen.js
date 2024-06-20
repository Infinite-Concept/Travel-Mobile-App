import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Shape from "../common/assets/Shape"
import Shape2 from "../common/assets/Shape2"
import Arrow from "../common/assets/Arrow"

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.home}>
      <StatusBar style={{color: "#000"}} />
      <View style={styles.shape}>
        <Shape />
      </View>
      <Text style={styles.text}>Welcome</Text>
      <View style={styles.shape2}>
        <Shape2 />
      </View>

      <TouchableOpacity style={styles.arrow} onPress={() => navigation.navigate("Onboard")}>
<Arrow />
      </TouchableOpacity>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#F3F5F6",
    position: "relative",
    alignItems: "center",
    justifyContent: "center"
  },
  shape: {
    position: "absolute",
    top: -100
  },
  shape2: {
    position: "absolute",
    bottom: -90,
    left: 30
  },
  text: {
    fontFamily: "Poppins_700Bold",
    fontSize: 44,
    color: "#191C32",
    transform: [{rotate: "-20deg"}]
  },
  arrow: {
    width: 74,
    height: 74,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 200,
    position: "absolute",
    bottom: 30,
    right: 30,
    shadowColor: "#191C320D",
    elevation: 8,
    shadowRadius: 20,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 1,
      height: 2,
    },
  }
})