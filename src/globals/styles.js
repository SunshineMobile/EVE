import React from 'react';
import { StyleSheet } from 'react-native';
import {create, PREDEF_RES} from 'react-native-pixel-perfect';
const perfectSize = create(PREDEF_RES.iphoneX.dp);

export const GlobalStyles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        padding: perfectSize(20),
        // alignItems: 'center',
    },

    appHeader: {
        width: '100%',
        height: perfectSize(50),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    flexCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    flexBetween: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    flexAround: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerPart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    btn: {
        width: '100%',
        backgroundColor: '#3C82FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: perfectSize(10)
    },
})
