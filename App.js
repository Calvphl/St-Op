import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  Open,
  SignUp,
  SignIn,
  Tim,
  TimIn,
  CreateTeam,
  CreateTeamIn,
} from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors.background,
    border: "transparent",
  },
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={"Open"}
      >
        <Stack.Screen name="Open" component={Open} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Tim" component={Tim} />
        <Stack.Screen name="TimIn" component={TimIn} />
        <Stack.Screen name="CreateTeam" component={CreateTeam} />
        <Stack.Screen name="CreateTeamIn" component={CreateTeamIn} />
      </Stack.Navigator>
    </NavigationContainer>

    // <View>
    //   {/* <Text>Open up App.js to start working on your app!</Text>
    //   <Text>Open up App.js to start working on your app!</Text> */}
    //   <Open />
    //   <StatusBar style="auto" />
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
