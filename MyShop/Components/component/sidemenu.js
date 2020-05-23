import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Drawer from 'react-native-drawer';

export default class Sidemenu extends Component{
    closeControlPanel = () => {
        this._drawer.close()
      };
      openControlPanel = () => {
        this._drawer.open()
      };
    
    render(){
        return(
            <Drawer
                tapToClose={true}
                openDrawerOffset={0.5}
                ref={(ref) => this._drawer = ref}
                content={
                   <View style={{flex:1,backgroundColor:"yellow"}}></View>
                }
                >
                <View style={{flex:1,backgroundColor:"red", padding:50}}>
                    <TouchableOpacity onPress={()=>{this.openControlPanel()}}>
                        <Text>Open</Text>
                    </TouchableOpacity>
                </View>
            </Drawer>
        );
    }
}