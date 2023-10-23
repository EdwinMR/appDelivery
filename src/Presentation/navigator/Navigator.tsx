import React, { useContext } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import InitialScreen from '../views/IntroductionScreen/Initial';
import { MenuAuthScreen } from '../views/MenuAuthScreen/MenuAuth';
import { LoginScreen } from '../views/LoginScreen/Login';
import { RegisterScreen } from '../views/RegisterScreen/Register';
import { HomeScreen } from '../views/HomeScreen/Home';

export type rootStackParamList = {
    InitialScreen: undefined,
    MenuAuthScreen: undefined,
    LoginScreen: undefined,
    RegisterScreen: undefined,
    RecoveryPasswordScreen: undefined,
    HomeScreen: undefined
  }

const Stack = createStackNavigator<rootStackParamList>();


export const Navigator = () => {
    const { theme } = useContext(ThemeContext);
    
    return (
        <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
            <NavigationContainer
                theme={theme}
            >
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                        cardStyle: {
                            // backgroundColor: 'white'
                        }
                    }}
                >
                    <Stack.Screen name="InitialScreen" component={InitialScreen} />
                    <Stack.Screen name="MenuAuthScreen" component={MenuAuthScreen} />
                    <Stack.Screen name='LoginScreen' component={LoginScreen} />
                    <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
                    <Stack.Screen name='HomeScreen' component={HomeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}
