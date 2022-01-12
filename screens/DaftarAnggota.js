import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import {
  Ionicons,
  Entypo,
  MaterialIcons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { SIZES, COLORS, icons, images } from "../constants";

const DaftarAnggota = ({ navigation }) => {
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
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={backToPengaturan}>
              <Ionicons name="chevron-back" size={36} color={COLORS.black} />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: SIZES.body1,
                color: COLORS.black,
                marginLeft: 7,
              }}
            >
              Daftar Anggota
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("UndangAnggota")}
          >
            <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
              + Undang
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function mainAnggota() {
    return (
      <View style={{ paddingHorizontal: SIZES.padding2 * 2, marginTop: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            // marginBottom: 10,
          }}
        >
          <Image
            source={images.avatar}
            resizeMode="contain"
            style={{ width: 60 }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: SIZES.body1, fontWeight: "bold" }}>
              Dodi Syahputra
            </Text>
            <Text style={{ marginTop: 5 }}>Pustakwan Senior</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            // marginBottom: 10,
          }}
        >
          <Image
            source={images.avatar}
            resizeMode="contain"
            style={{ width: 60 }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: SIZES.body1, fontWeight: "bold" }}>
              Nirmala Sukmawati
            </Text>
            <Text style={{ marginTop: 5 }}>Pustakwan</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            // marginBottom: 10,
          }}
        >
          <Image
            source={images.avatar}
            resizeMode="contain"
            style={{ width: 60 }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: SIZES.body1, fontWeight: "bold" }}>
              Agus Mardi
            </Text>
            <Text style={{ marginTop: 5 }}>Staff Perpustakaan</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            // marginBottom: 10,
          }}
        >
          <Image
            source={images.avatar}
            resizeMode="contain"
            style={{ width: 60 }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: SIZES.body1, fontWeight: "bold" }}>
              Ria Rinjani
            </Text>
            <Text style={{ marginTop: 5 }}>Pustakwan</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            // marginBottom: 10,
          }}
        >
          <Image
            source={images.avatar}
            resizeMode="contain"
            style={{ width: 60 }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: SIZES.body1, fontWeight: "bold" }}>
              Asep Kumar
            </Text>
            <Text style={{ marginTop: 5 }}>Staff Perpustakaan</Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <ScrollView>
      {headerComponent()}
      {mainAnggota()}
    </ScrollView>
  );
};

export default DaftarAnggota;
