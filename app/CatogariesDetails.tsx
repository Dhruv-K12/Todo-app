import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { RootStackParamList } from '.';
import { RouteConfigProps, RouteProp } from '@react-navigation/native';
import TodoItems from '@/components/TodoItems';
import { taskType, useTodoContext } from '@/context/Todo';

type CatoScreenRouteProp = RouteProp<RootStackParamList, 'Cato'>;
interface props{
  route: CatoScreenRouteProp
}
const CatogariesDetails: React.FC<props> = ({route}) => {
  const {name} = route.params.task;
  const {tasks} = useTodoContext();
  const data =()=>{
    if(name == "All") return tasks;
    if(name == "Completed" || name == "Not Completed") return tasks.filter((each)=> name == "Completed"? each.isCompleted == true: each.isCompleted== false);
    if(name == "Not Completed") return tasks.filter((each)=> each.isCompleted == false);
    return tasks.filter((each)=> each.catogary == name);
  }
    return (
    <View>
      <Text>{name}</Text>
      <FlatList data={data()} renderItem={({item})=>(
        <TodoItems name={item.name} id={item.id} isCompleted={item.isCompleted}/>
      )}/>
    </View>
  )
}

export default CatogariesDetails

const styles = StyleSheet.create({})