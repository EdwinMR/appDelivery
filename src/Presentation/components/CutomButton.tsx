import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

interface Props {
    title: string,
    onPress: () => void
    color?: string
    elevation?:number
    borderWidth?:number
    textColor?: string,
    borderBottom?:number
}

export const CutomButton = ({ onPress, title, color="#009688", elevation=8, borderWidth=0, textColor="#fff", borderBottom=0  }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} style={{...styles.appButtonContainer, backgroundColor: color, elevation:elevation, borderWidth:borderWidth }}>
            <Text style={{...styles.appButtonText,color:textColor, borderBottomWidth: borderBottom}}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      width:"100%",
      height:55,
      marginBottom:20,
      justifyContent:'center',
    },
    appButtonText: {
      fontSize: 18,
      fontWeight: "bold",
      alignSelf: "center",
    }
  });