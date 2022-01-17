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
            top: 147,
            left: 35,
            zIndex: 10,
          }}
        >
          <Ionicons name="ios-search" size={22} color={COLORS.grey} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 147,
            left: 318,
            zIndex: 10,
            borderLeftColor: COLORS.grey,
            borderLeftWidth: 1,
            paddingLeft: 12,
          }}
        >
          {/* <MaterialCommunityIcons
            name="barcode-scan"
            size={22}
            color={COLORS.primary}
          /> */}
          <Text style={{ fontSize: SIZES.body1, color: COLORS.grey }}>
            Cari
          </Text>
        </TouchableOpacity>
        <TextInput
          placeholder="Nama inventarisasi "
          placeholderTextColor={COLORS.grey}
          style={{
            fontSize: SIZES.sub,
            justifyContent: "center",
            marginTop: 20,
            height: 46,
            backgroundColor: COLORS.white,
            borderRadius: SIZES.radius,
            paddingLeft: 52,
            paddingRight: 70,
            color: COLORS.black,
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
          marginBottom: 60,
          paddingHorizontal: SIZES.padding2 * 2,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: SIZES.h3,
              fontWeight: "bold",
              color: COLORS.black,
            }}
          >
            Stock Opname 2022
          </Text>
          {/* <Text
            style={{
              fontSize: SIZES.body1,
              fontWeight: "bold",
              color: COLORS.black,
            }}
          >
            09:23:43
          </Text> */}
          <Text
            style={{
              marginTop: 10,
              fontSize: SIZES.body1,
              color: COLORS.black,
            }}
          >
            Tgl mulai: 4/01/2022
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontSize: SIZES.body1,
              color: COLORS.black,
            }}
          >
            Tgl selesai: 12/05/2022
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            position: "absolute",
            left: 280,
            bottom: -45,
          }}
        >
          <Image
            source={images.avatar}
            resizeMode="contain"
            style={{ width: 46, position: "relative", top: 20 }}
          />
          <Text
            style={{
              fontSize: SIZES.body1,
              color: COLORS.black,
              fontWeight: "bold",
            }}
          >
            Calvin
          </Text>
          <Text
            style={{
              fontSize: SIZES.body1,
              color: COLORS.black,
              width: 100,
              textAlign: "center",
            }}
          >
            Pustakawan Senior
          </Text>
          <Text
            style={{
              fontSize: SIZES.body1,
              color: COLORS.grey,
              width: 100,
              textAlign: "center",
              fontStyle: "italic",
              fontWeight: "bold",
            }}
          >
            Admin
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
      {renderSearch()}
      {renderNote()}
      {renderNote()}
      {renderNote()}
      {renderNote()}
      {renderNote()}
    </ScrollView>
  );
};

export default Aktivitas;
