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

const NameScreen = () => {
  const router = useRouter(); // Initialize router

  const [name, setName] = useState("");

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
          onPress={() => {
            alert(`Hello, ${name}!`);
            router.push("/dashboard");
          }}
        >
          <Text style={[t.textCenter, t.textWhite, t.textLg]}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NameScreen;
