import React, { Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image, unstable_enableLogBox} from 'react-native';

import profile from "../../../media/temp/profile.png";

export default class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {islogin : true};
    }
    gotoauthentication(){
        const { navigator } = this.props;
        navigator.push({name:"AUTHENTICATION"});
    }
    gotochangeinfo(){
        const { navigator } = this.props;
        navigator.push({name:"CHANGE_INFO"});
    }
    gotoorderhistory(){
        const { navigator } = this.props;
        navigator.push({name:"ORDERHISTORY"});
    }
    render(){
        const logout = (
            <View style={{flex:1}} >
                <TouchableOpacity style={styles.btn} onPress={this.gotoauthentication.bind(this)}>
                    <Text style={styles.text}>SIGN IN</Text>
                </TouchableOpacity>
            </View>
        );

        const login = (
            <View style={styles.logincontainer}>
                <Text style={styles.user}>Administrator</Text>
                <View>
                    <TouchableOpacity style={styles.btnsignin} onPress={this.gotoorderhistory.bind(this)}>
                        <Text style={styles.textsignin}>order history</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnsignin} onPress={this.gotochangeinfo.bind(this)}>
                        <Text style={styles.textsignin}>Change info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnsignin}>
                        <Text style={styles.textsignin}>Sign out</Text>
                    </TouchableOpacity>
                </View>
                <View></View>
            </View>
        );
        const main = this.state.islogin ? login : logout;
        return(
            <View style={styles.container}>
                <Image style={styles.icon} source={profile}></Image>
                {main}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#34b089",
        borderRightWidth: 3,
        borderColor: "#fff",
        alignItems:"center",
        
    },
    icon: {
        width: 120,
        height: 150,
        borderRadius: 60,
        marginVertical: 30
    },
    btn: {
        height:50,
        backgroundColor: "#fff",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:5,
        paddingHorizontal: 55
    },
    text: {
        color:"#34b089",
        fontSize: 15,
        fontFamily: "avenir"
    },
    btnsignin: {
        height:45,
        backgroundColor: "#fff",
        justifyContent:"center",
        paddingLeft: 10,
        borderRadius:5,
        width: 165,
        marginBottom:10
    },
    textsignin: {
        color:"#34b089",
        fontSize: 20
    },
    logincontainer: {
        flex:1,
        justifyContent:"space-between",
        alignItems:"center"
    },
    user: {
        color:"#fff",
        fontFamily:"avenir",
        fontSize: 20
    }
})

