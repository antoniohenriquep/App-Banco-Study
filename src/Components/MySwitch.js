import React from 'react';
import { View , Switch} from 'react-native';

export default function MySwitch(props) {
 return (
    <Switch value={props.value} onValueChange={props.onValueChange} />
  );
}