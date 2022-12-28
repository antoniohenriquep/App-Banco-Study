import React, { useRef, useState } from 'react';
import { View , Text, StyleSheet, TextInput, Button} from 'react-native';


import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import DatePicker from 'react-native-date-picker';
import PressableField from './src/Components/PressableField';
import MySwitch from './src/Components/MySwitch';


export default function App() 
{
  const [name, setName] = useState()
  const [account, setAccount] = useState()
  const [age, setAge] = useState()
  const [genderOption, setGenderOption] = useState()
  const [gender, setGender] = useState()
  const [credit, setCredit] = useState(100)
  const [isStudent, setIsStudent] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [birthDate, setBirthDate] = useState(new Date())
  const [dateField, setDateField] = useState(dateFormat)
  
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

  function dateFormat()
  {
    return(birthDate.getDate()+"/"+birthDate.getMonth()+"/"+birthDate.getFullYear()) 
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
      />

      <Text>Informe sua data de nascimento </Text>
      
      
      <PressableField 
      style = {styles.pickerButton}
      onPress = {() =>{
        setIsOpen(true)
        console.log('ola')}}
      text = {dateField}
        />
    <DatePicker
      modal
      date={birthDate}
      open = {isOpen}
      onConfirm = {(date)=>{
        setBirthDate(date)
        setDateField(dateFormat)
        setIsOpen(false)}}
      onCancel = {()=> setIsOpen(false)}
      mode = 'date'
      />
      

        
      <Text>Informe seu gênero</Text>
      <Picker
      selectedValue={genderOption}
      onValueChange = {(value, index) =>{
        setGenderOption(value)
        setGender(value)
      }}>
        <Picker.Item key ={0} value ={null} label = "Selecione um gênero"/>
        <Picker.Item key ={1} value ={"Masculino"} label = "Masculino"/>
        <Picker.Item key ={2} value ={"Feminino"} label = "Feminino"/>
      </Picker>

      <Text>Limite</Text>
      <Slider 
      value={credit}
      minimumValue={100}
      maximumValue={1000}
      onValueChange ={(value) => setCredit(value)}/>

      <Text>Conta estudante</Text>
      <MySwitch 
      value ={isStudent} 
      onValueChange = {() =>setIsStudent(!isStudent)}/>


      <Button title='Concluir' onPress={() =>{
        //alert(myName)
        inputRef.current.clear()
      }}/>
      
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  nameInput:{
    width:200,
    height:60,
    borderWidth:0.5,
    borderRadius:20
  },
  pickerButton: {
    width:200,
    height:60
  }
})