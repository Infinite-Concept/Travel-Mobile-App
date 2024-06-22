import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Notified from "../common/assets/Notified"
import Search from "../common/assets/Search"

const HomeScreen = () => {
  return (
    <View style={styles.home}>
      <SafeAreaView style={styles.homeContainer}>
        <View style={styles.homeNav}>
          <View style={styles.navLink}>
            <View style={styles.navLink1}></View>
            <View style={styles.navLink2}></View>
          </View>

          <View>
            <Notified />
          </View>
        </View>

        <View style={styles.homeTextCon}>
          <Text style={styles.homeText}>Where Do You Want Go</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput placeholder='Search your trip' />
          <View style={styles.search}>
            <Search />
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  homeContainer: {
    paddingHorizontal: 20,
    paddingTop: 30
  },
  homeNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  navLink: {
    flexDirection: "column",
    gap: 7
  },
  navLink1: {
    backgroundColor: "#121420",
    width: 25,
    height: 3
  },
  navLink2: {
    backgroundColor: "#121420",
    width: 14,
    height: 3
  },
  homeTextCon: {
    maxWidth: "70%",
    marginTop: 30
  },
  homeText: {
    fontSize: 28,
    fontFamily: "Poppins_400Regular"
  },
  inputContainer: {
    backgroundColor: "#F4F4F5",
    borderRadius: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 7,
    paddingLeft: 20,
    paddingRight: 10,
    alignItems: "center",
    marginTop: 10
  },
  search: {
    width: 43,
    height: 43,
    backgroundColor: "#1BBA85",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center"
  }
})