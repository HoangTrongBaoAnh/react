import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, TextInput, Alert} from 'react-native';
import dangki from '../../api/dangki.js';

const {height} = Dimensions.get('window');

export default class Authentication extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : '',
            email : '',
            password : '',
            repassword : ''
        }
    }

    dangkinguoidung() {
        const {name, email, password} = this.state;
        dangki(email, name, password)
        .then(res => {
            if(res === 'THANH_CONG') this.onsucess();
            else{
                this.onfailed();
            }
        });
    }
    onsucess(){
        Alert.alert(
            'Notice',
            "Đăng kí thành công",
            [
              { text: "OK", onPress: () => this.props.gotosignin()}
            ],
            { cancelable: false }
        );
    }
    onfailed(){
        Alert.alert(
            'Notice',
            "Đăng kí thấy bại",
            [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        );
    }
    render(){
        return(
            <View>
            <TextInput
                style={styles.input}
                 placeholder="Enter ur name"
                 value={this.state.name}
                 onChangeText={text => this.setState({name: text})}>
            </TextInput>
            <TextInput
             style={styles.input}
              placeholder="Enter ur email"
              value={this.state.email}
              onChangeText={text => this.setState({email: text})}>
              </TextInput>
            <TextInput
             style={styles.input}
              placeholder="Enter ur password"
              value = {this.state.password}
              secureTextEntry
              onChangeText={text => this.setState({password: text})}>
              </TextInput>
            <TextInput
             style={styles.input}
              placeholder="Re-Enter ur password"
              value={this.state.repassword}
              secureTextEntry
              onChangeText={text => this.setState({repassword: text})}>
              </TextInput>
            <TouchableOpacity style={styles.btnsigninnow} onPress={this.dangkinguoidung.bind(this)}>
                <Text style={styles.btnsigninnowtext}>SIGN UP NOW</Text>
            </TouchableOpacity>
        </View>
        );
    }
}
const styles = StyleSheet.create({
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
