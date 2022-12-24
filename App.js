import React, { useRef, useState } from 'react';
import { View , Text, StyleSheet, TextInput, Button} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';


export default function App() {

  const [name, setName] = useState('')
  const [account, setAccount] = useState()
  const inputRef = useRef(null) //O useRef funcina de um jeito similar a ID do HTML, possibilitando manipular o componente diretamente
 
  function getName(text){
    setName(text)
  }

 return (
   <View>
      <Text>Nome completo</Text>

      <TextInput 
      ref={inputRef}
      style ={styles.nameInput} 
      placeholder = "Nome completo" 
      inlineImageLeft= 'person_icon'
      autoCapitalize= 'words'
      onChangeText={(text) => myName = text}
      />

      <Button title='Concluir' onPress={() =>{
        alert(myName)
        inputRef.current.clear()
      }}/>
      
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    
  },
  nameInput:{
    width:200,
    height:60,
    borderWidth:0.5,
    borderRadius:20
  }
})