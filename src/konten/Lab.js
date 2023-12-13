import React,{useEffect,useState} from 'react';
import {
    Button,
    View,
    Text,
    Image,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    useWindowDimensions
} from 'react-native';

import { Card } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'

import Header from '../header/Header';

const dataArray = [
  { id: 1, content: 'Hasil Radiologi',        imge:'../assets/image/radiologi.png' },
  { id: 2, content: 'Hasil Patologi Klinik',  imge:'../assets/image/pk.png' },
  { id: 3, content: 'Hasil Mikrobiologi',     imge:'../assets/image/mikrobiologi.png' },
  { id: 4, content: 'Hasil Patologi Anatomi', imge:'../assets/image/pa.png' },
  { id: 5, content: 'Card 3 Content',         imge:'../assets/image/radiologi.png' },
  { id: 6, content: 'Card 3 Content',         imge:'../assets/image/sips.png' },
];

const Lab = ({ navigation }) => {

  useEffect(() => {
      // Panggil fungsi untuk mengambil data saat komponen dimount
      getData();
  }, []);

  const [dataPasien, setDataPasien] = useState('');

  const openImage = (content) => {
    console.log('Opening image for:', content);
    // Add your logic to display the image here
  };

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

  const groupedData = [];
  const itemsPerRow = 2;

  // Group the data into arrays of two items
  for (let i = 0; i < dataArray.length; i += itemsPerRow) {
    groupedData.push(dataArray.slice(i, i + itemsPerRow));
  }

  const { height: screenHeight } = useWindowDimensions();
  const rowHeight = screenHeight * 0.18;

  return (
    
    <View style={{ flex: 1, backgroundColor: 'white' }}>

        <Header 
            type={1} 
            namaPasien={dataPasien && dataPasien.datapasien && dataPasien.datapasien.nama_pasien}
            rekamMedik={dataPasien && dataPasien.datapasien && dataPasien.datapasien.no_rekam_medik} 
            openDrawer={openDrawer} 
        />

      <ScrollView 
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 20 }}
      >
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white', padding: 20, marginTop: 0 }}>
          {groupedData.map((row, rowIndex) => (
            <View key={rowIndex} style={{ flexDirection: 'row', height: rowHeight, marginBottom: 10 }}>
              {row.map(item => (



                <Card key={item.id} style={{ flex: 1, marginRight: 10, backgroundColor: '#FCFDFC' }}>

                  <TouchableOpacity key={item.id} onPress={() => openImage(item.imge)}> 

                    <Card.Content>
                      {/* <Image source={{ uri :`${item.imge}` }} style={{ width: 50, height: 50, marginBottom: 10 }} /> */}
                      <Image source={item.imge} style={{ width: 50, height: 50 }} />
                      <Image source={require('../assets/image/sips.png')} style={{ width: 50, height: 50 }} />
                      <Text style={styles.Text}>{item.content}</Text>
                      {/* <Text>{item.imge}</Text> */}
                    </Card.Content>

                  </TouchableOpacity>

                </Card>



              ))}
            </View>
          ))}
        </View>
      </ScrollView>





    </View>
  );
}

const styles = StyleSheet.create({ 
  Text: { 
    color:'#0E9971',
    justifyContent: 'center',
    alignItems: 'center', 
  }
  
})

export default Lab;