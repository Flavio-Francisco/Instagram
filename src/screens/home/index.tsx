
import { StyleSheet, Text, View } from 'react-native';
import Logo from "../../assets/logo.svg"
import Stroke from "../../assets/stroke.svg"
import Menssagem from "../../assets/message.svg"



export  function Home() {
  return (
    <View style={styles.container}>
     <View style={styles.header}>
       <Logo/>
       <View style={styles.headerOption}>
         <Stroke/> 
         <Menssagem/>
       </View>
     </View>
     <View>

     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000',
    alignItems: 'center',
  
  },
  header: {
    marginTop:40,
    paddingHorizontal: 10,
    width:'100%',
    height:56,
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row'
   
  },
  headerOption:{
    alignItems:'center',
    flexDirection:'row',
    gap:10,
  }

});
