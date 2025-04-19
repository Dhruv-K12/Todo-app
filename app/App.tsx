import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, { useContext, useEffect } from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { taskType, TodoContext, useTodoContext } from '@/context/Todo';
import TodoField from '@/components/TodoField';
import CatogariseContainer from '@/components/CatogariseContainer';
import { optionsData } from '@/components/TodoField';
import Fontisto from '@expo/vector-icons/Fontisto'; 
import { optionType } from '@/components/TodoField';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
const app = () => {
    const {showModal, setTasker} = useTodoContext();
    const getItem =async()=>{
     const data = await AsyncStorage.getItem("Items");
     if(data!=null){
      setTasker(JSON.parse(data));
     }
    }
    useEffect(()=>{
      getItem();
    },[])
    const catogaries:optionType[] = [{catogary:"All", icons:<Fontisto name="world-o" size={40} color="black" />}
      , ...optionsData,
       {catogary:"Completed", icons: <Ionicons name="checkmark-done" size={24} color="black" />},{ catogary: "Not Completed", icons: <MaterialIcons name="remove-done" size={24} color="black" /> }];
  return (
    <View style={{flex: 1}}>
      <FlatList numColumns={2} data={catogaries} renderItem={({item})=>(
        <CatogariseContainer name={item.catogary} icons={item.icons}/>
  )}/>
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