import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, ActivityIndicator} from 'react-native';
import {Button, Image, Overlay, CheckBox} from 'react-native-elements';
import {TextInput} from 'react-native-paper';
import {create, PREDEF_RES} from 'react-native-pixel-perfect';
import AsyncStorage from '@react-native-community/async-storage';

import {emailValidator, passwordValidator} from '../utils/Validator';
import I18n from '../utils/languages/languageUtils';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {GlobalStyles} from '../globals/styles';
import {Constants} from '../globals/constant';

const perfectSize = create(PREDEF_RES.iphoneX.dp);

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            screenVisible: false
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={GlobalStyles.appHeader}>
                <Image
                    source={require('../assets/images/logo192.png')}
                    style={{width: perfectSize(40), height: perfectSize(40)}}
                />
                <View style={styles.row}>
                    <View style={{marginRight: perfectSize(15)}}>
                        <MaterialIcons
                            name={'notifications-none'}
                            size={perfectSize(40)}
                        />
                    </View>

                    <MaterialIcons
                        name={'menu'}
                        size={perfectSize(40)}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    }
});
