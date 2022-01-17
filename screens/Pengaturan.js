import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { SIZES, COLORS, icons, images, gif } from "../constants";
import {
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import Modal from "react-native-modal";

const Pengaturan = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  function headerComponent() {
    const gotoPengaturanAkun = () => {
      navigation.navigate("PengaturanAkun");
    };
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
          <TouchableOpacity onPress={gotoPengaturanAkun}>
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
    const gotoPilihTim = () => {
      navigation.navigate("PilihTim");
    };
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
            onPress={() => navigation.navigate("PengaturanAkun")}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
              position: "relative",
              bottom: 30,
            }}
          >
            <View style={{ marginRight: 6 }}>
              <Text
                style={{
                  textAlign: "right",
                  fontSize: 16,
                  color: COLORS.white,
                  fontWeight: "bold",
                }}
              >
                Calvin Putera Loka
              </Text>
              <Text
                style={{
                  textAlign: "right",
                  fontSize: 12,
                  marginTop: 5,
                  color: COLORS.white,
                }}
              >
                Pustakawan Senior
              </Text>
            </View>
            <Image
              source={images.avatar}
              resizeMode="contain"
              style={{ width: 50 }}
            />
          </TouchableOpacity>
          <View style={{ position: "relative", bottom: 20 }}>
            <Text
              style={{
                fontSize: SIZES.h3,
                fontWeight: "bold",
                color: COLORS.white,
              }}
            >
              Stock Opname 2022
            </Text>
            <Text style={{ fontSize: SIZES.body2, color: COLORS.white }}>
              scan koleksi buku | Anggota 5
            </Text>
          </View>
        </View>
        {/* <TouchableOpacity
          style={{ position: "relative", bottom: 115 }}
          onPress={gotoPilihTim}
        >
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
        </TouchableOpacity> */}
      </View>
    );
  }

  function kelolaTim() {
    const gotoDaftarAnggota = () => {
      navigation.navigate("DaftarAnggota");
    };
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
          Kelola Tim Inventarisasi
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
              Nama Inventarisasi
            </Text>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                placeholder="Stock Opname 2022"
                placeholderTextColor={COLORS.black}
                style={{
                  maxWidth: 150,
                  fontSize: SIZES.body1,
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
              Catatan Inventarisasi
            </Text>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                placeholder="scan koleksi buku"
                placeholderTextColor={COLORS.black}
                numberOfLines={3}
                style={{
                  maxWidth: 150,
                  maxHeight: 30,
                  fontSize: SIZES.body1,
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

        {/* Bidang Ilmu */}
        {/* <View style={{ marginBottom: 14 }}>
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
        </View> */}

        {/* Anggota */}
        <View style={{ marginBottom: 14 }}>
          <TouchableOpacity
            onPress={gotoDaftarAnggota}
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
                5 orang
              </Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={25}
                color={COLORS.grey}
                style={{ marginLeft: 5 }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{ marginTop: 3, flexDirection: "row" }}
          onPress={() => navigation.navigate("UndangAnggota")}
        >
          <FontAwesome
            name="send"
            size={17}
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
            Undang anggota
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  function gantiTim() {
    const gotoTim = () => {
      navigation.navigate("Tim");
    };
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
          <TouchableOpacity
            onPress={() => navigation.navigate("PilihTim")}
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
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={{ flexDirection: "row" }} onPress={gotoTim}>
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
      <TouchableOpacity
        onPress={toggleModal}
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
          Perbarui
        </Text>
      </TouchableOpacity>
      {/* {pendukung()} */}
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
              Perubahan Berhasil Disimpan
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
    </ScrollView>
  );
};

export default Pengaturan;
