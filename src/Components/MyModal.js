import React from 'react';
import { View,Text,Modal} from 'react-native';

export default function MyModal(props) {
 return (
    <Modal visible={props.visible}>
    <Text>Nome: {props.name}</Text>
    <Text>Idade: {props.age}</Text>
    <Text>Genero: {props.gender}</Text>
    <Text>Limite: {props.credit}</Text>
    <Text>Estudante:{props.student}</Text>
    <Text></Text>
  </Modal>
  );
}