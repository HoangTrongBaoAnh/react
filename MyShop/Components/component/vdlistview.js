import React, {Component} from "react";
import {View, Text, Image, RefreshControl, Alert} from "react-native";
import ListView from "deprecated-react-native-listview";

export default class cdlistView extends Component{
    constructor(props){
        super(props);
        this.state={
            dataSource: new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2}),
            refreshing:false,
            trang:0
        }
    }
    loadNewData(){
        this.setState({
            refreshing:true
        });
        fetch("http://192.168.1.4/vd/vd1.php?trang=" + this.state.trang)
        .then((response)=>response.json())
        .then((responseJson)=>{
            if(responseJson.length != 0){
                console.log(responseJson);
                //mang = mang.concat(responseJson)
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseJson),
                    refreshing:false,
                    trang:this.state.trang + 1
                });
            }
            else{
                Alert.alert(
                    'THONG BAO',
                    'DA HET DU LIEU',
                    [
                        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                        {
                          text: 'Cancel',
                          onPress: () => console.log('Cancel Pressed'),
                          style: 'cancel',
                        },
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                      ],
                      {cancelable: false},
                );
            }
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    render(){
        return(
            <ListView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this.loadNewData.bind(this)}
                    />
                }
                dataSource={this.state.dataSource}
                renderRow={(r)=>
                <View style={{padding:20, borderWidth:1}}>
                    <Text>{r.Id}</Text>
                    <Image 
                        source={{uri: r.Hinh}} 
                        style={{width: 70, height: 100}} 
                    />
                </View>
                }
            />
        );
    }

    componentDidMount(){
        var mang = ["111111", "222222", "333333"]

        fetch("http://192.168.1.4/vd/vd1.php?trang=" + this.state.trang)
        .then((response)=>response.json())
        .then((responseJson)=>{
            console.log(responseJson);
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(responseJson)
            });
        })
        .catch((error)=>{
            console.log(error);
        });

        
    }
}
