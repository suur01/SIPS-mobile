import React, { useRef,useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Title,
    Paragraph,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Pressable
} from 'react-native';

import { GestureHandlerRootView } from "react-native-gesture-handler";

import { styles } from '../../Styles'
import SkeletonLoading from '../../loading/skeleton';

import { TouchableRipple,Button,Card } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import moment from 'moment';
import Modal from "react-native-modal";
import { ChevronLeft,LogOut } from 'lucide-react-native';
import baseURL from '../../../baseURL';

import RNFS from 'react-native-fs';
import Share from 'react-native-share';

import { PermissionsAndroid } from 'react-native';


const DetailRadiologi = ({ route,navigation }) => {

    const [DataPasien, setDataPasien]                                     = useState();
    const [TOKN, setTOKEN]                                                = useState();
    const [dataDetailRadiologi, setDataDetailRadiologi]                   = useState([]);
    const [encDataDetailRadiologi, setEncDataDetailRadiologi]                   = useState([]);
    const [isLoading, setIsLoading]                                       = useState(true);

    useEffect( () => {

        const fetchData = async () => {
            try {
                const jsonString = await AsyncStorage.getItem('LOGIN_dataPasien');
                const DTpasien = JSON.parse(jsonString);
        
                handleRadiologiDetail(route.params.pasienmasukpenunjang_id_encrypted,DTpasien);
            } catch (error) {
                // Handle errors if needed
                console.error('Error fetching data:', error);
            }
        };

        const requestStoragePermission = async () => {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'Storage Permission',
                        message: 'We need access to your storage for this feature.',
                        buttonNeutral: 'Ask Me Later',
                        buttonNegative: 'Cancel',
                        buttonPositive: 'OK',
                    },
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('Storage permission granted');
                } else {
                    console.log('Storage permission denied');
                }
            } catch (err) {
                console.warn(err);
            }
        };

        requestStoragePermission();
    
        fetchData();
        
    }, []);



    const kembali = () =>{
        navigation.navigate('radiologi');
    }

    const keluar = () =>{
        navigation.navigate('MenuNavigasi', {
            screen: 'login'
        });
    }

    const handleRadiologiDetail = (pasienmasukpenunjang_id_encrypted, dataPasien) => {

        const dataPasienSicret = dataPasien.datapasien.pasien_id_encrypted
        const pid   = dataPasienSicret.pid
        const piv   = dataPasienSicret.piv
        const ps    = dataPasienSicret.ps
        const TOKEN = dataPasien.token
        setTOKEN(TOKEN)

        const dataPasienPenunjangID = pasienmasukpenunjang_id_encrypted
        const pnjid = dataPasienPenunjangID.pnjid
        const pnjs  = dataPasienPenunjangID.pnjs
        const pnjv  = dataPasienPenunjangID.pnjv
    
        baseURL.get(`hasilradiologi/detail?pid=${pid}&piv=${piv}&ps=${ps}&pnjid=${pnjid}&pnjiv=${pnjv}&pnjs=${pnjs}`,{
            headers: { 
                'x-authorization-token-sipp': TOKEN,
            }
        })
        .then((response) => {
            
            console.log('hasil detail radiologi')
            console.log(response.data.response[0].pasienmasukpenunjang_id_encrypted)
            setDataDetailRadiologi(response.data.response);
            setEncDataDetailRadiologi(response.data.response[0].pasienmasukpenunjang_id_encrypted)
            setIsLoading(false)

        })
        .catch((error) => {
            console.log(error);
            setIsLoading(false); 
        });

    }

    const Row = ({ label, value }) => (
        <View style={stylesCustom.row}>
            <Text style={[stylesCustom.label, styles.textDefault, styles.textSuccess]}>{label}</Text>
            <Text style={[stylesCustom.colon, styles.textDefault, styles.textSuccess]}>:</Text>
            <View style={[stylesCustom.value, styles.textDefault, styles.textSuccess]}>
                <Text style={[styles.textDefault, styles.textSuccess]}>
                {value}
                </Text>
            </View>
        </View>
    )

    const loadingCards = () => {
        const cards = [];

        for (let i = 0; i < 6; i++) {
            cards.push(
                <Card key={i} style={{ height: 85, marginBottom: 8, backgroundColor: 'rgba(252, 253, 252, 1)' }}>
                    <Card.Content style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <SkeletonLoading shape="circle" width={50} height={50} />
                    <View style={{ flex: 1, marginLeft: 20 }}>
                        <SkeletonLoading shape="rectangle" width={290} height={7} />
                    </View>
                    </Card.Content>
                </Card>
            );
        }

        return cards;
    };

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        const pnjidPDF = encDataDetailRadiologi.pnjid
        const pnjsPDF  = encDataDetailRadiologi.pnjs
        const pnjvPDF  = encDataDetailRadiologi.pnjv
        const TOKEN    = TOKN
        
        // setModalVisible(!isModalVisible); // digunakan untuk menampilkan modal

        // console.log(TOKEN)

        baseURL.get(`cetakLabResult/?lab=radiologi&pnjid=${pnjidPDF}&pnjiv=${pnjvPDF}&pnjs=${pnjsPDF}`,{
            headers: { 
                'x-authorization-token-sipp': TOKEN,
            }
        })
        .then((response) => {
            console.log("DATA PDF")
            // console.log(response.data.response)

            // const path = RNFS.DocumentDirectoryPath + '/PATOLOGI_KLINIK.pdf';
            const path = RNFS.ExternalStorageDirectoryPath + '/PATOLOGI_KLINIK.pdf';

            // Tulis base64 ke file
            RNFS.writeFile(path, response.data.response, 'base64')
            .then(() => {
                console.log('File disimpan di:', path);

                // Bagikan atau buka file
                // Share.open({
                // title: 'PATOLOGI KLINIK',
                // url: 'file://' + path,
                // type: 'application/pdf',
                // })
                // .then((res) => console.log(res))
                // .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));

        })
        .catch((error) => {
            console.log(error);
            setIsLoading(false); 
        });

        
    };
    
    return (

        <>
                <View style={{
                        height: 90,
                        backgroundColor: '#149581',
                    }}>

                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft:20, paddingRight: 20, paddingTop: 35 }}>
                        <ChevronLeft onPress={kembali} color="white" size={24} />
                        <MaterialCommunityIcons name="flask" color="white" size={24} />
                        <LogOut onPress={keluar} color="white" size={24} />
                    </View>

                    

                </View>


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
                        
                        {
                            isLoading ? (
                                <>
                                    {/* <ActivityIndicator style={{paddingTop:35}} size="large" color="#0000ff" /> */}
                                    {loadingCards()}
                                </>
                            ) : (

                                dataDetailRadiologi.map((item, index) => { 
                                    // console.log(item)
                                    let dokter_perujuk = (item.nama_pegawai != null) ? item.nama_pegawai : '-';
                                    let tgl_kirimpasien = (item.tgl_kirimpasien != null) ? moment(item.tgl_kirimpasien).format('LLLL') : '-';
                                    let diagnosa_icdx = (item.diagnosa_nama != null) ? ('( '+item.diagnosa_kode + ') ' +item.diagnosa_nama) : '-';
                                    let diagnosa_umum = (item.keterangandiagnosa_klinis != null) ? item.keterangandiagnosa_klinis : '-';
                                    let status_cito = (item.status_cito != null) ? item.status_cito : '-';
                                    let informasi = (item.catatandokterpengirim != null) ? item.catatandokterpengirim : '-';
                                    let status_nosokomial = (item.is_nosokomial != true) ? 'Tidak' : 'Ya';
                                    let pemakai = (item.pemakai_antibiotik != null) ? item.pemakai_antibiotik : '-';
                                    let daftar_tindakan = (item.daftartindakan_nama != null) ? item.daftartindakan_nama : '-';
                                    let hasilexpertise = (item.hasilexpertise != null) ? item.hasilexpertise : '-';
                                    let kesimpulan = (item.kesimpulan_hasilrad != null) ? item.kesimpulan_hasilrad : '-';
                                    let dokter_pemeriksa = (item.dokterpemeriksa1 != null) ? item.dokterpemeriksa1 : '-';
                                    // <Pressable>
                                    //     <Card>
                                    //         <Card.Content>

                                    //         </Card.Content>
                                    //     </Card>
                                    // </Pressable>
                                    return (
                                        <Card style={{ margin: 10, marginBottom: 11 }} key={index}>
                                            <Pressable
                                            key={index}
                                            style={({pressed}) => [
                                                    {
                                                    backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                                                    margin: 0, marginBottom: 0,borderRadius: 10
                                                    }
                                                ]}
                                            >
                                                <Card.Content>

                                                    <View style={[styles.listCard, styles.mt2]}>
                                                        <Image source={require('../../assets/image/woRadiologiVmp.png')} style={[styles.listImage]}/>
                                                        
                                                        {/* Begin Card header */}
                                                        <View style={[styles.listCardHeader]}>
                                                        <Text style={[styles.listCardHeaderTitle, styles.textSuccess]}>
                                                            {moment(item.tglmasukpenunjang).format('LL')}
                                                        </Text>
                                                        <Text style={[styles.listCardHeaderSubTitle, styles.textSuccess]}>Dokter Perujuk : {(item.nama_pegawai != null) ? item.nama_pegawai : '-'}</Text>
                                                        <TouchableOpacity onPress={toggleModal} style={[styles.listCardButtonTools, styles.btnSmall, styles.btnSuccess]} title=''>
                                                            <Text style={[styles.textWhite, styles.textMini]}>
                                                                Lihat PDF
                                                            </Text>
                                                        </TouchableOpacity>
                                                        </View>
                                                        {/* End Card header */}
                                                    </View>

                                                    <Row label="Dokter Perujuk" value={ dokter_perujuk }/>
                                                    <Row label="Tanggal Kirim" value={ tgl_kirimpasien }/>
                                                    <Row label="Diagnosis Rujukan ICDX" value={ diagnosa_icdx }/>
                                                    <Row label="Diagnosis Rujukan Umum " value={ diagnosa_umum }/>
                                                    <Row label="Status CITO" value={ status_cito }/>
                                                    <Row label="Informasi" value={ informasi }/>
                                                    <Row label="Status Nosokomial" value={ status_nosokomial }/>
                                                    <Row label="Pemakai Antibiotik" value={ pemakai }/>
                                                    <Row label="Daftar Tindakan" value={ daftar_tindakan }/>

                                                    <Text style={[styles.fwBold, styles.textMini, styles.textSuccess, styles.mt1]}>Hasil Pemeriksaan Radiologi {tgl_kirimpasien}</Text>
                                                    <Text style={[styles.fwBold, styles.textDefault, styles.textSuccess]}>{hasilexpertise}</Text>

                                                    <Text style={[styles.fwBold, styles.textMini, styles.textSuccess, styles.mt1]}>Kesimpulan</Text>
                                                    <Text style={[styles.fwBold, styles.textDefault, styles.textSuccess]}>{kesimpulan}</Text>

                                                    <Text style={[styles.fwBold, styles.textMini, styles.textSuccess, styles.mt1]}>Dokter Pemeriksa</Text>
                                                    <Text style={[styles.fwBold, styles.textDefault, styles.textSuccess]}>{dokter_pemeriksa}</Text>

                                                </Card.Content>
                                            </Pressable>
                                        </Card>
                                    )
                                })
                            )
                        }

                        {
                            dataDetailRadiologi.length >= 2 ? (

                            <Card style={{ margin: 10,marginBottom: 11 }}>
                                <Card.Content>
                                    <Text></Text>
                                    <Text></Text>
                                    <Text></Text>
                                    <Text></Text>
                                    <Text></Text>
                                    <Text></Text>
                                    <Text></Text>
                                    <Text></Text>
                                    <Text></Text>
                                    <Text></Text>
                                    <Text></Text>
                                    <Text></Text>
                                    <Text></Text>
                                    <Text></Text>
                                </Card.Content>
                            </Card>

                            ) : ( <></> )
                        
                        }


                    </ScrollView>

                    <Modal
                        isVisible={isModalVisible}
                        style={{ justifyContent: 'flex-end', margin: 0 }}
                        onBackdropPress={toggleModal}
                    >
                        
                        <View style={stylesCustom.modalContent}>
                            <Text style={stylesCustom.modalText}>Mohon Maaf PDF Tidak Tersedia</Text>
                            {/* <TouchableOpacity onPress={toggleModal}>
                                <Text>Close Modal</Text>
                            </TouchableOpacity> */}
                        </View>
                    </Modal>

            </View>

        </>
    );
}

export default DetailRadiologi;

const stylesCustom = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    label: {
        fontWeight: 'normal',
        width: 145
    },
    colon: {
        textAlign: 'center',
        width: 1,
        width: 15
    },
    value: {
        flexGrow: 1,
        flex: 1,
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 16,
        height: '15%',
        justifyContent: 'center', // Tengahkan secara vertikal
        alignItems: 'center',     // Tengahkan secara horizontal
    },
        modalText: {
        fontWeight: 'bold',      // Teks bold
    },

    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //   },
    //   text: {
    //     fontSize: 16,
    //   },
    //   wrapperCustom: {
    //     borderRadius: 8,
    //     padding: 6,
    //   },
    //   logBox: {
    //     padding: 20,
    //     margin: 10,
    //     borderWidth: StyleSheet.hairlineWidth,
    //     borderColor: '#f0f0f0',
    //     backgroundColor: '#f9f9f9',
    //   },

})

