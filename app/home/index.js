import React from "react";
import { Dimensions, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/FontAwesome";
import tw from "twrnc";
import BookingsPage from "../bookings";
import ScanAndPayPage from "../scanandpay";
import LearnScreen from "../learning";
import RechargesPage from "../recharges";
import { t } from "react-native-tailwindcss";
import SetGoal from "../setgoal";

const Tab = createBottomTabNavigator();
const windowHeight = Dimensions.get("window").height;

const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="LearnToInvest"
      screenOptions={{
        tabBarStyle: {
          ...tw`h-${windowHeight / 35}`,
          minHeight: 70,
          maxHeight: Platform.OS === "android" ? 75 : undefined,
        },
        tabBarLabelStyle: { ...tw`text-sm pb-2 h-8` },
        headerShown: false,
      }}
    >
      {/* Bookings Tab */}
      <Tab.Screen
        name="Bookings"
        component={BookingsPage}
        options={{
          tabBarLabelStyle: { ...t.textXs, ...t.pB2, ...t.h8 },
          tabBarLabel: "Bookings",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="calendar-check"
              color={color}
              size={size}
            />
          ),
        }}
      />

      {/* Scan and Pay Tab */}
      <Tab.Screen
        name="ScanAndPay"
        component={ScanAndPayPage}
        options={{
          tabBarLabelStyle: { ...t.textXs, ...t.pB2, ...t.h8 },

          tabBarLabel: "Scan & Pay",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="qrcode-scan"
              color={color}
              size={size}
            />
          ),
        }}
      />

      {/* Learn to Invest Tab */}
      <Tab.Screen
        name="LearnToInvest"
        component={LearnScreen}
        options={{
          tabBarLabelStyle: { ...t.textXs, ...t.pB2, ...t.h8 },

          tabBarLabel: "Learn to Invest",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="school" color={color} size={size} />
          ),
        }}
      />

      {/* Recharges Tab */}
      <Tab.Screen
        name="Recharges"
        component={RechargesPage}
        options={{
          tabBarLabelStyle: { ...t.textXs, ...t.pB2, ...t.h8 },
          tabBarLabel: "Recharges",
          tabBarIcon: ({ color, size }) => (
            <Icon name="credit-card" color={color} size={size} />
          ),
        }}
      />

      {/* Set Goal Tab */}
      <Tab.Screen
        name="SetGoal"
        component={SetGoal}
        options={{
          tabBarLabelStyle: { ...t.textXs, ...t.pB2, ...t.h8 },
          tabBarLabel: "Set Goal",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="target" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;
