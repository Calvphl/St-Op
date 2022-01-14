import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { SIZES, COLORS, icons, images } from "../constants";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Aktivitas = ({ navigation }) => {
  function renderSearch() {
    return (
      <>
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 148,
            left: 35,
            zIndex: 10,
          }}
        >
          <Ionicons name="ios-search" size={22} color={COLORS.grey} />
        </TouchableOpacity>
        <TextInput
          placeholder="Cari"
          placeholderTextColor={COLORS.grey}
          style={{
            fontSize: SIZES.h3,
            justifyContent: "center",
            marginTop: 20,
            height: 46,
            backgroundColor: COLORS.white,
            borderRadius: SIZES.radius,
            paddingLeft: 52,
            paddingRight: 20,
            color: COLORS.primary,
            marginHorizontal: SIZES.padding2 * 2,
          }}
        />
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: "#ececec",
            marginTop: 14,
          }}
        ></View>
      </>
    );
  }

  function renderNote() {
    const gotoRiwayat = () => {
      navigation.navigate("Riwayat");
    };

    return (
      <TouchableOpacity
        onPress={gotoRiwayat}
        style={{
          marginTop: 30,
          marginBottom: 20,
          paddingHorizontal: SIZES.padding2 * 2,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: SIZES.body1,
              fontWeight: "bold",
              color: COLORS.black,
            }}
          >
            14 Desember 2021
          </Text>
          <Text
            style={{
              fontSize: SIZES.body1,
              fontWeight: "bold",
              color: COLORS.black,
            }}
          >
            09:23:43
          </Text>
          <Text
            style={{
              marginTop: 52,
              fontSize: SIZES.body1,
              color: COLORS.black,
            }}
          >
            B02 | Sosial
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            source={images.avatar}
            resizeMode="contain"
            style={{ width: 46, position: "relative", top: 20 }}
          />
          <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
            Akun 1
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <ScrollView style={{ marginBottom: 70 }}>
      <View style={{ paddingHorizontal: SIZES.padding2 * 2, marginTop: 84 }}>
        <Text
          style={{
            fontSize: SIZES.h2,
            fontFamily: "Roboto",
            fontWeight: "bold",
            color: COLORS.black,
          }}
        >
          Catatan Inventarisasi
        </Text>
      </View>
      {/* {renderSearch()} */}
      {renderNote()}
      {renderNote()}
      {renderNote()}
      {renderNote()}
    </ScrollView>
  );
};

export default Aktivitas;
