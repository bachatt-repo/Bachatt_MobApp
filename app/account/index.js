// UserProfileScreen.js
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { t } from "react-native-tailwindcss";
import {
  MaterialIcons,
  FontAwesome,
  Ionicons,
  AntDesign,
  Feather,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const UserProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[t.flex1, t.bgGray100]}>
      {/* Header with Back Button */}
      <View
        style={[
          t.bgBlue700,
          t.wFull,
          t.p5,
          t.flexRow,
          t.itemsCenter,
          t.justifyBetween,
          t.roundedBLg,
        ]}
      >
        <TouchableOpacity onPress={() => navigation.goBack()} style={[t.p2]}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={[t.text2xl, t.fontBold, t.textWhite]}>User Profile</Text>
        <View style={{ width: 24 }} />
        {/* Placeholder for symmetry */}
      </View>

      <ScrollView contentContainerStyle={[t.pX5, t.mT5]}>
        {/* Profile Section */}
        <View style={[t.itemsCenter, t.mB8]}>
          <Image
            source={require("../../assets/logo.png")}
            style={[t.w24, t.h24, t.roundedFull, t.bgGray300]}
          />
          <Text style={[t.text2xl, t.fontBold, t.textGray800, t.mT4]}>
            Sachin Kumar
          </Text>
          <Text style={[t.textBase, t.textGray600, t.mT1]}>
            sachin.kumar@example.com
          </Text>
        </View>

        {/* Profile Options */}
        <View style={[t.bgWhite, t.roundedLg, t.shadow, t.p5, t.mB5]}>
          <TouchableOpacity style={[t.flexRow, t.itemsCenter, t.mB5]}>
            <MaterialIcons name="edit" size={24} color="#4CAF50" />
            <Text style={[t.textLg, t.textGray800, t.fontMedium, t.mL4]}>
              Edit Profile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[t.flexRow, t.itemsCenter, t.mB5]}>
            <Feather name="trending-up" size={24} color="#03A9F4" />
            <Text style={[t.textLg, t.textGray800, t.fontMedium, t.mL4]}>
              View Activity
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[t.flexRow, t.itemsCenter, t.mB5]}>
            <FontAwesome
              style={[t.mX1]}
              name="lock"
              size={24}
              color="#FF9800"
            />
            <Text style={[t.textLg, t.textGray800, t.fontMedium, t.mL4]}>
              Security Settings
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[t.flexRow, t.itemsCenter]}>
            <AntDesign name="logout" size={24} color="#FF5722" />
            <Text style={[t.textLg, t.textGray800, t.fontMedium, t.mL4]}>
              Log Out
            </Text>
          </TouchableOpacity>
        </View>

        {/* Additional Info Section */}
        <View style={[t.bgWhite, t.roundedLg, t.shadow, t.p5, t.mB5]}>
          <Text style={[t.textLg, t.fontBold, t.textGray800, t.mB3]}>
            Personal Information
          </Text>
          <View style={[t.flexRow, t.justifyBetween, t.mB3]}>
            <Text style={[t.textBase, t.textGray600]}>Phone Number</Text>
            <Text style={[t.textBase, t.textGray800]}>+91 12345 67890</Text>
          </View>
          <View style={[t.flexRow, t.justifyBetween, t.mB3]}>
            <Text style={[t.textBase, t.textGray600]}>Date of Birth</Text>
            <Text style={[t.textBase, t.textGray800]}>12 Mar 1990</Text>
          </View>
          <View style={[t.flexRow, t.justifyBetween]}>
            <Text style={[t.textBase, t.textGray600]}>Address</Text>
            <Text style={[t.textBase, t.textGray800]}>
              123 Main St, City, Country
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserProfileScreen;
