import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

interface Props {
    title: string,
    onPress: () => void
}

export const CustomLink = ({ title, onPress }:Props) => {
    return (
        <TouchableOpacity  onPress={onPress} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
      backgroundColor: "transparent",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
    },
    appButtonText: {
      fontSize: 18,
      color: "gray",
      fontWeight: "bold",
      alignSelf: "center",
      borderBottomWidth:1
    }
  });
