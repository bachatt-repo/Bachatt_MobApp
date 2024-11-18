import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from ".";
import PhoneNumberScreen from "./phone";
import NameScreen from "./name";
import HomeTabs from "./home";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./welcome";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Welcome"
          component={WelcomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={PhoneNumberScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Name"
          component={NameScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeTabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
