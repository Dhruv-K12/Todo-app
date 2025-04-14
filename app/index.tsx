import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import App from './App';
import { TodoContextProvider } from '@/context/Todo';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CatogariesDetails from './CatogariesDetails';
interface task{
  name:string
}
export type RootStackParamList = {
  Main: undefined;
  Cato:{task: task};
};
const stack = createNativeStackNavigator<RootStackParamList>();
const MyStack = ()=>{
  return(
    <stack.Navigator screenOptions={{headerShown:false}}>
      <stack.Screen name="Main" component={App}
    />
      <stack.Screen name='Cato' component={CatogariesDetails}/>
    </stack.Navigator>
  )
}
const index = () => {
  return (
    <TodoContextProvider>
      <MyStack/>
    </TodoContextProvider>
  )
}

export default index

const styles = StyleSheet.create({
  
})