import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Switch,
  TextInput,
} from "react-native";
import { SIZES, COLORS, icons, images, gif } from "../constants";
import {
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
  FontAwesome,
  Feather,
} from "@expo/vector-icons";
import Modal from "react-native-modal";

const PengaturanAkun = ({ navigation }) => {
  const [toggle, setToggle] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);

  const [isModalVisiblePass, setModalVisiblePass] = useState(false);
  const [togglePass, setTogglePass] = useState(false);

  const [modalPass, setModalPass] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleModalPass = () => {
    setModalPass(!modalPass);
  };

  const toggleModalPassSuccess = () => {
    setModalVisiblePass(!isModalVisiblePass);
  };

  function headerComponent() {
    const backToAktivitas = () => {
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
              Pengaturan
            </Text>
          </View>
        </View>
      </View>
    );
  }

  function sectionOnePengaturanAkun() {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding2 * 2,
          position: "relative",
          marginTop: 14,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            source={images.avatar}
            resizeMode="contain"
            style={{ width: 80, marginBottom: 30 }}
          />
        </View>

        {/* Nama Pengguna */}
        <View style={{ marginBottom: 14 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
              Nama Pengguna
            </Text>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                placeholder="Calvin Putera Loka"
                placeholderTextColor={COLORS.black}
                style={{
                  maxWidth: 180,
                  fontSize: SIZES.body1,
                  color: COLORS.black,
                }}
              />

              <MaterialIcons
                name="keyboard-arrow-right"
                size={25}
                color={COLORS.grey}
                style={{ marginLeft: 5 }}
              />
            </View>
          </View>
        </View>

        {/* Alamat Surel */}
        <View style={{ marginBottom: 14 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
              Alamat Surel
            </Text>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                placeholder="calvin.loka8@gmail.com"
                placeholderTextColor={COLORS.black}
                style={{
                  maxWidth: 220,
                  fontSize: SIZES.body1,
                  // color: COLORS.black,
                }}
              />
              <MaterialIcons
                name="keyboard-arrow-right"
                size={25}
                color={COLORS.grey}
                style={{ marginLeft: 5 }}
              />
            </View>
          </View>
        </View>

        {/* Tipe Keanggotaan */}
        <View style={{ marginBottom: 14 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
              Tipe Keanggotaan
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  maxWidth: 150,
                  fontSize: SIZES.body1,
                  color: COLORS.black,
                }}
              >
                Pustakawan Senior
              </Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={25}
                color={COLORS.grey}
                style={{ marginLeft: 5 }}
              />
            </View>
          </View>
        </View>

        {/* Kata Sandi */}
        <TouchableOpacity
          onPress={toggleModalPass}
          style={{ marginBottom: 14 }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
              Kata Sandi
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  maxWidth: 150,
                  fontSize: SIZES.body1,
                  color: COLORS.black,
                }}
              >
                Ganti katasandi
              </Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={25}
                color={COLORS.grey}
                style={{ marginLeft: 5 }}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  function sectionTwoPengaturanAkun() {
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
              Bahasa
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  maxWidth: 150,
                  fontSize: SIZES.body1,
                  color: COLORS.black,
                }}
              >
                Indonesia
              </Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={25}
                color={COLORS.grey}
                style={{ marginLeft: 5 }}
              />
            </View>
          </View>
        </View>

        {/* Switch button */}
        <View style={{ marginBottom: 14 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              //   marginBottom: 14,
              position: "relative",
              bottom: 15,
            }}
          >
            <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
              Suara Pindai
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Switch
                trackColor={{ false: "gray", true: "green" }}
                thumbColor="white"
                ios_backgroundColor="gray"
                onValueChange={(value) => setToggle(value)}
                value={toggle}
              />
            </View>
          </View>
        </View>

        {/* Switch button */}
        <View style={{ marginBottom: 14 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              //   marginBottom: 14,
              position: "relative",
              bottom: 15,
            }}
          >
            <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
              Getar Pindai
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Switch
                trackColor={{ false: "gray", true: "green" }}
                thumbColor="white"
                ios_backgroundColor="gray"
                onValueChange={(value) => setToggleTwo(value)}
                value={toggleTwo}
              />
            </View>
          </View>
        </View>
        <View style={{ marginBottom: 14 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Open")}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <Text style={{ fontSize: SIZES.body1, color: COLORS.black }}>
              Keluar
            </Text>
            <View style={{ flexDirection: "row" }}>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={25}
                color={COLORS.grey}
                style={{ marginLeft: 5 }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View>
      {headerComponent()}
      {sectionOnePengaturanAkun()}
      <TouchableOpacity
        onPress={toggleModal}
        style={{
          position: "relative",
          left: 45,
          alignItems: "center",
          backgroundColor: COLORS.white,
          paddingVertical: 15,
          justifyContent: "center",
          width: 300,
          marginBottom: 20,
          borderRadius: SIZES.radius,
        }}
      >
        <Text
          style={{
            fontSize: SIZES.h3,
            fontWeight: "bold",
            color: COLORS.primary,
          }}
        >
          Simpan
        </Text>
      </TouchableOpacity>
      <View
        style={{
          borderBottomWidth: 5,
          borderBottomColor: "#ececec",
          position: "relative",
        }}
      ></View>

      {sectionTwoPengaturanAkun()}

      {/* Modal Kata sandi */}
      <Modal
        isVisible={modalPass}
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
            height: 300,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 12,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <TextInput
              placeholder="Katasandi lama"
              placeholderTextColor={COLORS.grey}
              selectionColor={COLORS.primary}
              secureTextEntry={!showPassword}
              style={{
                borderWidth: 1,
                borderColor: COLORS.grey,
                borderRadius: SIZES.radius,
                paddingLeft: 20,
                paddingRight: 50,
                paddingVertical: 10,
                fontFamily: "Roboto",
                fontSize: 16,
                width: 230,
              }}
            />
            <TouchableOpacity
              style={{
                position: "absolute",
                right: 10,
                bottom: 80,
                height: 28,
                width: 30,
              }}
              onPress={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <Feather name="eye-off" size={24} color={COLORS.grey} />
              ) : (
                <Feather name="eye" size={24} color={COLORS.grey} />
              )}
            </TouchableOpacity>

            <TextInput
              placeholder="Katasandi baru"
              placeholderTextColor={COLORS.grey}
              selectionColor={COLORS.primary}
              secureTextEntry={!showPassword}
              style={{
                borderWidth: 1,
                borderColor: COLORS.grey,
                borderRadius: SIZES.radius,
                paddingLeft: 20,
                paddingRight: 50,
                paddingVertical: 10,
                fontFamily: "Roboto",
                fontSize: 16,
                width: 230,
                marginTop: 20,
              }}
            />
            <TouchableOpacity
              style={{
                position: "absolute",
                right: 10,
                top: 83,
                height: 28,
                width: 30,
              }}
              onPress={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <Feather name="eye-off" size={24} color={COLORS.grey} />
              ) : (
                <Feather name="eye" size={24} color={COLORS.grey} />
              )}
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={toggleModalPassSuccess}
            style={{
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              top: 30,
              backgroundColor: COLORS.primary,
              width: 220,
              paddingVertical: 10,
              borderRadius: SIZES.radius,
              alignItems: "center",
              marginBottom: 30,
            }}
          >
            <Text
              style={{
                fontSize: SIZES.h3,
                color: COLORS.white,
                // fontWeight: "bold",
              }}
            >
              Simpan Katasandi
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={toggleModalPass}
            style={{
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              top: 10,
              backgroundColor: COLORS.secondary,
              width: 220,
              paddingVertical: 10,
              borderRadius: SIZES.radius,
              alignItems: "center",
              // marginBottom: 30,
            }}
          >
            <Text
              style={{
                fontSize: SIZES.h3,
                color: COLORS.primary,
              }}
            >
              Batal
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* modal katasandi success */}
      <Modal
        isVisible={isModalVisiblePass}
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
            height: 300,
            backgroundColor: "white",
            justifyContent: "center",
            // alignItems: "center",
            borderRadius: 12,
          }}
        >
          <View style={{ marginTop: 40, alignItems: "center" }}>
            <Text
              style={{
                fontSize: SIZES.h2,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Katasandi Berhasil Diperbaharui
            </Text>
            <Image
              source={gif.eyes}
              resizeMode="contain"
              style={{
                width: 80,
                position: "absolute",
                bottom: -165,
                left: 110,
              }}
            />
          </View>

          <TouchableOpacity
            onPress={toggleModalPassSuccess}
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
            borderRadius: 12,
          }}
        >
          <View style={{ marginTop: 35, alignItems: "center" }}>
            <Text
              style={{
                fontSize: SIZES.h3,
                fontWeight: "bold",
              }}
            >
              Perubahan Berhasil Disimpan
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
    </View>
  );
};

export default PengaturanAkun;
