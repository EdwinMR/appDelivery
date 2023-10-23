import React, { useState } from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { CustomTextInput } from '../../components/CustomTextInput'
import { CutomButton } from '../../components/CutomButton'
import { StackScreenProps } from '@react-navigation/stack'
import { rootStackParamList } from '../../navigator/Navigator'
import styles from "./Styles"

interface Props extends StackScreenProps<rootStackParamList, "LoginScreen"> { }

export const LoginScreen = ( { navigation, route }:Props ) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const changeData = (key: string, value: string) => {
        if (key == "email") {
            setEmail(value)
        } else {
            setPassword(value)
        }
    }

    return (
        <View style={styles.container}>
            <Image source={require('../../../../assets/logo.png')} style={styles.imageBackground} />
            <View style={styles.logoContainer}>
                <Image source={require('../../../../assets/logo.png')} style={styles.logoImage} />
                <Text style={styles.logoTex} >Food App</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.formText} > Ingresar </Text>
                <CustomTextInput image={require('../../../../assets/email.png')} keyboardType='email-address' value={email} placeholder='Correo electronico' property='email' onChangeText={changeData} />
                <CustomTextInput image={require('../../../../assets/password.png')} keyboardType='default' value={password} placeholder='Contraseña' secureTextEntry={true} property='password' onChangeText={changeData} />
                <View style={styles.forgotePassword} >
                    { /* <CheckBox
                            checked={loginBiometrics}
                            iconType="material-community"
                            checkedIcon="checkbox-outline"
                            uncheckedIcon={'checkbox-blank-outline'}
                            title={'Ingreso con huella o rostro'}
                            iconRight={true}
                            size={15}
                            checkedColor='#f4991a'
                            textStyle={{ fontSize: 12 }}
                            onPress={() => isValidBiometric(!loginBiometrics)}
                        /> */}
                    <TouchableOpacity onPress={() => navigation.navigate("RecoveryPasswordScreen")} >
                        <Text style={styles.textForgote}> Olvidaste tu contraseña? </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 10 }} >
                    <CutomButton title={'Entrar'} onPress={() => {
                        navigation.replace("HomeScreen")
                    }} />
                </View>
                <View style={styles.registerUser} >
                    <Text> No tienes cuenta </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")} >
                        <Text style={styles.textRegister} > Registrate </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
