import React from 'react';
import { View,Image, TouchableOpacity } from 'react-native';
import { Card, Text } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome';

const HeaderType1 = ({ openDrawer, namaPasien, rekamMedik }) => {

    const commonStyles = {
        textColor: '#149581'
    };

    return (
        <View>

            <View style={{
                    height: 100,
                    backgroundColor: '#149581',
                }}>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft:20, paddingRight: 20, paddingTop: 16 }}>
                    <TouchableOpacity onPress={openDrawer}>
                        <MaterialCommunityIcons name="bars" color="white" size={24} />
                    </TouchableOpacity>
                    <MaterialCommunityIcons name="flask" color="white" size={24} />
                </View>

            </View> 

            <View style={{
                height: '14%',
                backgroundColor: '#149581',
                borderBottomLeftRadius: 35,
                borderBottomRightRadius: 35,
                justifyContent: 'center',  // Center secara vertical
                alignItems: 'center',      // Center secara horizontal
                marginBottom:-10,
                
            }}>

                {/* Konten di bagian atas */}
                <Card style={{ marginTop: 15, height: 115, width: '90%', backgroundColor: '#FCFDFC' }}>
                    <Card.Content>
                    <Text style={{ fontSize:22, color: commonStyles.textColor }}>Selamat Datang</Text>
                    <Text style={{ fontSize:16, paddingTop:10, color: commonStyles.textColor }}>{namaPasien}</Text>
                    <Text style={{ fontSize:15, paddingTop:5 , color: commonStyles.textColor }}>Nomor Rekam Medik : {rekamMedik}</Text>
                    </Card.Content>
                </Card>

            </View>
        </View>
    );
};

const HeaderType2 = ({ openDrawer, namaPasien }) => {
    return (
        <View>

            <View style={{
                height: 100,
                backgroundColor: '#149581',
                }}>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft:20, paddingRight: 20, paddingTop: 16 }}>
                    <TouchableOpacity onPress={openDrawer}>
                        <MaterialCommunityIcons name="bars" color="white" size={24} />
                    </TouchableOpacity>
                    <MaterialCommunityIcons name="flask" color="white" size={24} />
                </View>

            </View> 

            <View style={{
                height: '14%',
                backgroundColor: '#149581',
                borderBottomLeftRadius: 35,
                borderBottomRightRadius: 35,
                justifyContent: 'center',  // Center secara vertical
                alignItems: 'center',      // Center secara horizontal
                marginBottom:-10
            }}>

                {/* Konten di bagian atas */}
                <Card style={{ marginTop: 65, height: 160, width: '90%', backgroundColor: '#FCFDFC', alignItems: 'center', justifyContent: 'center' }}>
                    <Card.Content style={{ alignItems: 'center' }}>
                        <View style={{ width: 80, height: 80, borderRadius: 40, overflow: 'hidden', marginBottom: 10 }}>
                        {/* Gambar profil lingkaran */}
                        <Image source={require('../assets/image/sips.png')} style={{ width: '100%', height: '100%', borderRadius: 40 }} />
                        </View>
                        {/* Teks di bawah gambar */}
                        <Text style={{ fontSize: 22, textAlign: 'center' }}>Profile</Text>
                        <Text style={{ fontSize: 19, paddingTop: 5, textAlign: 'center' }}>{namaPasien}</Text>
                    </Card.Content>
                </Card>

            </View>
        </View>
    );
};

const HeaderType3 = ({ openDrawer, namaPasien, rekamMedik }) => {

    const commonStyles = {
        textColor: '#149581'
    };

    return (
        <>

            <View style={{
                    height: 100,
                    backgroundColor: '#149581',
                }}>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft:20, paddingRight: 20, paddingTop: 16 }}>
                    {/* <TouchableOpacity onPress={openDrawer}>
                        <MaterialCommunityIcons name="bars" color="white" size={24} />
                    </TouchableOpacity> */}
                    <Text></Text>
                    <MaterialCommunityIcons name="flask" color="white" size={24} />
                </View>

            </View> 

            <View style={{
                height: '20%',
                backgroundColor: '#149581',
                borderBottomLeftRadius: 45,
                borderBottomRightRadius: 45,
                justifyContent: 'center',  // Center secara vertical
                alignItems: 'center',      // Center secara horizontal
                
            }}>

                {/* <Card style={{ marginTop: 15, height: 115, width: '90%', backgroundColor: '#FCFDFC' }}>
                    <Card.Content>
                    <Text style={{ fontSize:22, color: commonStyles.textColor }}>Selamat Datang</Text>
                    <Text style={{ fontSize:16, paddingTop:10, color: commonStyles.textColor }}>{namaPasien}</Text>
                    <Text style={{ fontSize:15, paddingTop:5 , color: commonStyles.textColor }}>Nomor Rekam Medik : {rekamMedik}</Text>
                    </Card.Content>
                </Card> */}

            </View>

        </>
    );
};

const Header = ({ type, namaPasien, rekamMedik, openDrawer }) => {
    if(type === 1)
        { return <HeaderType1 namaPasien={namaPasien} rekamMedik={rekamMedik} openDrawer={openDrawer} />; } 
    else if( type === 2)
        { return <HeaderType2 openDrawer={openDrawer} /> }
    else if( type === 3)
        { return <HeaderType3 namaPasien={namaPasien} rekamMedik={rekamMedik}  /> }
};

export default Header;
