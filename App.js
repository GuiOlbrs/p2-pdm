import { StatusBar } from 'expo-status-bar';
import {FlatList, Pressable, StyleSheet, Text,  View, Image }from 'react-native';
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

  return (
    <View style={styles.container}>
      <Pressable style={styles.button}
      onPress={() => OnBuscaImagem()}>
          <Text  style={styles.buttonText}>
            { 
              'Adicionar gato'
            }
            </Text>
      </Pressable>
      <FlatList
        data={imagem}
        keyExtractor={(g) => g.id.toString()}
        renderItem={g => (
          <View style={styles.vImagem}>
            <Image
              style={styles.image}
              source={{ uri: g.item.url }}
            />
          </View>
        )} />
      <StatusBar style="auto" />
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
    width: '50%',
    backgroundColor:'#0096F3',
    padding: 14,
    marginBottom: 4,
    borderRadius: 4,
  },
  buttonText:{
    color: 'white',
    textAlign: 'center'
  },
  list:{
    borderWidth: 1,
    borderColor:'red',
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
  },
  image: {
    width: 600, 
    height: 500, 
    marginVertical: 10,
    borderRadius: 10
  },
  vImagem:{
    marginVertical: 10,
    borderRadius:4
    
  }
});


