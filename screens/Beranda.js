import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import { SIZES, COLORS, icons } from "../constants";
import {
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";

const Beranda = ({ navigation }) => {
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
              name="bell-outline"
              size={31}
              color={COLORS.black}
            />
            <View
              style={{
                position: "absolute",
                top: 5,
                left: 17,
                height: 10,
                width: 10,
                backgroundColor: COLORS.red,
                borderRadius: 25,
              }}
            ></View>
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
          Beranda
        </Text>

        {/* Banner */}
        <View
          style={{
            height: 155,
            marginTop: 17,
            backgroundColor: COLORS.primary,
            borderRadius: SIZES.radius,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              paddingTop: 17,
            }}
          >
            {/* <View > */}
            <Text
              style={{
                color: COLORS.white,
                fontSize: SIZES.sub,
                fontFamily: "Roboto",
              }}
            >
              Nama Tim
            </Text>
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: SIZES.sub,
                  fontFamily: "Roboto",
                }}
              >
                Tgl Mulai
              </Text>
              <Text
                style={{
                  marginTop: 3,
                  color: COLORS.white,
                  fontSize: SIZES.sub,
                  opacity: 0.7,
                  fontFamily: "Roboto",
                }}
              >
                4 Jan 2022
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: SIZES.sub,
                  fontFamily: "Roboto",
                }}
              >
                Tgl Selesai
              </Text>
              <Text
                style={{
                  marginTop: 3,
                  color: COLORS.white,
                  fontSize: SIZES.sub,
                  opacity: 0.7,
                  fontFamily: "Roboto",
                }}
              >
                4 Jan 2022
              </Text>
            </View>
            {/* </View> */}
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 20,
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  fontSize: SIZES.large,
                  fontWeight: "bold",
                  color: COLORS.white,
                }}
              >
                0
              </Text>
              <Text style={{ color: COLORS.white }}>Tersedia</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  fontSize: SIZES.large,
                  fontWeight: "bold",
                  color: COLORS.white,
                }}
              >
                0
              </Text>
              <Text style={{ color: COLORS.white }}>Weeding</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  fontSize: SIZES.large,
                  fontWeight: "bold",
                  color: COLORS.white,
                }}
              >
                0
              </Text>
              <Text style={{ color: COLORS.white }}>No Loan</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  fontSize: SIZES.large,
                  fontWeight: "bold",
                  color: COLORS.white,
                }}
              >
                0
              </Text>
              <Text style={{ color: COLORS.white }}>Perbaikan</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  fontSize: SIZES.large,
                  fontWeight: "bold",
                  color: COLORS.white,
                }}
              >
                0
              </Text>
              <Text style={{ color: COLORS.white }}>Hilang</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  function renderSearch() {
    return (
      <>
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 324,
            left: 35,
            zIndex: 10,
          }}
        >
          <Ionicons name="ios-search" size={25} color={COLORS.grey} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 324,
            left: 318,
            zIndex: 10,
            borderLeftColor: COLORS.grey,
            borderLeftWidth: 1,
            paddingLeft: 12,
          }}
        >
          <MaterialCommunityIcons
            name="barcode-scan"
            size={24}
            color={COLORS.primary}
          />
        </TouchableOpacity>
        <TextInput
          placeholder="Cari Buku"
          placeholderTextColor={COLORS.grey}
          style={{
            fontSize: SIZES.h3,
            justifyContent: "center",
            marginTop: 17,
            height: 66,
            backgroundColor: COLORS.white,
            borderRadius: SIZES.radius,
            paddingLeft: 52,
            paddingRight: 70,
            color: COLORS.primary,
            marginHorizontal: SIZES.padding2 * 2,
          }}
        />
      </>
    );
  }

  function hitungBuku() {
    const gotoScan = () => {
      navigation.navigate("Scan");
    };
    return (
      <View
        style={{
          height: 100,
          marginHorizontal: SIZES.padding2 * 2,
          backgroundColor: COLORS.white,
          marginTop: 17,
          borderRadius: SIZES.radius,
          paddingHorizontal: SIZES.padding2 * 2,
        }}
      >
        <Text
          style={{
            fontSize: SIZES.h3,
            fontWeight: "bold",
            color: COLORS.black,
            marginTop: 20,
          }}
        >
          Hitung Koleksi Buku
        </Text>
        <TouchableOpacity
          onPress={gotoScan}
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <View>
            <Image
              source={icons.scanningMode}
              resizeMode="contain"
              style={{ width: 26, position: "absolute", bottom: -36 }}
            />
            <Text
              style={{ fontSize: SIZES.body1, marginTop: 11, marginLeft: 36 }}
            >
              Pindai dan cek jumlah koleksi
            </Text>
          </View>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={25}
            color={COLORS.grey}
            style={{ marginTop: 9 }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function tambahKoleksiBuku() {
    const gotoResinkronisasi = () => {
      navigation.navigate("Resinkronisasi");
    };

    const gotoTambahBuku = () => {
      navigation.navigate("TambahBuku");
    };

    return (
      <View
        style={{
          height: 174,
          marginHorizontal: SIZES.padding2 * 2,
          backgroundColor: COLORS.white,
          marginTop: 17,
          borderRadius: SIZES.radius,
          paddingHorizontal: SIZES.padding2 * 2,
        }}
      >
        <Text
          style={{
            fontSize: SIZES.h3,
            fontWeight: "bold",
            color: COLORS.black,
            marginTop: 20,
          }}
        >
          Tambah Koleksi Buku
        </Text>

        {/* tambah koleksi */}
        <TouchableOpacity
          onPress={gotoTambahBuku}
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <View>
            <Image
              source={icons.newCollection}
              resizeMode="contain"
              style={{ width: 26, position: "absolute", bottom: -36 }}
            />
            <Text
              style={{ fontSize: SIZES.body1, marginTop: 11, marginLeft: 36 }}
            >
              Daftarkan koleksi
            </Text>
          </View>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={25}
            color={COLORS.grey}
            style={{ marginTop: 9 }}
          />
        </TouchableOpacity>

        {/* tambah dari excel */}
        <TouchableOpacity
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <View>
            <Image
              source={icons.excel}
              resizeMode="contain"
              style={{ width: 26, position: "absolute", bottom: -36 }}
            />
            <Text
              style={{ fontSize: SIZES.body1, marginTop: 11, marginLeft: 36 }}
            >
              Daftarkan dari file excel
            </Text>
          </View>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={25}
            color={COLORS.grey}
            style={{ marginTop: 9 }}
          />
        </TouchableOpacity>

        {/* resinkronasi */}
        <TouchableOpacity
          onPress={gotoResinkronisasi}
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <View>
            <Image
              source={icons.resync}
              resizeMode="contain"
              style={{ width: 26, position: "absolute", bottom: -36 }}
            />
            <Text
              style={{ fontSize: SIZES.body1, marginTop: 11, marginLeft: 36 }}
            >
              Resinkronisasi koleksi
            </Text>
          </View>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={25}
            color={COLORS.grey}
            style={{ marginTop: 9 }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function tambahAnggota() {
    const gotoUndangAnggota = () => {
      navigation.navigate("UndangAnggota");
    };
    return (
      <View
        style={{
          height: 100,
          marginHorizontal: SIZES.padding2 * 2,
          backgroundColor: COLORS.white,
          marginTop: 17,
          borderRadius: SIZES.radius,
          paddingHorizontal: SIZES.padding2 * 2,
        }}
      >
        <Text
          style={{
            fontSize: SIZES.h3,
            fontWeight: "bold",
            color: COLORS.black,
            marginTop: 20,
          }}
        >
          Tambah Anggota
        </Text>
        <TouchableOpacity
          onPress={gotoUndangAnggota}
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <View>
            <Image
              source={icons.addTeam}
              resizeMode="contain"
              style={{ width: 26, position: "absolute", bottom: -36 }}
            />
            <Text
              style={{ fontSize: SIZES.body1, marginTop: 11, marginLeft: 36 }}
            >
              Tambahkan anggota tim
            </Text>
          </View>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={25}
            color={COLORS.grey}
            style={{ marginTop: 9 }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function riwayatStock() {
    return (
      <View
        style={{
          height: 100,
          marginHorizontal: SIZES.padding2 * 2,
          backgroundColor: COLORS.white,
          marginTop: 17,
          marginBottom: 20,
          borderRadius: SIZES.radius,
          paddingHorizontal: SIZES.padding2 * 2,
        }}
      >
        <Text
          style={{
            fontSize: SIZES.h3,
            fontWeight: "bold",
            color: COLORS.black,
            marginTop: 20,
          }}
        >
          Riwayat Stock Opname
        </Text>
        <TouchableOpacity
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <View>
            <Image
              source={icons.history}
              resizeMode="contain"
              style={{ width: 26, position: "absolute", bottom: -36 }}
            />
            <Text
              style={{ fontSize: SIZES.body1, marginTop: 11, marginLeft: 36 }}
            >
              Lihat riwayat stock opname
            </Text>
          </View>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={25}
            color={COLORS.grey}
            style={{ marginTop: 9 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <ScrollView style={{ marginBottom: 70 }}>
      {headerComponent()}
      {banner()}
      {renderSearch()}
      {hitungBuku()}
      {tambahKoleksiBuku()}
      {tambahAnggota()}
      {riwayatStock()}
    </ScrollView>
  );
};

export default Beranda;
