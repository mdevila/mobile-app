import React from 'react';
import {StyleSheet, View, Button, TextInput, Image} from 'react-native';

import Logo from '../components/Logo';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f3f3f3',
    },
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        backgroundColor: 'white',
        width: 300,
        borderRadius: 2,
        borderWidth: 0.7,
        borderColor: '#d3d3d3',
    },
    btn: {
        width: 300,
        borderWidth: 1,
        borderColor: '#448aff'
    }
});

const Login = ({navigation}) => {

    const onSubmit = () => {
        navigation.navigate('Dashboard');
    };

    return (
        <View style={styles.container}>
            <Logo />

            <TextInput style={styles.input} placeholder="Enter your username"></TextInput>
            <TextInput style={styles.input} secureTextEntry={true} placeholder="Enter your password"></TextInput>

            <View style={styles.btn}>
                <Button style={styles.btn}
                    onPress={onSubmit}
                    title="SIGN IN"
                    color="#448aff"
                />
            </View>
        </View>
    );

}

export default Login;