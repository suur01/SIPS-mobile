import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Title,
    Paragraph,
    SafeAreaView,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import { TouchableRipple,Button,Card } from 'react-native-paper';

import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const DetailRadiologi = ({ route,navigation }) => {

    const [DataPasien, setDataPasien]                                     = useState();
    const [pasienmasukpenunjang_id, setpasienmasukpenunjang_id]           = useState();
    const [dataDetailRadiologi, setDataDetailRadiologi]                   = useState('');
    const [isLoading, setIsLoading]                                       = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // setpasienmasukpenunjang_id(route.params.pasienmasukpenunjang_id_encrypted);
                setpasienmasukpenunjang_id("TESTING");
                // await getDataPasien();
                await handleRadiologi();
            } catch (error) {
                // Handle errors if needed
                console.error('Error fetching data:', error);
            }
        };
        
        fetchData();
        
        // If there's any cleanup needed, return a function
        return () => {
            // Cleanup logic here if necessary
        };
    }, [route.params.pasienmasukpenunjang_id_encrypted]);


    const kembali = () =>{
        navigation.navigate('radiologi');
    }

    const keluar = () =>{
        navigation.navigate('MenuNavigasi', {
            screen: 'login'
        });
    }

    const getDataPasien = async () => {
        const jsonString = await AsyncStorage.getItem('LOGIN_dataPasien');
        const DataPasien = JSON.parse(jsonString);

        setDataPasien(DataPasien)

        // console.log('Data berhasil diambil1:', DataPasien.datapasien);
        // console.log('Data berhasil diambil2:', DataPasien.token);

        // handleRadiologi(DataPasien,DataPasien.token);

    };

    const handleRadiologi = async () => {

        console.log('Data berhasi')
        console.log(pasienmasukpenunjang_id)

        // const dataPasienSicret = DataPasien.datapasien.pasien_id_encrypted
        // const pid = dataPasienSicret.pid
        // const piv = dataPasienSicret.piv
        // const ps  = dataPasienSicret.ps


            // const dataPasienPenunjangID = pasienmasukpenunjang_id
            // const pnjid = dataPasienPenunjangID.pnjid
            // const pnjs  = dataPasienPenunjangID.pnjs
            // const pnjv  = dataPasienPenunjangID.pnjv

            // console.log(pnjid)
        

        //     console.log('pasien penunjang ID')
        //     console.log(`https://api.rsudrsoetomo.jatimprov.go.id/sipp/hasilradiologi/detail?pid=${pid}&piv=${piv}&ps=${ps}&pnjid=${pnjid}&pnjiv=${pnjv}&pnjs=${pnjs}`)

        //     let config = {
        //         method: 'get',
        //         maxBodyLength: Infinity,
        //         url: `https://api.rsudrsoetomo.jatimprov.go.id/sipp/hasilradiologi/detail?pid=${pid}&piv=${piv}&ps=${ps}&pnjid=${pnjid}&pnjiv=${pnjv}&pnjs=${pnjs}`,
        //         headers: { 
        //             'x-authorization-token-sipp': TOKEN,
        //         }
        //     };
        
        //     axios.request(config)
        //     .then((response) => {
                
        //         console.log('hasil detail radiologi')
        //         console.log(response.data.response)
        //         // setDataDetailRadiologi(response.data.response);
        //         // setIsLoading(false)

        //     })
        //     .catch((error) => {
        //         console.log(error);
        //         setIsLoading(false); 
        //     });


        
    }
    
    return (

        <>
                <View style={{
                        height: 90,
                        backgroundColor: '#149581',
                    }}>

                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft:20, paddingRight: 20, paddingTop: 35 }}>
                        <MaterialCommunityIcons onPress={kembali} name="flask" color="white" size={24} />
                        <MaterialCommunityIcons name="flask" color="white" size={24} />
                        <MaterialCommunityIcons onPress={keluar} name="flask" color="white" size={24} />
                    </View>

                </View>

                {/* <View style={{
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
                                    <Text>    Detail Radiologi</Text>  
                        </Text>


                        <View >
                            
                            <Card style={{ margin: 10,height: '95%', }}>
                                <ScrollView style={{ margin: 10 }}>
                                    <Card.Content>
                                        <Text>asdfasdf</Text>
                                        <Text>asdfasdf</Text>
                                        <Text>asdfasdf</Text>
                                    </Card.Content>
                                </ScrollView>
                            </Card>

                        </View>

                </View> */}

                <View style={{ height: '15%', backgroundColor: '#149581', borderBottomLeftRadius: 45, borderBottomRightRadius: 45 }}>
                {/* Your top view content */}
                </View>
                
                <View style={{ marginTop: -120, zIndex: 1 }}>
                    <Text style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                        fontSize: 17,
                        marginLeft: '5%',
                        fontWeight: 'bold',
                        marginBottom: 10,
                    }}>
                        <MaterialCommunityIcons name="flask" color="white" size={20} />
                        <Text>    Detail Radiologi</Text>
                    </Text>


                    <ScrollView 
                        style={{ margin: 10 }} 
                        showsVerticalScrollIndicator={false} 
                        showsHorizontalScrollIndicator={false} >
                        <Card style={{ margin: 10, marginBottom: 11 }}>
                            <Card.Content>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                            </Card.Content>
                        </Card>
                        <Card style={{ margin: 10, marginBottom: 11 }}>
                            <Card.Content>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                            </Card.Content>
                        </Card>
                        <Card style={{ margin: 10, marginBottom: 11 }}>
                            <Card.Content>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                            </Card.Content>
                        </Card>

                        <Card style={{ margin: 10,marginBottom: 11 }}>
                            <Card.Content>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                                <Text>asdfasdf</Text>
                            </Card.Content>
                        </Card>
                    </ScrollView>

            </View>

        </>

    );
}

export default DetailRadiologi;