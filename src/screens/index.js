import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack';

import Login from './auth/Login';
import Signup from './auth/Signup';
import Intro from './intro';
import Home from './home';

const Stack = createStackNavigator();

export default class MainApp extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SafeAreaProvider>
                <NavigationContainer>
                    <Stack.Navigator mode='card' headerMode='none'>
                        <Stack.Screen name='Main' component={Intro}/>
                        <Stack.Screen name='Login' component={Login}/>
                        <Stack.Screen name='Signup' component={Signup}/>
                        <Stack.Screen name='Home' component={Home}/>
                        {/*<Stack.Screen name='Gender' component={Gender}/>*/}
                        {/*<Stack.Screen name='Onboarding' component={Onboarding}/>*/}
                        {/*<Stack.Screen name='DoneScreen' component={DoneScreen}/>*/}
                        {/*<Stack.Screen name='Ques_first' component={Ques_first}/>*/}
                        {/*<Stack.Screen name='TakePicture' component={TakePicture}/>*/}
                        {/*<Stack.Screen name='Result' component={Result}/>*/}
                        {/*<Stack.Screen name='Home' component={Home}/>*/}
                        {/*<Stack.Screen name='LanguageSelect' component={LanguageSelect}/>*/}
                        {/*<Stack.Screen name='Algorithm_chart' component={Algorithm_chart}/>*/}
                        {/*<Stack.Screen name='Take_picture' component={Take_picture}/>*/}
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        );
    }
}
