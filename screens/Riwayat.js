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
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: SIZES.sub, color: "#979797" }}>
            Tgl mulai: 4/01/2022
          </Text>
          <Text style={{ fontSize: SIZES.sub, color: "#979797" }}>
            Jam: 10:03:43
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: SIZES.sub, color: "#979797" }}>
            Tgl selesai: 12/05/2022
          </Text>
          <Text style={{ fontSize: SIZES.sub, color: "#979797" }}>
            Jam: 15:23:18
          </Text>
        </View>

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
            Stock Opname 2022
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
              6135
            </Text>
            <Text style={{ fontSize: SIZES.body1, color: "#979797" }}>
              Total Eksemplar
            </Text>
          </View>
          <View style={{ alignItems: "center", width: 150, bottom: 4 }}>
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
              Calvin (Admin)
            </Text>
          </View>
        </View>
      </View>
    );
  }

  function sectionTwoRiwayat() {
    return (
      <>
        <TouchableOpacity
          // onPress={() => navigation.navigate("Detail")}
          style={{
            flexDirection: "row",
            paddingHorizontal: SIZES.padding2 * 2,
            alignItems: "center",
          }}
        >
          <Image
            source={images.avatar}
            resizeMode="contain"
            style={{ width: 50 }}
          />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
              Calvin (Admin)
            </Text>
            <View
              style={{
                flexDirection: "row",
                color: COLORS.black,
                opacity: 0.5,
                marginTop: 13,
              }}
            >
              <Text>Pustakawan Senior</Text>
            </View>
          </View>
          <View style={{ marginLeft: 90, alignItems: "center" }}>
            <Text
              style={{
                fontSize: SIZES.h3,
                fontWeight: "bold",
                color: COLORS.primary,
              }}
            >
              1324
            </Text>
            <Text style={{ fontWeight: "bold", color: COLORS.primary }}>
              eksemplar
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() => navigation.navigate("Detail")}
          style={{
            flexDirection: "row",
            paddingHorizontal: SIZES.padding2 * 2,
            alignItems: "center",
          }}
        >
          <Image
            source={images.avatar}
            resizeMode="contain"
            style={{ width: 50 }}
          />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
              Nirmala
            </Text>
            <View
              style={{
                flexDirection: "row",
                color: COLORS.black,
                opacity: 0.5,
                marginTop: 13,
              }}
            >
              <Text>Pustakawan</Text>
            </View>
          </View>
          <View style={{ marginLeft: 135, alignItems: "center" }}>
            <Text
              style={{
                fontSize: SIZES.h3,
                fontWeight: "bold",
                color: COLORS.primary,
              }}
            >
              1253
            </Text>
            <Text style={{ fontWeight: "bold", color: COLORS.primary }}>
              eksemplar
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() => navigation.navigate("Detail")}
          style={{
            flexDirection: "row",
            paddingHorizontal: SIZES.padding2 * 2,
            alignItems: "center",
          }}
        >
          <Image
            source={images.avatar}
            resizeMode="contain"
            style={{ width: 50 }}
          />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
              Agus
            </Text>
            <View
              style={{
                flexDirection: "row",
                color: COLORS.black,
                opacity: 0.5,
                marginTop: 13,
              }}
            >
              <Text>Staff Perpustakaan</Text>
            </View>
          </View>
          <View style={{ marginLeft: 90, alignItems: "center" }}>
            <Text
              style={{
                fontSize: SIZES.h3,
                fontWeight: "bold",
                color: COLORS.primary,
              }}
            >
              1331
            </Text>
            <Text style={{ fontWeight: "bold", color: COLORS.primary }}>
              eksemplar
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() => navigation.navigate("Detail")}
          style={{
            flexDirection: "row",
            paddingHorizontal: SIZES.padding2 * 2,
            alignItems: "center",
          }}
        >
          <Image
            source={images.avatar}
            resizeMode="contain"
            style={{ width: 50 }}
          />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
              Ria
            </Text>
            <View
              style={{
                flexDirection: "row",
                color: COLORS.black,
                opacity: 0.5,
                marginTop: 13,
              }}
            >
              <Text>Pustakawan</Text>
            </View>
          </View>
          <View style={{ marginLeft: 135, alignItems: "center" }}>
            <Text
              style={{
                fontSize: SIZES.h3,
                fontWeight: "bold",
                color: COLORS.primary,
              }}
            >
              1114
            </Text>
            <Text style={{ fontWeight: "bold", color: COLORS.primary }}>
              eksemplar
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() => navigation.navigate("Detail")}
          style={{
            flexDirection: "row",
            paddingHorizontal: SIZES.padding2 * 2,
            alignItems: "center",
          }}
        >
          <Image
            source={images.avatar}
            resizeMode="contain"
            style={{ width: 50 }}
          />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
              Asep
            </Text>
            <View
              style={{
                flexDirection: "row",
                color: COLORS.black,
                opacity: 0.5,
                marginTop: 13,
              }}
            >
              <Text>Staff Perpustakaan</Text>
            </View>
          </View>
          <View style={{ marginLeft: 90, alignItems: "center" }}>
            <Text
              style={{
                fontSize: SIZES.h3,
                fontWeight: "bold",
                color: COLORS.primary,
              }}
            >
              1234
            </Text>
            <Text style={{ fontWeight: "bold", color: COLORS.primary }}>
              eksemplar
            </Text>
          </View>
        </TouchableOpacity>
      </>
    );
  }

  function note() {
    return (
      <View
        style={{
          // flexDirection: "row",
          paddingHorizontal: SIZES.padding2 * 2,
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            fontSize: SIZES.body1,
            color: "#979797",
            // marginRight: 25,
          }}
        >
          Catatan
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: SIZES.body1,
              color: COLORS.black,
              marginTop: 10,
            }}
          >
            Eksemplar Tersedia:
          </Text>
          <Text
            style={{ fontSize: SIZES.body1, marginRight: 160, marginTop: 10 }}
          >
            4548
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: SIZES.body1,
              color: COLORS.black,
              marginTop: 10,
            }}
          >
            Eksemplar Weeding:
          </Text>
          <Text
            style={{ fontSize: SIZES.body1, marginRight: 160, marginTop: 10 }}
          >
            1251
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: SIZES.body1,
              color: COLORS.black,
              marginTop: 10,
            }}
          >
            Eksemplar No Loan:
          </Text>
          <Text
            style={{ fontSize: SIZES.body1, marginRight: 160, marginTop: 10 }}
          >
            312
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: SIZES.body1,
              color: COLORS.black,
              marginTop: 10,
            }}
          >
            Eksemplar Diperbaiki:
          </Text>
          <Text
            style={{ fontSize: SIZES.body1, marginRight: 160, marginTop: 10 }}
          >
            24
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: SIZES.body1,
              color: COLORS.black,
              marginTop: 10,
            }}
          >
            Eksemplar Hilang:
          </Text>
          <Text
            style={{ fontSize: SIZES.body1, marginRight: 160, marginTop: 10 }}
          >
            121
          </Text>
        </View>
      </View>
    );
  }

  function keterangan() {
    return (
      <View
        style={{
          marginBottom: 70,
          paddingHorizontal: SIZES.padding2 * 2,
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: SIZES.body1, color: "#979797" }}>
          Keterangan
        </Text>
        <Text
          style={{
            fontSize: SIZES.body1,
            color: COLORS.black,
            marginTop: 10,
          }}
        >
          scan koleksi buku
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
      <View
        style={{
          borderBottomWidth: 4,
          borderBottomColor: "#ececec",
          position: "relative",
          //   bottom: 25,
        }}
      ></View>
      {note()}
      <View
        style={{
          borderBottomWidth: 4,
          borderBottomColor: "#ececec",
          position: "relative",
          //   bottom: 25,
        }}
      ></View>
      {keterangan()}
    </ScrollView>
  );
};

export default Riwayat;
