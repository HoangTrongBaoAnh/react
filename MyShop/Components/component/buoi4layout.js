import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class Layout extends Component{
    
    render(){
        return(
            <View style={styles.wrapper}>
                <View style={styles.ovuong}></View>
                <View style={styles.ovuong}>
                    <View style={styles.o1}></View>
                    <View style={styles.o2}></View>
                    <View style={styles.o3}></View>
                </View>
                <View style={styles.ovuong}></View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    wrapper:{backgroundColor:"yellow", flex:1},
    ovuong:{backgroundColor:"red",flex:1, flexDirection:"row",borderWidth:1},
    o1:{flex:1, backgroundColor:"yellow"},
    o2:{flex:1, backgroundColor:"pink"},
    o3:{flex:1, backgroundColor:"green"}
});