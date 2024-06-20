import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { StatusBar } from 'expo-status-bar'

import image from "../assets/images/mountain.png"
import image2 from "../assets/images/destination.png"
import image3 from "../assets/images/travelling.png"


const DATA = [
    {
        id: 1,
        title: "Exlore Destinations",
        desc: "Discover the places for your trip in the world and feel great.",
        img : image
    },
    {
        id: 2,
        title: "Choose a Destination",
        desc: "Select a place for your trip easily and know the exact cost of the tour.",
        img : image2
    },
    {
        id: 3,
        title: "Fly to Destination",
        desc: "Finally, get ready for the tour and go to your desire destination.",
        img : image3
    },
]

const OnboardingScreen = ({navigation}) => {
    const listRef = useRef()
    const screenWidth = Dimensions.get("window").width
    const [activeIndex, setActiveIndex] = useState(0)

    // auto scroll 
    useEffect(() => {      
        let interval = setInterval(() => {
            //if activeindex === last index --> jump back to first index
            if(activeIndex === DATA.length -1){
                // listRef.current.scrollToIndex({
                //     index: 0,
                //     animation: true
                // })
                clearInterval(interval)
                navigation.navigate("Login")
            }
            // else activeindex +1
            else{
                listRef.current.scrollToIndex({
                    index: activeIndex + 1,
                    animation: true
                })

                setActiveIndex(prevIndex => prevIndex + 1); 
            }
        }, 2000)

        return () => clearInterval(interval);
    })

    const getItemLayout = (data, index) => ({
        length: screenWidth,
        offset: screenWidth * index,
        index: index
    })

    // Handle Scroll 
    const handleScroll = (event) => {
        // get the scroll position 

        const scrollPosition = event.nativeEvent.contentOffset.x
        // get the index of the active item
        let index = scrollPosition / screenWidth;
        index = Math.ceil(index)

        // update the index 
        setActiveIndex(index)
    }

    const renderItem = ({item}) => {
        const {img, title, desc} = item
        return (
            <View style={[styles.render, {width: screenWidth,}]}>
                <Image source={img} style={styles.renderImage}/>
                <Text style={styles.renderTitle}>{title}</Text>
                <Text style={styles.renderDesc}>{desc}</Text>
            </View>
        )
    }
    
    const renderDotIndicators = () => {
        return DATA.map((dot, index) => {
            // if the active index === index 
            if(activeIndex === index){
                return(
                    <View style={{backgroundColor: "#1BBA85", height: 13, width: 69, borderRadius: 40, marginHorizontal: 6}}>
                    </View>
                )
            }
            else{
                return(
                    <View key={index} style={{backgroundColor: "#C4C4C4", height: 13, width: 28, borderRadius: 5, marginHorizontal: 6}}>         
                    </View>
                )
            }
        })
    }

  return (
    <View style={styles.home}>
    <StatusBar />
    <FlatList 
    data={DATA}
    ref={listRef}
    getItemLayout={getItemLayout}
    renderItem={renderItem}
    horizontal= {true}
    pagingEnabled={true}
    onScroll={handleScroll}
    keyExtractor={(item) => item.id}
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}
    />

<View style={{flexDirection: 'row', justifyContent: 'center', marginVertical: 50}}>
            {renderDotIndicators()}
        </View>
    </View>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: "#F3F5F6"
    },
    render: {
        paddingTop: 100,
        alignItems: "center",
        paddingHorizontal: 30,
    },
    renderImage: {
        marginBottom: 50
    },
    renderTitle: {
        fontFamily: "Nunito_700Bold",
        color: "#121420",
        fontSize: 25,
        marginBottom: 30
    },
    renderDesc: {
        color: "#A5A7AC",
        fontFamily: "Nunito_400Regular",
        lineHeight: 24,
        textAlign: "center"
    }
})