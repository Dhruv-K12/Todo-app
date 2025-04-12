import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Animated from "react-native-reanimated";
import AntDesign from '@expo/vector-icons/AntDesign';
interface props {
  id: string;
  name: string;
  sno: number;
  isCompleted: boolean;
  deleteHandler:(id:string)=>void,
  toggleTask :(id:string)=>void
}
const Tasks = ({ id, isCompleted, name, sno, deleteHandler, toggleTask }: props) => {
  return (
  
      <View style={{
        alignItems:"center",  
        backgroundColor: "black",
        height: 100,
        margin: 10,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent:"space-around"
        }}>
      <Text style={{ color: "white", fontSize: 20, }}>{sno}</Text>
      <Text style={{ color: "white", fontSize: 20, }}>{name}</Text>
    
      <TouchableOpacity
      onPress={()=>deleteHandler(id)}
        style={{
          width: 60,
          height: 30,
          backgroundColor: "red",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          margin: 40,
        }}
      >
        <AntDesign name="delete" size={24} color="white" />
      </TouchableOpacity>
      <View>
          <BouncyCheckbox onPress={()=> toggleTask(id)} isChecked={isCompleted} fillColor="blue" />
      </View>
    
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({});
