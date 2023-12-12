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

const Profile = ({ navigation }) => {

  const openDrawer = () => {
      navigation.openDrawer();
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      
      <Header type={2} namaPasien="ITKI" openDrawer={openDrawer} />

    </View>
  );
}

export default Profile;