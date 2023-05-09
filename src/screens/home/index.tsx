
import { StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native';
import Logo from "../../assets/logo.svg";
import Stroke from "../../assets/stroke.svg";
import Menssagem from "../../assets/message.svg";
import foto from "../../assets/foto.png";
import foto2 from "../../assets/foto2.png";
import Points from "../../assets/points.svg";
import Bookmark from "../../assets/Bookmark.svg";
import Heart from "../../assets/Heart.svg";
import Comment from "../../assets/Comment.svg";
import Share from "../../assets/Share.svg";
import image from "../../assets/image.png";



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
        <ScrollView style={styles.scroll}>
        <View style={styles.content}>
         <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <Image style={styles.contentHeaderImage}  source={foto}/>
              <Text style={styles.contentHeaderText}>Jaison</Text>
            </View>
            <Points/>
            
         </View>
          <View style={ styles.imageUser}>
            <Image source={image}/>
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
            <Text>240.292 curtidas</Text>
            <Text>Olha que laranja!</Text>
            <Text>Ver todos os 89 comentários</Text>
          </View>
          </View>
           </View>

           <View style={styles.content}>
         <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <Image style={styles.contentHeaderImage}  source={foto}/>
              <Text style={styles.contentHeaderText}>Jaison</Text>
            </View>
            <Points/>
            
         </View>
          <View style={ styles.imageUser}>
            <Image source={image}/>
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
            <Text>240.292 curtidas</Text>
            <Text>Olha que laranja!</Text>
            <Text>Ver todos os 89 comentários</Text>
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
    height:114,
    paddingLeft:10,
    paddingVertical:10,
    alignItems:"center",

  },
 storiesCard:{
  marginRight:14,
  

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
  }

});
