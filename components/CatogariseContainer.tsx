import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router';
import { RootStackParamList } from '@/app';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
interface props{
  name: string;
  icons: React.ReactElement;
}
type NavigationType = NativeStackNavigationProp<RootStackParamList>;

const CatogariseContainer = ({name, icons}: props) => {
  const navigation = useNavigation<NavigationType>();
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("Cato",{
      task:{
        name:name
      }
    })} style={styles.container}>
      <Text style={styles.mainText}>{name}</Text>
      {icons}
    </TouchableOpacity>
  )
}

export default CatogariseContainer

const styles = StyleSheet.create({
    container:{
        width: "45%",
        height: 200,
        backgroundColor:"#6DE1D2",
        borderRadius: 20,
        margin: 10,
        padding: 20,
        elevation: 10,
        borderWidth: 0.2
    },
    mainText:{
        fontSize: 30
    }
})