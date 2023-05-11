
import { StyleSheet, Text, View, Image, FlatList, ScrollView, TextInput} from 'react-native';
import Logo from "../../assets/logo.svg";
import Stroke from "../../assets/stroke.svg";
import Menssagem from "../../assets/message.svg";
import Points from "../../assets/points.svg";
import Bookmark from "../../assets/Bookmark.svg";
import Heart from "../../assets/Heart.svg";
import Comment from "../../assets/Comment.svg";
import Share from "../../assets/Share.svg";
import image from "../../assets/fotoFidAtualizado.png";
import image2 from "../../assets/fidCafe.png";
import Foto from "../../assets/flavio1.png";
import foto from "../../assets/Flavio.png";
import foto2 from "../../assets/Marcodes.png";
import foto3 from "../../assets/Ewerton.png";
import foto4 from "../../assets/Meire.png";
import foto5 from "../../assets/obama.png";
import foto6 from "../../assets/uninassau.png";
import foto7 from "../../assets/Bill_Gates.png";



const DATA = [
  {
    id:Math.random().toString(36).substring(2,27),
    photoUrl: foto,
    nameUser: "Seu stories",
    
  },
  
  {
    id:Math.random().toString(36).substring(2,27),
    photoUrl: foto2,
    nameUser: "Marcodes",
  },
  {
    id:Math.random().toString(36).substring(2,27),
    photoUrl: foto3,
    nameUser: "Ewerton",
  },
  {
    id:Math.random().toString(36).substring(2,27),
    photoUrl: foto4,
    nameUser: "Ângela",
  },
  {
    id:Math.random().toString(36).substring(2,27),
    photoUrl: foto5,
    nameUser: "Obama",
  },
  {
    id:Math.random().toString(36).substring(2,27),
    photoUrl: foto6,
    nameUser: "Uninassau",
  },
  {
    id:Math.random().toString(36).substring(2,27),
    photoUrl: foto7,
    nameUser: "Tio Bill",
  },
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
          <Image style={styles.storiesCardImage} source={item.item.photoUrl} />

          <TextInput
          style={styles.storiesName}
          value={item.item.nameUser}    
          />
        </View>
      )}

      />
     </View>
        <ScrollView style={styles.scroll}>
        <View style={styles.content}>
         <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <Image style={styles.contentHeaderImage}  source={Foto}/>
              <Text style={styles.contentHeaderText}>Flávio</Text>
            </View>
            <Points/>
            
         </View>
          <View style={ styles.imageUser}>
            <Image style={ styles.imageFid} source={image}/>
          </View>
         <View style={styles.contentFooter}>
          <View style={{width:"100%", flexDirection:"row", justifyContent:"space-between"}}>
          <View style={styles.contentFooterLeft}>
           <Heart/>
            <Comment/>
             <Share />
            </View>
           <Bookmark/>
          </View>
          <View>
            <Text style={ styles.text}>240.292 curtidas</Text>
            <Text style={ styles.text}>e desse jeito!</Text>
            <Text style={ styles.textComent}>Ver todos os 289 comentários</Text>
          </View>
          </View>
           </View>

           <View style={styles.content}>
         <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <Image style={styles.contentHeaderImage}  source={Foto}/>
              <Text style={styles.contentHeaderText}>Flávio</Text>
            </View>
            <Points/>
            
         </View>
          <View style={ styles.imageUser}>
            <Image style={ styles.imageFid} source={image2}/>
          </View>
         <View style={styles.contentFooter}>
          <View style={{width:"100%", flexDirection:"row", justifyContent:"space-between"}}>
          <View style={styles.contentFooterLeft}>
           <Heart/>
            <Comment/>
             <Share />
            </View>
           <Bookmark/>
          </View>
          <View>
            <Text style={ styles.text}>40.122 curtidas</Text>
            <Text style={ styles.text}>fico igualzinho</Text>
            <Text style={ styles.textComent}>Ver todos os 75 comentários</Text>
          </View>
          </View>
           </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
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
  imageFid:{
    width:"100%",
    height:450,
    borderRadius:3,
  },


  stories:{
    height:114,
    paddingLeft:10,
    paddingVertical:10,
    alignItems:"center",
  

  },
 storiesCard:{
  marginRight:14,
  flexDirection:'column',
  fontSize:5,
  alignItems:'center'
  

  },
  storiesName:{
    fontSize:12,
    color:'#fff',
  },
  storiesCardImage:{
    width:64,
    height:64,
    borderWidth:2,
    borderColor:"#F7855A",
    borderRadius:50,

  },
  content:{
    width:"100%",
    marginBottom:10,


  },
  contentHeader:{
    height:56,
    alignItems:"center",
    justifyContent:"space-between",
    flexDirection:"row",
    paddingHorizontal:10,
  },
  imageUser:{
    marginHorizontal:10,
  },

  contentHeaderLeft:{
    flexDirection:"row",
    alignItems:"center",
    gap:10,
  },
  contentHeaderImage:{
    width:30,
    height:30,

  },
  contentHeaderText:{
    color:"#FFF",
  },
  contentFooter:{
    width:"100%",
    paddingHorizontal:10,
    marginTop:10,

  },
  contentFooterLeft:{
  alignItems:"center",
  flexDirection:"row",
  gap:10,

  },
  scroll:{
    width:"100%",
  },
  text:{
    color:'#fff'
  },
  textComent:{
    color:'gray',
    fontSize:13,
    
  }

});
