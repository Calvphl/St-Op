import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS, SIZES, FONTS, images } from "../constants";

const Open = ({ navigation }) => {
  return (
    <View style={{ marginTop: 131 }}>
      <View style={{ alignItems: "center" }}>
        <Image
          source={images.logo}
          resizeMode="contain"
          style={{ width: "45%" }}
        />
      </View>
      <View
        style={{
          marginHorizontal: SIZES.padding2 * 2,
          marginTop: SIZES.padding2 * 8,
        }}
      >
        <TouchableOpacity
          style={{
            height: 55,
            backgroundColor: COLORS.primary,
            borderRadius: SIZES.radius,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text
            style={{
              color: "white",
              fontFamily: "Roboto",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Masuk
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 55,
            backgroundColor: COLORS.white,
            borderRadius: SIZES.radius,
            borderWidth: 2,
            borderColor: COLORS.primary,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text
            style={{
              color: COLORS.primary,
              fontFamily: "Roboto",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Daftar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Open;
