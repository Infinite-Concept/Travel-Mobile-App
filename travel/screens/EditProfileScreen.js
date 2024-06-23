import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Edit from "../common/assets/Edit"
import Profile from "../common/assets/Profile"
import BlackArrow from "../common/assets/BlackArrow"
import { stylesImage } from '../common/style/Image'
import Eye from "../common/assets/Eye"
import EyeSplash from "../common/assets/EyeSplash"

const EditProfileScreen = () => {
    const navigation = useNavigation();
    const[showPassword, setShowPassword] = useState(false)

    const showPasswordFun = () => {
        setShowPassword(!showPassword)
    }

  return (
    <View style={styles.edit}>
      <SafeAreaView style={styles.editContainer}>
        <ScrollView>
            <View style={styles.editHeader}>
                <TouchableOpacity style={styles.editHeaderImage} onPress={() => navigation.goBack()}>
                    <BlackArrow />
                </TouchableOpacity>
                <Text style={styles.editHeaderText}>Edit Account</Text>
            </View>

            <View style={styles.editProfileImage}>
                <View style={stylesImage.profileDetailsImage}>
                    <Profile />
                </View>
                <Text style={styles.editProfileImageText}>Change Profile Picture</Text>
            </View>

            <View style={styles.editUserDetails}>
                <Text style={styles.editHeaderText}>Change Your Details</Text>
                <View style={styles.editInputCon}>
                    <Text style={styles.editInputLabel}>Full Name</Text>
                    <View style={styles.editInputGroup}>
                        <TextInput value='' placeholder='Full Name' style={styles.editInput}/>
                        <View>
                            <Edit />
                        </View>
                    </View>
                </View>

                <View style={styles.editInputCon}>
                    <Text style={styles.editInputLabel}>Zip Code</Text>
                    <View style={styles.editInputGroup}>
                        <TextInput value='' placeholder='Zip Code' style={styles.editInput}/>
                        <View >
                            <Edit />
                        </View>
                    </View>
                </View>

                <View style={styles.editInputCon}>
                    <Text style={styles.editInputLabel}>Address</Text>
                    <View style={styles.editInputGroup}>
                        <TextInput value='' placeholder='Address' style={styles.editInput}/>
                        <View >
                            <Edit />
                        </View>
                    </View>
                </View>

                <View style={styles.editInputCon}>
                    <Text style={styles.editInputLabel}>City</Text>
                    <View style={styles.editInputGroup}>
                        <TextInput value='' placeholder='City' style={styles.editInput}/>
                        <View >
                            <Edit />
                        </View>
                    </View>
                </View>

                <View style={styles.editInputCon}>
                    <Text style={styles.editInputLabel}>State</Text>
                    <View style={styles.editInputGroup}>
                        <TextInput value='' placeholder='State' style={styles.editInput}/>
                        <View >
                            <Edit />
                        </View>
                    </View>
                </View>

                <View style={styles.editInputCon}>
                    <Text style={styles.editInputLabel}>Country</Text>
                    <View style={styles.editInputGroup}>
                        <TextInput value='' placeholder='Country' style={styles.editInput} />
                        <View >
                            <Edit />
                        </View>
                    </View>
                </View>

                <View style={styles.editInputCon}>
                    <Text style={styles.editInputLabel}>Phone Number</Text>
                    <View style={styles.editInputGroup}>
                        <TextInput value='' placeholder='Phone Number' style={styles.editInput} />
                        <View >
                            <Edit />
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={styles.handleSubmit}>
                    <Text style={styles.handleSubmitText}>Save Change</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.changePassword}>
                <Text style={styles.editHeaderText}>Change Password</Text>

                <View style={styles.editInputCon}>
                    <Text style={styles.editInputLabel}>Old Password</Text>
                    <View style={styles.editInputGroup}>
                        <TextInput value='' placeholder='Country' style={styles.editInput} secureTextEntry={!showPassword} />
                        <TouchableOpacity style={{width: 20, height: 20}} onPress={() => showPasswordFun()} >
                            {showPassword ? <Eye /> : <EyeSplash />}
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.editInputCon}>
                    <Text style={styles.editInputLabel}>New Password</Text>
                    <View style={styles.editInputGroup}>
                        <TextInput value='' placeholder='Country' style={styles.editInput} secureTextEntry={!showPassword} />
                        <TouchableOpacity style={{width: 20, height: 20}} onPress={() => showPasswordFun()}>
                            {showPassword ? <Eye /> : <EyeSplash />}
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.editInputCon}>
                    <Text style={styles.editInputLabel}>Confirm Password</Text>
                    <View style={styles.editInputGroup}>
                        <TextInput value='' placeholder='Country' style={styles.editInput} secureTextEntry={!showPassword} />
                        <TouchableOpacity style={{width: 20, height: 20}} onPress={() => showPasswordFun()}>
                            {showPassword ? <Eye /> : <EyeSplash />}
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity style={styles.handleSubmit}>
                    <Text style={styles.handleSubmitText}>Change Password</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default EditProfileScreen

const styles = StyleSheet.create({
    edit:{
        flex: 1,
        backgroundColor: "#F3F5F6"
    },
    editContainer: {
        paddingHorizontal: 20,
        paddingTop: 20
    },
    editHeader: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        marginBottom: 20
    },
    editHeaderImage: {
        backgroundColor: "#fff",
        width: 35,
        height: 35,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    editHeaderText: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 20
    },
    editProfileImage: {
        alignItems: "center",
        gap: 10
    },
    editProfileImageText: {
        color: "#151940",
        fontSize: 16,
        fontFamily: "Poppins_500Medium"
    },
    editUserDetails: {
        paddingTop: 10
    },
    editInputCon: {
        gap: 10,
        paddingVertical: 10
    },
    editInputLabel: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 14
    },
    editInputGroup: {
        backgroundColor: "#fff",
        width: "100%",
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 15,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    editInput: {
        fontSize: 16,
        width: "80%",
        fontFamily: "Poppins_500Medium",
        color: "#7F8192"
    },
    changePassword: {
        paddingVertical: 30
    },
    handleSubmit: {
        backgroundColor: "#1BBA85",
        width: "100%",
        paddingVertical: 13,
        borderRadius: 10,
        marginTop: 20
    },
    handleSubmitText: {
        fontFamily: "Poppins_700Bold",
        color: "#fff",
        textAlign: "center",
        fontSize: 18
    }
    
})