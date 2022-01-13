import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { SIZES, COLORS, images, gif } from "../constants";
import Modal from "react-native-modal";

const TambahBuku = ({ navigation }) => {
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
            Tambah Buku
          </Text>
        </View>
      </View>
    );
  }

  function sectionOneTambahBuku() {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding2 * 2,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            source={images.book}
            resizeMode="contain"
            style={{ width: 80 }}
          />
        </View>

        <View style={{ marginBottom: 14 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
              Kode Bar
            </Text>
            <TextInput
              placeholder="Tulis Kode bar"
              keyboardType="numeric"
              style={{
                maxWidth: 150,
                fontSize: SIZES.body1,
                color: "#979797",
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
        <View style={{ marginBottom: 14 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
              Judul Buku
            </Text>
            <TextInput
              placeholder="Masukkan Teks"
              style={{
                maxWidth: 150,
                fontSize: SIZES.body1,
                color: "#979797",
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
    );
  }

  function sectionDuaTambahBuku() {
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
              Jenis Buku
            </Text>
            <TextInput
              placeholder="Masukkan Teks"
              style={{
                maxWidth: 150,
                fontSize: SIZES.body1,
                color: "#979797",
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
        <View style={{ marginBottom: 14 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
              Tahun Terbit
            </Text>
            <TextInput
              placeholder="Masukkan tahun"
              maxLength={4}
              keyboardType="numeric"
              style={{
                maxWidth: 150,
                fontSize: SIZES.body1,
                color: "#979797",
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
            <TextInput
              placeholder="Masukkan Teks"
              style={{
                maxWidth: 150,
                fontSize: SIZES.body1,
                color: "#979797",
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
        <View style={{ marginBottom: 14 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
              Kelompok Buku
            </Text>
            <TextInput
              placeholder="Masukkan Teks"
              style={{
                maxWidth: 150,
                fontSize: SIZES.body1,
                color: "#979797",
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
        <View style={{ marginBottom: 14 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
              Keterangan
            </Text>
            <TextInput
              placeholder="Masukkan Teks"
              style={{
                maxWidth: 150,
                fontSize: SIZES.body1,
                color: "#979797",
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
    );
  }

  function button() {
    return (
      <View style={{ marginHorizontal: SIZES.padding2 * 2, marginTop: 66 }}>
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
          onPress={toggleModal}
        >
          <Text
            style={{
              color: COLORS.primary,
              fontFamily: "Roboto",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Simpan
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? null : "position"}
        style={{ flex: 1 }}
      >
        {headerComponent()}
        {sectionOneTambahBuku()}
        <View
          style={{
            borderBottomWidth: 5,
            borderBottomColor: "#ececec",
            position: "relative",
          }}
        ></View>
        {sectionDuaTambahBuku()}
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
                  fontSize: SIZES.h3,
                  fontWeight: "bold",
                  // marginTop: 10,
                }}
              >
                Koleksi Berhasil Disimpan
              </Text>
              <Image
                source={gif.simpan}
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
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default TambahBuku;
