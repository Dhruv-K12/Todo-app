import { StyleSheet, Text, View, Modal, TextInput, FlatList, Pressable } from 'react-native'
import React, {useState} from 'react'
import { useTodoContext } from '@/context/Todo'
import CatogariseOptions from './CatogariseOptions'

interface optionType{
  catogary:string
}
export const optionsData:optionType[] = [{catogary:'Home' }, {catogary:'Work'}, {catogary:'Shopping'}];
const TodoField = () => {
  const {modal, showModal, setTasker} = useTodoContext();
  const [options, selectedOptions] = useState<string>("Home");
  const [task, setTask] = useState<string>("");
  const [des, setDes] = useState<string>("");
  const addTaskHandler=()=>{
    setTasker(tasks=>[...tasks, {name: task, des: des,  catogary:options}]);
    showModal(false);
  }
  return (
   <Modal visible={modal} animationType='slide'>
    <View style={{flex: 1}}>
        <TextInput value={task} onChangeText={text=> setTask(text)}placeholder='Enter Your Title Here' style={styles.titleInput}/>
        <TextInput value={des} onChangeText={text=>setDes(text)} multiline placeholder='Enter Your Description (Optional)' style={[styles.titleInput, styles.desInput]}/>
        <View style={{justifyContent:"center", alignItems:"center"}}>
        <FlatList horizontal data={optionsData} renderItem={({item, index})=>(
          <CatogariseOptions name={item.catogary} selectedOptions={selectedOptions} options={options} index={index}/>
        )}/>
        </View>
        <View style={styles.addListBtnContainer}>
        <Pressable onPress={addTaskHandler} style={({pressed})=> pressed?{opacity: 1}:[styles.addListBtn]}>
          <Text style={{color:"white"}}>Add In List</Text>
        </Pressable>
        </View>
    </View>
   </Modal>
  )
}

export default TodoField

const styles = StyleSheet.create({
  titleInput:{
    borderWidth:0.5,
    margin: 20,
    borderRadius: 10,
    paddingLeft: 10,


  },
  desInput:{
    paddingBottom: 80,
  },
  addListBtnContainer:{
    flex: 1,
    justifyContent:"flex-end",
    alignItems:"center",
    margin: 20
  },
  addListBtn:{
    backgroundColor:"#3D90D7",
    width:100,
    height:40,
    justifyContent:"center",
    alignItems:"center",
    borderRadius: 10
  }
})