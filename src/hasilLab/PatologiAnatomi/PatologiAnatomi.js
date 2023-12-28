
import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    BackHandler,
    ActivityIndicator
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome';
import { Card } from 'react-native-paper';

import axios from 'axios';

const PatologiAnatomi = ({ navigation }) => {

    const [dataPatAnatomi, setDataPatAnatomi]                     = useState('');
    const [dataPatoAnatomi, setDataPatoAnatomi]                     = useState('');

    const [isLoading, setIsLoading] = useState(true);

    const commonStyles = {
        textColor: '#149581'
    };

    useEffect(() => {
        getDataPasien();

        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            // Cek apakah kita berada di halaman ini
            if (navigation.isFocused()) {
                // Handle the back button press
                goToTABnavigation(); // Panggil fungsi goToBeranda saat tombol kembali ditekan
                return true; // Kembalikan true untuk menghentikan default behavior
            }
            return false; // Biarkan default behavior untuk halaman lain
        });

        return () => {
            // Clean up the event listener when the component unmounts
            backHandler.remove();
        };

    }, [navigation]);


    const keluar = () =>{
        navigation.navigate('MenuNavigasi', {
            screen: 'login'
        });
    }


    const getDataPasien = async () => {
        const jsonString = await AsyncStorage.getItem('LOGIN_dataPasien');
        const DataPasien = JSON.parse(jsonString);
        setDataPatAnatomi(DataPasien);

        console.log('Data berhasil diambil1:', DataPasien.datapasien.agama);
        console.log('Data berhasil diambil2:', DataPasien.token);

        handlePatologiAnatomi(DataPasien,DataPasien.token);

    };

    

    const handlePatologiAnatomi = async (DataPasien,TOKEN) => {

        const dataPasienSicret = DataPasien.datapasien.pasien_id_encrypted
        const pid = dataPasienSicret.pid
        const piv = dataPasienSicret.piv
        const ps  = dataPasienSicret.ps
    
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `http://apidev.rsudrsoetomo.jatimprov.go.id/sipp/hasilpatologiAnatomi/?pid=${pid}&piv=${piv}&ps=${ps}`,
            headers: { 
                'x-authorization-token-sipp': TOKEN,
            }
        };
    
        axios.request(config)
        .then((response) => {
            // console.log('data yang di ambil')
            // console.log(JSON.stringify(response.data));
    
            setDataPatoAnatomi(response.data.response);
            setIsLoading(false)

        })
        .catch((error) => {
            console.log(error);
            setIsLoading(false); 
        });
    
    };



    /* Function Kembali */

    const goToTABnavigation = () => {
        // navigation.navigate('MyDrawer', {
        // screen: 'MyTabs',
        // params: {
        //     screen: 'Lab',
        // },
        // });
        navigation.pop();
    };

    const dataKosong = () => {
        return (
            <Card style={{ height: 155, marginBottom: 7, backgroundColor: '#FCFDFC' }}>
                <Card.Content style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ paddingTop:45, fontSize: 22, color: commonStyles.textColor }}>
                        Tidak Ada Hasil Lab
                    </Text>
                </View>

                </Card.Content>
            </Card>
        )
    }

    return (
        <>
                <View style={{
                        height: 90,
                        backgroundColor: '#149581',
                    }}>

                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft:20, paddingRight: 20, paddingTop: 35 }}>
                        <Text></Text>
                        <Text></Text>
                        {/* <MaterialCommunityIcons name="flask" color="white" size={24} /> */}
                        {/* <MaterialCommunityIcons name="flask" color="white" size={24} /> */}
                        <MaterialCommunityIcons onPress={keluar} name="flask" color="white" size={24} />
                    </View>

                </View>

                <View style={{
                    height: '15%',
                    backgroundColor: '#149581',
                    borderBottomLeftRadius: 45,
                    borderBottomRightRadius: 45,
                    
                    
                }}>

                    <Text style={{ justifyContent: 'center',  // Center secara vertical
                                    alignItems: 'center',      // Center secara horizontal 
                                    color:'white',
                                    fontSize:17,
                                    marginLeft:'5%',
                                    fontWeight: 'bold',
                                    marginBottom:10
                                }}>
                                <MaterialCommunityIcons name="flask" color="white" size={20} />
                                <Text>    Hasil Patologi Anatomi</Text>  
                                {/* {dataPatAnatomi && dataPatAnatomi.token} */}
                    </Text>



                    <View style={{ padding: 10, }}>

                        <>

                            {isLoading ? (
                                <>
                                    <ActivityIndicator style={{paddingTop:35}} size="large" color="#0000ff" />
                                </>
                            ) : (

                                dataPatoAnatomi ? (

                                    // ketika dataPatoKlinik tidak kosong

                                    Array.isArray(dataPatoAnatomi) &&
                                    dataPatoAnatomi.map((item, index) => (

                                        <Card key={index} style={{ height: 85, marginBottom: 7, backgroundColor: '#FCFDFC' }}>
                                            <Card.Content style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                                
                                                <Image
                                                    source={require('../../assets/image/radiologi.png')} // Ganti dengan path yang sesuai
                                                    style={{ width: 40, height: 40, marginRight: 10 }} // Sesuaikan dengan ukuran gambar Anda
                                                />
                                                
                                                <View style={{ flex: 1 }}>
                                                    {/* <Text style={{ fontSize: 16, color: commonStyles.textColor }}>
                                                        Text 1: {item.pasienmasukpenunjang_id_encrypted.pnjid}
                                                    </Text> */}
                                                    <Text style={{ fontSize: 18, color: commonStyles.textColor }}>
                                                        {item.tglmasukpenunjang}
                                                    </Text>
                                                </View>
                                            
                                            </Card.Content>
                                        </Card>
                                        
                                    ))
                                
                                ) : (
                                    // ketika dataPatoKlinik tidak kosong
                                    dataKosong()
                                )
                            )}

                        </>


                    </View>

                </View>
        </>
    );
};

export default PatologiAnatomi;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    greenHeader: {
        height: 150, // Sesuaikan dengan tinggi header yang diinginkan
        backgroundColor: '#149581',
        borderBottomLeftRadius: 45,
        borderBottomRightRadius: 45,
    },
    contentContainer: {
        flex: 2,
        backgroundColor: 'white',
        padding: 20,
        paddingTop: 50,
    },
    pageTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});