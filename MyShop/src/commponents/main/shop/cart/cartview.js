import React, { Component } from 'react';
import { 
    View, Text, TouchableOpacity, ScrollView,
    Dimensions, StyleSheet, Image 
} from 'react-native';
import ListView from "deprecated-react-native-listview";

import sp1 from '../../.././../../media/temp/sp1.jpeg';

import global from "../../../global.js";
import * as url from "../../../../api/url.js";
import sendorder from '../../../../api/sendorder.js';
import gettoken from '../../../../api/gettoken.js';

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

export default class CartView extends Component {
    tangsoluong(id){
        global.tangsoluong(id);
    }
    giamsoluong(id){
        global.giamsoluong(id);
    }
    giamsoluong(id){
        global.xoasp(id);
    }
    xoasp(id){
        global.xoasp(id);
    }
    gotoDetail(product) {
        const {navigator} = this.props;
        navigator.push({name: 'DETAIL', product});
    }
    async sendorder(){
        try{
            const token = await gettoken();
            const arrayDetail = this.props.cartarray.map(e => ({
                id: e.product.id,
                quantity: e.quantity
            }));
            const kq = await sendorder(token, arrayDetail);
            if(kq === 'THEM_THANH_CONG'){
                console.log("thanhcong");
            }
            else{
                console.log('thatbai',kq);
            }
        }
        catch(e){
            console.log(e);
        }
    }
    render() {
        const { main, checkoutButton, checkoutTitle, wrapper,
        product, mainRight, productController,
            txtName, txtPrice, productImage, numberOfProduct, 
            txtShowDetail, showDetailContainer } = styles;
        const {cartarray} = this.props;

        const arrtotal = cartarray.map(e => e.product.price * e.quantity);
        const total = arrtotal.length ? arrtotal.reduce((a,b) => a+b) : 0;

        return (
            <View style={wrapper}>
                <ListView
                    contentContainerStyle={main}
                    enableEmptySections
                    dataSource={new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2}).cloneWithRows(cartarray)}
                    renderRow={e => (
                        <View style={product}>
                            <Image source={{ uri: url.url+`/app/images/product/${e.product.images[0]}` }} style={productImage} />
                            <View style={[mainRight]}>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Text style={txtName}>{toTitleCase(e.product.name)}</Text>
                                    <TouchableOpacity onPress={() => this.xoasp(e.product.id)}>
                                        <Text style={{ fontFamily: 'Avenir', color: '#969696' }}>X</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={txtPrice}>{e.product.price}$</Text>
                                </View>
                                <View style={productController}>
                                    <View style={numberOfProduct}>
                                        <TouchableOpacity onPress={() => this.tangsoluong(e.product.id)}>
                                            <Text>+</Text>
                                        </TouchableOpacity>
                                        <Text>{e.quantity}</Text>
                                        <TouchableOpacity onPress={() => this.giamsoluong(e.product.id)}>
                                            <Text>-</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity style={showDetailContainer} onPress={() => this.gotoDetail(e.product)}>
                                        <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )}
                />
                <TouchableOpacity style={checkoutButton} onPress={this.sendorder.bind(this)}>
                    <Text style={checkoutTitle}>TOTAL {total}$ CHECKOUT NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#DFDFDF'
    },
    checkoutButton: {
        height: 50,
        margin: 10,
        marginTop: 0,
        backgroundColor: '#2ABB9C',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    main: {
        width, backgroundColor: '#DFDFDF'
    },
    checkoutTitle: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Avenir'
    },
    product: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    productImage: {
        width: imageWidth,
        height: imageHeight,
        flex: 1,
        resizeMode: 'center'
    },
    mainRight: {
        flex: 3,
        justifyContent: 'space-between'
    },
    productController: {
        flexDirection: 'row'
    },
    numberOfProduct: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    txtName: {
        paddingLeft: 20,
        color: '#A7A7A7',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtPrice: {
        paddingLeft: 20,
        color: '#C21C70',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtShowDetail: {
        color: '#C21C70',
        fontSize: 10,
        fontWeight: '400',
        fontFamily: 'Avenir',
        textAlign: 'right',
    },
    showDetailContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});      