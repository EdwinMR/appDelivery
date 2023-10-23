import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import GlobalStyles from '../../../../GlobalStyles';

export const HomeScreen = () => {
  return (
    <SafeAreaProvider style={GlobalStyles.droidSafeArea}>
      <View style={{ flex: 1, flexDirection: 'row', marginTop:20, marginHorizontal:20}}>
        <View style={{ width:"80%" }}>
          <Text style={{fontSize:15}}>
            Ordena tu comida favorita
          </Text>
        </View>
        <View >

        </View>
      </View>
    </SafeAreaProvider>

  )
}