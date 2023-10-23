import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import GlobalStyles from '../../../../GlobalStyles';

export const ShoppingCartScreen = () => {
    return (
        <SafeAreaProvider style={GlobalStyles.droidSafeArea}>
            <View>
                <Text> Shopping Cart</Text>
            </View>
        </SafeAreaProvider>

    )
}