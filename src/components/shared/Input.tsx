import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = ({props}) => {
    return (
        <TextInput {...props} style={styles.input} />
    );
}

const styles = StyleSheet.create({
    input:{
        height: 50,
        borderWidth: 1,
        marginVertical: 15,
        padding: 10,
        borderRadius: 5,
        borderColor: '#000'
    }
})
export default Input;