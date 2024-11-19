import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { t } from "react-native-tailwindcss";

const NameScreen = ({ navigation }) => {
  const router = useRouter(); // Initialize router

  const [name, setName] = useState("");
  const saveNameToLocalStorage = async () => {
    try {
      await AsyncStorage.setItem("userName", name); // Save name with key "userName"
      // alert(`Hello, ${name}!`);
      navigation.navigate("Home"); // Navigate to Home
    } catch (error) {
      console.error("Failed to save name:", error);
      alert("Error saving name. Please try again.");
    }
  };

  return (
    <SafeAreaView
      style={[t.flex1, t.justifyStart, t.pT10, t.itemsCenter, t.bgGray100]}
    >
      <View style={[t.wFull, t.p5]}>
        <Text style={[t.textBlue700, t.fontBold, t.mB2]}>
          Welcome to Bachatt!
        </Text>
        <Text style={[t.textXl, t.fontSemibold, t.mB4]}>What’s your name?</Text>
        <TextInput
          style={[
            t.border,
            t.bgWhite,
            t.shadowLg,
            t.borderGray300,
            t.roundedLg,
            t.p3,
            t.textLg,
            t.mB4,
          ]}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
        <TouchableOpacity
          style={[t.bgBlue700, t.pY3, t.roundedLg]}
          onPress={saveNameToLocalStorage}
        >
          <Text style={[t.textCenter, t.textWhite, t.textLg]}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NameScreen;
