import React, { useState,useEffect } from 'react';
import {
    Button,
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    
} from 'react-native';

import { Card, Title, Paragraph } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'

import Header from '../header/Header';


const HomeScreen = ({ navigation }) => {

    const commonStyles = {
        textColor: '#149581'
    };

    useEffect(() => {
        // Panggil fungsi untuk mengambil data saat komponen dimount
        getData();
    }, []);

    const [dataPasien, setDataPasien] = useState('');

    // Mengambil data dari AsyncStorage
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
    // Mengambil data dari AsyncStorage
    

    const openDrawer = () => {
        navigation.openDrawer();
    };
    
return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>

        <Header 
            type={1} 
            namaPasien={dataPasien && dataPasien.datapasien && dataPasien.datapasien.nama_pasien}
            rekamMedik={dataPasien && dataPasien.datapasien && dataPasien.datapasien.no_rekam_medik} 
            openDrawer={openDrawer} 
        />

        <View style={{ flex: 1, backgroundColor: 'white', padding: 20, marginTop: 0 }}>
            {/* Kartu pertama di bagian bawah */}
            <Card style={{ marginBottom: 16, backgroundColor: '#FCFDFC', height:'88%',paddingTop:1, paddingBottom:15 }}>
                <ScrollView 
                    contentContainerStyle={{ flexGrow: 1 }}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    <Card.Content>
                        {/* Header Card */}
                        
                        <Paragraph style={{ marginBottom: 10 }}>
                            <Text variant="bodyMedium" style={{ fontSize: 17, color: commonStyles.textColor }}>NAMA PASIEN</Text>{'\n'}
                            <Text variant="bodyMedium" style={{ fontSize: 13, color: commonStyles.textColor }}>
                                {dataPasien && dataPasien.datapasien && dataPasien.datapasien.nama_pasien}
                            </Text>
                        </Paragraph>

                        <Paragraph style={{ marginBottom: 10 }}>
                            <Text variant="bodyMedium" style={{ fontSize: 17, color: commonStyles.textColor }}>NO REKAM MEDIK</Text>{'\n'}
                            <Text variant="bodyMedium" style={{ fontSize: 13, color: commonStyles.textColor }}>
                                {dataPasien && dataPasien.datapasien && dataPasien.datapasien.no_rekam_medik}
                            </Text>
                        </Paragraph>

                        <Paragraph style={{ marginBottom: 10 }}>
                            <Text variant="bodyMedium" style={{ fontSize: 16, color: commonStyles.textColor }}>KTP / ID Card</Text>{'\n'}
                            <Text variant="bodyMedium" style={{ fontSize: 13, color: commonStyles.textColor }}>
                                {dataPasien && dataPasien.datapasien && dataPasien.datapasien.no_ktp}
                            </Text>
                        </Paragraph>

                        <Paragraph style={{ marginBottom: 10 }}>
                            <Text variant="bodyMedium" style={{ fontSize: 16, color: commonStyles.textColor }}>AGAMA</Text>{'\n'}
                            <Text variant="bodyMedium" style={{ fontSize: 13, color: commonStyles.textColor }}>
                                {dataPasien && dataPasien.datapasien && dataPasien.datapasien.agama}
                            </Text>
                        </Paragraph>

                        <Paragraph style={{ marginBottom: 10 }}>
                            <Text variant="bodyMedium" style={{ fontSize: 16, color: commonStyles.textColor }}>STATUS KAWIN</Text>{'\n'}
                            <Text variant="bodyMedium" style={{ fontSize: 13, color: commonStyles.textColor }}>
                                {dataPasien && dataPasien.datapasien && dataPasien.datapasien.statusperkawinan}
                            </Text>
                        </Paragraph>

                        <Paragraph style={{ marginBottom: 10 }}>
                            <Text variant="bodyMedium" style={{ fontSize: 16, color: commonStyles.textColor }}>PROVINSI</Text>{'\n'}
                            <Text variant="bodyMedium" style={{ fontSize: 13, color: commonStyles.textColor }}>
                                {dataPasien && dataPasien.datapasien && dataPasien.datapasien.propinsi_nama}
                            </Text>
                        </Paragraph>

                        <Paragraph style={{ marginBottom: 10 }}>
                            <Text variant="bodyMedium" style={{ fontSize: 16, color: commonStyles.textColor }}>KAB / KOTA</Text>{'\n'}
                            <Text variant="bodyMedium" style={{ fontSize: 13, color: commonStyles.textColor }}>
                                {dataPasien && dataPasien.datapasien && dataPasien.datapasien.kabupaten_nama}
                            </Text>
                        </Paragraph>

                        <Paragraph style={{ marginBottom: 10 }}>
                            <Text variant="bodyMedium" style={{ fontSize: 16, color: commonStyles.textColor }}>KECAMATAN</Text>{'\n'}
                            <Text variant="bodyMedium" style={{ fontSize: 13, color: commonStyles.textColor }}>
                                {dataPasien && dataPasien.datapasien && dataPasien.datapasien.kecamatan_nama}
                            </Text>
                        </Paragraph>

                        
                    </Card.Content>
                </ScrollView>
            </Card>
        </View>
    
    
    </View>
);
};

export default HomeScreen;