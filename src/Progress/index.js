import React from 'react';
import {Text,Alert, SafeAreaView, View , Image} from 'react-native';
import { Button , Searchbar,List } from 'react-native-paper';
export default function ProgressScreen({navigation}){

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
      <View style={{}}>
      <List.Item
    title="Deliver"
    description="API DATA (in progress)"
    left={props => <List.Icon {...props} icon={require('../../assets/seatbelt.png')} />}
    onPress={()=>navigation.navigate('Details Screen')}
    />
        <View style={{position:'absolute',top:500,alignSelf:'center'}}>
        <Button
        mode="contained"
        style={{}}
        onPress={()=>navigation.navigate('Home')}
        >
            stop
        </Button>
        </View>
      </View>
      </>
    // </SafeAreaView>
  )
}