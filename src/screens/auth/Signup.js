import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, ActivityIndicator} from 'react-native';
import {Button, Image, Overlay, CheckBox} from 'react-native-elements';
import {TextInput} from 'react-native-paper';
import {create, PREDEF_RES} from 'react-native-pixel-perfect';
import AsyncStorage from '@react-native-community/async-storage';

import {emailValidator, passwordValidator} from '../../utils/Validator';
import I18n from '../../utils/languages/languageUtils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {GlobalStyles} from '../../globals/styles';
import {Constants} from '../../globals/constant';
import StyledButton from '../../components/StyledButton';

const perfectSize = create(PREDEF_RES.iphoneX.dp);

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            phone: '',
            email: '',
            password: '',
            emailError: '',
            nameError: '',
            phoneError: '',
            passwordError: '',
            isLoading: false,
            checked: false,
            visible: false,
            femaleChecked: true,
            maleChecked: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePswChange = this.handlePswChange.bind(this);
    }

    handleClick() {
        this.props.navigation.navigate('Home')
    }

    handleEmailChange(text) {
        this.setState({
            email: text,
        });

        if (emailValidator(text)) {
            this.setState({
                emailError: '',
            });
        } else {
            this.setState({
                emailError: 'Please enter correct email type.',
            });
        }
    }

    handleNameChange(text) {
        this.setState({
            name: text,
        });

        if (text === '') {
            this.setState({
                nameError: 'Please enter full name'
            })
        }
    }

    handlePhoneChange(text) {
        this.setState({
            phone: text,
        });

        if (text === '') {
            this.setState({
                nameError: 'Please enter phone number'
            })
        }
    }

    handlePswChange(text) {
        this.setState({
            password: text,
        });

        if (passwordValidator(text)) {
            this.setState({
                passwordError: '',
            });
        } else {
            this.setState({
                passwordError: 'password must be more than 8 letters!',
            });
        }
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='position'>
                <View style={GlobalStyles.container}>
                    <Text
                        style={styles.headerText}
                    >
                        ¡Hola! ✌️ ayudame con los siguientes datos
                    </Text>

                    <View style={styles.view}>
                        <TextInput
                            value={this.state.name}
                            onChangeText={text => this.handleNameChange(text)}
                            error={this.state.nameError}
                            mode='outlined'
                            label={'Nombre y apellido'}
                        />
                    </View>

                    <View style={styles.view}>
                        <TextInput
                            value={this.state.phone}
                            onChangeText={text => this.handlePhoneChange(text)}
                            error={this.state.phoneError}
                            mode='outlined'
                            label={'Teléfono'}
                        />
                    </View>

                    <View style={styles.view}>
                        <TextInput
                            value={this.state.email}
                            onChangeText={text => this.handleEmailChange(text)}
                            error={this.state.emailError}
                            mode='outlined'
                            label={'Correo electronico'}
                        />
                    </View>

                    <View style={styles.view}>
                        <TextInput
                            secureTextEntry={this.state.visible ? false : true}
                            value={this.state.password}
                            onChangeText={text => this.handlePswChange(text)}
                            error={this.state.passwordError}
                            mode='outlined'
                            label={'Contraseña'}
                            style={{borderRadius: 30}}
                            right={
                                <TextInput.Icon
                                    name={() =>
                                        <MaterialCommunityIcons
                                            name={this.state.visible ? 'eye' : 'eye-off'}
                                            size={perfectSize(30)}
                                        />}
                                    onPress={() => {
                                        this.setState({visible: !this.state.visible});
                                    }
                                    }
                                />
                            }
                        />
                    </View>

                    <View style={styles.view}>
                        <Text style={{ fontSize: Constants.mediumFont}}>
                            Genero
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row', ...GlobalStyles.flexAround, marginHorizontal: perfectSize(20) }}>
                        <CheckBox
                            title={'Femenino'}
                            checkedColor='#3C82FF'
                            uncheckedColor={'#000'}
                            iconType={'materialIcons'}
                            checkedIcon={'radio-button-checked'}
                            uncheckedIcon={'radio-button-unchecked'}
                            checked={this.state.femaleChecked}
                            onPress={() => this.setState({femaleChecked: true, maleChecked: false})}
                            containerStyle={{borderWidth: 0, marginLeft: perfectSize(-5)}}
                        />

                        <CheckBox
                            title={'Masculino'}
                            checkedColor='#3C82FF'
                            uncheckedColor={'#000'}
                            iconType={'materialIcons'}
                            checkedIcon={'radio-button-checked'}
                            uncheckedIcon={'radio-button-unchecked'}
                            checked={this.state.maleChecked}
                            onPress={() => this.setState({maleChecked: true, femaleChecked: false})}
                            containerStyle={{borderWidth: 0, marginLeft: perfectSize(-5)}}
                        />
                    </View>

                    <View style={styles.view}>
                        {/*<Button*/}
                        {/*    icon={*/}
                        {/*        <Text style={{color: 'white', fontSize: perfectSize(20)}}>*/}
                        {/*            Continuar*/}
                        {/*        </Text>*/}
                        {/*    }*/}
                        {/*    buttonStyle={GlobalStyles.btn}*/}
                        {/*    type={'clear'}*/}
                        {/*    onPress={() => {*/}
                        {/*        this.handleClick();*/}
                        {/*    }}*/}
                        {/*/>*/}
                        <StyledButton title={'Continuar'} onClick={() => {this.handleClick()}}/>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            ...GlobalStyles.flexCenter,
                            marginTop: Constants.marginTop20,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: Constants.smallFont,
                            }}
                        >
                            ¿Ya tienes cuenta?
                        </Text>

                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('Login');
                            }}
                        >
                            <Text
                                style={{
                                    color: '#3C82FF',
                                    fontSize: perfectSize(17),
                                    marginLeft: perfectSize(20),
                                }}
                            >
                                Inicia sesión✌
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        width: Constants.width100,
        marginTop: Constants.marginTop20,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: Constants.bigFont,
        marginTop: Constants.marginTop10,
    },
});
