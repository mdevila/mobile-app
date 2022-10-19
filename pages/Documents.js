import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native'; 

import axios from 'axios';

const Documents = ({navigation}) => {

    const [data, setData] = useState([]);

    const fetchData = () => {
        axios.post('https://scanmar.ph/crew-application/medical-condition/all').then(function(response) {
            setData(response.data.result);

            console.log("data => ", response.data);
        })
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <View>
            <Text>Medical Conditions</Text>

            {data.map(item => (
                <Text key={item.id}>{item.name}</Text>
            ))}
        </View>
    );
};

export default Documents;