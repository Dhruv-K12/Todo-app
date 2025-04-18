import { Alert, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Todotools from './Todotools';
import BouncyCheckbox from "react-native-bouncy-checkbox"
import { useTodoContext } from '@/context/Todo';
interface props{
  name:string,
  id: string;
  isCompleted: boolean
}
const TodoItems = ({name, id, isCompleted}: props) => {
    const [checkBox, showCheckBox] = useState<boolean>(false);
    const [text, setText] = useState<string>(name);
    const {setTasker} = useTodoContext();
    const deleteTaskHandler=()=>{
      setTasker(tasks=> tasks.filter((each)=> each.id!==id))
    }
    const editTaskHandler=()=>{
      setTasker(tasks=> tasks.map((each)=>{
        if(each.id == id){
          return {...each, name:text};
        }
        else{
          return each;
        }
      }))
    }
    const toggleComplete =()=>{
      setTasker(tasks=> 
        tasks.map((each)=>each.id == id? {...each, isCompleted:!each.isCompleted}:each))
    }
  return (
    <View style={{flex: 1}}>
    <Pressable onPress={()=>showCheckBox(false)}  onLongPress={()=>showCheckBox(true)}  style={{backgroundColor:"yellow", width:"90%", height: 100, borderRadius: 20, margin:10, justifyContent:"space-around", alignItems:"center", flexDirection:"row"}}>
      <TextInput value={text} onChangeText={(text)=> setText(text)}/>
      <Todotools onPress={editTaskHandler} styles={{backgroundColor:"blue"}}>
        <AntDesign name='edit' size={20} color="white"/>
      </Todotools>
      <Todotools onPress={deleteTaskHandler} styles={{backgroundColor:"red"}}>
        <AntDesign name='delete' size={20} color="white"/>
      </Todotools>
      {
        checkBox&&
      <View>
        <BouncyCheckbox onPress={toggleComplete} isChecked={isCompleted} fillColor='green'/>
      </View>
      }
    </Pressable>
  
    </View>
  )
}

export default TodoItems

const styles = StyleSheet.create({})