import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
const CatogariseContainer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>All</Text>
    </View>
  )
}

export default CatogariseContainer

const styles = StyleSheet.create({
    container:{
        width: "50%",
        height: 200,
        backgroundColor:"#6DE1D2",
        borderRadius: 20,
        margin: 10,
        padding: 20,
    },
    mainText:{
        fontSize: 30
    }
})