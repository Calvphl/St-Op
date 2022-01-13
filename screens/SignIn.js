import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES, icons, gif } from "../constants";
import { Feather } from "@expo/vector-icons";
import Modal from "react-native-modal";

const SignIn = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  function formSignIn() {
    return (
      <View>
        <View>
          <TextInput
            style={{
              paddingLeft: 20,
              alignItems: "center",
              marginVertical: SIZES.padding,
              borderColor: COLORS.grey,
              borderWidth: 2,
              borderRadius: SIZES.radius,
              height: 50,
              color: COLORS.primary,
              fontFamily: "Roboto",
              fontSize: 16,
            }}
            placeholder="Alamat surel / nama pengguna"
            placeholderTextColor={COLORS.grey}
            selectionColor={COLORS.primary}
          />
        </View>
        <View>
          <TextInput
            style={{
              marginTop: SIZES.padding2 * 2 + 4,
              paddingLeft: 20,
              alignItems: "center",
              marginVertical: SIZES.padding,
              borderColor: COLORS.grey,
              borderWidth: 2,
              borderRadius: SIZES.radius,
              height: 50,
              color: COLORS.primary,
              fontFamily: "Roboto",
              fontSize: 16,
            }}
            placeholder="Kata sandi"
            placeholderTextColor={COLORS.grey}
            selectionColor={COLORS.primary}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 5,
              bottom: 10,
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
      </View>
    );
  }

  function okeBtn() {
    return (
      <TouchableOpacity
        style={{
          height: 55,
          backgroundColor: COLORS.primary,
          borderRadius: SIZES.radius,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={toggleModal}
      >
        <Text
          style={{
            color: "white",
            fontFamily: "Roboto",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Masuk
        </Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View
        style={{
          marginTop: 87,
          marginHorizontal: SIZES.padding2 * 2,
        }}
      >
        {/* <TouchableOpacity onPress={() => navigation.navigate("Open")}>
          <Ionicons name="close" size={36} color={COLORS.black} />
        </TouchableOpacity> */}
        <View style={{ marginTop: 37 }}>
          <Text
            style={{
              fontSize: SIZES.h1,
              fontFamily: "Roboto",
              color: COLORS.black,
            }}
          >
            Selamat Datang
          </Text>
        </View>
        <View style={{ marginTop: 68 }}>{formSignIn()}</View>
        <View style={{ alignItems: "flex-end", marginTop: 10 }}>
          <TouchableOpacity>
            <Text style={{ color: COLORS.primary }}>Lupa kata sandi</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 350 }}>{okeBtn()}</View>

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
              // alignItems: "center",
              borderRadius: 12,
            }}
          >
            <View style={{ marginTop: 35, alignItems: "center" }}>
              <Text
                style={{
                  fontSize: SIZES.h2,
                  fontWeight: "bold",
                  // marginTop: 10,
                }}
              >
                Berhasil Masuk
              </Text>
              <Image
                source={gif.login}
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
              onPress={() => navigation.navigate("Beranda")}
              // onPress={toggleModal}
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
    </TouchableWithoutFeedback>
  );
};

export default SignIn;
