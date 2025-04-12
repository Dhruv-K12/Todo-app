import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { TodoContext, useTodoContext } from '@/context/Todo';
import TodoField from '@/components/TodoField';
const app = () => {
    const {showModal} = useTodoContext();
  return (
    <View style={{flex: 1}}>
         <View style={styles.ShowListBtnContainer}>
           <TouchableOpacity onPress={()=> showModal(true)} style={styles.ShowListBtn}>
           <FontAwesome6 name="add" size={24} color="white" />
           </TouchableOpacity>
         </View>
         <TodoField/>
       </View>
  )
}

export default app

const styles = StyleSheet.create({
    ShowListBtnContainer:{
        flex: 1,
        justifyContent:"flex-end",
        alignItems:"center",
        margin: 20 
    },
    ShowListBtn:{
        backgroundColor:"#0118D8",
        width: 50,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        borderRadius: 25,
        borderWidth:0.2,
        borderColor:"white",
        elevation: 10
    }
})