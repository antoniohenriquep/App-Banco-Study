import React from 'react';
import { View,Text, Pressable, StyleSheet} from 'react-native';

export default function PressableField(props) {
 return (
    <Pressable onPress={this.props.onPress}>
        <View>
            <Text>
                Ola
            </Text>
        </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    container:{

    }
})