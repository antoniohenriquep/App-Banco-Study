import React from 'react';
import { View,Text, Pressable, StyleSheet} from 'react-native';

export default function PressableField(props) {
 return (
    <Pressable 
    onPress={props.onPress} 
    style ={[styles.container, props.style]}>      
            <Text>
                {props.text}
            </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center', 
        alignItems:'center', 
        backgroundColor:'green',
        borderWidth:0.5
    }
})