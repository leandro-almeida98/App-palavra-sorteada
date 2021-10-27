import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
  TouchableOpacity 
} from 'react-native';
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      palavra: '',
      img: require('./src/biscoito.png')
    }
    this.timer = null;
    this.frases = [
      'Viver',
      'existir ',
      'oceano.',
      'alegria',
      'ensina.',
      'sorrir',
      'persistência',
      'apaixonar',
      'sentir',
      'realizar',
      'sobreviver',
      'resistir',
      'sortear',
      'experimentar',
      'perdoar:'
    ]
    this.sortear = this.sortear.bind(this);
  }

  sortear(){
    
    
    let numeroAleatorio = null;
    if(this.timer != null){
      // parar o timer
      clearInterval(this.timer);
      this.timer = null;
      this.setState({
        img: require('./src/biscoitoAberto.png')
      })
    }else{
      this.setState({
        img: require('./src/loading.gif')
      })
      this.timer = setInterval(()=> {
        numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        this.setState({
          palavra: '"'+this.frases[numeroAleatorio]+'"',
        })
      }, 10);
    }


    


  };

  render(){
    return (
      <LinearGradient start={{x: 1, y: 0}} end={{x: 1, y: 1}} colors={['#120BD9', '#0810A6', '#0810A6', '#0A13BF']} style={styles.linearGradient}>
        {/* <View style={styles.container}> */}
        
        <Image
        source={this.state.img}
        style={styles.img}
        />

        <Text style={styles.textoFrase}>{this.state.palavra}</Text>
        <TouchableOpacity style={styles.botao} onPress={() => this.sortear()}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Sortear</Text>
          </View>
        </TouchableOpacity>
    {/* </View> */}
      </LinearGradient>
    );

  }
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop:35,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
      width:250,
      height:250
  },
  botao:{
    width:230,
    height:50,
    borderWidth:2,
    borderColor: '#dd7b22',
    borderRadius: 25,
    //display: 'none'
  },
  btnArea:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  btnTexto:{
    color: '#dd7b22',
    fontSize:20,
    fontWeight: 'bold'
  },
  textoFrase:{
    fontSize:20,
    color: '#dd7b22',
    margin:30,
    fontStyle: 'italic',
    textAlign: 'center'
  }

});

export default App;


