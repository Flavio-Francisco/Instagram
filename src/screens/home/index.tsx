
import { StyleSheet, Text, View,Image, FlatList } from 'react-native';
import Logo from "../../assets/logo.svg";
import Stroke from "../../assets/stroke.svg";
import Menssagem from "../../assets/message.svg";
import foto from "../../assets/foto.png";
import foto2 from "../../assets/foto2.png";


const DATA = [
  {
    id:Math.random().toString(36).substring(2,27),
    photoUrl: foto,
  },
  {
    id:Math.random().toString(36).substring(2,27),
    photoUrl: foto2,
  }
];

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
      horizontal={true}
      data={DATA}
      keyExtractor={item=> item.id}
      renderItem={(item) =>(
        <View style={styles.storiesCard} key={item.item.id}>
          <Image  style={styles.storiesCardImage} source={item.item.photoUrl}/>
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
    width:"100%",
    paddingLeft:10,
    paddingVertical:10,
    alignItems:"center",

  },
 storiesCard:{
 
  borderWidth:2,
  borderColor:"#F7855A",
  borderRadius:50,
  marginRight:14,
  padding:2

  },
  storiesCardImage:{
    width:64,
    height:64,

  }


});
