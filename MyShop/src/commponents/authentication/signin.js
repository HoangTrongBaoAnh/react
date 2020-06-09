import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, TextInput} from 'react-native';;

const {height} = Dimensions.get('window');

export default class Signin extends Component{
    render(){
        return(
            <View>
                <TextInput style={styles.input} placeholder="Enter ur email"></TextInput>
                <TextInput style={styles.input} placeholder="Enter ur password"></TextInput>
                <TouchableOpacity style={styles.btnsigninnow}>
                    <Text style={styles.btnsigninnowtext}>SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    signin: {
        backgroundColor:"#fff",
        flex: 1,
        alignItems:"center",
        paddingVertical: 15,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        marginRight: 1
    },
    input: {
        height: 50,
        backgroundColor: "#fff",
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 30
    },
    btnsigninnow: {
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#fff",
        justifyContent: "center",
        alignItems:"center"
    },
    btnsigninnowtext: {
        fontFamily: "avenir",
        color:"#fff",
        fontWeight: "400"
    }
})
