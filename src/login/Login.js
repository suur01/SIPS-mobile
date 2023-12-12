import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const MyFormLogin = ({ navigation }) => {
        // State untuk menyimpan nilai input
        

        const [rekamMedik, setrekamMedik]   = useState('12930190');
        const [password, setpassword]       = useState('A1dfasdfsdf');
        const [dataPasien, setdataPasien]   = useState('');

        const handleLogin = async () => {

            const data = {
                            no_rekam_medik  : rekamMedik,
                            password        : password
                        }

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `http://apidev.rsudrsoetomo.jatimprov.go.id/sipp/login`,
                // headers: { 
                //     'x-authorization-token-sipp': token, 
                // },
                data : data
            };
        
            axios.request(config)
            .then((response) => {
                navigation.navigate('MyDrawer');
            })
            .catch((error) => {
        
                console.log(error);
        
            });

        };

    return (
        <View style={styles.container}>
            {/* Gambar di atas input */}
            <Image source={require('../assets/image/sips.png')} style={styles.image} />

            {/* Input pertama */}
            <TextInput
                style={styles.input}
                placeholder="Rekam Medik"
                placeholderTextColor="#888"
                value={rekamMedik}
                onChangeText={(text) => setrekamMedik(text)}
                keyboardType="numeric"
            />

            {/* Input kedua */}
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#888"
                value={password}
                onChangeText={(text) => setpassword(text)}
            />

            {/* Tombol di bawah input */}
            <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 390,
        height: 350,
        marginBottom: 20,
    },
    input: {
        width: '90%',
        height: 40,
        borderColor: '#bdc3c7',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
        color: 'black',
        borderRadius: 5
    },
    button: {
        backgroundColor: '#27ae60',
        padding: 10,
        borderRadius: 5,
        width:'90%',
        textAlign: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    },
});

export default MyFormLogin;
