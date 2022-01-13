import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SIZES, COLORS, icons, gif } from "../constants";
import Modal from "react-native-modal";

const UndangAnggota = ({ navigation }) => {
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
            Undang Anggota
          </Text>
        </View>
      </View>
    );
  }

  function mainUndangAnggota() {
    return (
      <View style={{ paddingHorizontal: SIZES.padding2 * 2, marginTop: 20 }}>
        <Text
          style={{
            fontSize: SIZES.h2,
            fontWeight: "bold",
            color: COLORS.black,
            marginBottom: 10,
          }}
        >
          Undang Anggota
        </Text>
        <Text
          style={{
            fontSize: SIZES.body2,
            color: COLORS.black,
            maxWidth: 260,
          }}
        >
          Lakukan pengelolaan stock opname buku secara efisien bersama anggota
          Anda.
        </Text>
      </View>
    );
  }

  function cardUndangAnggota() {
    return (
      <View
        // onPress={() => navigation.navigate("CreateTeam")}
        style={{
          width: 350,
          height: 135,
          shadowColor: "#c7c7c7",
          backgroundColor: "#f7f7f7",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: SIZES.radius,
          borderRadius: SIZES.radius,
          elevation: 5,
          marginHorizontal: SIZES.padding2 * 2,
          marginTop: 36,
          paddingLeft: SIZES.padding2 + 10,
        }}
      >
        <View
          //   onPress={() => navigation.navigate("CreateTeam")}
          style={{
            marginLeft: 6,
            flexDirection: "row",
            alignItems: "center",
            position: "relative",
            bottom: 20,
          }}
        >
          <Image
            source={icons.send}
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
            Kirim Tautan Undangan
          </Text>
        </View>
        <View style={{ position: "absolute", top: 47, left: 63 }}>
          <Text
            style={{
              fontSize: SIZES.body3,
              fontFamily: "Roboto",
              color: COLORS.black,
              maxWidth: 234,
            }}
          >
            Masukkan nomor telepon yang dituju
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            top: 70,
            left: 63,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextInput
            placeholder="08-XXX-XXX-XXXX"
            style={{ fontSize: SIZES.body1, marginTop: 6 }}
            keyboardType="numeric"
            maxLength={13}
          />
          <TouchableOpacity
            onPress={toggleModal}
            style={{
              marginTop: 10,
              marginLeft: 20,
              backgroundColor: COLORS.primary,
              paddingVertical: 5,
              width: 80,
              alignItems: "center",
              borderRadius: SIZES.radius,
              borderColor: COLORS.primary,
              borderWidth: 1,
            }}
          >
            <Text
              style={{
                fontSize: SIZES.body1,
                color: COLORS.white,
              }}
            >
              Kirim
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View>
      {headerComponent()}
      {mainUndangAnggota()}
      {cardUndangAnggota()}
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
              Tautan Berhasil Dikirim
            </Text>
            <Image
              source={gif.send}
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

export default UndangAnggota;
