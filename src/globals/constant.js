import React from 'react';
import { StyleSheet } from 'react-native';
import {create, PREDEF_RES} from 'react-native-pixel-perfect';
const perfectSize = create(PREDEF_RES.iphoneX.dp);

export const Constants = {
    bigFont: perfectSize(35),
    mediumFont: perfectSize(25),
    smallFont: perfectSize(18),
    betweenFont: perfectSize(22),
    marginTop20: perfectSize(20),
    marginTop10: perfectSize(10),
    marginTop50: perfectSize(50),
    width100: '100%',
    greyColor: '#f5f6f8'
}
