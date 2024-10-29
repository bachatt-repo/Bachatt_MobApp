import React from "react";
import { View, Text, Image, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { t } from "react-native-tailwindcss";

const HomeScreen = () => {
  const router = useRouter();

  // Automatically navigate to Phone Screen after a brief delay (if intended as a splash)
  React.useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/phone");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView
      style={[t.flex1, t.justifyCenter, t.itemsCenter, t.bgGray100]}
    >
      <Image source={require("../assets/logo2.png")} style={[t.w60, t.h60]} />
      {/* <Text style={[t.textXl, t.fontBold, t.mT4]}>Bachatt</Text>
      <Text style={[t.textBase, t.textGray700]}>Making Savings Simpler</Text> */}
    </SafeAreaView>
  );
};

export default HomeScreen;
