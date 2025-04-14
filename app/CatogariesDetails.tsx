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
  return (
    <View >
      <Text>{name}</Text>
      <FlatList data={name=='All'? tasks: tasks.filter((each)=>each.catogary == name)} renderItem={({item})=>(
        <TodoItems name={item.name} id={item.id} isCompleted={item.isCompleted}/>
      )}/>
    </View>
  )
}

export default CatogariesDetails

const styles = StyleSheet.create({})