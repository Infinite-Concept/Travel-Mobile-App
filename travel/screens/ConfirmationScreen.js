import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import Arrow from "../common/assets/Arrow"
import { styles } from '../common/style/Form'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const ConfirmationScreen = () => {

    const[confirmationCode, setConfirmationCode] = useState('');
    const navigation = useNavigation()

    const handleconfirmationCode = async () => {
        if(!confirmationCode){
            Alert.alert('Empty Field', "*****all input field are required*****");
        }else{
            try {
                const response = await axios.post('http://192.168.1.18:4567/user/confirm-reset-code', { confirmationCode });
                const resetToken = response.data.resetToken
                await AsyncStorage.setItem("resetToken", resetToken)
                Alert.alert('Confirmation Code Sent', 'Proceed to reset your password');
                navigation.navigate("Reset-forgot")
              } catch (error) {
                Alert.alert('Error', 'Something went wrong');
                console.log(error);
              }
        }
    }
  return (
    <View style={styles.home}>
      <SafeAreaView style={styless.forget}>
        <View style={styless.forgetContainer}>

          <TouchableOpacity style={styless.arrow} onPress={() => navigation.navigate("Reset-forgot")}>
            <Arrow />
          </TouchableOpacity>

          <Text style={styless.forgetTitle}>Confirmation Code</Text>
          <Text style={styless.forgetText}>Please enter your <Text style={styless.forgetInnerText}>confirmation code</Text> to reset your password</Text>
        </View>

        <View>
          <View style={styles.inputGroup}>
            <TextInput placeholder='Enter confirmation code' style={styles.textInput} value={confirmationCode} onChangeText={(text) => setConfirmationCode(text)} />
          </View>

          <TouchableOpacity style={styles.register} onPress={() => handleconfirmationCode()}>
            <Text style={styles.registerText}>send</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default ConfirmationScreen

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