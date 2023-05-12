import { StyleSheet } from "react-native";
import { Text, View, Image, Modal, Pressable, Alert } from "react-native";
import { useState, useEffect } from "react";
import { Button } from "@rneui/themed";
import { useThemeMode } from "@rneui/themed";
import { useTheme } from "@rneui/themed";
import { useFCM } from "../../../services/push_notification";
import { Calendar } from "react-native-calendars";
import { Dialog } from "@rneui/themed";
import React from "react";
import { useUser } from "../../../providers/UserProvider";
import { BUYER } from "../../../constants/common";
import DisplaySellers from "../../../components/Buyer/DisplaySellers";
import { ScrollView } from "react-native-gesture-handler";
import * as Font from "expo-font";
import SellerHome from "../../../components/Seller/SellerHome";

export default function TabTwoScreen() {
  const { user } = useUser();
  if(!user) return;
  if (user?.type == BUYER) {
    return (
      <View>
        <Text style={styles.welcome}>
           Welcome {user.name ?? user.id}
        </Text>
        <Text>Welcome {user.name}</Text>
        <DisplaySellers></DisplaySellers>
      </View>
    );
  }
  return (
    <ScrollView style={{ backgroundColor: "#fcfbf5" }}>
      <Text
        style={{
          fontSize: 30,
          color: "#84aac4",
          paddingLeft: 15,
          paddingBottom: 20,
          paddingTop: 20,
          fontWeight: "bold",
        }}
      >
        Greetings {user?.name ?? "Name"} 👋!
      </Text>
        <SellerHome /> 
    </ScrollView>
  );

}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  welcome:{
    fontSize:25,
//     fontFamily:'sans',
    fontWeight:'800',
    margin:10,
    color:'#0d2b42',
  }
});
