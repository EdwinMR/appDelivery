import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import { CutomButton } from '../../components/CutomButton';
import { CustomLink } from '../../components/CustomLink/CustomLink';
import { StackScreenProps } from '@react-navigation/stack';
import { rootStackParamList } from '../../navigator/Navigator';
import styles from './Styles'

interface Props extends StackScreenProps<rootStackParamList, "MenuAuthScreen"> { }

export const MenuAuthScreen = ({ navigation, route }: Props) => {
    return (
        <View>
            <Image source={require('../../../../assets/icon.png')} style={styles.slideImage} ></Image>
            <Text style={styles.title}>Delicious foods</Text>
            <Text style={styles.subtitle}>Let us help you to discover the best food</Text>
            <View style={{ alignItems: 'center', marginTop: 20, justifyContent: 'center' }}>
                <View style={{width:"90%"}}>
                    <CutomButton title='Iniciar sesion' onPress={() => navigation.navigate("LoginScreen")} />
                    <CutomButton title='Registro' onPress={() => navigation.navigate("RegisterScreen")} color='transparent' elevation={0} borderWidth={1} textColor={"black"} />
                    <CutomButton title='Invitado' onPress={() => navigation.navigate("HomeScreen")} color='transparent' textColor='gray' elevation={0} />
                </View>
            </View>
        </View>
    )
}
