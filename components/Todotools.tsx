import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { ReactNode, useState } from 'react'
interface styleType{
    backgroundColor:string
}
interface props{
    children: React.ReactElement,
    styles: styleType,
    onPress: ()=> void
}
const Todotools = ({children, styles, onPress}: props) => {
   
  return (
   <TouchableOpacity onPress={onPress} style={[{width: 30, height: 30, justifyContent:"center", alignItems:'center', borderRadius: 10}, styles]}>
    {children}
   </TouchableOpacity>
  )
}

export default Todotools

const styles = StyleSheet.create({})