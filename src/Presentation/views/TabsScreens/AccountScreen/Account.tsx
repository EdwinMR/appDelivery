import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import GlobalStyles from '../../../../GlobalStyles';


export const AccountScreen = () => {
    return (
        <SafeAreaProvider style={GlobalStyles.droidSafeArea}>
            <View>
                <Text> Favorites Cart</Text>
            </View>
        </SafeAreaProvider>
    )
}
