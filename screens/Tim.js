import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SIZES, COLORS, icons } from "../constants";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Tim = ({ navigation }) => {
  function headerComponent() {
    return (
      <View
        style={{
          paddingBottom: SIZES.padding2 + 5,
          borderBottomWidth: 1,
          borderBottomColor: COLORS.grey,
        }}
      >
        <View
          style={{
            marginHorizontal: SIZES.padding2 * 2,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Ionicons name="close" size={36} color={COLORS.black} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: SIZES.body1,
              color: COLORS.black,
              marginLeft: 7,
            }}
          >
            Buat Tim Baru
          </Text>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <View style={{ marginTop: 47 }}>{headerComponent()}</View>
      <View style={{ marginHorizontal: SIZES.padding2 * 2 }}>
        <Text
          style={{
            fontSize: SIZES.h2,
            fontWeight: "bold",
            fontFamily: "Roboto",
            color: COLORS.black,
            marginTop: 23,
          }}
        >
          Gabung atau buat Tim Baru
        </Text>
        <Text
          style={{
            fontSize: SIZES.body3,
            maxWidth: 202,
            lineHeight: 20,
            fontFamily: "Roboto",
            color: COLORS.black,
            marginTop: 10,
          }}
        >
          Buat tim baru atau bergabung dengan tim yang sudah ada.
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("CreateTeam")}
        style={{
          borderWidth: 1,
          borderColor: COLORS.white,
          //   borderRadius: SIZES.radius,
          width: 350,
          height: 137,
          //   flexDirection: "column",
          //   alignItems: "center",
          shadowColor: "#d8d8d8",
          //   shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 8,
          elevation: 5,
          marginHorizontal: SIZES.padding2 * 2,
          marginTop: 36,
          paddingLeft: SIZES.padding2 + 10,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("CreateTeam")}
          style={{
            marginLeft: 6,
            // maxWidth: 234,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={icons.newTeam}
            resizeMode="contain"
            style={{ width: 25, marginRight: 10 }}
          />
          <Text
            style={{
              fontSize: SIZES.h3,
              fontFamily: "Roboto",
              color: COLORS.black,
              fontWeight: "bold",
            }}
          >
            Buat Tim Baru
          </Text>
        </TouchableOpacity>
        <View style={{ position: "absolute", top: 67, left: 63 }}>
          <Text
            style={{
              fontSize: SIZES.body3,
              fontFamily: "Roboto",
              color: COLORS.black,
              lineHeight: 20,
              maxWidth: 234,
            }}
          >
            Buat sebuah tim dan mulai lakukan stock opname
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: COLORS.white,
          //   borderRadius: SIZES.radius,
          width: 350,
          height: 137,
          //   flexDirection: "column",
          //   alignItems: "center",
          shadowColor: "#d8d8d8",
          //   shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 8,
          elevation: 5,
          marginHorizontal: SIZES.padding2 * 2,
          marginTop: 16,
          paddingLeft: SIZES.padding2 + 10,
        }}
      >
        <View
          style={{
            marginLeft: 6,
            // maxWidth: 234,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={icons.join}
            resizeMode="contain"
            style={{ width: 25, marginRight: 10 }}
          />
          <Text
            style={{
              fontSize: SIZES.h3,
              fontFamily: "Roboto",
              color: COLORS.black,
              fontWeight: "bold",
            }}
          >
            Gabung Dengan Tim
          </Text>
        </View>
        <View style={{ position: "absolute", top: 67, left: 63 }}>
          <Text
            style={{
              fontSize: SIZES.body3,
              fontFamily: "Roboto",
              color: COLORS.black,
              lineHeight: 20,
              maxWidth: 234,
            }}
          >
            Gabung dengan tim dengan menggunakan kode undangan
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaProvider>
  );
};

export default Tim;
