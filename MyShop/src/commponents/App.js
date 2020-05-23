import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import NavigationExperimental from "react-native-deprecated-custom-components";
import Authentication from "./authentication/authentication.js";
import Changeinfo from "./changeinfo/changeinfo.js";
import Main from "./main/main.js";
import Orderhistory from "./orderhistory/orderhistory.js";



StatusBar.setHidden(true);

export default class App extends Component{
    render(){
        return(
            <NavigationExperimental.Navigator
                initialRoute={{name:"MAIN"}}
                renderScene={(route, navigator)=>{
                    switch(route.name){
                        case 'MAIN': return <Main navigator={navigator}></Main>;
                        case 'CHANGE_INFO': return <Changeinfo navigator={navigator}></Changeinfo>;
                        case 'AUTHENTICATION': return <Authentication navigator={navigator}></Authentication>;
                        default: return <Orderhistory navigator={navigator}></Orderhistory>;
                    }
                }}
                configureScene={route => {
                    if(route.name === 'AUTHENTICATION'){
                        return NavigationExperimental.Navigator.SceneConfigs.FloatFromRight;

                    }
                    else{
                        return NavigationExperimental.Navigator.SceneConfigs.FloatFromLeft;
                    }
                }}
            />
        );
    }
}