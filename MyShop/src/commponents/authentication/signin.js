import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, TextInput} from 'react-native';;
import dangnhap from '../../api/dangnhap.js';
import global from '../global.js';

import savetoken from '../../api/savetoken.js';
//import gettoken from '../../api/gettoken.js'

const {height} = Dimensions.get('window');

export default class Signin extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    /*|
    componentDidMount(){
        gettoken()
        .then(a => console.log('token:::' + a));
    }
    */
    dangnhap(){
        const {email, password} = this.state;
        dangnhap(email,password)
        .then(res => {
            global.dadangnhap(res.user);
            this.props.gobackMain();
            savetoken(res.token);
        })
        .catch(err => console.log(err));
    }

    render(){
        const {email, password} = this.state;
        return(
            <View>
                <TextInput
                 style={styles.input}
                 placeholder="Enter ur email"
                 value={email}
                 onChangeText={text => this.setState({email: text})}>
                </TextInput>
                <TextInput
                 style={styles.input}
                 placeholder="Enter ur password"
                 value={password}
                 onChangeText={text => this.setState({password: text})}
                 secureTextEntry>
                 </TextInput>
                <TouchableOpacity style={styles.btnsigninnow} onPress={this.dangnhap.bind(this)}>
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
