import React from "react";
import { View, Text } from "react-native";
import { Beranda, Bibliografi, Aktivitas, Pengaturan } from "../screens";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { COLORS } from "../constants";
import { MaterialIcons } from "@expo/vector-icons";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          borderTopWidth: 0,
          unmountOnBlur: false,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          paddingBottom: 5,
          // color: "green",
          // activeColor: "#f05a5a",
          // inactiveTintColor: "yellow",
        },
        // tabBarLabelStyle: ({ focused }) => ({
        //   color: focused ? "red" : "yellow",
        // }),
      }}
    >
      <Tab.Screen
        name="Beranda"
        component={Beranda}
        options={{
          // tabBarOptions: {
          // activeTintColor: "#f05a5a",
          // inactiveTintColor: "yellow",
          // },
          headerTitile: false,
          tabBarLabel: "Beranda",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="home"
              color={focused ? COLORS.primary : COLORS.grey}
              size={32}
              style={{
                marginTop: 1,
              }}
            />
          ),
        }}
      />
      <Tab.Screen name="Bibliografi" component={Bibliografi} />
      <Tab.Screen name="Aktivitas" component={Aktivitas} />
      <Tab.Screen name="Pengaturan" component={Pengaturan} />
    </Tab.Navigator>
  );
};

export default Tabs;
