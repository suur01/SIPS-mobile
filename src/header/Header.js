import React from 'react';
import { View,Image, TouchableOpacity } from 'react-native';
import { Card, Text } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome';

const HeaderType1 = ({ openDrawer, namaPasien }) => {
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
                <Card style={{ marginTop: 15, height: 115, width: '90%', backgroundColor: '#FAFAFA' }}>
                    <Card.Content>
                    <Text style={{ fontSize:22 }}>Selamat Datang</Text>
                    <Text style={{ fontSize:19, paddingTop:15 }}>{namaPasien}</Text>
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
                <Card style={{ marginTop: 15, height: 115, width: '90%', backgroundColor: '#FAFAFA', alignItems: 'center', justifyContent: 'center' }}>
                    <Card.Content>
                    <View style={{ width: 80, height: 80, borderRadius: 40, overflow: 'hidden', marginBottom: 10 }}>
                        {/* Gambar profil lingkaran */}
                        <Image source={require('../assets/image/sips.png')} style={{ width: '100%', height: '100%', borderRadius: 40 }} />
                    </View>
                    
                    </Card.Content>
                </Card>

            </View>
        </View>
    );
};

const Header = ({ type, namaPasien, openDrawer }) => {
    return type === 1 ? <HeaderType1 namaPasien={namaPasien} openDrawer={openDrawer} /> : <HeaderType2 openDrawer={openDrawer} />;
};

export default Header;
