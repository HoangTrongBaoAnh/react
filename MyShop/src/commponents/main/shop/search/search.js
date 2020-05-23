import React, { Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import NavigationExperimental from "react-native-deprecated-custom-components";

import Searchview from './serachview.js';
import Detail from "../productdetail/productdetail.js";

export default class Search extends Component{
    render(){
        return(
            <NavigationExperimental.Navigator
                initialRoute={{name:"SEARCH_VIEW"}}
                renderScene={(route, navigator)=>{
                    switch(route.name){
                        case 'SEARCH_VIEW': return <Searchview navigator={navigator} navigator={navigator} />;
                        default: return <Detail navigator={navigator} />;
                    }
                }}
            />
        );
    }
}

