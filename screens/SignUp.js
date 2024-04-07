import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, TextInput, TouchableOpacity } from 'react-native-web';
import { Feather } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'


export default class SignUp extends React.Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Image
            source={require("../assets/logo.PNG")}
            style={{
              width: "20%",
              height: 150,
              marginTop: "5%",
              alignSelf: "center",
              resizeMode: "contain"
            }}
          />

          <View
            style={{
              flexDirection: "row",
              width: "90%",
              alignSelf: "center",
              margintTop: 30,
              justifyContent: "center",
              alignItems: "center"
            }}>

            <Feather name="at-sign" size={20} color="grey" />
            <TextInput
              style={{
                width: "85%",
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "red"
              }}

              placeholder="Email ID"
            />
          </View>


          <View
          style={{
            flexDirection: "row",
            width: "90%",
              alignSelf: "center",
              margintTop: 30,
              justifyContent: "center",
              alignItems: "center"
          }}>
          <AntDesign name="lock" size={20} color="grey" />
            <TextInput
              style={{
                width: "85%",
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "red"
              }}

              placeholder="Password"
            />
            
          </View>


          <View
          style={{
            flexDirection: "row",
            width: "90%",
              alignSelf: "center",
              margintTop: 30,
              justifyContent: "center",
              alignItems: "center"
          }}>
          <AntDesign name="lock" size={20} color="grey" />
            <TextInput
              style={{
                width: "85%",
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "red"
              }}

              placeholder="Confirm Password"
            />
            
          </View>

          <TouchableOpacity
          style={{
            backgroundColor:"blue",
            width:"90%",
            height:40,
            marginTop: 30,
            borderRadius:10,
            alignSelf:"center",
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={()=>{}}>

<Text tyle={{fontsize:18,color:"white"}}>Sign Up</Text>
          </TouchableOpacity>

<Text style={{alignSelf:"center",color:"gray",margintTop:30}}>
  Already have an account?
  <Text style={{ color:"blue",fontWeight:"bold"}}
  onPress={()=>{

  }}> Login</Text>
</Text>
        </ScrollView>
      </View>
    )
  }
}