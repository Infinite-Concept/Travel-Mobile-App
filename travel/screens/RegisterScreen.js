import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Eye from "../common/assets/Eye"
import EyeSplash from "../common/assets/EyeSplash"
import { styles } from '../common/style/Form'
import axios from 'axios'

const RegisterScreen = ({ navigation }) => {
  const[email, setEmail] = useState("")
  const[fullName, setFullName] = useState("")
  const[choosePassword, setChoosePassword] = useState("")
  const[confirmPassword, setConfirmPassword] = useState("")
  const[showPassword, setShowPassword] = useState(false)

  // error state 
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const showPasswordToggle = () => {
    setShowPassword(!showPassword)
  }

  const handleRegister = async () => {

    let emailValid = false;
    if(!email){
      setEmailError("Email is required")
    }else if(email.indexOf(' ') >= 0){        
      setEmailError('Email cannot contain spaces');                          
    }else if(!/\S+@\S+\.\S+/.test(email)){
      setEmailError("Invalid email format")
    }else{
      setEmailError('')
      emailValid = true
    }
    
    // Validate all fields before submitting
    let passwordValid = false;
    if(!choosePassword){
      setPasswordError('Password is required')
    }else if(choosePassword.indexOf(' ') >= 0){        
      setPasswordError('Password cannot contain spaces');                          
    }else if(choosePassword.length < 6){
      setPasswordError('Password must be at least 6 characters long');
    } else {
      setPasswordError('');
      passwordValid = true
    }

    // Validate all fields before submitting

    let confirmPasswordValid = false;
    if(!confirmPassword){
      setConfirmPasswordError('Confirm password is required')
    }else if( confirmPassword !== choosePassword){
      setConfirmPasswordError('Confirm password must be equal to password');
    } else {
      setConfirmPasswordError('');
      confirmPasswordValid = true
    }

    // Validate all fields before submitting

    let fullNameValid = false;
    if (!fullName) {
      setFullNameError('Full Name is required');
    } else {
      setFullNameError('');
      fullNameValid = true
    }

    // Validate all fields before submitting

    if (emailValid && passwordValid && confirmPasswordValid && fullNameValid) {       
      try {
        const response = await axios.post("http://192.168.1.18:4567/user/create", {email, fullName, choosePassword})
        Alert.alert('Login Failed', response.data.message);
        navigation.navigate("Login")
      } catch (error) {
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
    }else{

      console.log("Validation errors exist");
    }
   
  }

  return (
    <View style={styles.home}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Register</Text>

        <ScrollView showsHorizontalScrollIndicator={false}>
          <View style={styles.auth}>
            <TouchableOpacity style={[styles.authGoogle, {backgroundColor: "#D4463840"}]}>
                <Text style={[styles.authText, {color: "#D44638"}]}>google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.authGoogle, {backgroundColor: "#4267B240"}]}>
                <Text style={[styles.authText, {color: "#4267B2"}]}>facebook</Text>
            </TouchableOpacity>
          </View>
          <Text style={[styles.optionAuth, {marginBottom: 15}]}>Or</Text>

        
          <View style={styles.parentInput}>
            <View style={styles.inputGroup}>
              <TextInput placeholder='Full Name' style={styles.textInput} value={fullName} onChangeText={(text) => setFullName(text)} />
            </View>
            {fullNameError.length > 0 && <Text style={styles.error}>{fullNameError}</Text>}

            <View style={styles.inputGroup}>
              <TextInput placeholder='Enter Email / Phone Number' style={styles.textInput} value={email} onChangeText={(text) => setEmail(text)} keyboardType="email-address" autoCorrect={false} autoCapitalize="none" autoComplete='off' />
            </View>
            {emailError.length > 0 && <Text style={styles.error}>{emailError}</Text>}

            <View style={[styles.inputGroup, {flexDirection: "row", justifyContent: "space-between", alignItems: "center"}]}>
              <TextInput placeholder='Password' style={styles.textInput} value={choosePassword} onChangeText={(text) => setChoosePassword(text)} secureTextEntry={!showPassword} />
              <TouchableOpacity style={{width: 20, height: 20}} onPress={() => showPasswordToggle()}>
                {showPassword ? <Eye /> : <EyeSplash />}
              </TouchableOpacity>
            </View>
            {passwordError.length > 0 && <Text style={styles.error}>{passwordError}</Text>}

            <View style={[styles.inputGroup, {flexDirection: "row", justifyContent: "space-between", alignItems: "center"}]}>
              <TextInput placeholder='Confirm Password' style={styles.textInput} value={confirmPassword} onChangeText={(text) => setConfirmPassword(text)} secureTextEntry={!showPassword}/>
              <TouchableOpacity style={{width: 20, height: 20}} onPress={() => showPasswordToggle()} >
                {showPassword ? <Eye /> : <EyeSplash />}
              </TouchableOpacity>
            </View>
            {confirmPasswordError.length > 0 && <Text style={styles.error}>{confirmPasswordError}</Text>}

            <TouchableOpacity style={styles.register} onPress={() => handleRegister()}>
              <Text style={styles.registerText}>Register</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.alreadyBtn}>
            <Text style={styles.alreadyBtnText}>Already Have An Account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.registerContainer}>
              <Text style={styles.alreadyBtnLog}>Login</Text>
              <View style={styles.underLine}></View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default RegisterScreen

