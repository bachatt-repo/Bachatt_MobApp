import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { t } from "react-native-tailwindcss";
import {
  MaterialIcons,
  FontAwesome,
  Feather,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MenuScreen = () => {
  const navigation = useNavigation();

  // Define icons, labels, background colors, and arrow icon for each option
  const menuOptions = [
    {
      title: "Transactions",
      icon: <MaterialIcons name="attach-money" size={24} color="#4CAF50" />,
      bgColor: "#E8F5E9",
    },
    {
      title: "Customized Savings",
      icon: <FontAwesome name="pie-chart" size={24} color="#FF9800" />,
      bgColor: "#FFF3E0",
    },
    {
      title: "Withdraw Savings",
      icon: <Feather name="dollar-sign" size={24} color="#03A9F4" />,
      bgColor: "#E1F5FE",
    },
    {
      title: "Support",
      icon: <Ionicons name="help-circle-outline" size={24} color="#9C27B0" />,
      bgColor: "#F3E5F5",
    },
    {
      title: "Notifications",
      icon: <Ionicons name="notifications-outline" size={24} color="#FF5722" />,
      bgColor: "#FFEBEE",
    },
    {
      title: "Settings",
      icon: <Ionicons name="settings-outline" size={24} color="#607D8B" />,
      bgColor: "#ECEFF1",
    },
  ];

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
        <View style={[t.bgWhite, t.p2, t.roundedFull]}>
          <Image
            source={require("../../assets/logo3.png")}
            style={[t.w10, t.h10, t.objectContain, t.bgWhite, t.roundedFull]}
          />
        </View>
        <View style={[t.flex1, t.itemsStart, t.mL2, t.justifyCenter]}>
          <Text style={[t.textXl, t.fontBold, t.textWhite]}>
            Hi, Sachin Kumar!
          </Text>
          <Text style={[t.textBase, t.textGray200, t.mT1]}>
            Account Details
          </Text>
        </View>
        <View style={{ width: 24 }} />
        {/* Placeholder to balance the back button */}
      </View>

      <ScrollView contentContainerStyle={[t.pX5, t.mT5]}>
        {menuOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              t.bgWhite,
              t.roundedLg,
              t.pY4,
              t.pX5,
              t.mB3,
              t.flexRow,
              t.itemsCenter,
              t.shadow,
              t.justifyBetween,
            ]}
          >
            <View style={[t.flexRow, t.itemsCenter]}>
              <View
                style={[
                  t.roundedFull,
                  t.p1,
                  { backgroundColor: option.bgColor },
                ]}
              >
                {option.icon}
              </View>
              <Text style={[t.textLg, t.textGray800, t.fontMedium, t.mL3]}>
                {option.title}
              </Text>
            </View>
            <AntDesign name="right" size={20} color="#B0BEC5" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MenuScreen;
