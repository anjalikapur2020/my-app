import React from 'react';
import{View,Text,StyleSheet,Image,BackgroundImage,TouchableOpacity} from 'react-native'
import axios, { formToJSON } from 'axios';

let response1
let fullresponse,alldata,response

const options = {
    method: 'GET',
  url: 'https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data',
  params: {
    ingr: 'flour',
    'nutrition-type': 'cooking'
  },
  headers: {
    'X-RapidAPI-Key': 'a3ce41db6bmsh4d0152bd2b3c4ddp1f4d82jsn1d842efac78b',
    'X-RapidAPI-Host': 'edamam-edamam-nutrition-analysis.p.rapidapi.com'
  }
};

try {
  
	const response = await axios.request(options);
 	console.log(response.data);
  fullresponse=response.data
  // response1=response.data[0].player.country.name
  // alldata =JSON.stringify(fullresponse)
  // console.log(JSON.stringify(fullresponse));
  // console.log(("player country: "),response1)
  // console.log(("player name: "),response.data[0].player.name)
  // console.log(("age: "),response.data[0].player.age)
} catch (error) {
	console.error(error);
}




export default class LoginScreen extends React.Component {

  
render(){
    
    return(
        <View>

<Text style={{color: '#000', fontSize: 22}}>country is : {response1}</Text>
<TouchableOpacity style={{ backgroundColor:"red",width:150,height:50,alignItems:"center",alignSelf:"left",borderRadius:50}}>
  <Text style={{color:"green",alignContent:"center",alignItems:"center",alignSelf:"center",textAlign:"center"}}>Button</Text>
</TouchableOpacity>


{/* <Text style={{color: 'white', fontSize: 22}}>{response.data}</Text> */}


    </View>
    )

    
}
    
}