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
import Notification from '../../components/Notification';

const perfectSize = create(PREDEF_RES.iphoneX.dp);

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            screenVisible: false,
            data: [],
            seguridad: true,
            cocina: false,
            contaduria: false,
            notification1: false,
        };

        this.clicked = this.clicked.bind(this);
        this.emptyScreen = this.emptyScreen.bind(this);
        this.screen = this.screen.bind(this);
        this.clickFiltros = this.clickFiltros.bind(this);
        this.getData = this.getData.bind(this);
        this.seguridadClick = this.seguridadClick.bind(this);
        this.cocinaClick = this.cocinaClick.bind(this);
        this.contaduriaClick = this.contaduriaClick.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({screenVisible: true});
        }, 1000);

        this.getData();

        setTimeout(() => {
            this.setState({notification1: true})
        }, 5000);
    }

    getData() {
        this.setState({
            data: {
                seguridad: [
                    {
                        title: 'Guardia de seguridad',
                        price: 16,
                        address: 'Santiago Centro · Región Metropolitana',
                        date: '15 de abril · 15 mayo',
                        time: '09:00 a 17:00 hrs',
                    },
                    {
                        title: 'Guardia de seguridad',
                        price: 18,
                        address: 'Romoto',
                        date: '15 de abril · 15 mayo',
                        time: '09:00 a 17:00 hrs',
                    },
                    {
                        title: 'Guardia de seguridad',
                        price: 20,
                        address: 'Santiago Centro · Región Metropolitana',
                        date: '15 de abril · 15 mayo',
                        time: '09:00 a 17:00 hrs',
                    },
                    {
                        title: 'Guardia de seguridad',
                        price: 20,
                        address: 'Santiago Centro · Región Metropolitana',
                        date: '15 de abril · 15 mayo',
                        time: '09:00 a 17:00 hrs',
                    },
                    {
                        title: 'Guardia de seguridad',
                        price: 20,
                        address: 'Santiago Centro · Región Metropolitana',
                        date: '15 de abril · 15 mayo',
                        time: '09:00 a 17:00 hrs',
                    },
                ],
                cocina: [
                    {
                        title: 'Guardia de seguridad',
                        price: 16,
                        address: 'Santiago Centro · Región Metropolitana',
                        date: '15 de abril · 15 mayo',
                        time: '09:00 a 17:00 hrs',
                    },
                    {
                        title: 'Guardia de seguridad',
                        price: 18,
                        address: 'Romoto',
                        date: '15 de abril · 15 mayo',
                        time: '09:00 a 17:00 hrs',
                    },
                    {
                        title: 'Guardia de seguridad',
                        price: 20,
                        address: 'Santiago Centro · Región Metropolitana',
                        date: '15 de abril · 15 mayo',
                        time: '09:00 a 17:00 hrs',
                    },
                ],
                contaduria: [],
            },
        });
    }

    clicked() {

    }

    seguridadClick() {
        this.setState({
            seguridad: true,
            cocina: false,
            contaduria: false,
        });
    }

    cocinaClick() {
        this.setState({
            seguridad: false,
            cocina: true,
            contaduria: false,
        });
    }

    contaduriaClick() {
        this.setState({
            seguridad: false,
            cocina: false,
            contaduria: true,
        });
    }

    emptyScreen() {
        return (
            <View style={{...GlobalStyles.flexCenter, padding: perfectSize(30), marginTop: '40%'}}>
                <Text style={{fontSize: Constants.bigFont, fontWeight: 'bold'}}>
                    Hola Felipe 👋
                </Text>
                <Text style={{fontSize: Constants.smallFont, marginTop: Constants.marginTop20}}>
                    Por ahora no tenemos turnos disponibles para ti, pero no te preocupes, pronto te avisaremos.
                </Text>
            </View>
        );
    }

    clickFiltros() {
        console.log('123');
    }

    screen() {
        return (
            <View style={{marginTop: Constants.marginTop20}}>
                <Text style={{fontSize: Constants.mediumFont, fontWeight: 'bold'}}>
                    Hola Felipe,
                </Text>
                {
                    !this.state.notification1 &&
                    <Text style={{fontSize: Constants.smallFont}}>
                        Ve los turnos que tenemos para tí.
                    </Text>
                }
                {
                    this.state.notification1 &&
                    <Notification
                        title={'Tus turnos'}
                        description={'Aquí podrás ver información de próximos turnos y turnos pendientes'}
                        onClick={() => {console.log(123)}}
                    />
                }

                {/*<Notification*/}
                {/*    title={'Tienes un turno aprobado 🥳'}*/}
                {/*    description={'Ingresa aquí y confirma tu asistencia.'}*/}
                {/*/>*/}
                {/*<Notification*/}
                {/*    title={'Recuerda hacer check-in 👀'}*/}
                {/*    description={'Ingresa aquí y realiza el check-in antes de empezar el trabajar.'}*/}
                {/*/>*/}

                <View
                    style={{
                        width: Constants.width100,
                        height: Constants.marginTop10,
                        backgroundColor: Constants.greyColor,
                        marginTop: Constants.marginTop10,
                    }}
                />

                <View style={{flexDirection: 'row', ...GlobalStyles.flexBetween, marginTop: Constants.marginTop10}}>
                    <Text style={{fontSize: Constants.mediumFont, fontWeight: 'bold'}}>
                        Turnos disponibles
                    </Text>
                    <StyledTouch title={'+ Filtros'} onClick={() => {
                        this.clickFiltros();
                    }}/>
                </View>

                <View style={{...GlobalStyles.flexAround, flexDirection: 'row', marginTop: Constants.marginTop20}}>
                    <StyledTouch title={'Seguridad'} onClick={() => {
                        this.seguridadClick();
                    }} click={this.state.seguridad}/>
                    <StyledTouch title={'Cocina'} onClick={() => {
                        this.cocinaClick();
                    }} click={this.state.cocina}/>
                    <StyledTouch title={'Contaduria'} onClick={() => {
                        this.contaduriaClick();
                    }} click={this.state.contaduria}/>
                </View>

                <View style={{marginTop: Constants.marginTop20, height: perfectSize(400)}}>
                    {
                        this.state.seguridad && <StyledFlatList data={this.state.data.seguridad}/>
                    }
                    {
                        this.state.cocina && <StyledFlatList data={this.state.data.cocina}/>
                    }
                    {
                        this.state.contaduria && <StyledFlatList data={this.state.data.contaduria}/>
                    }
                </View>
            </View>
        );
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='position'>
                <View style={GlobalStyles.container}>
                    <Header/>
                    {/*<StyledButton title={'Buscar'} onClick={() => {this.clicked()}}/>*/}
                    {
                        !this.state.screenVisible &&
                        this.emptyScreen()
                    }
                    {
                        this.state.screenVisible &&
                        this.screen()
                    }
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
});
