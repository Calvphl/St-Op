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
  StyleSheet,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { SIZES, COLORS, images, gif } from "../constants";
import Modal from "react-native-modal";
import { Dropdown } from "react-native-element-dropdown";

const TambahBuku = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [isFocusTipe, setIsFocusTipe] = useState(false);
  const dataTipe = [
    { labelTipe: "Tipe Koleksi", valueTipe: 1 },
    { labelTipe: "Text Book", valueTipe: 2 },
    { labelTipe: "Non Text Book", valueTipe: 3 },
  ];

  const [isFocusNoPanggil, setIsFocusNoPanggil] = useState(false);
  const dataNoPanggil = [
    { labelNoPanggil: "Nomor Panggil", valueNoPanggil: 1 },
    { labelNoPanggil: "004 Sut p", valueNoPanggil: 2 },
    { labelNoPanggil: "618.92 Tin a", valueNoPanggil: 3 },
    { labelNoPanggil: "336.185 Ira b", valueNoPanggil: 4 },
    { labelNoPanggil: "115.8 Ric r", valueNoPanggil: 5 },
  ];

  const [isFocusKlasifikasi, setIsFocusKlasifikasi] = useState(false);
  const dataKlasifikasi = [
    { labelKlasifikasi: "Klasifikasi", valueKlasifikasi: 1 },
    { labelKlasifikasi: "336.185", valueKlasifikasi: 2 },
    { labelKlasifikasi: "155.8", valueKlasifikasi: 3 },
    { labelKlasifikasi: "2X2 307 8", valueKlasifikasi: 4 },
    { labelKlasifikasi: "371.39", valueKlasifikasi: 5 },
  ];

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
          {/* <Text
            style={{
              fontSize: SIZES.body1,
              color: COLORS.black,
              marginLeft: 7,
            }}
          >
            Tambah Buku
          </Text> */}
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
              Kode Eksemplar
            </Text>
            <TextInput
              placeholder="Masukkan Kode Eksemplar"
              keyboardType="numeric"
              maxLength={11}
              style={{
                // marginRight: 5,
                maxWidth: 195,
                fontSize: SIZES.body1,
                color: "#979797",
              }}
            />

            {/* <MaterialIcons
              name="keyboard-arrow-right"
              size={25}
              color={COLORS.grey}
              style={{ marginLeft: 5 }}
            /> */}
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
              placeholder="Masukkan Judul"
              style={{
                maxWidth: 195,
                fontSize: SIZES.body1,
                color: "#979797",
              }}
            />

            {/* <MaterialIcons
              name="keyboard-arrow-right"
              size={25}
              color={COLORS.grey}
              style={{ marginLeft: 5 }}
            /> */}
          </View>
        </View>
      </View>
    );
  }

  function sectionDuaTambahBuku() {
    const [valueTipe, setValueTipe] = useState(null);
    const [valueNoPanggil, setValueNoPanggil] = useState(null);
    const [valueKlasifikasi, setValueKlasifikasi] = useState(null);

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
              ISBN / ISSN
            </Text>
            <TextInput
              placeholder="Masukkan ISBN / ISSN"
              maxLength={13}
              keyboardType="numeric"
              style={{
                maxWidth: 160,
                fontSize: SIZES.body1,
                color: "#979797",
              }}
            />

            {/* <MaterialIcons
              name="keyboard-arrow-right"
              size={25}
              color={COLORS.grey}
              style={{ marginLeft: 5 }}
            /> */}
          </View>
        </View>
        <View style={{ marginBottom: 14 }}>
          <Dropdown
            style={styles.dropdown}
            selectedTextStyle={styles.selectedTextStyle}
            data={dataTipe}
            maxHeight={160}
            labelField="labelTipe"
            valueField="valueTipe"
            placeholder={dataTipe[0].labelTipe}
            placeholderStyle={styles.placeholder}
            value={valueTipe}
            onFocus={() => setIsFocusTipe(true)}
            onChange={(item) => {
              setValueTipe(item.valueTipe);
              setIsFocusTipe(false);
            }}
            renderRightIcon={() => (
              <Ionicons
                name="md-chevron-down"
                size={24}
                color={COLORS.grey}
                style={{ marginTop: 5 }}
              />
            )}
          />
        </View>
        <View style={{ marginBottom: 14 }}>
          <Dropdown
            style={styles.dropdown}
            selectedTextStyle={styles.selectedTextStyle}
            data={dataNoPanggil}
            maxHeight={160}
            labelField="labelNoPanggil"
            valueField="valueNoPanggil"
            placeholder={dataNoPanggil[0].labelNoPanggil}
            placeholderStyle={styles.placeholder}
            value={valueNoPanggil}
            onFocus={() => setIsFocusNoPanggil(true)}
            onChange={(item) => {
              setValueNoPanggil(item.valueNoPanggil);
              setIsFocusNoPanggil(false);
            }}
            renderRightIcon={() => (
              <Ionicons
                name="md-chevron-down"
                size={24}
                color={COLORS.grey}
                style={{ marginTop: 5 }}
              />
            )}
          />
        </View>
        <View style={{ marginBottom: 14 }}>
          <Dropdown
            style={styles.dropdown}
            selectedTextStyle={styles.selectedTextStyle}
            data={dataKlasifikasi}
            maxHeight={160}
            labelField="labelKlasifikasi"
            valueField="valueKlasifikasi"
            placeholder={dataKlasifikasi[0].labelKlasifikasi}
            placeholderStyle={styles.placeholder}
            value={valueKlasifikasi}
            onFocus={() => setIsFocusKlasifikasi(true)}
            onChange={(item) => {
              setValueKlasifikasi(item.valueKlasifikasi);
              setIsFocusKlasifikasi(false);
            }}
            renderRightIcon={() => (
              <Ionicons
                name="md-chevron-down"
                size={24}
                color={COLORS.grey}
                style={{ marginTop: 5 }}
              />
            )}
          />
        </View>
        {/* <View style={{ marginBottom: 14 }}>
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
        </View> */}
      </View>
    );
  }

  function button() {
    return (
      <View style={{ marginHorizontal: SIZES.padding2 * 2, marginTop: 130 }}>
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

const styles = StyleSheet.create({
  dropdown: {
    marginTop: -10,
    marginBottom: 10,
  },
  placeholder: {
    fontSize: SIZES.body1,
    fontFamily: "Roboto",
    // fontWeight: "bold",
    color: COLORS.black,
    marginRight: 10,
  },
  selectedTextStyle: {
    fontSize: SIZES.body1,
    fontFamily: "Roboto",
    // fontWeight: "bold",
    color: COLORS.black,
    marginRight: 10,
  },
});
