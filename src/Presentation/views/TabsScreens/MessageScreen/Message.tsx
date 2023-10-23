import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import GlobalStyles from '../../../../GlobalStyles';

export const MessagesScreen = () => {
    return (
        <SafeAreaProvider style={GlobalStyles.droidSafeArea}>
            <View>
                <Text> message</Text>
            </View>
        </SafeAreaProvider>

    )
}