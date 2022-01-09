import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SIZES, COLORS, icons } from "../constants";

const UndangAnggota = ({ navigation }) => {
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
      <View style={{ paddingHorizontal: SIZES.padding2 * 2, marginTop: 23 }}>
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
      <TouchableOpacity
        // onPress={() => navigation.navigate("CreateTeam")}
        style={{
          width: 350,
          height: 81,
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
        <TouchableOpacity
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
        </TouchableOpacity>
        <View style={{ position: "absolute", top: 47, left: 63 }}>
          <Text
            style={{
              fontSize: SIZES.body3,
              fontFamily: "Roboto",
              color: COLORS.black,
              maxWidth: 234,
            }}
          >
            Undang lewat whatsapp, email, atau SMS
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View>
      {headerComponent()}
      {mainUndangAnggota()}
      {cardUndangAnggota()}
    </View>
  );
};

export default UndangAnggota;
