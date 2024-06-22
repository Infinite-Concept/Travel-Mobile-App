import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

import Edit from "../common/assets/Edit"
import Profile from "../common/assets/Profile"
import { stylesImage } from '../common/style/Image'

const EditProfileScreen = () => {
  return (
    <View>
      <SafeAreaView>
        <ScrollView>
            <View>
                <View></View>
                <Text>Edit Account</Text>
            </View>

            <View>
                <View style={stylesImage.profileDetailsImage}>
                    <Profile />
                </View>
                <Text>Change Profile Picture</Text>
            </View>

            <View>
                <View>
                    <Text>Full Name</Text>
                    <View>
                        <TextInput value='' placeholder='Full Name' />
                        <View >
                            <Edit />
                        </View>
                    </View>
                </View>

                <View>
                    <Text>Zip Code</Text>
                    <View>
                        <TextInput value='' placeholder='Zip Code' />
                        <View >
                            <Edit />
                        </View>
                    </View>
                </View>

                <View>
                    <Text>Address</Text>
                    <View>
                        <TextInput value='' placeholder='Address' />
                        <View >
                            <Edit />
                        </View>
                    </View>
                </View>

                <View>
                    <Text>City</Text>
                    <View>
                        <TextInput value='' placeholder='City' />
                        <View >
                            <Edit />
                        </View>
                    </View>
                </View>

                <View>
                    <Text>State</Text>
                    <View>
                        <TextInput value='' placeholder='State' />
                        <View >
                            <Edit />
                        </View>
                    </View>
                </View>

                <View>
                    <Text>Country</Text>
                    <View>
                        <TextInput value='' placeholder='Country' />
                        <View >
                            <Edit />
                        </View>
                    </View>
                </View>

                <View>
                    <Text>Phone Number</Text>
                    <View>
                        <TextInput value='' placeholder='Phone Number' />
                        <View >
                            <Edit />
                        </View>
                    </View>
                </View>

                <TouchableOpacity>
                    <Text>Save Change</Text>
                </TouchableOpacity>
            </View>

            <View>
                
            </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default EditProfileScreen

const styles = StyleSheet.create({})