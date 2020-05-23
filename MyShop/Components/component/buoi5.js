import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, AsyncStorage, TextInput} from 'react-native';
//import AsyncStorage from '@react-native-community/async-storage';

export default class Buoi5 extends Component{
    constructor(props){
        super(props);
        this.state={
            un:"",
            pa:"",
            kq:"Chua Login",
            token:"..."
        }
    }
    Login(){
        fetch("http://192.168.1.4/demoJWT/ngay58/taoToken.php",{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                "USERNAME":this.state.un,
                "PASSWORD":this.state.pa
            })
            })
            .then((response)=>response.json())
            .then((responseJson)=>{
            console.log(responseJson);
            this.setState({
                kq:responseJson["token"]
            });
        })
    }
    render(){
        return(
            <View style={styles.wrapper}>
                <View style={styles.box}>
                    <Text>LOGIN FORM</Text>
                </View>
                <View style={styles.box}>
                    <TextInput style={{height:40, borderTopColor:"gray", borderWidth:1}}
                    onChangeText={(un)=>this.setState({un})}
                    placeholder = "Username"
                    value = {this.setState.un}
                    >

                    </TextInput>
                </View>
                <View style={styles.box}>
                <TextInput style={{height:40, borderTopColor:"gray", borderWidth:1}}
                    onChangeText={(pa)=>this.setState({pa})}
                    placeholder = "Password"
                    value = {this.setState.pa}
                    >

                    </TextInput>
                </View>
                <View style={styles.box}>
                    <TouchableOpacity onPress={()=>{this.Login()}}>
                        <Text>LOGIN</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.box1}>
                    <Text>{this.state.kq}</Text>
                    <Text>{this.state.token}</Text>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    wrapper:{flex:1, backgroundColor:"yellow", padding:50},
    box:{flex:1,alignItems:"center", justifyContent:"center"},
    box1:{flex:3, alignItems:"center", justifyContent:"center"}
});