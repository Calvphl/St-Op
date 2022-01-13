import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SIZES, COLORS, icons, gif } from "../constants";
import Modal from "react-native-modal";

const Resinkronisasi = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  function headerComponent() {
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
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Beranda")}>
            <Ionicons name="close" size={36} color={COLORS.black} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: SIZES.body1,
              color: COLORS.black,
              marginLeft: 7,
            }}
          >
            Resinkronisasi
          </Text>
        </View>
      </View>
    );
  }

  function mainResinkronisasi() {
    return (
      <View style={{ paddingHorizontal: SIZES.padding2 * 2, marginTop: 23 }}>
        <Text
          style={{
            fontSize: SIZES.h2,
            fontWeight: "bold",
            color: COLORS.black,
            marginBottom: 10,
          }}
        >
          Resinkronisasi Koleksi
        </Text>
        <Text
          style={{
            fontSize: SIZES.body2,
            color: COLORS.black,
            maxWidth: 290,
          }}
        >
          Resinkronisasi hanya memperbarui data bibliografi dan eksemplar yang
          masuk dalam daftar inventarisasi, bukan data bibliografi/eksemplar
          baru yang di masukkan di tengah proses stock opname.
        </Text>
      </View>
    );
  }

  function button() {
    return (
      <View style={{ marginHorizontal: SIZES.padding2 * 2, marginTop: 450 }}>
        {/* Resync Now */}
        <TouchableOpacity
          style={{
            height: 55,
            backgroundColor: COLORS.primary,
            borderRadius: SIZES.radius,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 12,
          }}
          onPress={toggleModal}
        >
          <Text
            style={{
              color: "white",
              fontFamily: "Roboto",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Resinkronisasi Sekarang
          </Text>
        </TouchableOpacity>

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
          onPress={() => navigation.navigate("Beranda")}
        >
          <Text
            style={{
              color: COLORS.primary,
              fontFamily: "Roboto",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Batal
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View>
      {headerComponent()}
      {mainResinkronisasi()}
      {button()}
      <Modal
        isVisible={isModalVisible}
        animationIn="fadeIn"
        animationOut="fadeOut"
        hasBackdrop={false}
        backdropColor="black"
        backdropOpacity={0.8}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <View
          style={{
            width: 300,
            height: 200,
            backgroundColor: "white",
            justifyContent: "center",
            // alignItems: "center",
            borderRadius: 12,
          }}
        >
          <View style={{ marginTop: 35, alignItems: "center" }}>
            <Text
              style={{
                fontSize: SIZES.h2,
                fontWeight: "bold",
                // marginTop: 10,
              }}
            >
              Resinkronisasi Berhasil
            </Text>
            <Image
              source={gif.resinkronisasi}
              resizeMode="contain"
              style={{
                width: 80,
                position: "absolute",
                bottom: -185,
                left: 110,
              }}
            />
          </View>

          <TouchableOpacity
            // onPress={() => navigation.navigate("Beranda")}
            onPress={toggleModal}
            style={{
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              top: 30,
            }}
          >
            <Text style={{ fontSize: SIZES.h3, color: COLORS.primary }}>
              Oke
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default Resinkronisasi;
