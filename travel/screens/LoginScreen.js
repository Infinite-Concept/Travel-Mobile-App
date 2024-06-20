import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Eye from "../common/assets/Eye"
import EyeSplash from "../common/assets/EyeSplash"
import { useNavigation } from '@react-navigation/native'
import { styles } from '../common/style/Form'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

const LoginScreen = ({navigation}) => {
    const[showPassword, setShowPassword] = useState(false)
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")

    const[errorEmail, setErrorEmail] = useState("")
    const[errorPassword, setErrorPassword] = useState("")

    const showPasswordFun = () => {
      setShowPassword(!showPassword)
    }

    const handleLogin = async () => {

      if(!email && !password){
        Alert.alert('Empty Field', "*****all input field are required*****");
      }else{
        try {
          console.log("hello");
          const response = await axios.post('http://192.168.1.18:4567/user/login', { email, password });
          const token = await response.data.token;
          await AsyncStorage.setItem('token', token);
          navigation.navigate("Home")
        } catch (error) {
          console.log(error);
          if (error.response) {
            // Request made and server responded with an error status
            const { data } = error.response;
            Alert.alert('Login Failed', data.message);
          } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received:', error.request);
          } else {
            // Something happened in setting up the request that triggered an error
            console.error('Error:', error.message);
          }
        }
      }
    }

  return (
    <View style={styles.home}>
      <SafeAreaView style={styles.container}>
      <View style={styles.authConatiner}>
        <Text style={styles.title}>Log In</Text>
        <View style={styles.auth}>
          <TouchableOpacity style={[styles.authGoogle, {backgroundColor: "#D4463840"}]}>
              <Text style={[styles.authText, {color: "#D44638"}]}>google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.authGoogle, {backgroundColor: "#4267B240"}]}>
              <Text style={[styles.authText, {color: "#4267B2"}]}>facebook</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.optionAuth}>Or</Text>
      </View>

      <View style={styles.parentInput}>
        <View style={styles.inputGroup}>
          <TextInput placeholder='Enter Email / Phone Number' style={styles.textInput} value={email} onChangeText={(text) => setEmail(text)} />
        </View>

        <View style={[styles.inputGroup, {flexDirection: "row", justifyContent: "space-between", alignItems: "center"}]}>
          <TextInput placeholder='Password' style={styles.textInput} secureTextEntry={!showPassword} value={password} onChangeText={(text) => setPassword(text)} />
          <TouchableOpacity style={{width: 20, height: 20}} onPress={() => showPasswordFun()}>
            {showPassword ? <Eye /> : <EyeSplash />}
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styless.forgetPassword} onPress={() => navigation.navigate("Forgot")}>
          <Text style={styless.forgetPasswordText}>forget password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.register} onPress={() => handleLogin()}>
          <Text style={styles.registerText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.alreadyBtn}>
        <Text style={styles.alreadyBtnText}>Dont't Have An Account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")} style={styles.registerContainer}>
          <Text style={styles.alreadyBtnLog}>Register</Text>
          <View style={styles.underLine}></View>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
    </View>
  )
}

export default LoginScreen

const styless = StyleSheet.create({
  forgetPassword: {
    width: "100%",
    alignItems: "flex-end"
  },
  forgetPasswordText: {
    color: "#1BBA85",
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
    textTransform: "capitalize"
  }
})

