import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Dimensions, Image, StyleSheet} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './home/home.js';
import Contact from './contact/contact.js';
import Search from './search/search.js';
import Cart from './cart/cart.js';
import Header from './header.js';
import fetchdata from '../../../api/fetchdata.js';
import Savecart from '../../../api/savecart.js';
import Getcart from '../../../api/getcart.js';
import global from "../../global.js";

const {height} = Dimensions.get('window');

export default class Shop extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedTab:"home",
            types: [],
            topproduct: [],
            cartarray: []
        }
        global.addproducttocart = this.addproducttocart.bind(this);
        global.tangsoluong = this.tangsoluong.bind(this);
        global.giamsoluong = this.giamsoluong.bind(this);
        global.xoasp = this.xoasp.bind(this);    
    }

    componentDidMount(){
        fetchdata()
        .then((responseJson)=>{
            const {type,product} = responseJson;
            this.setState({types: type, topproduct: product})
        });
        Getcart()
        .then(cartarray => this.setState({cartarray}));
    }
    
    tangsoluong(productid){
        const newcart = this.state.cartarray.map(e => {
            if(e.product.id !== productid) return e;
            return {product: e.product, quantity: e.quantity + 1};
0
        });
        this.setState({cartarray: newcart},
        () => Savecart(this.state.cartarray));
    }

    addproducttocart(product){
        const isexit = this.state.cartarray.some(e => e.product.id === product.id);
        if(isexit) return this.tangsoluong(product.id)
        this.setState({cartarray: this.state.cartarray.concat({product, quantity: 1})},
        () => Savecart(this.state.cartarray));
        
    }

    

    giamsoluong(productid){
        const newcart = this.state.cartarray.map(e => {
            if(e.product.id !== productid) return e;
            return {product: e.product, quantity: e.quantity - 1};

        });
        this.setState({cartarray: newcart},
            () => Savecart(this.state.cartarray));
    }

    xoasp(productid){
        const newcart = this.state.cartarray.filter(e => e.product.id !== productid);
        this.setState({cartarray: newcart},
            () => Savecart(this.state.cartarray));
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
                        badgeText={this.state.cartarray.length}
                        renderIcon={() => <Image style={styles.icon} source={require("../../../../media/appicon/cart0.png")} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("../../../../media/appicon/cart.png")} />}
                        onPress={() => this.setState({ selectedTab: 'cart' })}
                        selectedTitleStyle={{color:"#34b089", fontFamily:"avenir"}}>
                        <Cart cartarray={this.state.cartarray}></Cart>
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