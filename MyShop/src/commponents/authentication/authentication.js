import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, TextInput} from 'react-native';

import icmenu from "../../../media/appicon/back_white.png";
import iclogo from "../../../media/appicon/ic_logo.png";

const {height} = Dimensions.get('window');

export default class Authentication extends Component{
    gobackMain(){
        const {navigator} = this.props;
        navigator.pop();
    }
    constructor(props){
        super(props);
        this.state = {issignin : true}
    }
    signin(){
        this.setState({issignin:true})
    }
    signup(){
        this.setState({issignin:false})
    }
    render(){
        const signin = (
            <View>
                <TextInput style={styles.input} placeholder="Enter ur email"></TextInput>
                <TextInput style={styles.input} placeholder="Enter ur password"></TextInput>
                <TouchableOpacity style={styles.btnsigninnow}>
                    <Text style={styles.btnsigninnowtext}>SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        );
        const signup = (
            <View>
                <TextInput style={styles.input} placeholder="Enter ur name"></TextInput>
                <TextInput style={styles.input} placeholder="Enter ur email"></TextInput>
                <TextInput style={styles.input} placeholder="Enter ur password"></TextInput>
                <TextInput style={styles.input} placeholder="Re-Enter ur password"></TextInput>
                <TouchableOpacity style={styles.btnsigninnow}>
                    <Text style={styles.btnsigninnowtext}>SIGN UP NOW</Text>
                </TouchableOpacity>
            </View>
        );
        const main = this.state.issignin ? signin : signup;
        const {issignin} = this.state;
        return(
            <View style={styles.container}>
                <View  style={styles.row1}>
                    <TouchableOpacity onPress={this.gobackMain.bind(this)}>
                        <Image style={styles.icon} source={icmenu}/>
                    </TouchableOpacity>
                    <Text style={styles.title}>Wearing a dress</Text>
                    <Image style={styles.icon} source={iclogo} />
                </View>
                {main}
                <View style={styles.controlsign}>
                    <TouchableOpacity style={styles.signin} onPress={this.signin.bind(this)}>
                        <Text style={issignin ? styles.active : styles.inactive}>Sign in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signup} onPress={this.signup.bind(this)}>
                        <Text style={!issignin ? styles.active : styles.inactive}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1 ,
        backgroundColor:"#3eba77",
        padding: 20, 
        justifyContent: "space-between"
    },
    wrapper: {height: height/8, backgroundColor:"#34b089", padding:10, justifyContent:"space-around"},
    row1: {flexDirection:"row", justifyContent:"space-between", alignItems:"center"},
    text1: {height:height/23, backgroundColor:"#fff",padding:5, paddingLeft:10 },
    icon: {height:25, width:25},
    title: {color:"#fff", fontSize:20, fontFamily:"vn_times" },
    controlsign: {
        flexDirection: 'row',
        alignSelf:"stretch"
    },
    active: {
        color: "#3eba77"
    },
    inactive: {
        color: "#070707"
    },
    signin: {
        backgroundColor:"#fff",
        flex: 1,
        alignItems:"center",
        paddingVertical: 15,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        marginRight: 1
    },
    signup: {
        backgroundColor:"#fff",
        flex: 1,
        alignItems:"center",
        paddingVertical: 15,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        marginLeft: 1
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

/*<Text>Authentication</Text>
                <TouchableOpacity onPress={this.gobackMain.bind(this)}>
                    <Text>Go back to main</Text>
                </TouchableOpacity> */