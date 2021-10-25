import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
  TouchableOpacity 
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    
        <Image 
        source={require('./src/biscoito.png')}
        style={styles.img}
         />

        <Text style={styles.textoFrase}>"Alguma frase aqui "</Text>
        <TouchableOpacity style={styles.botao}>
          <View style={styles.area}>
            <Text style={styles.texto}>Sortear</Text>
          </View>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
    borderRadius: 25 
  },
  area:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  texto:{
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
