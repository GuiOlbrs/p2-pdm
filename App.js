import { StatusBar } from 'expo-status-bar';
import {FlatList, Pressable, StyleSheet, Text,  View }from 'react-native';
import{ useState } from 'react'
import { TheCatApi_KEY } from '@env';

export default function App() {
  const TheCatClient = "https://api.thecatapi.com/v1/images/search?limit=5&api_key=";
  const apiKey = TheCatApi_KEY

  const [imagem, setImagm] = useState([])

  const OnBuscaImagem = async () => {
  const target = TheCatClient + apiKey;
  try {
    const response = await fetch(target); 
    const data = await response.json();  
    setImagm((gatosAtuais) => [...data, ...gatosAtuais]);
  }catch (error){
    console.log('Erro ao recuperar imagem')
  }
}

  console.log(apiKey);
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
          <Text  style={styles.buttonText}>
            { 
              'Adicionar gato'
            }
            </Text>
      </Pressable>
      <FlatList style={styles.list}> 
        <View style={styles.listItem}>
          <Text style={styles.listemItemText}>
            
          </Text>
        </View >
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40
  },
  button:{
    width: '70%',
    backgroundColor:'#0096F3',
    padding: 14,
    borderRadius: 4,
  },
  buttonText:{
    color: 'white',
    textAlign: 'center'
  },
  list:{
    borderWidth: 1,
    borderColor:'gray',
    width:'70%',
    borderRadius:4,
    marginTop: 12,
    padding: 8,
  },
  listItem:{
    padding:12,
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderBlockColor: '#CCC',
    marginBottom: 4,
    borderRadius:4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listemItemText:{
    textAlign: 'center',
    width: '70%',
  }
  
});
