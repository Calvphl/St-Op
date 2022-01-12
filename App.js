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
  Detail,
  Resinkronisasi,
  UndangAnggota,
  PilihTim,
  TambahBuku,
  PengaturanAkun,
  Riwayat,
  Scan,
  DaftarAnggota,
} from "./screens";
import Tabs from "./navigation/tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

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
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Resinkronisasi" component={Resinkronisasi} />
        <Stack.Screen name="UndangAnggota" component={UndangAnggota} />
        <Stack.Screen name="PilihTim" component={PilihTim} />
        <Stack.Screen name="TambahBuku" component={TambahBuku} />
        <Stack.Screen name="PengaturanAkun" component={PengaturanAkun} />
        <Stack.Screen name="Riwayat" component={Riwayat} />
        <Stack.Screen name="Scan" component={Scan} />
        <Stack.Screen name="DaftarAnggota" component={DaftarAnggota} />
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
