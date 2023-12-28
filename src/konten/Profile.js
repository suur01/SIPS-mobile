// import * as React from 'react';
// import {
//     Button,
//     View,
//     Text,
//     SafeAreaView,
//     ScrollView,
//     TouchableOpacity
// } from 'react-native';

// import { Card } from 'react-native-paper';
// import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome';
// import { useNavigation } from '@react-navigation/native';
// import ContentLoader from 'react-content-loader';


// import Header from '../header/Header';

// const Profile = ({ navigation }) => {

//   const openDrawer = () => {
//       navigation.openDrawer();
//   };

//   const MyLoader = () => (
//     <ContentLoader
//       speed={2}
//       width={300}
//       height={100}
//       viewBox="0 0 300 100"
//       backgroundColor="#f3f3f3"
//       foregroundColor="#ecebeb"
//     >
//       <rect x="0" y="10" rx="4" ry="4" width="300" height="20" />
//       <rect x="0" y="40" rx="4" ry="4" width="250" height="20" />
//       <rect x="0" y="70" rx="4" ry="4" width="200" height="20" />
//     </ContentLoader>
//   );
  

//   return (

//         <View style={{ marginTop: 100 }}>
//   <Text>aaaa</Text>
//   <MyLoader />
// </View>



      
    
//   );
// }

// export default Profile;

import React from 'react';
import { View, Text,Stack } from 'react-native';
import { Skeleton } from '@rneui/themed';

import Header from '../header/Header';

const Profile = ({ navigation }) => {
  const openDrawer = () => {
    navigation.openDrawer();
  };

  const MyLoader = () => (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <ContentLoader
        speed={2}
        width={300}
        height={100}
        viewBox="0 0 300 100"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="10" rx="4" ry="4" width="300" height="20" />
        <rect x="0" y="40" rx="4" ry="4" width="250" height="20" />
        <rect x="0" y="70" rx="4" ry="4" width="200" height="20" />
      </ContentLoader>
      <Text>aaaa</Text>
    </View>
  );

  const MyLoader1 = () => <ContentLoader />


  return (
    <View style={{ marginTop: 100 }}>
      
      <Stack row align="center" spacing={4}>
  <Skeleton width={120} height={40} />
  <Skeleton circle width={40} height={40} />
</Stack>

    </View>
  );
}

export default Profile;
