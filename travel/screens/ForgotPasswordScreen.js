import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Arrow from "../common/assets/Arrow"
import { styles } from '../common/style/Form'
import axios from 'axios';

const ForgotPasswordScreen = ({ navigation }) => {
  const[email, setEmail] = useState("")
  const[emailError, setEmailError] = useState("")


  const handlePassword = async () => {
    let emailValid = false

    if(!email){
      setEmailError("Password field is required")
    }else if(email.indexOf(' ') >= 0){
      setEmailError('Email cannot contain spaces'); 
    }else{
      setEmailError("")
      emailValid = true
    }

    if(email){
      try {
        const response = await axios.post('http://192.168.1.18:4567/user/forgot-password', { email });
        Alert.alert('Email sent', response.data.message);
      } catch (error) {
        Alert.alert('Error', 'Failed to send email. Please try again later.');
      }
    }
  }

  return (
    <View style={styles.home}>
      <SafeAreaView style={styless.forget}>
        <View style={styless.forgetContainer}>

          <TouchableOpacity style={styless.arrow} onPress={() => navigation.goBack()}>
            <Arrow />
          </TouchableOpacity>

          <Text style={styless.forgetTitle}>Forget Password</Text>
          <Text style={styless.forgetText}>Please enter your <Text style={styless.forgetInnerText}>email address /  phone number</Text> to reset your password</Text>
        </View>

        <View>
          <View style={styles.inputGroup}>
            <TextInput placeholder='Enter Email / Phone Number' style={styles.textInput} value={email} onChangeText={(text) => setEmail(test)} />
          </View>

          <TouchableOpacity style={styles.register} onPress={() => handlePassword()}>
            <Text style={styles.registerText}>send</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default ForgotPasswordScreen

const styless = StyleSheet.create({
  forget: {
    paddingHorizontal: 20,
    paddingTop: 30
  },
  arrow: {
    width: 45,
    height: 45,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    transform: [{rotate: "180deg"}]
  },
  forgetTitle: {
    color: "#191C32",
    fontFamily: "Poppins_600SemiBold",
    fontSize: 35,
    marginTop: 40
  },
  forgetText: {
    fontFamily: "Poppins_400Regular",
    color: "#191C32",
    marginTop: 10
  },
  forgetInnerText: {
    fontFamily: "Poppins_700Bold",
    textTransform: "capitalize"
  },
  forgetContainer: {
    marginBottom: 70
  }
})