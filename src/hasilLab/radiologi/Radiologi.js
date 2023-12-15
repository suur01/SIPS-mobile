// import React,{useEffect,useState} from 'react';
// import {
//     Button,
//     View,
//     Text,
//     SafeAreaView,
//     ScrollView,
//     TouchableOpacity,
//     StyleSheet
// } from 'react-native';

// import { Card } from 'react-native-paper';
// import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome';
// import { useNavigation } from '@react-navigation/native';

// import AsyncStorage from '@react-native-async-storage/async-storage'

// import Header from '../../header/Header';

// const Radiologi = ({ navigation }) => {

//     useEffect(() => {
//         // Panggil fungsi untuk mengambil data saat komponen dimount
//         getData();
//     }, []);

//     const [dataPasien, setDataPasien] = useState('');

//     // Mengambil data dari AsyncStorage
//         const getData = async () => {
//             try {
//                 const jsonString = await AsyncStorage.getItem('LOGIN_dataPasien');

//                 if (jsonString !== null) {
//                     const DataPasien = JSON.parse(jsonString);
//                     setDataPasien(DataPasien);
//                     console.log('Data berhasil diambil:', DataPasien.datapasien.agama);
//                 } else {
//                     console.log('Data tidak ditemukan di AsyncStorage');
//                 }
//             } catch (e) {
//                 console.error('Error saat mengambil data:', e);
//             }
//         };
//     // Mengambil data dari AsyncStorage


//     const openDrawer = () => {
//         // navigation.openDrawer();
//     };

//     const goToBeranda = () => {
//         navigation.navigate('MyDrawer', {
//             screen: 'MyTabs',
//             params: {
//                 screen: 'Beranda',
//             },
//         });
//     };
    

//     return (

//         <View>

//             <Header 
//                 type={3} 
//                 namaPasien={dataPasien && dataPasien.datapasien && dataPasien.datapasien.nama_pasien}
//                 rekamMedik={dataPasien && dataPasien.datapasien && dataPasien.datapasien.no_rekam_medik} 
//                 openDrawer={openDrawer} 
//             />
            
//             <Text>Halaman radiologi</Text>

//             <TouchableOpacity onPress={goToBeranda}>
//                 <Text>Go to Beranda</Text>
//             </TouchableOpacity>

//         </View>
//     );
// }

// export default Radiologi;

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome';
import { Card } from 'react-native-paper';


const Radiologi = ({ navigation }) => {
    useEffect(() => {
        getData();
    }, []);

    const [dataPasien, setDataPasien] = useState('');

    const getData = async () => {
        try {
        const jsonString = await AsyncStorage.getItem('LOGIN_dataPasien');

        if (jsonString !== null) {
            const DataPasien = JSON.parse(jsonString);
            setDataPasien(DataPasien);
            console.log('Data berhasil diambil:', DataPasien.datapasien.agama);
        } else {
            console.log('Data tidak ditemukan di AsyncStorage');
        }
        } catch (e) {
        console.error('Error saat mengambil data:', e);
        }
    };

    const commonStyles = {
        textColor: '#149581'
    };

    const openDrawer = () => {
        // navigation.openDrawer();
    };

    const goToBeranda = () => {
        navigation.navigate('MyDrawer', {
        screen: 'MyTabs',
        params: {
            screen: 'Beranda',
        },
        });
    };

    return (
        <>
                <View style={{
                        height: 50,
                        backgroundColor: '#149581',
                    }}>

                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft:20, paddingRight: 20, paddingTop: 16 }}>
                        {/* <TouchableOpacity onPress={openDrawer}>
                            <MaterialCommunityIcons name="bars" color="white" size={24} />
                        </TouchableOpacity> */}
                        <Text></Text>
                        <MaterialCommunityIcons name="flask" color="white" size={24} />
                        <MaterialCommunityIcons name="flask" color="white" size={24} />
                    </View>

                </View>

                <View style={{
                    height: '10%',
                    backgroundColor: '#149581',
                    borderBottomLeftRadius: 45,
                    borderBottomRightRadius: 45,
                    
                    
                }}>

                    <Text style={{ justifyContent: 'center',  // Center secara vertical
                                    alignItems: 'center',      // Center secara horizontal 
                                    color:'white',
                                    marginLeft:'5%'
                                }}>
                                Hasil Patologi Klinik  
                    </Text>

                    <View style={{ padding: 10, }}>

                        <Card style={{ height: 85, backgroundColor: '#FCFDFC' }}>
                            <Card.Content style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                source={require('../../assets/image/radiologi.png')} // Ganti dengan path yang sesuai
                                style={{ width: 40, height: 40, marginRight: 10 }} // Sesuaikan dengan ukuran gambar Anda
                                />
                                <Text style={{ fontSize: 22, color: commonStyles.textColor }}>
                                Selamat Datang
                                </Text>
                                <Text style={{ fontSize: 22, color: commonStyles.textColor }}>
                                Selamat Datang
                                </Text>
                            </Card.Content>
                        </Card>

                        <Card style={{ height: 85, backgroundColor: '#FCFDFC' }}>
  <Card.Content style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
    <Image
      source={require('../../assets/image/radiologi.png')} // Ganti dengan path yang sesuai
      style={{ width: 40, height: 40, marginRight: 10 }} // Sesuaikan dengan ukuran gambar Anda
    />
    <Text style={{ fontSize: 22, color: commonStyles.textColor }}>
      Selamat Datang
    </Text>
    <Text style={{ fontSize: 22, color: commonStyles.textColor }}>
      Selamat Datang
    </Text>
  </Card.Content>
</Card>



                    </View>

                </View>
        </>
    );
};

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

export default Radiologi;
