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

const Bibliografi = ({ navigation }) => {
  const [isFocus, setIsFocus] = useState(false);
  const data = [
    { label: "Lihat Semua", value: 1 },
    { label: "Nama Buku", value: 2 },
    { label: "Tahun Terbit", value: 3 },
  ];

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
          {/* <TouchableOpacity>
            <FontAwesome5 name="sort" size={31} color={COLORS.black} />
          </TouchableOpacity> */}
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
            top: 144,
            left: 35,
            zIndex: 10,
          }}
        >
          <Ionicons name="ios-search" size={22} color={COLORS.grey} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 145,
            left: 318,
            zIndex: 10,
            borderLeftColor: COLORS.grey,
            borderLeftWidth: 1,
            paddingLeft: 12,
          }}
        >
          {/* <MaterialCommunityIcons
            name="barcode-scan"
            size={22}
            color={COLORS.primary}
          /> */}
          <Text style={{ fontSize: SIZES.body1, color: COLORS.grey }}>
            Cari
          </Text>
        </TouchableOpacity>
        <TextInput
          placeholder="Judul / Kode Eksemplar "
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
            color: COLORS.black,
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
    const gotoDetail = () => {
      navigation.navigate("Detail");
    };
    return (
      <TouchableOpacity
        onPress={gotoDetail}
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
          <Text
            style={{
              fontSize: SIZES.body1,
              color: COLORS.black,
              fontWeight: "bold",
            }}
          >
            Kimia 7 level
          </Text>
          <View
            style={{
              flexDirection: "row",
              color: COLORS.black,
              opacity: 0.5,
              marginTop: 13,
            }}
          >
            <Text>0000169594</Text>
            {/* <Text> A02 |</Text>
            <Text> 2015</Text> */}
          </View>
        </View>
        <View
          style={{
            marginLeft: 100,
            alignItems: "center",
            paddingRight: SIZES.padding2 * 2,
          }}
        >
          <Text
            style={{
              fontSize: SIZES.h3,
              fontWeight: "bold",
              color: COLORS.primary,
            }}
          >
            2
          </Text>
          <Text
            style={{
              fontSize: SIZES.body2,
              fontWeight: "bold",
              color: COLORS.primary,
            }}
          >
            salinan
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  function dropDownComponent() {
    // const [value, setValue] = useState(null);

    return (
      <View style={{ paddingHorizontal: SIZES.padding2 * 2 }}>
        <Text
          style={{
            fontSize: SIZES.h2,
            fontFamily: "Roboto",
            fontWeight: "bold",
            color: COLORS.black,
            marginRight: 10,
          }}
        >
          Bibliografi
        </Text>
        {/* <Dropdown
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
        /> */}
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
