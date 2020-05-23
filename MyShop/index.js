/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import NavigationExperimental from "react-native-deprecated-custom-components";

import App from "./src/commponents/App.js"

export default class MyShop extends Component{
    /*
    renderScene(Route, NavigationExperimental){
        switch(Route.name){
            case "mha": return(
                <Mha gotoB={()=>{
                    NavigationExperimental.push({name:"mhb",keo:"Socola"})
                }}/>
            )
            case "mhb": return(
                <Mhb goBack={()=>{NavigationExperimental.pop();}}
                    sweet={Route.keo}
                />
            )
            case "mhc": return(
                <Mhc />
            )
        }
    }
    */
    render() {
        return(
            <App></App>
            //<Buoi5></Buoi5>
            
            //<Tab></Tab>
            
            //<Layout></Layout>
            
            //<Asy></Asy>
            //<Sidemenu></Sidemenu>

            //<App></App>

            //<Vdlistview></Vdlistview>
            /* vd ve navigator
            <View style={{flex:1}}>
                <View style={{flex:1}}>
                    <NavigationExperimental.Navigator
                        initialRoute={{name:"mha"}}
                        renderScene={this.renderScene}
                        
                    />
                </View>
                <View style={{flex:1}}>
                    <NavigationExperimental.Navigator
                        initialRoute={{name:"mha"}}
                        renderScene={this.renderScene}
                        configureScene={(route, routeStack) =>
                            NavigationExperimental.Navigator.SceneConfigs.FloatFromBottom}
                    />
                </View>
            </View>
            */
        );
    }
}

AppRegistry.registerComponent("MyShop", () => MyShop);
