import * as React from 'react';
import {
    Button,
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    useWindowDimensions
} from 'react-native';

import { Card } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

import Header from '../header/Header';

const dataArray = [
  { id: 1, content: 'Card 1 Content' },
  { id: 2, content: 'Card 2 Content' },
  { id: 3, content: 'Card 3 Content' },
  { id: 4, content: 'Card 3 Content' },
  { id: 5, content: 'Card 3 Content' },
  { id: 6, content: 'Card 3 Content' },
];

const Lab = ({ navigation }) => {

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

      <Header type={1} namaPasien="ITKI" openDrawer={openDrawer} />

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
                <Card key={item.id} style={{ flex: 1, marginRight: 10, backgroundColor: '#F4F4EF' }}>
                  <Card.Content>
                    <Text>{item.content}</Text>
                  </Card.Content>
                </Card>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>





    </View>
  );
}

export default Lab;