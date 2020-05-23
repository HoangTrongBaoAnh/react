import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

export default class ConNguoi extends Component{
    constructor(props){
        super(props);
        this.state={
            chieucao:0
        }
    }
    Clickme(){
        this.setState({
            chieucao:this.state.chieucao + 100
        });
    }
    render(){
        return(
            <TouchableOpacity onPress={()=>{this.Clickme()}}>
                <View style={ao.bao}>
                    <Text>{this.props.hoten}</Text>
                    <TouchableOpacity>
                        <Text>{this.state.chieucao}</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        );
    }
}

var ao = StyleSheet.create({
    bao:{width:100,height:100, backgroundColor: "yellow", margin:20}
});