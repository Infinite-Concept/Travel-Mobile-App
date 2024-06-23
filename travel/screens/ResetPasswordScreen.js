import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../common/style/Form'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const ResetPasswordScreen = () => {

  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const navigation = useNavigation()

  const handleResetPassword = async () => {

    let passwordValid = false;
    if(!newPassword){
      setPasswordError('Password is required')
    }else if(newPassword.indexOf(' ') >= 0){        
      setPasswordError('Password cannot contain spaces');                          
    }else if(newPassword.length < 6){
      setPasswordError('Password must be at least 6 characters long');
    } else {
      setPasswordError('');
      passwordValid = true
    }

    // Validate all fields before submitting

    let confirmPasswordValid = false;
    if(!confirmNewPassword){
      setConfirmPasswordError('Confirm password is required')
    }else if( confirmNewPassword !== newPassword){
      setConfirmPasswordError('Confirm password must be equal to password');
    } else {
      setConfirmPasswordError('');
      confirmPasswordValid = true
    }

    if (newPassword && confirmNewPassword) {
      try {
        const resetToken = await AsyncStorage.getItem("resetToken")
        const response = await axios.post('http://192.168.1.18:4567/user/reset-password', { resetToken, newPassword });
        Alert.alert('Password Reset Successful', response.data.message);
        navigation.navigate("Login")
      } catch (error) {
        console.log(error);
        Alert.alert('Error', error.response || 'Something went wrong');
      }
    } else {
      Alert.alert('Error', 'Please enter and confirm your new password.');
    }
  }

  return (
    <View style={styles.home}>
      <SafeAreaView style={styless.forget}>
        <View style={styless.forgetContainer}>

          

          <Text style={styless.forgetTitle}>New Password</Text>
          <Text style={styless.forgetText}>Please enter your <Text style={styless.forgetInnerText}>new password</Text> to reset your password</Text>
        </View>

        <View>
          <View style={[styles.inputGroup, styless.mb]}>
            <TextInput placeholder='Enter new password' style={styles.textInput} value={newPassword} onChangeText={(text) => setNewPassword(text)} />
          </View>
          {passwordError.length > 0 && <Text style={styles.error}>{passwordError}</Text>}

          <View style={styles.inputGroup}>
            <TextInput placeholder='Confirm new password' style={styles.textInput} value={confirmNewPassword} onChangeText={(text) => setConfirmNewPassword(text)} />
          </View>
          {confirmPasswordError.length > 0 && <Text style={styles.error}>{confirmPasswordError}</Text>}

          <TouchableOpacity style={styles.register} onPress={() => handleResetPassword()}>
            <Text style={styles.registerText}>send</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity >
          <Text style={{textAlign: "center", marginTop: 30, fontSize: 20, fontFamily: "Poppins_700Bold", color: "#1BBA85"}}>Login</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  )
}

export default ResetPasswordScreen

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
  },
  mb: {
    marginBottom: 10
  }
})