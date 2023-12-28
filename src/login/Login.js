import React, { useState } from 'react';
import { View, 
        Image, 
        TextInput, 
        TouchableOpacity, 
        Text, 
        StyleSheet,
        ActivityIndicator
        } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'

import baseURL from '../../baseURL';

import SkeletonLoading from '../loading/skeleton';


const MyFormLogin = ({ navigation }) => {
        // State untuk menyimpan nilai input
        

        const [rekamMedik, setrekamMedik]   = useState('13025279');
        const [password, setpassword]       = useState('A1dfasdfsdf');

        const [isLoading, setIsLoading] = useState(false);

        let dataPasien = ''
        let token      = ''

        const handleLogin = async () => {
            setIsLoading(true)
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

                setIsLoading(false)

                dataPasien = response.data.response;
                token      = response.data;
                // AsyncStorage.setItem('LOGIN_dataPasien', dataPasien);
                storeData()

                navigation.navigate('MyDrawer');
            })
            .catch(error => {
                // Handle errors
                setIsLoading(false)
                console.error('Error:', error);
            });

        };
        

        // Menyimpan string di AsyncStorage
            const storeData = async () => {
                    const jsonDataPasien     = JSON.stringify(dataPasien);
                    console.log('pasien id',dataPasien)
                try {
                    await AsyncStorage.setItem('LOGIN_dataPasien', jsonDataPasien);
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
                <Text style={{ marginLeft:'7%',color:'#3CA298',fontSize:19 }}>Sign In, <Text style={styles.boldText}>SIPS!</Text> {'\n'}</Text>
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
                    {isLoading ? (
                        <ActivityIndicator style={{paddingTop:0}} size="small" color="#ffffff" />
                    ) : (
                        <Text style={styles.buttonText}>Log in</Text>
                    )}
                </TouchableOpacity>
            </View>

            <SkeletonLoading shape="rectangle" width={1} height={5} />
            <SkeletonLoading shape="circle" width={50} height={50} />
        
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
        backgroundColor: '#44A59B',
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
    boldText: {
        fontWeight: 'bold',
    },
});

export default MyFormLogin;
