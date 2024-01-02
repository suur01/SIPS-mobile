import React,{useState,useEffect} from 'react';
import { useNavigation,NavigationContainer }              from '@react-navigation/native';
import { createDrawerNavigator }            from '@react-navigation/drawer';
import { createBottomTabNavigator }         from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator }       from '@react-navigation/native-stack';
import MaterialCommunityIcons               from 'react-native-vector-icons/FontAwesome';
import { FeatherIcon } from "react-native-feather";

import { useRoute,useIsFocused } from '@react-navigation/native';

import login       from './src/login/Login';
import Beranda     from './src/konten/Beranda';
import Help        from './src/konten/Help';
import Lab         from './src/konten/Lab';
import MainLab     from './src/konten/Lab';
import Profile     from './src/konten/Profile';

import radiologi                from './src/hasilLab/radiologi/Radiologi';
import PatologiKlinik           from './src/hasilLab/PatologiKlinik/PatologiKlinik';
import PatologiAnatomi          from './src/hasilLab/PatologiAnatomi/PatologiAnatomi';
import Mikrobiologi             from './src/hasilLab/Mikrobiologi/mikrobiologi';

import DetailRadiologi          from './src/hasilLab/radiologi/DetailRadiologi';

const Stack     = createNativeStackNavigator();
const Drawer    = createDrawerNavigator();
const Tab       = createBottomTabNavigator();


const Laboratorium = createNativeStackNavigator();

function LaboratoriumStackScreen() {
    const route = useRoute();
    const navigation = useNavigation();

    return (
        <Laboratorium.Navigator >
            <Laboratorium.Screen name="MainLab" component={Lab} options={{headerShown: false}} />
            <Laboratorium.Screen name="radiologi" component={radiologi} options={{headerShown: false}} />
            <Laboratorium.Screen name="PatologiKlinik" component={PatologiKlinik} options={{headerShown: false}} />
            <Laboratorium.Screen name="PatologiAnatomi" component={PatologiAnatomi} options={{headerShown: false}} />
            <Laboratorium.Screen name="Mikrobiologi" component={Mikrobiologi} options={{headerShown: false}} />
            
            <Laboratorium.Screen name="DetailRadiologi" component={DetailRadiologi} options={{headerShown: false}} />

        </Laboratorium.Navigator>
    );
}


/* Digunakan untuk kumpulan menu pindah halaman secara langsung tanpa tab dan drawer */
function MenuNavigasi() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="login"
                component={login}
                options={{ headerShown: false }}
            />
            {/* <Stack.Screen
                name="radiologi"
                component={LaboratoriumStackScreen}
                options={{ headerShown: false }}
            /> */}
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
                            <MaterialCommunityIcons name="home" color={focused ? '#ffffff' : '#E5F3F0'} size={size} />
                        ),
                        tabBarActiveTintColor:'#ffffff'
                    
                    }}
                />

                <Tab.Screen 
                    name="Lab" 
                    component={LaboratoriumStackScreen} 
                    options={{
                        tabBarIcon: ({ color, size,focused }) => (
                            <MaterialCommunityIcons name="flask" color={focused ? '#ffffff' : '#E5F3F0'} size={size} />
                        ),
                        tabBarActiveTintColor:'#ffffff',
                        
                    }}
                />

                <Tab.Screen 
                    name="Detail" 
                    component={Profile} 
                    options={{
                        tabBarIcon: ({ color, size, focused }) => (
                            <MaterialCommunityIcons
                            name="flask"
                            color={focused ? '#ffffff' : '#E5F3F0'}
                            size={size}
                            style={{ fontWeight: focused ? 'bold' : 'normal' }}
                            />
                        ),
                        tabBarActiveTintColor: '#ffffff'
                    }}
                    
                />

                <Tab.Screen 
                    name="Profile" 
                    component={Profile} 
                    options={{
                        tabBarIcon: ({ color, size,focused }) => (
                            <MaterialCommunityIcons name="flask" color={focused ? '#ffffff' : '#E5F3F0'} size={size} />
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

