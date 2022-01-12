import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Switch,
  TextInput,
} from "react-native";
import { SIZES, COLORS, icons, images } from "../constants";
import {
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";

const PengaturanAkun = ({ navigation }) => {
  const [toggle, setToggle] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(true);

  function headerComponent() {
    const backToAktivitas = () => {
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
            <TouchableOpacity onPress={backToAktivitas}>
              <Ionicons name="chevron-back" size={36} color={COLORS.black} />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: SIZES.body1,
                color: COLORS.black,
                marginLeft: 7,
              }}
            >
              Pengaturan
            </Text>
          </View>
        </View>
      </View>
    );
  }

  function sectionOnePengaturanAkun() {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding2 * 2,
          position: "relative",
          marginTop: 14,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            source={images.avatar}
            resizeMode="contain"
            style={{ width: 80, marginBottom: 30 }}
          />
        </View>

        {/* Nama Pengguna */}
        <View style={{ marginBottom: 14 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
              Nama Pengguna
            </Text>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                placeholder="Calvin Putera Loka"
                placeholderTextColor={COLORS.black}
                style={{
                  maxWidth: 180,
                  fontSize: SIZES.body1,
                  color: COLORS.black,
                }}
              />

              <MaterialIcons
                name="keyboard-arrow-right"
                size={25}
                color={COLORS.grey}
                style={{ marginLeft: 5 }}
              />
            </View>
          </View>
        </View>

        {/* Alamat Surel */}
        <View style={{ marginBottom: 14 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
              Alamat Surel
            </Text>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                placeholder="calvin.loka8@gmail.com"
                placeholderTextColor={COLORS.black}
                style={{
                  maxWidth: 220,
                  fontSize: SIZES.body1,
                  // color: COLORS.black,
                }}
              />
              <MaterialIcons
                name="keyboard-arrow-right"
                size={25}
                color={COLORS.grey}
                style={{ marginLeft: 5 }}
              />
            </View>
          </View>
        </View>

        {/* Tipe Keanggotaan */}
        <View style={{ marginBottom: 14 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
              Tipe Keanggotaan
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  maxWidth: 150,
                  fontSize: SIZES.body1,
                  color: COLORS.black,
                }}
              >
                Pustakawan Senior
              </Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={25}
                color={COLORS.grey}
                style={{ marginLeft: 5 }}
              />
            </View>
          </View>
        </View>

        {/* Kata Sandi */}
        <View style={{ marginBottom: 14 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
              Kata Sandi
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  maxWidth: 150,
                  fontSize: SIZES.body1,
                  color: COLORS.black,
                }}
              >
                sandi pake dot
              </Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={25}
                color={COLORS.grey}
                style={{ marginLeft: 5 }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }

  function sectionTwoPengaturanAkun() {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding2 * 2,
          marginTop: 21,
        }}
      >
        <Text
          style={{
            fontSize: SIZES.h3,
            fontWeight: "bold",
            color: COLORS.black,
            marginBottom: 12,
          }}
        >
          Pendukung
        </Text>
        <View style={{ marginBottom: 14 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
              Bahasa
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  maxWidth: 150,
                  fontSize: SIZES.body1,
                  color: COLORS.black,
                }}
              >
                Indonesia
              </Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={25}
                color={COLORS.grey}
                style={{ marginLeft: 5 }}
              />
            </View>
          </View>
        </View>

        {/* Switch button */}
        <View style={{ marginBottom: 14 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              //   marginBottom: 14,
              position: "relative",
              bottom: 15,
            }}
          >
            <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
              Suara Pindai
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Switch
                trackColor={{ false: "gray", true: "green" }}
                thumbColor="white"
                ios_backgroundColor="gray"
                onValueChange={(value) => setToggle(value)}
                value={toggle}
              />
            </View>
          </View>
        </View>

        {/* Switch button */}
        <View style={{ marginBottom: 14 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              //   marginBottom: 14,
              position: "relative",
              bottom: 15,
            }}
          >
            <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
              Getar Pindai
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Switch
                trackColor={{ false: "gray", true: "green" }}
                thumbColor="white"
                ios_backgroundColor="gray"
                onValueChange={(value) => setToggleTwo(value)}
                value={toggleTwo}
              />
            </View>
          </View>
        </View>
        <View style={{ marginBottom: 14 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Open")}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
              Keluar
            </Text>
            <View style={{ flexDirection: "row" }}>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={25}
                color={COLORS.grey}
                style={{ marginLeft: 5 }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View>
      {headerComponent()}
      {sectionOnePengaturanAkun()}
      <TouchableOpacity
        style={{
          position: "relative",
          left: 45,
          alignItems: "center",
          backgroundColor: COLORS.white,
          paddingVertical: 15,
          justifyContent: "center",
          width: 300,
          marginBottom: 20,
          borderRadius: SIZES.radius,
        }}
      >
        <Text
          style={{
            fontSize: SIZES.h3,
            fontWeight: "bold",
            color: COLORS.primary,
            // marginBottom: 20,
            // marginTop: 20,
          }}
        >
          Simpan
        </Text>
      </TouchableOpacity>
      <View
        style={{
          borderBottomWidth: 5,
          borderBottomColor: "#ececec",
          position: "relative",
        }}
      ></View>

      {sectionTwoPengaturanAkun()}
    </View>
  );
};

export default PengaturanAkun;
