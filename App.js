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
import Tabs from "./navigation/tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
        <Stack.Screen name="Beranda" component={Tabs} />
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
