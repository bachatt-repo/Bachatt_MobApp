import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Alert,
} from "react-native";
import { t } from "react-native-tailwindcss";
import DateTimePicker from "@react-native-community/datetimepicker";

const SetGoalPage = () => {
  const [goalName, setGoalName] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [deadline, setDeadline] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Function to handle goal submission
  const handleSaveGoal = () => {
    if (!goalName || !targetAmount || !deadline) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }
    Alert.alert(
      "Goal Saved",
      `Goal: ${goalName}\nTarget: ₹${targetAmount}\nDeadline: ${deadline.toDateString()}`
    );
  };

  return (
    <SafeAreaView style={[t.flex1, t.bgGray100, t.p5]}>
      {/* Header */}
      <Text style={[t.text2xl, t.fontBold, t.textBlue700, t.textCenter, t.mB5]}>
        Set Your Financial Goal
      </Text>

      {/* Motivational Image */}
      <View style={[t.itemsCenter, t.mB5]}>
        <Image
          source={{
            uri: "https://media.istockphoto.com/id/1253880232/vector/business-data-analysis-financial-growth-concept-market-research-data-analysis-statistics.jpg?s=612x612&w=0&k=20&c=cM_qzqsYW4MpUCbZ6UoReICsmGJZ2PDNoWSMcmrZLYo=", // Replace with your image URL
          }}
          style={[t.wFull, t.roundedLg, t.h40]}
        />
      </View>

      {/* Goal Name Input */}
      <Text style={[t.textLg, t.fontSemibold, t.textGray800, t.mB2]}>
        Goal Name
      </Text>
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
        placeholder="E.g., Save for Vacation"
        value={goalName}
        onChangeText={setGoalName}
      />

      {/* Target Amount Input */}
      <Text style={[t.textLg, t.fontSemibold, t.textGray800, t.mB2]}>
        Target Amount (₹)
      </Text>
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
        placeholder="Enter target amount"
        value={targetAmount}
        onChangeText={setTargetAmount}
        keyboardType="numeric"
      />

      {/* Deadline Picker */}
      <Text style={[t.textLg, t.fontSemibold, t.textGray800, t.mB2]}>
        Deadline
      </Text>
      <TouchableOpacity
        style={[
          t.border,
          t.bgWhite,
          t.shadowLg,
          t.borderGray300,
          t.roundedLg,
          t.p3,
          t.textLg,
          t.mB4,
          t.flexRow,
          t.itemsCenter,
          t.justifyBetween,
        ]}
        onPress={() => setShowDatePicker(true)}
      >
        <Text>{deadline.toDateString()}</Text>
        <Text style={[t.textBlue700]}>Select Date</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={deadline}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) {
              setDeadline(selectedDate);
            }
          }}
        />
      )}

      {/* Save Button */}
      <TouchableOpacity
        style={[t.bgBlue700, t.pY3, t.roundedLg, t.mT5]}
        onPress={handleSaveGoal}
      >
        <Text style={[t.textWhite, t.textCenter, t.textLg]}>Save Goal</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SetGoalPage;
