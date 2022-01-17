import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import {
  Ionicons,
  Entypo,
  MaterialIcons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { SIZES, COLORS, icons, images } from "../constants";

const Detail = ({ navigation }) => {
  function headerComponent() {
    const backToAktivitas = () => {
      navigation.navigate("Bibliografi");
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
              Detail
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

  function pertinjauanBuku() {
    return (
      <View
        style={{
          marginTop: 20,
          paddingHorizontal: SIZES.padding2 * 2,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={images.book}
            resizeMode="contain"
            style={{ width: 118 }}
          />
          <View style={{ marginLeft: 20 }}>
            <View
              style={{
                backgroundColor: "#97e0ad",
                paddingHorizontal: 10,
                paddingVertical: 2,
                borderRadius: 5,
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: SIZES.body3, color: COLORS.black }}>
                ISBN/ISSN: 9786024017941
              </Text>
            </View>
            <Text
              style={{
                fontSize: SIZES.h3,
                fontWeight: "bold",
                color: COLORS.black,
                marginTop: 6,
              }}
            >
              Kimia 7 level
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 40,
              }}
            >
              <Text
                style={{
                  fontSize: SIZES.h3,
                  fontWeight: "bold",
                  color: COLORS.black,
                  marginRight: 6,
                }}
              >
                2
              </Text>
              <Text style={{ fontSize: SIZES.body3, color: COLORS.black }}>
                salinan
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  function mainDetail() {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding2 * 2,
          position: "relative",
          top: 40,
        }}
      >
        {/* Kode eksemplar */}
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
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  fontSize: SIZES.body1,
                  color: COLORS.black,
                  marginRight: 10,
                }}
              >
                0000169594
              </Text>
              <MaterialCommunityIcons
                name="barcode"
                size={27}
                color={COLORS.black}
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

        {/* Penulis */}
        <View style={{ marginBottom: 14 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
              Penulis
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  maxWidth: 150,
                  fontSize: SIZES.body1,
                  color: COLORS.black,
                }}
              >
                Sujana Helmy
              </Text>
            </View>
          </View>
        </View>

        {/* Tipe Koleksi */}
        <View style={{ marginBottom: 14 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
              Tipe Koleksi
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  maxWidth: 150,
                  fontSize: SIZES.body1,
                  color: COLORS.black,
                }}
              >
                Text Book
              </Text>
            </View>
          </View>
        </View>

        {/* Perubahan Akhir */}
        <View style={{ marginBottom: 14 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
              Perubahan Akhir
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  maxWidth: 150,
                  fontSize: SIZES.body1,
                  color: COLORS.black,
                }}
              >
                12/07/2021 14:03:22
              </Text>
            </View>
          </View>
        </View>

        {/* Nomor Panggil */}
        <View style={{ marginBottom: 14 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
              Nomor Panggil
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  maxWidth: 150,
                  fontSize: SIZES.body1,
                  color: COLORS.black,
                }}
              >
                618.92 Tin a
              </Text>
            </View>
          </View>
        </View>

        {/* Klasifikasi */}
        <View style={{ marginBottom: 14 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
              Klasifikasi
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  maxWidth: 150,
                  fontSize: SIZES.body1,
                  color: COLORS.black,
                }}
              >
                336.185
              </Text>
            </View>
          </View>
        </View>

        {/* Status */}
        <View style={{ marginBottom: 14 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
              Status
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  maxWidth: 150,
                  fontSize: SIZES.body1,
                  color: COLORS.black,
                }}
              >
                Tersedia
              </Text>
            </View>
          </View>
        </View>

        {/* Keterangan */}
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
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  maxWidth: 150,
                  fontSize: SIZES.body1,
                  color: COLORS.black,
                }}
              >
                -
              </Text>
            </View>
          </View>
        </View> */}
      </View>
    );
  }

  return (
    <View>
      {headerComponent()}
      {pertinjauanBuku()}
      <View
        style={{
          borderBottomWidth: 5,
          borderBottomColor: "#ececec",
          position: "relative",
          top: 20,
        }}
      ></View>
      {mainDetail()}
    </View>
  );
};

export default Detail;
