import React, { Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, ScrollView, Image} from 'react-native';

export default class Listproduct extends Component{
    goback(){
        const {navigator} = this.props;
        navigator.pop();
    }
    golist(){
        const {navigator} = this.props;
        navigator.push({name: 'DETAIL'});
    }
    render(){
        return(
            <View style={styles.containter}>
                <ScrollView style={styles.wraper}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={this.goback.bind(this)}>
                            <Image style={styles.icon} source={require("../../../../../media/appicon/backList.png")}/>
                        </TouchableOpacity>
                        <Text style={styles.title}>Little dress</Text>
                        <View style={{width: 30}}></View>
                    </View>
                    <View style={styles.prcontainer}>
                        <Image style={styles.primage} source={require("../../../../../media/temp/sp1.jpeg")}/>
                        <View style={styles.prinfo}>
                            <Text style={styles.name}>Lave sleeve Si</Text>
                            <Text style={styles.price}>117$</Text>
                            <Text style={styles.material}>Material silk</Text>
                            <View style={styles.lsinfo}>
                                <Text style={styles.color}>Color royal blue</Text>
                                <View style={{backgroundColor:"cyan", width: 15, height: 15, borderRadius: 8}}></View>
                                <TouchableOpacity>
                                    <Text style={styles.showdetail}>Show Detail</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.prcontainer}>
                        <Image style={styles.primage} source={require("../../../../../media/temp/sp1.jpeg")}/>
                        <View style={styles.prinfo}>
                            <Text style={styles.name}>Lave sleeve Si</Text>
                            <Text style={styles.price}>117$</Text>
                            <Text style={styles.material}>Material silk</Text>
                            <View style={styles.lsinfo}>
                                <Text style={styles.color}>Color royal blue</Text>
                                <View style={{backgroundColor:"cyan", width: 15, height: 15, borderRadius: 8}}></View>
                                <TouchableOpacity>
                                    <Text style={styles.showdetail}>Show Detail</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.prcontainer}>
                        <Image style={styles.primage} source={require("../../../../../media/temp/sp1.jpeg")}/>
                        <View style={styles.prinfo}>
                            <Text style={styles.name}>Lave sleeve Si</Text>
                            <Text style={styles.price}>117$</Text>
                            <Text style={styles.material}>Material silk</Text>
                            <View style={styles.lsinfo}>
                                <Text style={styles.color}>Color royal blue</Text>
                                <View style={{backgroundColor:"cyan", width: 15, height: 15, borderRadius: 8}}></View>
                                <TouchableOpacity>
                                    <Text style={styles.showdetail}>Show Detail</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.prcontainer}>
                        <Image style={styles.primage} source={require("../../../../../media/temp/sp1.jpeg")}/>
                        <View style={styles.prinfo}>
                            <Text style={styles.name}>Lave sleeve Si</Text>
                            <Text style={styles.price}>117$</Text>
                            <Text style={styles.material}>Material silk</Text>
                            <View style={styles.lsinfo}>
                                <Text style={styles.color}>Color royal blue</Text>
                                <View style={{backgroundColor:"cyan", width: 15, height: 15, borderRadius: 8}}></View>
                                <TouchableOpacity>
                                    <Text style={styles.showdetail}>Show Detail</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.prcontainer}>
                        <Image style={styles.primage} source={require("../../../../../media/temp/sp1.jpeg")}/>
                        <View style={styles.prinfo}>
                            <Text style={styles.name}>Lave sleeve Si</Text>
                            <Text style={styles.price}>117$</Text>
                            <Text style={styles.material}>Material silk</Text>
                            <View style={styles.lsinfo}>
                                <Text style={styles.color}>Color royal blue</Text>
                                <View style={{backgroundColor:"cyan", width: 15, height: 15, borderRadius: 8}}></View>
                                <TouchableOpacity>
                                    <Text style={styles.showdetail}>Show Detail</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    containter: {
        flex: 1,
        backgroundColor: "#dbdbdb",
        padding: 10
    },
    wraper: {
        backgroundColor: "#fff",
        shadowColor:"#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        

        elevation: 8,
        paddingHorizontal: 10
    },
    header: {
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5,
        alignItems: "center"
    },
    icon: {
        height: 30,
        width: 30
    },
    title: {
        fontFamily: "avenir",
        color: "#b10d65",
        fontSize: 20
    },
    prcontainer: {
        flexDirection: "row",
        paddingVertical: 15,
        borderColor: "#f0f0f0",
        borderTopWidth: 1,
        
    },
    prinfo: {
        justifyContent:"space-between",
        marginLeft: 15,
        flex: 1
    },
    primage: {
        width: 90,
        height: (90*452)/361
    },
    lsinfo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    name: {
        fontFamily: "avenir",
        color: "#bcbcbc",
        fontSize: 18,
        fontWeight: '400'
    },
    price: {
        color: "#b10d65",
        fontFamily: 'avenir'
    },
    material: {
        fontFamily: 'avenir'
    },
    color: {
        fontFamily: 'avenir'
    },
    showdetail: {
        color: "#b10d65",
        fontFamily: 'avenir',
        fontSize: 13,
    } 
})
/*
<Text>List product</Text>
                <TouchableOpacity onPress={this.goback.bind(this)}>
                    <Text>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.golist.bind(this)}>
                    <Text>gotodetail</Text>
                </TouchableOpacity>

*/