import { Text, View, Image, ToastAndroid, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { CustomTextInput } from '../../components/CustomTextInput';
import { rootStackParamList } from '../../navigator/Navigator';
import { CutomButton } from '../../components/CutomButton';
import { useState } from 'react';
import styles from './Styles'

const navigation = useNavigation<StackNavigationProp<rootStackParamList,'RecoveryPasswordScreen'>>()

export const RecoveryPasswordScreen = () => {

    const [email, setemail] = useState("");

    const onChange = (key:string, value:string) => {
        console.log()
    }

    return (
        <View style={styles.container}>
            <Image source={require('../../../../assets/chef.jpg')} style={styles.imageBackground} />
            <View style={styles.logoContainer}>
                <Image source={require('../../../../assets/logo.png')} style={styles.logoImage} />
                <Text style={styles.logoTex} >Food App</Text>
            </View>
            <View style={styles.form}>
                <ScrollView>
                    <Text style={styles.formText} >Recuperar contraseña</Text>
                    <CustomTextInput image={require('../../../../assets/email.png')} keyboardType='email-address' value={email} placeholder='Correo electronico' property='email' onChangeText={onChange} />
                    <View style={{ marginTop: 30 }} >
                        <CutomButton title={'Entrar'} onPress={() => ToastAndroid.show('Hola', ToastAndroid.SHORT)} />
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}