import React from 'react';
import {StyleSheet, View, Button } from 'react-native'; 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f3f3f3',

    },
    doc: {
        width: 300,
        height: 100,
        borderWidth: 1,
        borderColor: '#448aff'
    }
});

const Dashboard = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Button style={styles.doc} onPress={() => { navigation.navigate("Documents") }} title="Doc" color="blue" />
            <Button style={styles.doc} onPress={() => { navigation.navigate("SeaService") }} title="Sea Service" color="blue" />
            <Button style={styles.doc} onPress={() => { navigation.navigate("Education") }} title="Education" color="blue" />
            <Button style={styles.doc} onPress={() => { navigation.navigate("Allottee") }} title="Allottee" color="blue" />
        </View>
    );
};

export default Dashboard;