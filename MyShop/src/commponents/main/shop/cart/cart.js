import React, { Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import NavigationExperimental from "react-native-deprecated-custom-components";

import Cartview from './cartview.js';
import Detail from "../productdetail/productdetail.js";

export default class Cart extends Component{
    render(){
        return(
            <NavigationExperimental.Navigator
                initialRoute={{name:"CART_VIEW"}}
                renderScene={(route, navigator)=>{
                    switch(route.name){
                        case 'CART_VIEW': return <Cartview navigator={navigator} navigator={navigator} />;
                        default: return <Detail navigator={navigator} />;
                    }
                }}
            />
        );
    }
}

