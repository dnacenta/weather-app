import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
  } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

class App extends Component {

  render(){
    return(
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <View style={styles.header}>
          <Icon name={'ios-snow'} size={80} color={'white'}/>
          <Text style={styles.temp}>9º</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.title}>
            This a <Text style={{color:'#F7DC6F'}}>Fucking</Text> Weather App
          </Text>
          <Text style={styles.subtitle}>Let It Snow</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#00AEF9'
  },
  header: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-around',
    flex:1,
    // backgroundColor:'#F7DC6F'
  },
  temp: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 70,
    color: 'white'
  },
  body: {
    alignItems:'flex-start',
    justifyContent:'flex-end',
    flex:5,
    // backgroundColor:'#00AEF9',
    margin:10
  },
  title: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 78,
    color: 'white',
    marginBottom:5
  },
  subtitle:{
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 16,
    color: 'white'
  }
})

AppRegistry.registerComponent('coolWinter', () => App)
