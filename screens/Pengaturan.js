import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { SIZES, COLORS, icons, images } from "../constants";
import {
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";

{
  /* <MaterialIcons
  name="keyboard-arrow-right"
  size={25}
  color={COLORS.grey}
  style={{ marginTop: 9 }}
/>; */
}

const Pengaturan = () => {
  function headerComponent() {
    return (
      <View
        style={{
          height: 82,
        }}
      >
        <View
          style={{
            marginHorizontal: SIZES.padding2 * 2,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            marginTop: 38,
          }}
        >
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="account-settings"
              size={31}
              color={COLORS.black}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function banner() {
    return (
      <View style={{ paddingHorizontal: SIZES.padding2 * 2 }}>
        <Text
          style={{
            fontSize: SIZES.h2,
            fontFamily: "Roboto",
            fontWeight: "bold",
            color: COLORS.black,
          }}
        >
          Pengaturan
        </Text>

        {/* Banner */}
        <Image
          source={images.banner}
          // resizeMode="contain"
          style={{
            height: 155,
            width: 355,
            borderRadius: SIZES.radius,
            marginTop: 15,
          }}
        />
        <View
          style={{ marginHorizontal: 10, position: "relative", bottom: 140 }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <View style={{ marginRight: 6 }}>
              <Text
                style={{
                  textAlign: "right",
                  fontSize: 12,
                  color: COLORS.white,
                }}
              >
                Nama pengguna
              </Text>
              <Text
                style={{
                  textAlign: "right",
                  fontSize: 12,
                  marginTop: 5,
                  color: COLORS.white,
                }}
              >
                Pustakawan
              </Text>
            </View>
            <Image source={images.akun} resizeMode="contain" />
          </TouchableOpacity>
          <View style={{ marginTop: 32 }}>
            <Text
              style={{
                fontSize: SIZES.h3,
                fontWeight: "bold",
                color: COLORS.white,
              }}
            >
              Stock Opname Tesis
            </Text>
            <Text style={{ fontSize: SIZES.body2, color: COLORS.white }}>
              D01 - F04 | Anggota 14
            </Text>
          </View>
        </View>
        <TouchableOpacity style={{ position: "relative", bottom: 115 }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: SIZES.h3,
              color: COLORS.black,
              fontWeight: "bold",
            }}
          >
            Ganti Tim
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  function kelolaTim() {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding2 * 2,
          position: "relative",
          bottom: 80,
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
          Kelola Tim
        </Text>

        {/* Nama Tim */}
        <View style={{ marginBottom: 14 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
              Nama Tim
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  maxWidth: 150,
                  fontSize: SIZES.body1,
                  color: COLORS.black,
                }}
              >
                Stock Opname Tesis
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

        {/* Catatan Tim */}
        <View style={{ marginBottom: 14 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
              Catatan Tim
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  maxWidth: 150,
                  fontSize: SIZES.body1,
                  color: COLORS.black,
                }}
              >
                scanning rak mulai dari D01
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

        {/* Bidang Ilmu */}
        <View style={{ marginBottom: 14 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
              Bidang Ilmu
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  maxWidth: 150,
                  fontSize: SIZES.body1,
                  color: COLORS.black,
                }}
              >
                Sains
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

        {/* Anggota */}
        <View style={{ marginBottom: 14 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
              Anggota
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  maxWidth: 150,
                  fontSize: SIZES.body1,
                  color: COLORS.black,
                }}
              >
                14 orang
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
        <TouchableOpacity style={{ marginTop: 3, flexDirection: "row" }}>
          <FontAwesome
            name="send"
            size={17}
            color={COLORS.primary}
            style={{ marginRight: 7 }}
          />
          {/* <Ionicons name="add-circle-sharp" size={17} color={COLORS.primary}
            style={{ marginRight: 7 }} /> */}
          <Text
            style={{
              fontSize: SIZES.sub,
              color: COLORS.primary,
              fontWeight: "bold",
            }}
          >
            Undang anggota
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  function gantiTim() {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding2 * 2,
          position: "relative",
          bottom: 40,
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
          Ganti Tim
        </Text>

        {/* Tim Saya */}
        <View style={{ marginBottom: 14 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
              Tim Saya
            </Text>
            <View style={{ flexDirection: "row" }}>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={25}
                color={COLORS.grey}
                style={{ marginLeft: 5 }}
              />
            </View>
          </View>
        </View>

        <TouchableOpacity style={{ flexDirection: "row" }}>
          <Ionicons
            name="add-circle-sharp"
            size={20}
            color={COLORS.primary}
            style={{ marginRight: 7 }}
          />
          <Text
            style={{
              fontSize: SIZES.sub,
              color: COLORS.primary,
              fontWeight: "bold",
            }}
          >
            Tambah Tim Baru
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  function pendukung() {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding2 * 2,
          position: "relative",
          bottom: 5,
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

        {/* Pengumuman */}
        <View style={{ marginBottom: 14 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 28,
            }}
          >
            <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
              Pengumuman
            </Text>
            <View style={{ flexDirection: "row" }}>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={25}
                color={COLORS.grey}
                style={{ marginLeft: 5 }}
              />
            </View>
          </View>

          {/* Hapus Data */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
              Hapus Data
            </Text>
            <View style={{ flexDirection: "row" }}>
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

  return (
    <ScrollView style={{ marginBottom: 70 }}>
      {headerComponent()}
      {banner()}
      <View
        style={{
          borderBottomWidth: 5,
          borderBottomColor: "#ececec",
          position: "relative",
          bottom: 100,
        }}
      ></View>
      {kelolaTim()}
      <View
        style={{
          borderBottomWidth: 5,
          borderBottomColor: "#ececec",
          position: "relative",
          bottom: 60,
        }}
      ></View>
      {gantiTim()}
      <View
        style={{
          borderBottomWidth: 5,
          borderBottomColor: "#ececec",
          position: "relative",
          bottom: 25,
        }}
      ></View>
      {pendukung()}
    </ScrollView>
  );
};

export default Pengaturan;
