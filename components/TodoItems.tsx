import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Todotools from './Todotools';
import BouncyCheckbox from "react-native-bouncy-checkbox"
import { useTodoContext } from '@/context/Todo';
interface props{
  name:string,
  id: string
}
const TodoItems = ({name, id}: props) => {
    const [checkBox, showCheckBox] = useState<boolean>(false);
    const {setTasker} = useTodoContext();
    const deleteTaskHandler=()=>{
      setTasker(tasks=> tasks.filter((each)=> each.id!==id))
    }
  return (
    <Pressable onPress={()=>showCheckBox(false)}  onLongPress={()=>showCheckBox(true)}  style={{backgroundColor:"yellow", width:"90%", height: 100, borderRadius: 20, margin:10, justifyContent:"space-around", alignItems:"center", flexDirection:"row"}}>
      <Text>{name}</Text>
      <Todotools onPress={()=>{}} styles={{backgroundColor:"blue"}}>
        <AntDesign name='edit' size={20} color="white"/>
      </Todotools>
      <Todotools onPress={deleteTaskHandler} styles={{backgroundColor:"red"}}>
        <AntDesign name='delete' size={20} color="white"/>
      </Todotools>
      {
        checkBox&&
      <View>
        <BouncyCheckbox fillColor='green'/>
      </View>

      }
    </Pressable>
  )
}

export default TodoItems

const styles = StyleSheet.create({})