import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
} from "react-native";
import { SIZES, COLORS, icons, images } from "../constants";
import {
  MaterialIcons,
  FontAwesome5,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";

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
          <FontAwesome5 name="sort" size={31} color={COLORS.black} />
        </TouchableOpacity>
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
          top: 148,
          left: 35,
          zIndex: 10,
        }}
      >
        <Ionicons name="ios-search" size={22} color={COLORS.grey} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          position: "absolute",
          top: 149,
          left: 318,
          zIndex: 10,
          borderLeftColor: COLORS.grey,
          borderLeftWidth: 1,
          paddingLeft: 12,
        }}
      >
        <MaterialCommunityIcons
          name="barcode-scan"
          size={22}
          color={COLORS.primary}
        />
      </TouchableOpacity>
      <TextInput
        placeholder="Judul, kode bar, kategori"
        placeholderTextColor={COLORS.grey}
        style={{
          fontSize: SIZES.sub,
          justifyContent: "center",
          marginTop: 20,
          height: 46,
          backgroundColor: COLORS.white,
          borderRadius: SIZES.radius,
          paddingLeft: 52,
          paddingRight: 70,
          color: COLORS.primary,
          marginHorizontal: SIZES.padding2 * 2,
        }}
      />
      <View
        style={{
          borderBottomWidth: 2,
          borderBottomColor: "#ececec",
          marginTop: 14,
        }}
      ></View>
    </>
  );
}

function mainContent() {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        paddingHorizontal: SIZES.padding2 * 2,
        alignItems: "center",
      }}
    >
      <Image source={images.book} resizeMode="contain" style={{ width: 80 }} />
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

const Bibliografi = () => {
  const [isFocus, setIsFocus] = useState(false);
  const data = [
    { label: "Lihat Semua", value: 1 },
    { label: "Nama Buku", value: 2 },
    { label: "Tahun Terbit", value: 3 },
  ];

  function dropDownComponent() {
    const [value, setValue] = useState(null);

    return (
      <View>
        <Dropdown
          style={styles.dropdown}
          selectedTextStyle={styles.selectedTextStyle}
          data={data}
          maxHeight={160}
          labelField="label"
          valueField="value"
          placeholder={data[0].label}
          placeholderStyle={styles.placeholder}
          value={value}
          onFocus={() => setIsFocus(true)}
          onChange={(item) => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderRightIcon={() => (
            <Ionicons
              name="md-chevron-down"
              size={24}
              color={COLORS.grey}
              style={{ marginRight: 200, marginTop: 5 }}
            />
          )}
        />
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? null : "position"}
        style={{ flex: 1 }}
      >
        <ScrollView style={{ marginBottom: 70 }}>
          {headerComponent()}
          {dropDownComponent()}
          {renderSearch()}
          {mainContent()}
          {mainContent()}
          {mainContent()}
          {mainContent()}
          {mainContent()}
          {mainContent()}
          {mainContent()}
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    paddingLeft: SIZES.padding2 * 2,
  },
  placeholder: {
    fontSize: SIZES.h2,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: COLORS.black,
    marginRight: 10,
  },
  selectedTextStyle: {
    fontSize: SIZES.h2,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: COLORS.black,
    marginRight: 10,
  },
});

export default Bibliografi;
