import { StyleSheet, Text, View, Modal, TextInput } from 'react-native'
import React from 'react'
import { useTodoContext } from '@/context/Todo'

const TodoField = () => {
  const {modal, showModal} = useTodoContext()
  return (
   <Modal visible={modal}>
    <View>
        <TextInput/>
    </View>
   </Modal>
  )
}

export default TodoField

const styles = StyleSheet.create({})