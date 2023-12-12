import * as React from 'react';
import {
    Button,
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import { Card } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

import Header from '../header/Header';



const HomeScreen = ({ navigation }) => {

    const openDrawer = () => {
        navigation.openDrawer();
    };
    
return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>

            {/* <View style={{
                height: 50,
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
                height: '10%',
                backgroundColor: '#149581',
                borderBottomLeftRadius: 35,
                borderBottomRightRadius: 35,
                justifyContent: 'center',  // Center secara vertical
                alignItems: 'center',      // Center secara horizontal
                marginBottom:70
            }}>

                <Card style={{ marginTop: 65, height: 115, width: '90%', backgroundColor: '#FAFAFA' }}>
                    <Card.Content>
                    <Text style={{ fontSize:22 }}>Selamat Datang</Text>
                    <Text style={{ fontSize:19, paddingTop:15 }}>Nama Pasien</Text>
                    </Card.Content>
                </Card>

            </View> */}

            <Header type={1} namaPasien="ITKI" openDrawer={openDrawer} />

    {/* Bagian bawah dengan background putih (70%) */}

        <View style={{ flex: 1, backgroundColor: 'white', padding: 20, marginTop: 0 }}>
        {/* Kartu pertama di bagian bawah */}
        <Card style={{ marginBottom: 16, backgroundColor: '#FAFAFA', height:'88%',paddingTop:1, paddingBottom:15 }}>
            <ScrollView 
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <Card.Content>
                    {/* Isi Card */}
                    <Text variant="titleLarge">Another Card title</Text>
                    <Text variant="bodyMedium">Another Card content</Text>
                    <Text variant="titleLarge">Another Card title</Text>
                        <Text variant="bodyMedium">Another Card content</Text>
                        <Text variant="bodyMedium">Another Card content</Text>
                        <Text variant="bodyMedium">Another Card content</Text>
                        <Text variant="bodyMedium">Another Card content</Text>
                        <Text variant="bodyMedium">Another Card content</Text>
                        <Text variant="bodyMedium">Another Card content</Text>
                        <Text variant="bodyMedium">Another Card content</Text>
                        <Text variant="bodyMedium">Another Card content</Text>
                        <Text variant="bodyMedium">Another Card content</Text>
                        <Text variant="bodyMedium">Another Card content</Text>
                        <Text variant="bodyMedium">Another Card content</Text>
                        <Text variant="bodyMedium">Another Card content</Text>
                        <Text variant="bodyMedium">Another Card content</Text>
                        <Text variant="bodyMedium">Another Card content</Text>
                        <Text variant="bodyMedium">Another Card content</Text>
                        <Text variant="bodyMedium">Another Card content</Text>
                        <Text variant="bodyMedium">Another Card content</Text>
                        <Text variant="bodyMedium">Another Card content</Text>
                        <Text variant="bodyMedium">Another Card content</Text>
                        <Text variant="bodyMedium">Another Card content</Text>
                        <Text variant="bodyMedium">Another Card content</Text>
                        <Text variant="bodyMedium">Another Card content</Text>
                        <Text variant="bodyMedium">Another Card content</Text>
                        <Text variant="bodyMedium">Another Card content</Text>
                        <Text variant="bodyMedium">Another Card content</Text>
                        <Text variant="bodyMedium">Another Card content</Text>
                        <Text variant="bodyMedium">Another Card content</Text>
                    {/* ... konten lainnya ... */}
                </Card.Content>
            </ScrollView>
        </Card>
        </View>
    

    
    </View>
);
};

export default HomeScreen;