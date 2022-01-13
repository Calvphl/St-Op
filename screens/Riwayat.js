import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import {
  Ionicons,
  Entypo,
  MaterialIcons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { SIZES, COLORS, icons, images } from "../constants";

const Riwayat = ({ navigation }) => {
  function headerComponent() {
    const backToAktivitas = () => {
      navigation.navigate("Aktivitas");
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
              Riwayat
            </Text>
          </View>
          {/* <TouchableOpacity>
            <Entypo
              name="dots-three-horizontal"
              size={36}
              color={COLORS.black}
            />
          </TouchableOpacity> */}
        </View>
      </View>
    );
  }

  function sectionOneRiwayat() {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding2 * 2,
          marginTop: 21,
          //   marginBottom: 10,
        }}
      >
        <Text style={{ fontSize: SIZES.sub, color: "#979797" }}>
          14 Desember 2021 09:23:43
        </Text>
        <View
          style={{
            marginTop: 10,
            paddingBottom: 9,
            borderBottomWidth: 2,
            borderBottomColor: COLORS.primary,
          }}
        >
          <Text
            style={{
              fontSize: SIZES.h3,
              fontWeight: "bold",
              color: COLORS.primary,
            }}
          >
            Info Inventarisasi
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 27,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: SIZES.h3,
                color: COLORS.black,
                fontWeight: "bold",
                marginBottom: 14,
              }}
            >
              12
            </Text>
            <Text style={{ fontSize: SIZES.body1, color: "#979797" }}>
              Eksemplar
            </Text>
          </View>
          <View style={{ alignItems: "center", width: 50, bottom: 4 }}>
            <Image
              source={images.avatar}
              resizeMode="contain"
              style={{ width: 46, position: "relative", bottom: 30 }}
            />
            <Text
              style={{
                fontSize: SIZES.body1,
                color: "#979797",
                position: "absolute",
                top: 45,
              }}
            >
              Akun 1
            </Text>
          </View>
        </View>
      </View>
    );
  }

  function sectionTwoRiwayat() {
    return (
      <TouchableOpacity
        // onPress={gotoDetail}
        style={{
          flexDirection: "row",
          paddingHorizontal: SIZES.padding2 * 2,
          alignItems: "center",
        }}
      >
        <Image
          source={images.book}
          resizeMode="contain"
          style={{ width: 80 }}
        />
        <View style={{ marginLeft: 20 }}>
          <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
            Buku 1
          </Text>
          <View
            style={{
              flexDirection: "row",
              color: COLORS.black,
              opacity: 0.5,
              marginTop: 13,
            }}
          >
            <Text>Sains |</Text>
            <Text> A02 |</Text>
            <Text> 2015</Text>
          </View>
        </View>
        <View style={{ marginLeft: 120 }}>
          <Text
            style={{
              fontSize: SIZES.h3,
              fontWeight: "bold",
              color: COLORS.primary,
            }}
          >
            5
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  function note() {
    return (
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: SIZES.padding2 * 2,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: SIZES.body1,
            color: "#979797",
            marginRight: 25,
          }}
        >
          catatan
        </Text>
        <Text
          style={{
            fontSize: SIZES.body1,
            color: COLORS.black,
          }}
        >
          Jumlah awal
        </Text>
      </View>
    );
  }

  return (
    <ScrollView>
      {headerComponent()}
      {sectionOneRiwayat()}
      <View
        style={{
          borderBottomWidth: 4,
          borderBottomColor: "#ececec",
          position: "relative",
          //   bottom: 25,
        }}
      ></View>
      {sectionTwoRiwayat()}
      {sectionTwoRiwayat()}
      {sectionTwoRiwayat()}
      <View
        style={{
          borderBottomWidth: 4,
          borderBottomColor: "#ececec",
          position: "relative",
          //   bottom: 25,
        }}
      ></View>
      {note()}
    </ScrollView>
  );
};

export default Riwayat;
