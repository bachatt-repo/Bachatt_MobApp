import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { t } from "react-native-tailwindcss";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const categories = [
  {
    title: "Mutual Funds",
    badge: "Most Volatility",
    description: "Grow and save expertly managed for your growth",
  },
  {
    title: "Govt Schemes",
    badge: "Most Rewarding",
    description: "Safely invested with rewarding returns",
  },
  {
    title: "Saving Accounts",
    badge: "Most Stability",
    description: "Safely invested with stable returns",
  },
];

const DashboardScreen = () => {
  return (
    <SafeAreaView style={[t.flex1, t.bgGray100]}>
      <ScrollView contentContainerStyle={[t.p5]}>
        {/* Header Section */}
        <View style={[t.flexRow, t.itemsCenter, t.justifyBetween, t.mB4]}>
          <Text style={[t.text2xl, t.fontBold, t.textGray800]}>
            Hi, Sachin Kumar!
          </Text>
          <View style={[t.flexRow, t.itemsCenter]}>
            <TouchableOpacity
              onPress={() => router.push("/menu")}
              style={[t.mR4]}
            >
              <MaterialCommunityIcons name="menu" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              // onPress={() => router.push("/account")}
              style={[t.bgBlue100, t.p2, t.roundedFull]}
            >
              <Text style={[t.textBlue600, t.fontBold]}>S</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* What is Bachatt Section */}
        <View
          style={[
            t.bgGray200,
            t.roundedLg,
            t.p4,
            t.flexRow,
            t.itemsCenter,
            t.justifyBetween,
            t.mB4,
          ]}
        >
          <Image
            source={require("../../assets/logo3.png")}
            style={[t.w20, t.objectContain]}
          />

          <View style={[t.flex1, t.mL3]}>
            <Text style={[t.textLg, t.fontBold, t.textGray900]}>
              What is bachatt?
            </Text>
            <Text style={[t.textGray600, t.mT1]}>
              Understand in 60 seconds.{" "}
              <Text style={[t.textBlue700, t.underline]}>Get Started</Text>
            </Text>
          </View>
        </View>

        {/* Investment Overview Section */}
        <View style={[t.bgGray200, t.roundedLg, t.p4, t.mB4]}>
          <Text style={[t.textLg, t.fontBold, t.textGray900, t.mB2]}>
            Investment overview
          </Text>
          <View style={[t.flexRow, t.justifyBetween]}>
            <View>
              <Text style={[t.textGray600, t.textBase]}>Invested</Text>
              <Text style={[t.textXl, t.fontBold, t.textGray800]}>₹ 2,702</Text>
            </View>
            <View>
              <Text style={[t.textGray600, t.textBase]}>Current Value</Text>
              <Text style={[t.textXl, t.fontBold, t.textGray800]}>₹ 3,501</Text>
            </View>
          </View>
        </View>

        {/* Ideal for Getting Started Section */}
        <View style={[t.flexRow, t.justifyBetween, t.itemsCenter]}>
          <View>
            <Text style={[t.textLg, t.fontBold, t.textGray700, t.mB1]}>
              Ideal for getting started
            </Text>
            <Text style={[t.textGray500, t.textBase, t.mB4]}>
              Start your bachatt journey
            </Text>
          </View>
          <Image
            source={require("../../assets/logo3.png")}
            style={[t.w16, t.mB2, t.objectContain]}
          />
        </View>

        {/* Category Cards */}
        {categories.map((item, index) => (
          <View
            key={index}
            style={[
              t.bgGray200,
              t.roundedLg,
              t.flexRow,
              t.justifyBetween,
              t.mB4,
            ]}
          >
            <View style={[t.flex1, t.p4]}>
              <Text style={[t.textLg, t.fontBold, t.textGray800]}>
                {item.title}
              </Text>
              <Text style={[t.textGray600, t.mT3]}>{item.description}</Text>
            </View>
            <View
              style={[
                t.absolute,
                t.right0,
                t.bgBlue700,
                t.roundedLLg,
                t.pX4,
                t.pY1,
                t.mT5,
              ]}
            >
              <Text style={[t.textWhite, t.fontBold]}>{item.badge}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;
