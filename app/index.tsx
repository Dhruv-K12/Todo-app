import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import App from './App';
import { TodoContextProvider } from '@/context/Todo';
const index = () => {
  return (
    <TodoContextProvider>
      <App/>
    </TodoContextProvider>
  )
}

export default index

const styles = StyleSheet.create({
  
})