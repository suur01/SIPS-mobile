import React from 'react';
import { NavigationContainer }              from '@react-navigation/native';
import { createDrawerNavigator }            from '@react-navigation/drawer';
import { createBottomTabNavigator }         from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator }       from '@react-navigation/native-stack';
import MaterialCommunityIcons               from 'react-native-vector-icons/FontAwesome';

import login       from './src/login/Login';
import Beranda     from './src/konten/Beranda';
import Help        from './src/konten/Help';
import Lab         from './src/konten/Lab';
import Profile     from './src/konten/Profile';

const Stack     = createNativeStackNavigator();
const Drawer    = createDrawerNavigator();
const Tab       = createBottomTabNavigator();


/* Digunakan untuk kumpulan menu pindah halaman secara langsung tanpa tab dan drawer */
function MenuNavigasi() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="login"
                component={login}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

/* Digunakan untuk kumpulan menu tab navigasi */
function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    height: 70,
                    paddingHorizontal: 0,
                    paddingBottom: 10,
                    backgroundColor: '#149581',
                    position: 'absolute',
                    borderTopWidth: 0,
                    activeBackgroundColor: '#c4461c',
                },
                tabBarActiveTintColor: '#ffffff',
                tabBarInactiveTintColor: '#EEF88A',
            })}
        >
                <Tab.Screen 
                    name="Beranda" 
                    component={Beranda} 
                    options={{
                        tabBarIcon: ({ color, size,focused }) => (
                            <MaterialCommunityIcons name="home" color={focused ? '#ffffff' : '#EEF88A'} size={size} />
                        ),
                        tabBarActiveTintColor:'#ffffff'
                    
                    }}
                />

                <Tab.Screen 
                    name="Lab" 
                    component={Lab} 
                    options={{
                        tabBarIcon: ({ color, size,focused }) => (
                            <MaterialCommunityIcons name="flask" color={focused ? '#ffffff' : '#EEF88A'} size={size} />
                        ),
                        tabBarActiveTintColor:'#ffffff',
                        
                    }}
                />

                <Tab.Screen 
                    name="Detail" 
                    component={Profile} 
                    options={{
                        tabBarIcon: ({ color, size,focused }) => (
                            <MaterialCommunityIcons name="flask" color={focused ? '#ffffff' : '#EEF88A'} size={size} />
                        ),
                        tabBarActiveTintColor:'#ffffff'
                    }}
                />

                <Tab.Screen 
                    name="Profile" 
                    component={Profile} 
                    options={{
                        tabBarIcon: ({ color, size,focused }) => (
                            <MaterialCommunityIcons name="flask" color={focused ? '#ffffff' : '#EEF88A'} size={size} />
                        ),
                        tabBarActiveTintColor:'#ffffff'
                    }}
                />

        </Tab.Navigator>
    );
}


/* Digunakan untuk kumpulan menu di sidebar(drawer) */
function MyDrawer() {
    return (
        
        <Drawer.Navigator screenOptions={{ headerShown: false,}}>
            <Drawer.Screen 
                name="MyTabs" 
                component={MyTabs} 
                options={{
                    drawerItemStyle: { height: 0 }
                }} 
            /> 
            <Drawer.Screen name="Help" component={Help} options={{headerShown: false}} />
            <Drawer.Screen name="Help2" component={Help} options={{headerShown: false}} />
        </Drawer.Navigator>

    );
}

function RootNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Drawery" screenOptions={{ headerShown: false,}}>
                <Stack.Screen
                    name="MenuNavigasi"
                    component={MenuNavigasi}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="MyDrawer"
                    component={MyDrawer}
                    screenOptions={{ headerShown: false,}}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;