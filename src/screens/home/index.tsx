
import { StyleSheet, Text, View,Image } from 'react-native';
import Logo from "../../assets/logo.svg";
import Stroke from "../../assets/stroke.svg";
import Menssagem from "../../assets/message.svg";
import foto from "../../assets/foto.png";
import foto2 from "../../assets/foto2.png";
import { FlatList } from 'react-native/Libraries/Lists/FlatList';

const DATA = [
  {
    id:Math.random().toString(36).substring(2,27),
    photoUrl: foto,
  },
  {
    id:Math.random().toString(36).substring(2,27),
    photoUrl: foto2,
  }
]

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
     <View style={styles.stories}>
      <FlatList
      data={DATA}
      keyExtractor={item=> item.id}
      renderItem={(item) =>(
        <View>
          <Image source={item.item.photoUrl}/>
        </View>
      
      )}

      />
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
  },
  stories:{
    
  }

});
