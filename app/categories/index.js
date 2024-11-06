import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { t } from "react-native-tailwindcss";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const CategoriesScreen = () => {
  const categories = [
    "Basic Financial Literacy",
    "Digital Payments",
    "Budgeting Basics",
    "Investing 101",
    "Retirement Planning",
    "Debt Management",
    "Savings Strategies",
    "Credit Scores",
  ];

  return (
    <SafeAreaView style={[t.flex1, t.bgGray100, t.p4]}>
      {/* Header */}
      <View style={[t.flexRow, t.itemsCenter, t.mB4]}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={[t.textXl, t.fontBold, t.textGray800, t.mL4]}>
          All Categories
        </Text>
      </View>

      {/* Search Bar */}
      <View
        style={[
          t.flexRow,
          t.bgWhite,
          t.roundedLg,
          t.shadowLg,
          t.itemsCenter,
          t.p3,
          t.mB4,
        ]}
      >
        <Ionicons name="search" size={20} color="gray" />
        <TextInput
          style={[t.flex1, t.mL2, t.textBase]}
          placeholder="Search for financial topics..."
        />
        <TouchableOpacity>
          <Ionicons name="options-outline" size={20} color="gray" />
        </TouchableOpacity>
      </View>

      {/* Category List */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[t.flexRow, t.flexWrap, t.justifyBetween]}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[
                t.w1_2,
                t.p4,
                t.itemsCenter,
                t.justifyCenter,
                t.bgWhite,
                t.roundedLg,
                t.shadow,
              ]}
            >
              <View
                style={[t.bgGray200, t.roundedFull, { width: 80, height: 80 }]}
              />
              <Text style={[t.textGray700, t.fontBold, t.p2, t.textCenter]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoriesScreen;
