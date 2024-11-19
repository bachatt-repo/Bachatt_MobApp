import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";
import { t } from "react-native-tailwindcss";
import Icon from "react-native-vector-icons/MaterialIcons";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MenuScreen from "../menu";
import UserProfileScreen from "../account";

const Stack = createStackNavigator();

const RechargeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Recharges">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Recharges"
        component={RechargesPage}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Menu"
        component={MenuScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Profile"
        component={UserProfileScreen}
      />
    </Stack.Navigator>
  );
};

// export default AppNavigator;
const RechargesPage = ({ navigation }) => {
  return (
    <SafeAreaView style={[t.flex1, t.bgGray100]}>
      {/* Scrollable Content */}
      <ScrollView style={[t.flex1]}>
        {/* Header Section */}
        <View style={[t.flexRow, t.p5, t.itemsCenter, t.justifyBetween, t.mB4]}>
          <View style={[t.flexRow, t.itemsCenter]}>
            <Image
              source={require("../../assets/logo3.png")}
              style={[t.w10, t.h10, t.objectContain]}
            />
            <Text style={[t.text2xl, t.textBlue700, t.fontBold, t.mL2]}>
              Bachatt
            </Text>
          </View>
          <View style={[t.flexRow, t.itemsCenter]}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Menu")}
              style={[t.mR4]}
            >
              <Icon name="menu" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Profile")}
              style={[t.bgBlue100, t.p2, t.roundedFull]}
            >
              <Text style={[t.textBlue600, t.fontBold]}>S</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Special Offer Banner */}
        <View style={[t.bgBlue100, t.p4, t.m4, t.roundedLg]}>
          <Text style={[t.textBlue700, t.fontBold, t.textCenter]}>
            SPECIAL OFFER!
          </Text>
          <Text style={[t.textBlue700, t.textCenter]}>
            Flat ₹50 cashback on electricity bill payment
          </Text>
        </View>

        {/* Recharge and Bill Payments Section */}
        <View style={[t.bgWhite, t.roundedLg, t.shadow, t.p4, t.m4]}>
          <Text style={[t.textLg, t.fontBold, t.mB4]}>
            Recharge & Bill Payments
          </Text>
          <View style={[t.flexRow, t.justifyBetween]}>
            {/* Individual Icons */}
            <TouchableOpacity style={[t.itemsCenter]}>
              <Icon name="phone-android" size={40} color="#4a90e2" />
              <Text style={[t.textGray700, t.textSm, t.mT2]}>Mobile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[t.itemsCenter]}>
              <Icon name="phone" size={40} color="#4a90e2" />
              <Text style={[t.textGray700, t.textSm, t.mT2]}>Landline</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[t.itemsCenter]}>
              <Icon name="bolt" size={40} color="#4a90e2" />
              <Text style={[t.textGray700, t.textSm, t.mT2]}>Electricity</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[t.itemsCenter]}>
              <Icon name="more-horiz" size={40} color="#4a90e2" />
              <Text style={[t.textGray700, t.textSm, t.mT2]}>More</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Book on FastPay Section */}
        <View style={[t.bgWhite, t.roundedLg, t.shadow, t.p4, t.m4]}>
          <Text style={[t.textLg, t.fontBold, t.mB4]}>Book on Bachatt</Text>
          <View style={[t.flexRow, t.justifyBetween]}>
            {/* Individual Icons */}
            <TouchableOpacity style={[t.itemsCenter]}>
              <Icon name="movie" size={40} color="#4a90e2" />
              <Text style={[t.textGray700, t.textSm, t.mT2]}>Movie</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[t.itemsCenter]}>
              <Icon name="flight" size={40} color="#4a90e2" />
              <Text style={[t.textGray700, t.textSm, t.mT2]}>Flights</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[t.itemsCenter]}>
              <Icon name="train" size={40} color="#4a90e2" />
              <Text style={[t.textGray700, t.textSm, t.mT2]}>Train</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[t.itemsCenter]}>
              <Icon name="more-horiz" size={40} color="#4a90e2" />
              <Text style={[t.textGray700, t.textSm, t.mT2]}>More</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Upcoming Payments Section */}
        <View style={[t.bgWhite, t.roundedLg, t.shadow, t.p4, t.m4]}>
          <Text style={[t.textLg, t.fontBold, t.mB4]}>Upcoming Payments</Text>
          <View>
            {/* Individual Payment Row */}
            <View style={[t.flexRow, t.justifyBetween, t.itemsCenter, t.mB4]}>
              <View>
                <Text style={[t.textGray800, t.fontBold]}>
                  Electricity bill
                </Text>
                <Text style={[t.textGray600]}>84216623666</Text>
                <Text style={[t.textGray500]}>Due date: 28 July 2019</Text>
              </View>
              <TouchableOpacity
                style={[t.bgBlue700, t.pX4, t.pY2, t.roundedLg]}
              >
                <Text style={[t.textWhite, t.textSm]}>Pay Now</Text>
              </TouchableOpacity>
            </View>

            <View style={[t.flexRow, t.justifyBetween, t.itemsCenter, t.mB4]}>
              <View>
                <Text style={[t.textGray800, t.fontBold]}>DTH recharge</Text>
                <Text style={[t.textGray600]}>11216623645</Text>
                <Text style={[t.textGray500]}>Due date: 29 July 2019</Text>
              </View>
              <TouchableOpacity
                style={[t.bgBlue700, t.pX4, t.pY2, t.roundedLg]}
              >
                <Text style={[t.textWhite, t.textSm]}>Pay Now</Text>
              </TouchableOpacity>
            </View>

            <View style={[t.flexRow, t.justifyBetween, t.itemsCenter, t.mB4]}>
              <View>
                <Text style={[t.textGray800, t.fontBold]}>Water bill</Text>
                <Text style={[t.textGray600]}>14216623675</Text>
                <Text style={[t.textGray500]}>Due date: 30 July 2019</Text>
              </View>
              <TouchableOpacity
                style={[t.bgBlue700, t.pX4, t.pY2, t.roundedLg]}
              >
                <Text style={[t.textWhite, t.textSm]}>Pay Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RechargeStack;
