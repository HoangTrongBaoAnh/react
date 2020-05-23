import React, { Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import Collection from "./collection.js";
import Category from "./category.js";
import Topproduct from "./topproduct.js";

export default class Home extends Component{
    render(){
        const{types, topproduct} = this.props;
        return(
            <ScrollView style={{flex:1, backgroundColor:'#dbdbd8'}}>
                <Collection />
                <Category navigator={this.props.navigator} types={types}/>
                <Topproduct navigator={this.props.navigator} topproduct={topproduct}></Topproduct>
            </ScrollView>
        );
    }
}

