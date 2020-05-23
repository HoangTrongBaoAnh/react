import React, {Component} from "react";
import {View, Text, TouchableOpacity} from "react-native";

export default class Manhinha extends Component{
    render(){
        return(
            <View style={{flex:1, backgroundColor:"blue"}}>
                <Text style={{fontSize:100, color:"white"}}>A</Text>
                <TouchableOpacity onPress={()=>{this.props.gotoB()}}>
                    <Text style={{color:"white"}}>Go to B</Text>
                </TouchableOpacity>
            </View>
        );
    }
}