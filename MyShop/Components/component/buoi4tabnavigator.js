import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

export default class Tab_nav extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedTab:"home"
        }
    }
    render(){
        return(
            <TabNavigator tabBarStyle={{backgroundColor:"red"}}>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="Home"
                    
                    badgeText="1"
                    renderIcon={() => <Image source={require("../Images/hone_black.png")} />}
                    renderSelectedIcon={() => <Image source={require("../Images/icons8-home-26.png")} />}
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    <View style={{flex:1, backgroundColor:"yellow"}}></View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'shop'}
                    title="Shop"
                    //badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'shop' })}>
                    <View style={{flex:1, backgroundColor:"red"}}></View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'cart'}
                    title="Cart"
                    //badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'cart' })}>
                    <View style={{flex:1, backgroundColor:"pink"}}></View>
                </TabNavigator.Item>
            </TabNavigator>
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