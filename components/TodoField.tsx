import { StyleSheet, Text, View, Modal, TextInput, FlatList, Pressable } from 'react-native'
import React, {useState} from 'react'
import { useTodoContext } from '@/context/Todo'
import CatogariseOptions from './CatogariseOptions'
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
export interface optionType{
  catogary:string,
  icons: React.ReactElement
}
export const optionsData:optionType[] = [{catogary:'Home',icons:<AntDesign name='home' size={40}/>}, {catogary:'Work', icons: <MaterialIcons name='work-outline' size={40}/> }, {catogary:'Shopping', icons: <Feather name='shopping-bag' size={40}/>}];
const TodoField = () => {
  const {modal, showModal, setTasker} = useTodoContext();
  const [options, selectedOptions] = useState<string>("Home");
  const [task, setTask] = useState<string>("");
  const [des, setDes] = useState<string>("");
  const addTaskHandler=()=>{
    if(task.trim().length !== 0 ){
      setTasker(tasks=>[...tasks, {name: task, des: des,  catogary:options, id: Math.random().toString(), isCompleted:false}]);
      showModal(false);
      setTask('');
    }
  }
  return (
   <Modal visible={modal} animationType='slide'>
    
    <View style={{flex: 1}}>
        <TextInput value={task} onChangeText={text=> setTask(text)}placeholder='Enter Your Title Here' style={styles.titleInput}/>
        <TextInput value={des} onChangeText={text=>setDes(text)} multiline placeholder='Enter Your Description (Optional)' style={[styles.titleInput, styles.desInput]}/>
        <View style={{justifyContent:"center", alignItems:"center"}}>
        <FlatList horizontal data={optionsData} renderItem={({item, index})=>(
          <CatogariseOptions icons={item.icons} name={item.catogary} selectedOptions={selectedOptions} options={options} index={index}/>
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