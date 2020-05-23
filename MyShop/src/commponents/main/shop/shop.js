import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Dimensions, Image, StyleSheet} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './home/home.js';
import Contact from './contact/contact.js';
import Search from './search/search.js';
import Cart from './cart/cart.js';
import Header from './header.js';

const {height} = Dimensions.get('window');


export default class Shop extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedTab:"home",
            types: [],
            topproduct: []
        }
    }
    componentDidMount(){

        fetch("http://192.168.100.13/app/")
        .then((response)=>response.json())
        .then((responseJson)=>{
            const {type,product} = responseJson;
            this.setState({types: type, topproduct: product})
        });
        
    }
    
    openmenu(){
        const {open} = this.props;
        open();
    }
    render(){
        return(
            <View style={{flex:1}}>
                <Header onOpen={this.openmenu.bind(this)} />
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        renderIcon={() => <Image style={styles.icon} source={require("../../../../media/appicon/home0.png")} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("../../../../media/appicon/home.png")} />}
                        onPress={() => this.setState({ selectedTab: 'home' })}
                        selectedTitleStyle={{color:"#34b089", fontFamily:"avenir"}}>
                        <Home types={this.state.types} topproduct={this.state.topproduct}></Home>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'cart'}
                        title="Cart"
                        badgeText="1"
                        renderIcon={() => <Image style={styles.icon} source={require("../../../../media/appicon/cart0.png")} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("../../../../media/appicon/cart.png")} />}
                        //badgeText="1"
                        onPress={() => this.setState({ selectedTab: 'cart' })}
                        selectedTitleStyle={{color:"#34b089", fontFamily:"avenir"}}>
                        <Cart></Cart>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'search'}
                        title="Search"
                        renderIcon={() => <Image style={styles.icon} source={require("../../../../media/appicon/search0.png")} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("../../../../media/appicon/search.png")} />}
                        //badgeText="1"
                        selectedTitleStyle={{color:"#34b089", fontFamily:"avenir"}}
                        onPress={() => this.setState({ selectedTab: 'search' })}>
                        <Search></Search>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'contact'}
                        title="Contact"
                        renderIcon={() => <Image style={styles.icon} source={require("../../../../media/appicon/contact0.png")} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("../../../../media/appicon/contact.png")} />}
                        //badgeText="1"
                        selectedTitleStyle={{color:"#34b089", fontFamily:"avenir"}}
                        onPress={() => this.setState({ selectedTab: 'contact' })}>
                        <Contact></Contact>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>   
        );
    }
}

const styles = StyleSheet.create({
    icon: {height:20, width:20}
})