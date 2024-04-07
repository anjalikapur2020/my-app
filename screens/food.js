



import React from 'react';
import{View,Text,StyleSheet,Image,BackgroundImage,TouchableOpacity} from 'react-native'
import axios, { formToJSON } from 'axios';


let response1
let fullresponse,alldata,response


const options = {
  method: 'GET',
  url: 'https://free-football-soccer-videos.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': '7e265aa069msh91e7b361261b53fp1697c6jsn0641f89cd8bb',
    'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
    fullresponse = response.data
    alldata=JSON.stringify(fullresponse);
    console.log(alldata);
} catch (error) {
	console.error(error);
}

export default class FoodScreen extends React.Component {

  
render(){
    
    return(
        <View>
{/* 
<Text style={{color: '#000', fontSize: 22}}>country is : {response1}</Text>

<Text style={{color: '#000', fontSize: 22}}> player name: {fullresponse[0].player.name}</Text>
<Text style={{color: '#000', fontSize: 22}}> player Age: {fullresponse[0].player.age}</Text> */}
<Text style={{color: '#000', fontSize: 22}}> {alldata}</Text>


{/* <Text style={{color: 'white', fontSize: 22}}>{response.data}</Text> */}


    </View>
    )

    
}
    
}