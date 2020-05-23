import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default class App extends Component{
    constructor(props){
        super(props),
        this.state={
            HOTEN:"",
            USERNAME:"",
            PASSWORD:"",
            results:"..."
        }
    }

    clickPlus(){
        fetch("http://192.168.1.4/vd/dangky.php", {
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                "HOTEN":this.state.HOTEN,
                "USERNAME":this.state.USERNAME,
                "PASSWORD":this.state.PASSWORD

            })
        })
        .then((response)=>response.json())
        .then((responseJson)=>{
            this.setState({results:responseJson.id})
        })
        .catch((error)=>{console.log(error)})
    }

    render(){
        return(
            <View style={styles.wrapper}>
                <Text style={styles.text1}>Nhap lieu</Text>
                <TextInput
                    style={{height:40, borderColor:"gray", borderWidth:1}}
                    onChangeText={(HOTEN)=>{this.setState({HOTEN})}}
                    value={this.state.HOTEN}
                />
                <TextInput
                    style={{height:40, borderColor:"gray", borderWidth:1}}
                    onChangeText={(USERNAME)=>{this.setState({USERNAME})}}
                    value={this.state.USERNAME}
                    placeholder={"nhap du lieu"}
                />
                <TextInput
                    style={{height:40, borderColor:"gray", borderWidth:1}}
                    onChangeText={(PASSWORD)=>{this.setState({PASSWORD})}}
                    value={this.state.PASSWORD}
                    placeholder={"nhap du lieu"}
                />
                <TouchableOpacity style={styles.cong} onPress={()=>{this.clickPlus()}}>
                    <Text style={styles.congtext}>Dang ki</Text>
                </TouchableOpacity>
                <View style={styles.result}>
                    <Text>{this.state.results}</Text>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    wrapper:{flex:1, backgroundColor:"yellow", padding:20,},
    text1:{color:"black",padding:5},
    cong:{padding:30,backgroundColor:"black",alignItems:"center"},
    congtext:{color:"white"},
    result:{height:30,backgroundColor:"white",alignItems:"center"}
})