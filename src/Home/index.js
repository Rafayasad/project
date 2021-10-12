import React from 'react';
import {Text,Alert, SafeAreaView, View , Image} from 'react-native';
import { Button , Searchbar } from 'react-native-paper';
export default function HomeScreen({navigation}){

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
  
  return(
    // <SafeAreaView>
    <>
    <View style={{flexDirection:'row'}}>
        <Searchbar
        style={{width:'80%',marginTop:5,marginLeft:5,borderRadius:15}}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          icon={require('../../assets/search.png')}
        />
      <Image source={require('../../assets/qr-code.png')}
      style={{height:50,width:50,marginTop:5,marginLeft:5}}
      />
    </View>
    <View style={{width:'100%',height:'3%',backgroundColor:'#00B3D3',marginTop:5}}>
        <Text style={{textAlign:"center"}}>
            Detrack ID : 652651651651
        </Text>
    </View>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>Tap the start button to begin</Text>
        <View style={{position:'absolute',top:500}}>
        <Button
        mode="contained"
        style={{}}
        onPress={()=>navigation.navigate('Progress Screen')}
        >
            start
        </Button>
        </View>
      </View>
      </>
    // </SafeAreaView>
  )
}