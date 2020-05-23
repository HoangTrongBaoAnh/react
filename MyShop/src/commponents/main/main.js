import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Menu from './menu.js';
import Shop from './shop/shop.js';
import Drawer from 'react-native-drawer';

export default class Main extends Component{
    gotoauthentication(){
        const { navigator } = this.props;
        navigator.push({name:"AUTHENTICATION"});
    }
    gotochangeinfo(){
        const { navigator } = this.props;
        navigator.push({name:"CHANGE_INFO"});
    }
    gotoorderhistory(){
        const { navigator } = this.props;
        navigator.push({name:"ORDERHISTORY"});
    }
    closeControlPanel = () => {
        this._drawer.close()
      };
    openControlPanel = () => {
        this._drawer.open()
    };
    render(){
        const { navigator } = this.props;
        return(
            <Drawer
                tapToClose={true}
                openDrawerOffset={0.5}
                ref={(ref) => this._drawer = ref}
                content={<Menu navigator={navigator} />}
                >
                <Shop open={this.openControlPanel.bind(this)} />
            </Drawer>
        );
    }
}
