import React from 'react';
import { View, ScrollView, TextInput, Text, StyleSheet, Image, BackgroundImage, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

// main axis -y - vertical axis use - justifyContent
// cross axis-x- horizontal axis use alignItems

//while aligning - dnt use margin n padding first
// use alignSelf,justifyContent,alignItem then go for margin n padding

export default class LoginScreen extends React.Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>

          <Image source={require('../assets/logo.PNG')}
            style={{
              width: '90%',
              height: 200,
              marginTop: "5%",
              alignSelf: 'center',
              resizeMode: "contain"
            }} />

          <Text style={{ fontSize: 22, fontWeight: 'bold', marginLeft: "5%", marginTop: "2%" }}> LoginScreen   </Text>

          <View style={{ flexDirection: 'row', width: "90%", alignSelf: "center", marginTop: 30, alignItems: "center", justifyContent: "center" }}>
            <Entypo name="email" size={20} color="black" />
            <TextInput
              style={{
                width: "80%",
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "orange"
              }}
              placeholder='Email Id' />

          </View>


          <View style={{ flexDirection: 'row', width: "90%", alignSelf: "center", marginTop: 30, alignItems: "center", justifyContent: "center" }}>
            <AntDesign name="lock" size={20} color="black" />
            <TextInput
              style={{
                width: "78%",
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "orange"
              }}
              placeholder='Password' />
            <Entypo name="eye-with-line" size={20} color="black" />
          </View>


          <Text style={{
            marginTop: 10,
            color: "blue",
            fontWeight: "bold",
            alignSelf: "flex-end",
            marginHorizontal: "5%"
          }}>Forgot Password ?</Text>


          <TouchableOpacity style={{
            backgroundColor: "blue",
            width: "90%",
            height: 40,
            margingTop: 30,
            borderRadius: 10,
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center"
          }}>

            <Text style={{ fontSize: 18, color: 'white' }}>Login</Text>

          </TouchableOpacity>



          <Text style={{ color: "gray", alignSelf: "center", marginTop: 30 }}>OR</Text>


          <TouchableOpacity style={{ marginTop: 30, flexDirection: "row", alignSelf: "center", backgroundColor: "#eee", width: "90%", height: 40, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
            <Image style={{ width: 20, height: 20 }} source={{ uri: "https://image.similarpng.com/very-thumbnail/2020/12/Illustration-of-Google-icon-on-transparent-background-PNG.png" }} />
            <Text style={{ marginLeft: 10 }}>Login with Google</Text>
          </TouchableOpacity>


          <Text style={{ marginBottom: 10, marginTop: 10, alignSelf: "center", color: "grey" }}>New To VidyaGuru? <Text style={{ color: "blue", fontWeight: "bold" }}>Register</Text></Text>

        </ScrollView>

      </View>
    )
  }

}