import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import {
  Ionicons,
  Entypo,
  MaterialIcons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { SIZES, COLORS, icons, images } from "../constants";

const PilihTim = ({ navigation }) => {
  function headerComponent() {
    const backToPengaturan = () => {
      navigation.navigate("Pengaturan");
    };
    return (
      <View
        style={{
          paddingBottom: SIZES.padding2 + 5,
          borderBottomWidth: 1,
          borderBottomColor: COLORS.grey,
          marginTop: 47,
        }}
      >
        <View
          style={{
            marginHorizontal: SIZES.padding2 * 2,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={backToPengaturan}>
              <Ionicons name="close" size={36} color={COLORS.black} />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: SIZES.body1,
                color: COLORS.black,
                marginLeft: 7,
              }}
            >
              Pilih Tim
            </Text>
          </View>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Ionicons
              name="add-circle-sharp"
              size={28}
              color={COLORS.black}
              style={{ marginRight: 5 }}
            />
            <Text style={{ fontSize: SIZES.sub, color: COLORS.black }}>
              Tambah
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function mainPilihTim() {
    return (
      <View style={{ marginTop: 21, paddingHorizontal: SIZES.padding2 * 2 }}>
        <Text
          style={{
            fontSize: SIZES.body1,
            fontWeight: "bold",
            color: COLORS.black,
          }}
        >
          Stock Opname Tesis
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 24,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={icons.book}
                resizeMode="contain"
                style={{ width: 20, position: "relative", bottom: 40 }}
              />
              <Text
                style={{
                  fontSize: SIZES.body2,
                  color: "#979797",
                  marginLeft: 4,
                  marginRight: 28,
                }}
              >
                4
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={icons.team}
                resizeMode="contain"
                style={{ width: 20, position: "relative", bottom: 40 }}
              />
              <Text
                style={{
                  fontSize: SIZES.body2,
                  color: "#979797",
                  marginLeft: 4,
                }}
              >
                14
              </Text>
            </View>
          </View>
          <Image
            source={images.grup}
            resizeMode="contain"
            style={{ width: 99 }}
          />
        </View>
      </View>
    );
  }

  function button() {
    return (
      <View style={{ marginHorizontal: SIZES.padding2 * 2, marginTop: 36 }}>
        {/* Batal */}
        <TouchableOpacity
          style={{
            height: 55,
            backgroundColor: "#e6e6e6",
            borderRadius: SIZES.radius,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 12,
          }}
          //   onPress={() => navigation.navigate("Beranda")}
        >
          <Text
            style={{
              color: COLORS.primary,
              fontFamily: "Roboto",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Pilih Tim
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View>
      {headerComponent()}
      {mainPilihTim()}
      {button()}
    </View>
  );
};

export default PilihTim;
