import React from 'react';
import { View, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    logo: {
        width: 300,
        height: 100,
        backgroundColor: 'gray',
    }
});

const Logo = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={{uri: 'https://scanmar.ph/crew-application/themes/default/images/auth/cloud-logo.png'}}
            />
        </View>
    );
};

export default Logo;