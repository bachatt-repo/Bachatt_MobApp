import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  CheckBox,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { t } from "react-native-tailwindcss";
import { MaterialCommunityIcons } from "@expo/vector-icons"; // Add icon library

const PhoneNumberScreen = ({ navigation }) => {
  const router = useRouter();
  const [isSelected, setSelection] = useState(false);

  return (
    <SafeAreaView
      style={[t.flex1, t.hScreen, t.justifyBetween, t.pT10, t.bgGray100]}
    >
      {/* Icon at the top */}
      <View style={[t.itemsStart, t.m6]}>
        <Image
          source={require("../../assets/logo3.png")}
          style={[t.w30, t.h30]}
        />
        <Text style={[t.textXl, t.fontSemibold, t.textGray800, t.mY4]}>
          Enter your phone number
        </Text>
        {/* Phone input field */}
        <View
          style={[
            t.flexRow,
            t.itemsCenter,
            t.border,
            t.borderGray300,
            t.roundedLg,
            t.bgWhite,
            t.p1,
            t.mB4,
          ]}
        >
          <Text style={[t.textLg, t.textGray700, t.pX2]}>+91</Text>
          <TextInput
            style={[t.flex1, t.textLg, t.pL2]}
            keyboardType="phone-pad"
            placeholder="9084369325"
          />
        </View>
      </View>

      {/* Help button aligned to the right */}
      <View style={[t.absolute, t.top0, t.right0, t.m4]}>
        <TouchableOpacity style={[t.bgWhite, t.flexRow, t.p2, t.roundedFull]}>
          <MaterialCommunityIcons
            name="information"
            size={18}
            color="#3b82f6"
          />
          <Text style={[t.textBlue600, t.fontBold]}>Help</Text>
        </TouchableOpacity>
      </View>

      {/* Main content */}
      <View style={[t.itemsCenter]}>
        <View style={[t.bgWhite, t.p5, t.pB10, t.roundedLg, t.shadow]}>
          {/* Get OTP button */}
          <TouchableOpacity
            style={[t.bgBlue700, t.pY3, t.roundedLg, t.mB4]}
            onPress={() => navigation.navigate("Name")}
          >
            <Text style={[t.textCenter, t.textWhite, t.textLg]}>Get OTP</Text>
          </TouchableOpacity>

          {/* Terms and Conditions */}
          <Text style={[t.textGray500, t.textXs, t.textCenter]}>
            By logging in, you agree to our{" "}
            <Text style={[t.textBlue600, t.underline]}>Terms & Conditions</Text>
          </Text>
          {/* Checkbox and text */}
          <View style={[t.flexRow, t.itemsCenter, t.mT4]}>
            {/* <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              tintColors={{ true: "#3b82f6", false: "#d1d5db" }}
            /> */}
            <Text style={[t.textGray500, t.textXs]}>
              You agree to receive investment & other updates via WhatsApp
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PhoneNumberScreen;
