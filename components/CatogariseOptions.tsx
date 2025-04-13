import { StyleSheet, Text, View, Pressable} from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
interface props{
    name: string,
    selectedOptions: React.Dispatch<React.SetStateAction<string>>,
    options:string,
    index:number
}


const CatogariseOptions = ({name, selectedOptions, options, index}:props) => {
    const fillColor=()=>{
        return options == name? "white":"black"
    }
     const icons = [
        <AntDesign name="home" size={24} color={fillColor()} />,
        <MaterialIcons name="work-outline" size={24} color={fillColor()} />,
        <Feather name="shopping-bag" size={24} color={fillColor()} />
     ]
  return (
   <Pressable onPress={()=>selectedOptions(name)} style={[styles.option, name=="Home" &&{
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20
   }, name=="Shopping" && {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20
   }, name==options&& styles.optionsBgColor]}>
        {icons[index]}
    <Text>{name}</Text>
   </Pressable>
  )
}

export default CatogariseOptions

const styles = StyleSheet.create({
    option:{
        borderWidth: 1,
         width:100, 
         alignItems:"center", 
         justifyContent:"center", 
         height: 50,
         borderColor:"grey",
         padding: 3
        
    },
    optionsBgColor:{
        backgroundColor:"red"
    }
})