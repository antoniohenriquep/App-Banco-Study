import React, { useRef, useState } from 'react';
import { View , Text, StyleSheet, TextInput, Button} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import DatePicker from 'react-native-date-picker';

export default function App() 
{

  const [name, setName] = useState()
  const [account, setAccount] = useState()
  const [age, setAge] = useState()
  const [gender, setGender] = useState()
  const [credit, setCredit] = useState(100)
  const [isStudent, setIsStudent] = useState(false)

  const inputRef = useRef(null) //O useRef funcina de um jeito similar a ID do HTML, possibilitando manipular o componente diretamente
 
  function setAccountName(text)
  {
    setName(text)
  }

  function createAccount()
  {
    if(name && age && gender)
    {
      setAccount(
        {name: name, age: age, gender:gender, credit: credit, isStudent: isStudent}
      )
    }
    else
    {
      alert("Preencha todos os dados")
    }
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