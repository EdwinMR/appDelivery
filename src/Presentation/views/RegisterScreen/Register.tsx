import { StyleSheet, Text, View, Image, TextInput, ToastAndroid, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { CustomTextInput } from '../../components/CustomTextInput';
import { CutomButton } from '../../components/CutomButton';
import { useState } from 'react';
import { rootStackParamList } from '../../navigator/Navigator';
import { StackScreenProps } from '@react-navigation/stack';
import styles from './Styles'


interface Props extends StackScreenProps<rootStackParamList,'RegisterScreen'>{};

export const RegisterScreen = ({navigation,route}:Props) => {

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setemail] = useState("")
    const [phone, setphone] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")

    const onChange = (key:string, value: string) => {
        console.log("")
    }
      
    return (
        <View style={styles.container}>
            
            <Image source={require('../../../../assets/chef.jpg')} style={styles.imageBackground} />
            <View style={styles.logoContainer}>
                <TouchableOpacity onPress={() => false}>
                    {
                        //image == '' ?
                        <Image source={require('../../../../assets/user_image.png')} style={styles.logoImage} /> //:
                        //<Image source={{uri:image}} style={styles.logoImage} />
                    }
                </TouchableOpacity>
                <Text style={styles.logoTex} >Foto de perfil</Text>
            </View>
            <View style={styles.form}>
                <ScrollView>
                    <Text style={styles.formText} >Recuperar contraseña</Text>
                    <CustomTextInput image={require('../../../../assets/my_user.png')} keyboardType='default' value={name} placeholder='Nombre' property='name' onChangeText={onChange} />
                    <CustomTextInput image={require('../../../../assets/my_user.png')} keyboardType='default' value={lastName} placeholder='Apellidos' property='lastName' onChangeText={onChange} />
                    <CustomTextInput image={require('../../../../assets/email.png')} keyboardType='email-address' value={email} placeholder='Correo electronico' property='email' onChangeText={onChange} />
                    <CustomTextInput image={require('../../../../assets/phone.png')} keyboardType='phone-pad' value={phone} placeholder='Telefono' property='phone' onChangeText={onChange} />
                    <CustomTextInput image={require('../../../../assets/password.png')} keyboardType='default' value={password} placeholder='Contraseña' property='password' onChangeText={onChange} />
                    <CustomTextInput image={require('../../../../assets/password.png')} keyboardType='default' value={confirmPassword} placeholder='Confirmar contraseña' property='confirmPassword' onChangeText={onChange} />
                    <View style={{ marginTop: 30 }} >
                        <CutomButton title={'Regsitrar'} onPress={()=> navigation.replace("HomeScreen")} />
                    </View>
                </ScrollView>
            </View>
            {/*<CustomModal openGalery={ pickImage } openCamera={ takePhoto } modalUseState={modalVisible} setModalUseState={setModalVisible} />
            
                loading && 
                <ActivityIndicator size="large" color={COLORS.secundary} style={styles.loading} />
            */}
        </View>
    );
}