import { StyleSheet, PixelRatio } from 'react-native'
import React from 'react';
const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;

const styles = StyleSheet.create({
    bgSuccess:{
        backgroundColor: '#3CA298'
    },
    bgWhite:{
        backgroundColor: 'white'
    },
    bgSecondary:{
        backgroundColor: '#f5f6fa'
    },
    borderSuccess: {
        borderColor: '#3CA298'
    },
    btn: {
        width: 'auto',
        height: 40,
        borderRadius: 5,
        padding: 6,
        paddingTop: 8,
        paddingBottom: 8,
        paddingHorizontal: 10,
        alignItems: 'center',
        fontWeight: 'bold',
        alignItems: 'center',
        textAlign:'center',
        shadowColor: '#34495e', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.3, 
        shadowRadius: 4, 
        elevation: 10, // Required for Android 
    },
    btnSmall: {
        width: 'auto',
        height: 30,
        borderRadius: 5,
        padding: 6,
        paddingTop: 6,
        paddingBottom: 4,
        paddingHorizontal: 10,
        alignItems: 'center',
        fontWeight: 'bold',
        alignItems: 'center',
        textAlign:'center',
        shadowColor: '#34495e', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.3, 
        shadowRadius: 4, 
        elevation: 10, // Required for Android 
    },
    btnBottom: {
        position: 'absolute',
        bottom: 10,
        color: 'green',
        backgroundColor: 'white',   
    },
    btnSuccess: {
        backgroundColor: '#3CA298',
        color: 'white'
    },
    card:{
        backgroundColor: '#FFFFFF', 
        borderRadius: 10, 
        paddingHorizontal: 16,
        paddingVertical: 20, 
        shadowColor: '#34495e', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.3, 
        shadowRadius: 4, 
        elevation: 10, // Required for Android 
        width: '100%', 
        height: 'auto', 
        marginVertical: 2
    },
    container :{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40
    },
    containerMain: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    iconImage: {
        width: 140,
        height: 170
    },
    formControl: {
        height: 40,
        borderWidth: 1.5,
        padding: 10,
        borderRadius: 8,
        width: 'auto',
        marginBottom: 10,
        marginTop: 10,
    },
    fwBold:{
        fontWeight: 'bold',
        fontFamily: 'Poppins-Medium',
    },
    listCard : {
        flex:1, 
        flexDirection: 'row', 
        height: 50, 
        width: '100%'
    },
    listCardHeader : {
        flex: 1, 
        width: '100%'
    },
    listCardButtonTools : {
        alignSelf: 'flex-end', 
        position: 'absolute',
        top: -11,
    },
    listCardHeaderTitle : {
        width: '100%', 
        lineHeight:25,
        fontWeight: 'bold'
    },
    listCardHeaderSubTitle : {
        fontWeight: 'normal',
        fontSize: getFontSize(10),
    },
    listImage: {
        width: 40,
        height: 40,
        marginRight: 8
    },
    mb1 : {
        marginBottom: 10
    },
    mb2 : {
        marginBottom: 20
    },
    mb3 : {
        marginBottom: 30
    },
    mt1 : {
        marginTop: 10
    },
    mt2 : {
        marginTop: 20
    },
    mt3 : {
        marginTop: 30
    },
    pv1 : {
        paddingVertical: 1
    },
    pv2 : {
        paddingVertical: 2
    },
    pv3 : {
        paddingVertical: 3
    },
    ph1 : {
        paddingHorizontal: 1
    },
    ph2 : {
        paddingHorizontal: 2
    },
    ph3 : {
        paddingHorizontal: 3
    },
    textEnd : {
        textAlign: 'right'
    },
    textWhite: {
        color: 'white'
    },
    textMuted: {
        color: '#9e9ea7'
    },
    textCenter: {
        textAlign: 'center'
    },
    textSuccess: {
        color: '#3CA298',
        fontFamily: 'Poppins-Medium',
    },
    textXMini: {
        fontSize: getFontSize(10),
        fontFamily: 'Poppins-Medium',
    },
    textMini: {
        fontSize: getFontSize(12),
        fontFamily: 'Poppins-Medium',
    },
    textDefault: {
        fontSize: getFontSize(11),
        fontFamily: 'Poppins-Medium',
    },
    textSmall: {
        fontSize: getFontSize(15),
        fontFamily: 'Poppins-Medium',
    },
    textMedium: {
        fontSize: getFontSize(17),
        fontFamily: 'Poppins-Medium',
    },
    textLarge: {
        fontSize: getFontSize(20),
        fontFamily: 'Poppins-Medium',
    },
    textXlarge: {
        fontSize: getFontSize(24),
        fontFamily: 'Poppins-Medium',
    },
    w100: {
        width:'100%'
    }
})

export { styles }