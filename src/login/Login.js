import React, { useState } from 'react';
import { View, 
        Image, 
        TextInput, 
        TouchableOpacity, 
        Text, 
        StyleSheet,
        } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'



import baseURL from '../../baseURL';

const MyFormLogin = ({ navigation }) => {
        // State untuk menyimpan nilai input
        

        const [rekamMedik, setrekamMedik]   = useState('12930190');
        const [password, setpassword]       = useState('A1dfasdfsdf');

        let dataPasien = ''

        const handleLogin = async () => {

            const data = {
                            no_rekam_medik  : rekamMedik,
                            password        : password
                        }

            const headers = {
                // Add your custom headers here
                Authorization: 'Bearer YOUR_ACCESS_TOKEN',
                // Other headers...
            };
            
            baseURL.post('login',data)
            .then(response => {
                dataPasien = response.data.response;
                // AsyncStorage.setItem('LOGIN_dataPasien', dataPasien);
                storeData()

                navigation.navigate('MyDrawer');
            })
            .catch(error => {
                // Handle errors
                console.error('Error:', error.message);
            });

        };
        

        // Menyimpan string di AsyncStorage
            const storeData = async () => {
                    const jsonDataPasien     = JSON.stringify(dataPasien);
                    const jsonEnkripPasienid = JSON.stringify(dataPasien.datapasien)
                    console.log('pasien id',dataPasien.datapasien)
                try {
                    await AsyncStorage.setItem('LOGIN_dataPasien', jsonDataPasien);
                    await AsyncStorage.setItem('LOGIN_dataPasienIdEncrypted', jsonEnkripPasienid);
                } catch (e) {
                    console.error('Error saat menyimpan data:', e);
                }
            };
        // Menyimpan string di AsyncStorage
        

    return (

        <View>

            <View style={styles.containerHeader}>
                {/* Gambar di atas input */}
                <Image source={require('../assets/image/sips.png')} style={styles.image} />
            </View>

            <View>
                {/* Input pertama */}
                <Text style={{ marginLeft:'7%',color:'#0E9971',fontSize:15 }}>Sign In,SIPS! {'\n'}</Text>
            </View>

            <View style={styles.container}>
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
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>
            </View>
        
        </View>
        
    );
};

const styles = StyleSheet.create({
    containerHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '30%',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 250,
        marginBottom: 20,
    },
    input: {
        width: '90%',
        height: 40,
        borderColor: '#bdc3c7',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
        color: '#0E9971',
        borderRadius: 5
    },
    button: {
        backgroundColor: '#0E9971',
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
