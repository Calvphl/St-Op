import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { SIZES, COLORS } from "../constants";
import {
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
// <Ionicons name="ios-search" size={24} color="black" />;
// <MaterialCommunityIcons name="barcode-scan" size={24} color="black" />;
// <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />;

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
          <MaterialCommunityIcons name="bell-outline" size={31} color="black" />
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

function renderSearch() {
  return (
    <>
      <View style={{ position: "absolute", top: 240, left: 35, zIndex: 10 }}>
        <Ionicons name="ios-search" size={25} color={COLORS.grey} />
      </View>
      <View
        style={{
          position: "absolute",
          top: 242,
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
      </View>
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
          // paddingHorizontal: SIZES.padding2 * 2,
        }}
      />
    </>
    //   style={{
    //     justifyContent: "center",
    //     marginTop: 17,
    //     height: 66,
    //     backgroundColor: COLORS.white,
    //     borderRadius: SIZES.radius,
    //     paddingHorizontal: SIZES.padding2 * 2,
    //   }}
    // >
    //   <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
    //     {/* <View style={{ flexDirection: "row" }}> */}
    //     <View style={{ flexDirection: "row" }}>
    //       <Ionicons name="ios-search" size={22} color={COLORS.grey} />
    //       <Text
    //         style={{ fontSize: SIZES.h3, color: COLORS.grey, marginLeft: 10 }}
    //       >
    //         Cari Buku
    //       </Text>
    //     </View>
    //     <View
    //       style={{
    //         borderLeftWidth: 1,
    //         borderLeftColor: COLORS.grey,
    //         paddingLeft: 15,
    //       }}
    //     >
    //       <MaterialCommunityIcons name="barcode-scan" size={24} color="black" />
    //     </View>
    //     {/* </View> */}
    //   </View>
    // </View>
  );
}

const Beranda = () => {
  return (
    <ScrollView>
      {headerComponent()}
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
        {renderSearch()}
      </View>
    </ScrollView>
  );
};

export default Beranda;
