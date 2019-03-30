import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ImageBackground} from 'react-native';
import Header from './header';
import Footer from './footer';

export default class Cuaca1 extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: {
        main: '_',
        description: '_',
        temp: '_',
        city1: '_'
      }
    };
  }
getWeather= () => {
  let url = 'http://api.openweathermap.org/data/2.5/weather?q=+'
  + this.state.city +
  '&appid=77a6cbc5d7ff383b81f917930b9f0869&units=metric';
  return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      this.setState({
        forecast: {
          main: responseJson.weather[0].main,
          description: responseJson.weather[0].description,
          temp: responseJson.main.temp,
          city1: responseJson.name
        }
      });
    });
}
    render() {
      return (
      
      <View style={styles.containerMain}>
      
        <Header judul="Weather Forecast" />
        <View style={styles.sider}>
        <ImageBackground source={require('./img/background.jpg')} style={{width:'100%', height:'100%'}}>
          <View style={styles.inputan}></View>
          <View style={styles.up}>
          <Image source={require('./img/logo.png')} style={styles.logo}/>
          <TextInput
            style={styles.isian}
            placeholder="Enter City Name"
            underlineColorAndroid="transparent"
            onChangeText={(city) => this.setState({ city })}/>
            <TouchableOpacity style={styles.buttom}
             onPress={() => this.getWeather()}
            >
                <Text style={{fontSize: 14, color: '#fff'}}>Find</Text>
            </TouchableOpacity>
          </View>
          <View style={{opacity:0.5,marginTop:-10,position:'relative'}}>
            <Text style={{color:'white',marginRight:10,marginLeft:10}}>
              ________________________________________________________
            </Text>
          </View>
          <View style={styles.hasil}>
                <View style={styles.Vhasil}>
                
                  <Text style={styles.judulHasil}>City</Text>
                  <Text style={styles.judulHasil}>{this.state.forecast.city1}</Text>

                
                </View>
                <View style={styles.Vhasil2}>
                  <Text style={styles.judulHasil}>Temprature</Text>
                  <Text style={styles.judulHasil}>{this.state.forecast.temp}</Text>
                  
                </View>
          </View>
          <View style={{opacity:0.5,marginTop:-50,position:'relative'}}>
            <Text style={{color:'white',marginRight:10,marginLeft:10}}>
              ________________________________________________________
            </Text>
          </View>
          <View style={styles.hasil2}>
                <View style={styles.Vhasil}>
                  <Text style={styles.judulHasil}>Main</Text>
                  <Text style={styles.judulHasil}>{this.state.forecast.main}</Text>
                  
                </View>
                <View style={styles.Vhasil2}>
                
                  <Text style={styles.judulHasil}>Description</Text>
                  <Text style={styles.judulHasil}>{this.state.forecast.description}</Text>
                </View>
          </View>

          </ImageBackground>
        </View>
            <Footer></Footer>
            
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#2979FF',
    flex: 1,
    flexDirection: 'column'
  },
  
  sider: {
    backgroundColor: 'green',
    flex: 5,
  },
  inputan: {
    backgroundColor: 'white',
    flex: 3,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    opacity:0.5,
    borderRadius:20
  },
  hasil: {
    flex: 3,
    margin: 10,
    flexDirection:'row',
  },
  hasil2: {
    flex: 3,
    marginRight: 10,
    marginLeft:10,
    flexDirection:'row',
    marginTop:7,
  },
  Vhasil:{
    borderColor:'white',
    borderWidth:1,
    borderTopLeftRadius:25,
    width:'50%',
    height:'80%',
    flexDirection:'column',
    marginRight:5,
    alignItems:'center',
    justifyContent:'center',
    fontWeight:'bold'
  },
  Vhasil2:{
    borderColor:'white',
    borderWidth:1,
    borderTopLeftRadius:25,
    width:'47%',
    height:'80%',
    flexDirection:'column',
    marginLeft:5,
    alignItems:'center',
    justifyContent:'center',
    fontWeight:'bold'
  },
  judulHasil:{
    fontWeight:'bold',
    fontSize:20,
    marginBottom:30
  },
  isian: {
    borderColor:'blue',
    backgroundColor:'white',
    borderWidth:1,
    width: "60%",
    padding: 10,
    margin: 15
  },
  up:{
    position:'relative',
    justifyContent:'center',
    margin:10,
    marginTop:-175,
    alignItems:'center',
    flex:3,
  },
  logo:{
    position:'relative',
    width:"30%",
    height:"30%",
    marginTop:-10
  },
  
  buttom : {
    width: 90,
    height: 25,
    backgroundColor: '#2979FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:-5
  },
  txtHasil: {
    flex:1,
    height: 30,
    backgroundColor:'#fff',
    borderColor: 'gray',
    borderWidth: 1,
  },
  location:{
    flex:1,
    margin:10,
    alignItems:'center',
    justifyContent:'center'
  },
});
