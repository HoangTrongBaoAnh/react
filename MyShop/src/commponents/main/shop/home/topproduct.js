import React, { Component} from 'react';
import {Text, View, Dimensions, Image, StyleSheet, TouchableOpacity} from 'react-native';
import ListView from "deprecated-react-native-listview";

const {width} = Dimensions.get("window");

export default class Topproduct extends Component{
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
        const {topproduct} = this.props;
        this.state={
            dataSource: ds.cloneWithRows(topproduct)
        }
    }
    
    gotodetail (product) {
        const {navigator} = this.props;
        navigator.push({name: 'DETAIL',product});
    }
    /*
    <ListView contentContainerStyle={styles.body}
                    dataSource = {this.state.dataSource}
                    renderRow = {product => (
                        <TouchableOpacity onPress={this.gotodetail.bind(this)}>
                            <View style={styles.productcontainter}>
                                    <Image style={styles.productimage} source={require("../../../../../media/temp/sp1.jpeg")}></Image>
                                    <Text style={styles.producname}>PRODUCT NAME</Text>
                                    <Text style={styles.productprice}>400$</Text>
                            </View>
                        </TouchableOpacity>
                    )}
               />
    */
    render(){
        return(
            <View style={styles.wrapper}>
               <View style={styles.titlecontainer}>
                   <Text style={styles.title}>TOP PRODUCT</Text>
               </View>
               <View style={styles.body}>
                    {this.props.topproduct.map(e =>(
                        <TouchableOpacity onPress={() => this.gotodetail(e)} key={e.id}>
                            <View style={styles.productcontainter}>
                                <Image style={styles.productimage} source={{ uri: `http://192.168.100.13/app/images/product/${e.images[0]}` }}></Image>
                                <Text style={styles.producname}>{e.name.toUpperCase()}</Text>
                                <Text style={styles.productprice}>{e.price}$</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
               </View>
            </View>
        );
    }
}

const prwidth = (width - 60) /2;
const prgheight = prwidth/361 * 452;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor:"#fff",
        margin: 10,
        shadowColor:"#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        

        elevation: 8,
    },
    titlecontainer: {
        height:50,
        justifyContent:"center",
        paddingLeft:10,
        
    },
    title: {
        fontSize:20,
        color:"#d3d3cf"
    },
    body: {
        flexDirection: "row",
        justifyContent:"space-around",
        flexWrap:"wrap",
        paddingBottom: 10
    },
    productcontainter: {
        width: prwidth,
        shadowColor:"#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        
        
        borderColor: '#fff',
        
        
        elevation: 2,
    },
    productimage: {
        width: prwidth,
        height: prgheight
    },
    producname:{
        marginVertical: 5,
        paddingLeft: 10,
        fontFamily:"avenir",
        color:"#d3d3cf"
    },
    productprice:{
        paddingLeft: 10,
        fontFamily:"avenir",
        marginBottom: 5
    }
    
})

/*
<TouchableOpacity onPress={this.gotodetail.bind(this)}>
                        <View style={styles.productcontainter}>
                                <Image style={styles.productimage} source={require("../../../../../media/temp/sp1.jpeg")}></Image>
                                <Text style={styles.producname}>PRODUCT NAME</Text>
                                <Text style={styles.productprice}>400$</Text>
                        </View>
                   </TouchableOpacity>
                   <TouchableOpacity onPress={this.gotodetail.bind(this)}>
                        <View style={styles.productcontainter}>
                                <Image style={styles.productimage} source={require("../../../../../media/temp/sp2.jpeg")}></Image>
                                <Text style={styles.producname}>PRODUCT NAME</Text>
                                <Text style={styles.productprice}>260$</Text>
                        </View>
                   </TouchableOpacity>
                   <View style={{height:10, width}}></View>
                   <TouchableOpacity onPress={this.gotodetail.bind(this)}>
                        <View style={styles.productcontainter}>
                                <Image style={styles.productimage} source={require("../../../../../media/temp/sp3.jpeg")}></Image>
                                <Text style={styles.producname}>PRODUCT NAME</Text>
                                <Text style={styles.productprice}>PRODUCT PRICE</Text>
                        </View>
                   </TouchableOpacity>
                   <TouchableOpacity onPress={this.gotodetail.bind(this)}>
                        <View style={styles.productcontainter}>
                                <Image style={styles.productimage} source={require("../../../../../media/temp/sp4.jpeg")}></Image>
                                <Text style={styles.producname}>PRODUCT NAME</Text>
                                <Text style={styles.productprice}>PRODUCT PRICE</Text>
                        </View>
                   </TouchableOpacity>
*/