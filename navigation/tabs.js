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
          paddingLeft: 10,
          paddingRight: 10,
        },
        tabBarLabelStyle: {
          paddingBottom: 5,
        },
      }}
    >
      <Tab.Screen
        name="Beranda"
        component={Beranda}
        options={{
          headerTitile: false,
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? COLORS.primary : COLORS.grey,
                paddingBottom: 8,
                fontSize: 14,
                fontWeight: focused ? "bold" : "normal",
              }}
            >
              Beranda
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="home"
              color={focused ? COLORS.primary : COLORS.grey}
              size={32}
              style={{
                marginTop: 5,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bibliografi"
        component={Bibliografi}
        options={{
          headerTitile: false,
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? COLORS.primary : COLORS.grey,
                paddingBottom: 8,
                fontSize: 14,
                fontWeight: focused ? "bold" : "normal",
              }}
            >
              Bibliografi
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="book"
              color={focused ? COLORS.primary : COLORS.grey}
              size={28}
              style={{
                marginTop: 5,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Aktivitas"
        component={Aktivitas}
        options={{
          headerTitile: false,
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? COLORS.primary : COLORS.grey,
                paddingBottom: 8,
                fontSize: 14,
                fontWeight: focused ? "bold" : "normal",
              }}
            >
              Aktivitas
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="list-alt"
              color={focused ? COLORS.primary : COLORS.grey}
              size={28}
              style={{
                marginTop: 5,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Pengaturan"
        component={Pengaturan}
        options={{
          headerTitile: false,
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? COLORS.primary : COLORS.grey,
                paddingBottom: 8,
                fontSize: 14,
                fontWeight: focused ? "bold" : "normal",
              }}
            >
              Pengaturan
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="settings"
              color={focused ? COLORS.primary : COLORS.grey}
              size={28}
              style={{
                marginTop: 5,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
