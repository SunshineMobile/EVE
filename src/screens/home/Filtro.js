import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    ActivityIndicator,
    ScrollView,
} from 'react-native';
import {Image, Overlay, CheckBox} from 'react-native-elements';
import {TextInput} from 'react-native-paper';
import {create, PREDEF_RES} from 'react-native-pixel-perfect';
import AsyncStorage from '@react-native-community/async-storage';

import {emailValidator, passwordValidator} from '../../utils/Validator';
import I18n from '../../utils/languages/languageUtils';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {GlobalStyles} from '../../globals/styles';
import {Constants} from '../../globals/constant';
import Header from '../../components/Header';
import StyledButton from '../../components/StyledButton';
import StyledTouch from '../../components/StyledTouch';
import StyledFlatList from '../../components/StyledFlatList';

const perfectSize = create(PREDEF_RES.iphoneX.dp);

export default class Filtro extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={GlobalStyles.container}>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
});


