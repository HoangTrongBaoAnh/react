import React, { Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import NavigationExperimental from "react-native-deprecated-custom-components";

import Homeview from "./homeview.js";
import List from "../listproduct/listproduct.js";
import Detail from "../productdetail/productdetail.js";

export default class Home extends Component{
    render(){
        const {types, topproduct} = this.props;

        return(
            
            <NavigationExperimental.Navigator
                initialRoute={{name:"HOME_VIEW"}}
                renderScene={(route, navigator)=>{
                    switch(route.name){
                        case 'HOME_VIEW': return <Homeview navigator={navigator} types={types} topproduct={topproduct}/>;
                        case 'LIST': return <List navigator={navigator} />;
                        default: return <Detail navigator={navigator} product={route.product} />;
                    }
                }}
            />
        );
    }
}

