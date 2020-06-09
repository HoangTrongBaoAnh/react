import React, { Component} from 'react';
import {Text, View, Dimensions, Image, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import Swiper from "react-native-swiper"

const {width,height} = Dimensions.get("window");


export default class Category extends Component{
    gottolistproduct(category){
        const {navigator} = this.props;
        navigator.push({name: 'LIST', category});
    }
    render(){
        const {types} = this.props;
        return(
            <View style={styles.wrapper}>
                <View style={{height:50, justifyContent:"center"}}>
                    <Text style={styles.text1}>LIST OF CATEGORY</Text>
                </View>
                <View style={{flex:4, justifyContent:"flex-end"}}>
                    <Swiper width={imgwidth} height={imgheight}>
                        {types.map(e => (
                            <TouchableOpacity onPress={() => this.gottolistproduct(e)} key={e.id}>
                                <ImageBackground source={{ uri: `http://192.168.100.13/app/images/type/${e.image}` }} style={styles.image1} >
                                    <Text style={styles.text1}>{e.name}</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        ))}
                    </Swiper>
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
        paddingTop:0,
        justifyContent:"space-between"
    },
    text1: {
        fontSize:20,
        color:"#afaeaf",
        justifyContent:"center",
        alignItems:"center"
    },
    image1: {
        height:imgheight,
        width:imgwidth,
        justifyContent:"center",
        alignItems:"center"
    }
    
})

/*
<TouchableOpacity onPress={this.gottolistproduct.bind(this)}>
                            <ImageBackground style={styles.image1} source={require("../../../../../media/temp/little.jpg")}>
                                <Text style={styles.text1}>Little Dress</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.gottolistproduct.bind(this)}>
                            <ImageBackground style={styles.image1} source={require("../../../../../media/temp/maxi.jpg")}>
                                <Text style={styles.text1}>Little Dress</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.gottolistproduct.bind(this)}>
                            <ImageBackground style={styles.image1} source={require("../../../../../media/temp/party.jpg")}>
                                <Text style={styles.text1}>Little Dress</Text>
                            </ImageBackground>
                        </TouchableOpacity>

*/