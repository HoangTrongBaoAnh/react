import React, { Component} from 'react';
import {Text, View, Dimensions, Image, StyleSheet} from 'react-native';

const {width,height} = Dimensions.get("window");

export default class Collectiom extends Component{
    render(){
        return(
            <View style={styles.wrapper}>
                <View style={{height: 50, justifyContent:"center", paddingTop:5}}>
                    <Text style={styles.text1}>SPRING COLLECTION</Text>
                </View>
                <View style={{flex:4, justifyContent:"flex-end" }}>
                    <Image style={styles.image1} source={require("../../../../../media/appicon/banner.jpg")}></Image>
                </View>
            </View>
        );
    }
}

const imgwidth = width - 40;
const imgheight = imgwidth/933 * 450;

const styles = StyleSheet.create({
    wrapper: {
        width: width - 20,
        backgroundColor:"#fff",
        margin: 10,
        shadowColor:"#2E272B",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        
        elevation: 8,

        padding:10,
        paddingTop:0
    },
    text1: {
        fontSize:20,
        color:"#afaeaf"
    },
    image1: {
        height:imgheight,
        width:imgwidth
    }
    
})