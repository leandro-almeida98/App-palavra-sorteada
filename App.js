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
    this.frases = [
      'Viver é a coisa mais rara do mundo. A maioria das pessoas apenas existe.',
      'Não existe um caminho para a felicidade. A felicidade é o caminho.',
      'O que sabemos é uma gota; o que ignoramos é um oceano.',
      'Muitas pessoas perdem as pequenas alegrias enquanto aguardam a grande felicidade.',
      'Feliz aquele que transfere o que sabe e aprende o que ensina.',
      'Para mim, a capacidade de sorrir é uma das mais belas características do ser humano.',
      'A persistência é o caminho do êxito.',
      'Se apaixone pela sua existência.',
      'O fraco jamais perdoa: o perdão é uma das características do forte.'
    ]
    this.sortear = this.sortear.bind(this);
  }

  sortear(){
    // alert('teste');
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    this.setState({
      img: require('./src/loading.gif') 
    })
    // setTimeout(() => {
      
    // }, 3000)

    setTimeout(() => {
      this.setState({
        palavra: '"'+this.frases[numeroAleatorio]+'"',
        img: require('./src/biscoito.png')
      })

    }, 6000)


    


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


