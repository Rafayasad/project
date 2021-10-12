import React from 'react';
import {Text,Alert, SafeAreaView, View , Image} from 'react-native';
import { Button , Searchbar,List,Avatar, IconButton , Colors} from 'react-native-paper';
export default function DetailsScreen({navigation}){

  return(
    // <SafeAreaView>
    <>
    <View style={{width:"100%",height:'10%',backgroundColor:'#00B3D3'}}>
        <Text style={{textAlign:'center',marginTop:5,fontSize:15}}>DELIVER: {'\n'}API DATA (in progress)</Text>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
        <Button
        mode="contained"
        >
            items
        </Button>
        <Button
        mode="contained"
        >
            Note
        </Button>
        <Button
        icon={require('../../assets/attach-file.png')}
        mode="contained"
        >
            file
        </Button>
    </View>
    <View style={{marginTop:10,marginLeft:10}}>
        <Text style={{fontSize:20,color:'black'}}>Instruction{'\n'}N/A</Text>
    </View>
    <View style={{width:"100%",height:'100%',flex:1,justifyContent:'flex-end'}}>
    <View style={{width:'100%',height:'50%'}}>
    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
    <IconButton
    icon={require('../../assets/camera.png')}
    // color={Colors.red500}
    size={80}
    onPress={() => console.log('Pressed')}
  />
  <IconButton
    icon={require('../../assets/right.png')}
    // color={Colors.red500}
    size={80}
    onPress={() => console.log('Pressed')}
  />
  <IconButton
    icon={require('../../assets/wrong.png')}
    // color={Colors.red500}
    size={80}
    onPress={() => console.log('Pressed')}
  />
    </View>

    <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:-20}}>
    <IconButton
    icon={require('../../assets/left-arrow.png')}
    // color={Colors.red500}
    size={80}
    onPress={() => console.log('Pressed')}
  />
  <IconButton
    icon={require('../../assets/phone-call.png')}
    // color={Colors.red500}
    size={80}
    onPress={() => console.log('Pressed')}
  />
  <IconButton
    icon={require('../../assets/maps.png')}
    // color={Colors.red500}
    size={80}
    onPress={() => console.log('Pressed')}
  />
    </View>
    </View>
    </View>
    </>
    // </SafeAreaView>
  )
}