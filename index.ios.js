import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
  } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import {fetchWeather} from './weatherAPI'
import Highlight from 'react-native-highlight-words'

const iconNames = {
  Clear:'md-sunny',
  Rain:'md-rainy',
  Thunderstorm:'md-thunderstorm',
  Clouds:'md-cloudy',
  Snow:'md-snow',
  Drizzle:'md-umbrella',
  Standard:'md-thermometer'
}

const phrases = {
  Clear: {
    title:"The Room is Clear",
    subtitle:"Roger that",
    highlight:"Clear",
    color:'#F5B041',
    background:'#48C9B0'
  },
  Rain: {
    title:"Raining Cats and Dogs",
    subtitle:"Take that fucking umbrella",
    highlight:"Raining",
    color:'#004A96',
    background:'#2F343A'
  },
  Thunderstorm: {
    title:"Thor is Happy",
    subtitle:"Point your umbrella towards the thunder!",
    highlight:"Thor",
    color:'#FBFF46',
    background:'#020202'
  },
  Clouds: {
    title:"Clouds and no Stars",
    subtitle:"Try to see the stars, you won't see shit",
    highlight:"Clouds",
    color:'#F7DC6F',
    background:'#939393'
  },
  Snow: {
    title:"Fuck Yeah! Snow",
    subtitle:"Finally this shit is happening",
    highlight:"Snow",
    color:'#021D4C',
    background:'#15A678'
  },
  Drizzle: {
    title:"Clouds are Peeing",
    subtitle:"No need for umbrella",
    highlight:"Peeing",
    color:'#B3F6E4',
    background:'#1FBB68'
  },
  Standard: {
    title:"This is a Fucking Weather App",
    subtitle:"Be patient! I will save your life",
    highlight:"Fucking",
    color:'#F7DC6F',
    background:'#00AEF9'
  }
}

class App extends Component {

  componentWillMount() {
    this.state = {
      temp:'?',
      weather:'Standard'
    }
  }

  componentDidMount() {
    this.getLocation()
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(
      (posData) => fetchWeather(posData.coords.latitude,posData.coords.longitude)
        .then(res => this.setState({
          temp:Math.round(res.temp),
          weather:res.weather
        })),
      (error) => alert(error),
      {timeout:10000}
    )
  }

  render() {
    return(
      <View style={[styles.container, {backgroundColor:phrases[this.state.weather].background}]}>
        <StatusBar hidden={true}/>
        <View style={styles.header}>
          <Icon name={iconNames[this.state.weather]} size={80} color={'white'}/>
          <Text style={styles.temp}>{this.state.temp}º</Text>
        </View>
        <View style={styles.body}>
          <Highlight style={styles.title}
            highlightStyle={{color:phrases[this.state.weather].color}}
            searchWords={[phrases[this.state.weather].highlight]}
            textToHighlight={phrases[this.state.weather].title}
          />
        <Text style={styles.subtitle}>{phrases[this.state.weather].subtitle}</Text>
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
