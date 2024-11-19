import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { t } from "react-native-tailwindcss";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import MenuScreen from "../menu";
import UserProfileScreen from "../account";
import CategoriesScreen from "../categories";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getNameFromLocalStorage = async () => {
  try {
    const savedName = await AsyncStorage.getItem("userName");
    if (savedName) {
      console.log("Retrieved name:", savedName);
      return savedName;
    }
  } catch (error) {
    console.error("Failed to retrieve name:", error);
  }
};

const Stack = createStackNavigator();

const LearningStack = () => {
  return (
    <Stack.Navigator initialRouteName="Learning">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Learning"
        component={LearnScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Category"
        component={CategoriesScreen}
      />
    </Stack.Navigator>
  );
};

const LearnScreen = ({ navigation }) => {
  const name = getNameFromLocalStorage();
  return (
    <SafeAreaView style={[t.flex1, t.bgGray100, t.p4]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={[t.flexRow, t.pB5, t.p3, t.justifyBetween, t.itemsCenter]}>
          <View>
            <Text style={[t.textXl, t.fontBold, t.textGray800]}>
              Hi, {name}
            </Text>
            <Text style={[t.textGray600]}>
              Welcome to your Financial Literacy Hub!
            </Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="gray" />
          </TouchableOpacity>
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
            t.mT4,
          ]}
        >
          <Ionicons name="search" size={20} color="gray" />
          <TextInput
            style={[t.flex1, t.mL2, t.textBase]}
            placeholder="Search for.."
          />
          <TouchableOpacity>
            <Ionicons name="options-outline" size={20} color="gray" />
          </TouchableOpacity>
        </View>

        {/* Promo Banner */}
        <View style={[t.bgBlue500, t.roundedLg, t.p10, t.pY16, t.m2]}>
          <Text style={[t.textWhite, t.fontBold]}>Today's Special</Text>
          <Text style={[t.textWhite, t.textXs, t.mT2]}>
            Get a 25% discount on your first course!
          </Text>
        </View>

        {/* Categories */}
        <View style={[t.flexRow, t.justifyBetween, t.mT6]}>
          <Text style={[t.textLg, t.fontBold, t.textGray800]}>Categories</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Category")}>
            <Text style={[t.textBlue500, t.fontBold]}>SEE ALL</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={[t.mT4]}
        >
          {[
            "Basic Financial Literacy",
            "Budgeting Basics",
            "Digital Payments",
          ].map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[t.mR4, t.bgGray200, t.pX4, t.pY2, t.roundedFull]}
            >
              <Text style={[t.textGray700, t.fontBold]}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Popular Courses */}
        <View style={[t.flexRow, t.justifyBetween, t.mT10]}>
          <Text style={[t.textLg, t.fontBold, t.textGray800]}>
            Popular Courses
          </Text>
          <TouchableOpacity>
            <Text style={[t.textBlue500, t.fontBold]}>SEE ALL</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={[t.mT4]}
        >
          <View style={[t.flexRow]}>
            {[
              "Digital Payments",
              "Budgeting Basics",
              "Investing 101",
              "Retirement Planning",
            ].map((course, index) => (
              <View
                key={index}
                style={[
                  t.bgWhite,
                  t.roundedLg,
                  t.shadow,
                  t.mR4,
                  t.w64,
                  t.overflowHidden,
                ]}
              >
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST9S0xJR99XDJJotZ3YPHJPhulTGBk8mNYkA&s"
                  style={[{ height: 170 }, t.bgGray300]}
                ></Image>
                <View style={[t.p4]}>
                  <Text style={[t.fontBold, t.textGray800]}>{course}</Text>
                  <Text style={[t.textGray600, t.textXs, t.mT1]}>
                    $28 | ★ 4.2 | 7830 Students
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>

        {/* Top Mentors */}
        <Text style={[t.textLg, t.fontBold, t.textGray800, t.mT6]}>
          Top Mentor
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={[t.mT4]}
        >
          {[
            "Sonja",
            "Jensen",
            "Victoria",
            "Castaldo",
            "Kathleen",
            "Meyer",
            "Linda",
            "Bishop",
          ].map((mentor, index) => (
            <View key={index} style={[t.itemsCenter, t.mR4]}>
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXJyfYrjiofLgZe-hqSn582c_k8wb4a7lk_Q&s"
                style={[t.bgGray300, t.roundedFull, { width: 60, height: 60 }]}
              ></Image>
              <Text style={[t.textGray700, t.mT2]}>{mentor}</Text>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LearningStack;
