import React, {Component} from "react";
import {View, Text, TouchableOpacity} from "react-native";

export default class Manhinha extends Component{
    render(){
        return(
            <View style={{flex:1, backgroundColor:"yellow"}}>
                <Text style={{fontSize:100, color:"white"}}>B</Text>
                <TouchableOpacity onPress={()=>{this.props.goBack()}}>
                    <Text style={{color:"white"}}>Back</Text>
                </TouchableOpacity>
                <Text>{this.props.sweet}</Text>
            </View>
        );
    }
}