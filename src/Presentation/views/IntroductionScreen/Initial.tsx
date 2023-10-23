import React from 'react'
import { View } from 'react-native'
import CustomCarousel from '../../components/Carousel/Carousel';
import { StackScreenProps } from '@react-navigation/stack';
import { rootStackParamList } from '../../navigator/Navigator';
import styles from './Styles'

interface Props extends StackScreenProps<rootStackParamList,"InitialScreen">{}


const InitialScreen = ({ navigation, route }:Props) => {

    const onToLogin = () =>{
        navigation.replace('MenuAuthScreen');
    }

    return (
        <View style={styles.container}>
            <CustomCarousel onPress={() => onToLogin() }/>
        </View>
    )
}
export default InitialScreen