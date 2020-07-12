import React from 'react';
import { FlatList, StyleSheet, Text, View, } from 'react-native';
import {FontAwesome} from '@expo/vector-icons';



const FlatListBasics = () => {
  return (
    <View style={styles.container}>

        <View style={styles.cabeca}>
           <Text style={styles.texto}>ListView</Text>
        </View>

        <View style={styles.container}>
        <FlatList
        data={[
          <View><Text style={styles.item}><FontAwesome name = 'book' style={styles.imag}/>  Disciplina</Text></View>,
          <View><Text style={styles.item}><FontAwesome name = 'globe' style={styles.imag}/>  Normas da ABNT</Text></View>,
          <View><Text style={styles.item}><FontAwesome name = 'tasks' style={styles.imag}/>  Repositórios</Text></View>,
          <View><Text style={styles.item}><FontAwesome name = 'cubes' style={styles.imag}/>  Ferramentas</Text></View>,
          <View><Text style={styles.item}><FontAwesome name = 'mortar-board' style={styles.imag}/>  Orientações</Text></View>,
          <View><Text style={styles.item}><FontAwesome name = 'question' style={styles.imag}/>  Sugestões</Text></View>,
        ]}
        renderItem={({item}) => item}
      />
        </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },

  item: {
    backgroundColor: '#E4EBEE',
    padding: 10,
    fontSize: 18,
    height: 44,
    marginBottom: 3,
  },

  cabeca:{
     backgroundColor: 'green',
     height: 65,     
     justifyContent: 'center'
  },

  texto:{    
    padding: 10,
    color: 'white',
    fontSize: 20,
  },

  imag:{  
    marginRight: 20,
    fontSize: 20,
  },
});

export default FlatListBasics;
