import React, { Component} from 'react';
import {Text,StyleSheet, View, TouchableOpacity, Dimensions, Image, TextInput} from 'react-native';

const {height} = Dimensions.get('window');

import icmenu from "../../../../media/appicon/ic_menu.png";
import iclogo from "../../../../media/appicon/ic_logo.png";


export default class Header extends Component{
    render(){
        return(
            <View style={styles.wrapper}>
                <View  style={styles.row1}>
                    <TouchableOpacity onPress={this.props.onOpen}>
                        <Image style={styles.icon} source={icmenu}/>
                    </TouchableOpacity>
                    <Text style={styles.title}>Wearing a dress</Text>
                    <Image style={styles.icon} source={iclogo} />
                </View>
                <TextInput style={styles.text1} placeholder="What do u want to buy ?">
                </TextInput>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {height: height/8, backgroundColor:"#34b089", padding:10, justifyContent:"space-around"},
    row1: {flexDirection:"row", justifyContent:"space-between"},
    text1: {height:height/23, backgroundColor:"#fff",padding:5, paddingLeft:10 },
    icon: {height:25, width:25},
    title: {color:"#fff", fontSize:20, fontFamily:"vn_times" }
})
