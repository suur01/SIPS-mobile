import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Help = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Isi Layar Help</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Kembali</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Help;
