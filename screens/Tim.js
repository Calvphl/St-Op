import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SIZES, COLORS, icons } from "../constants";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Tim = ({ navigation }) => {
  // const [selectedArea, setSelectedArea] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  function headerComponent() {
    return (
      <View
        style={{
          paddingBottom: SIZES.padding2 + 5,
          borderBottomWidth: 1,
          borderBottomColor: COLORS.grey,
        }}
      >
        <View
          style={{
            marginHorizontal: SIZES.padding2 * 2,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Ionicons name="close" size={36} color={COLORS.black} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: SIZES.body1,
              color: COLORS.black,
              marginLeft: 7,
            }}
          >
            Buat Tim Baru
          </Text>
        </View>
      </View>
    );
  }

  function renderModal() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: 237,
                width: 303,
                backgroundColor: COLORS.white,
                borderRadius: SIZES.radius,
                paddingTop: 14,
                alignItems: "center",
                shadowColor: "#838383",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              }}
            >
              <Text
                style={{
                  color: COLORS.black,
                  fontSize: 22,
                  fontFamily: "Roboto",
                  fontWeight: "bold",
                }}
              >
                Gabung Tim
              </Text>
              <View style={{ maxWidth: 225, marginTop: 11 }}>
                <Text style={{ fontSize: SIZES.body1, textAlign: "center" }}>
                  Masukkan kode undangan yang Anda terima dari rekan Anda.
                </Text>
              </View>
              <TextInput
                style={{
                  borderColor: COLORS.grey,
                  borderWidth: 1,
                  height: 58,
                  width: 246,
                  borderRadius: 6,
                  marginTop: 11,
                  fontSize: SIZES.h3,
                  paddingLeft: 12,
                  paddingRight: 12,
                }}
                maxLength={5}
                placeholder="Kode"
                keyboardType="numeric"
              />
              <View
                style={{
                  marginTop: 12.5,
                  width: 241,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  style={{
                    height: 50,
                    width: 116,
                    backgroundColor: COLORS.secondary,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: SIZES.radius,
                  }}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={{ color: COLORS.primary, fontSize: SIZES.h3 }}>
                    Batal
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: 50,
                    width: 116,
                    backgroundColor: COLORS.primary,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: SIZES.radius,
                  }}
                >
                  <Text style={{ color: COLORS.white, fontSize: SIZES.h3 }}>
                    Lanjut
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? null : "position"}
          style={{ flex: 1 }}
        >
          <View style={{ marginTop: 47 }}>{headerComponent()}</View>
          <View style={{ marginHorizontal: SIZES.padding2 * 2 }}>
            <Text
              style={{
                fontSize: SIZES.h2,
                fontWeight: "bold",
                fontFamily: "Roboto",
                color: COLORS.black,
                marginTop: 23,
              }}
            >
              Gabung atau buat Tim Baru
            </Text>
            <Text
              style={{
                fontSize: SIZES.body3,
                maxWidth: 202,
                lineHeight: 20,
                fontFamily: "Roboto",
                color: COLORS.black,
                marginTop: 10,
              }}
            >
              Buat tim baru atau bergabung dengan tim yang sudah ada.
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("CreateTeam")}
            style={{
              borderWidth: 1,
              borderColor: COLORS.white,
              width: 350,
              height: 137,
              shadowColor: "#d8d8d8",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.8,
              shadowRadius: 8,
              elevation: 5,
              marginHorizontal: SIZES.padding2 * 2,
              marginTop: 36,
              paddingLeft: SIZES.padding2 + 10,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("CreateTeam")}
              style={{
                marginLeft: 6,
                // maxWidth: 234,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={icons.newTeam}
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
                Buat Tim Baru
              </Text>
            </TouchableOpacity>
            <View style={{ position: "absolute", top: 67, left: 63 }}>
              <Text
                style={{
                  fontSize: SIZES.body3,
                  fontFamily: "Roboto",
                  color: COLORS.black,
                  lineHeight: 20,
                  maxWidth: 234,
                }}
              >
                Buat sebuah tim dan mulai lakukan stock opname
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: COLORS.white,
              width: 350,
              height: 137,
              shadowColor: "#d8d8d8",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.8,
              shadowRadius: 8,
              elevation: 5,
              marginHorizontal: SIZES.padding2 * 2,
              marginTop: 16,
              paddingLeft: SIZES.padding2 + 10,
            }}
            onPress={() => setModalVisible(true)}
          >
            <View
              style={{
                marginLeft: 6,
                // maxWidth: 234,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={icons.join}
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
                Gabung Dengan Tim
              </Text>
            </View>
            <View style={{ position: "absolute", top: 67, left: 63 }}>
              <Text
                style={{
                  fontSize: SIZES.body3,
                  fontFamily: "Roboto",
                  color: COLORS.black,
                  lineHeight: 20,
                  maxWidth: 234,
                }}
              >
                Gabung dengan tim dengan menggunakan kode undangan
              </Text>
            </View>
          </TouchableOpacity>
          {renderModal()}
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaProvider>
  );
};

export default Tim;
