import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import EditProfile from "../common/assets/EditProfile"
import Profile from "../common/assets/Profile"
import Setting from "../common/assets/Setting"
import History from "../common/assets/History"
import Payment from "../common/assets/Payment"
import Lock from "../common/assets/Lock"
import Help from "../common/assets/Help"
import Logout from "../common/assets/Logout"
import GreaterThan from "../common/assets/GreaterThan"
import { stylesImage } from '../common/style/Image'

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.profile}>
      <SafeAreaView style={styles.profileContainer}>
        <ScrollView>
          <View style={styles.profileDetails}>
            <View style={stylesImage.profileDetailsImage}>
              <Profile />
            </View>

            <View style={styles.profileTextDetails}>
              <Text style={styles.profileTextDetailsName}>Matt revas</Text>
              <Text style={styles.profileTextDetailsLocation}>
                Neque porro quisquam est qui dolorem ipsum 
              </Text>
              <TouchableOpacity style={styles.editProfile} onPress={() => navigation.navigate("EditProfile")}>
                <View>
                    <EditProfile />
                </View>
                <Text style={styles.editProfileText}>Edit Profile</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.profileNav}>
            <View style={styles.profileNavLink}>
              <View style={styles.profileNavLinkCon}>
                <Setting />
                <Text style={styles.profileNavLinkText}>Preferences</Text>
              </View>
            
              <View>
                <GreaterThan />
              </View>
            </View>

            <View style={styles.profileNavLink}>
              <View style={styles.profileNavLinkCon}>
                <History />
                <Text style={styles.profileNavLinkText}>History</Text>
              </View>
                
              <View>
                <GreaterThan />
              </View>
            </View>

            <View style={styles.profileNavLink}>
              <View style={styles.profileNavLinkCon}>
                <Payment />
                <Text style={styles.profileNavLinkText}>Payment</Text>
              </View>
                
              <View>
                <GreaterThan />
              </View>
            </View>

            <View style={styles.profileNavLink}>
              <View style={styles.profileNavLinkCon}>
                <Lock />
                <Text style={styles.profileNavLinkText}>Account Security</Text>
              </View>
                
              <View>
                <GreaterThan />
              </View>
            </View>

            <View style={styles.profileNavLink}>
              <View style={styles.profileNavLinkCon}>
                <Help />
                <Text style={styles.profileNavLinkText}>Help</Text>
              </View>
                
              <View>
                <GreaterThan />
              </View>
            </View>

            <View style={[styles.profileNavLinkCon, {paddingVertical: 20}]}>
              <View>
                <Logout />
              </View>
              <View>
                <Text style={styles.profileNavLinkText}>Logout</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    backgroundColor: "#F3F5F6"
  },
  profileContainer: {
    paddingHorizontal: 20,
    paddingTop: 30
  },
  profileDetails: {
    alignItems: 'center'
  },
  profileTextDetails: {
    paddingTop: 20,
    alignItems: "center"
  },
  profileTextDetailsName: {
    fontSize: 26,
    color: "#191C32",
    fontFamily: "Poppins_600SemiBold",
    textAlign: "center",
    textTransform: "capitalize"
  },
  profileTextDetailsLocation: {
    marginTop: -10
  }, 
  editProfile: {
    width: 150,
    backgroundColor: "#1BBA85",
    alignItems : "center",
    flexDirection: "row",
    borderRadius: 20,
    justifyContent: "center",
    gap: 10,
    paddingVertical: 10,
    marginTop: 20
  },
  editProfileText: {
    color: "#fff",
    fontFamily: "Nunito_400Regular"
  },
  profileNav: {
    paddingVertical: 30
  },
  profileNavLink: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20
  },
  profileNavLinkCon: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center"
  },
  profileNavLinkText: {
    color: "#26273C",
    textTransform: "capitalize",
    fontFamily: "Poppins_500Medium",
    fontSize: 18
  }
})